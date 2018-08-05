'use strict';

const Navigation = function(menu) {
  Utilities.call(this);
  this.preventClickEvent = false;
  this.init();
}
Navigation.prototype = Object.create( Utilities.prototype );
Navigation.prototype.constructor = Navigation;

Navigation.prototype.init = function() {

  let menus = document.querySelectorAll('.menu').forEach( function( menu ) {
    if ( !menu.classList.contains('mouseable') ) {
      menu.classList.add('mouseable');
    }
    if ( this.isTouchDevice() ) {
      if ( menu.classList.contains('mouseable') ) {
        menu.classList.remove('mouseable');
      }
      menu.classList.add('touchable');

      menu.addEventListener('touchstart', function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.openMenu(event);
      }.bind(this), false );
      menu.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.openMenu(event);
      }.bind(this), false );
    } else {
      menu.querySelectorAll('li').forEach( function(li) {
        li.addEventListener('mouseenter', function(event) {
          this.positionSubmenu(li);
        }.bind(this), false );
      }.bind(this) );
    }
  }.bind(this) );

  if ( this.isTouchDevice() ) {
    document.addEventListener('touchstart', function(event) {
      if ( !this.preventClickEvent ) {
        this.preventClickEvent = true;
      }
      this.blurMenus();
    }.bind(this), false );
    document.addEventListener('click', function(event) {
      if ( !this.preventClickEvent ) {
        this.blurMenus();
      }
    }.bind(this), false );

    window.addEventListener('resize', debounce( function() {
      this.blurMenus();
    }.bind(this), 250 ));
  }

};

Navigation.prototype.blurMenus = function(event) {
  let blurredMenus = [].slice.call( document.querySelectorAll('.hover') )
      .filter( function( menuItem ) {
        if ( event ) {
          return !menuItem.contains(event.target);
        }
        return menuItem;
      })
      .forEach( function(menuItem) {
        menuItem.classList.remove('position-right');
        menuItem.classList.remove('hover');
      });
  return false;
};

Navigation.prototype.openMenu = function(event) {
  let li = event.target.parentNode;
  let hasChildMenu = !!li.querySelector('ul');
  if ( !this.isUnderBreakpoint() && hasChildMenu ) {
    if ( li.classList.contains('hover') ) {
      return true;
    }
    li.classList.add('hover');
    this.positionSubmenu(li);
    this.blurMenus(event);
  }
};

Navigation.prototype.positionSubmenu = function( menuItem ) {
  let leftPos = menuItem.getBoundingClientRect().left;
  let submenu = menuItem.querySelector('ul');
  if ( submenu && window.innerWidth - ( leftPos + menuItem.offsetWidth ) < submenu.offsetWidth ) {
    submenu.classList.add('position-right');
  }
};

const pangolinMenus = new Navigation();
