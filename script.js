(function(){
 
Element.prototype.hide = function() {
   this.style.display = 'none';
   return this;
}

Element.prototype.html = function(data) {
   this.innerHTML = data;
   return this;
}

Element.prototype.show = function() {
  this.style.display = '';
   return this;
}

Element.prototype.toogle = function() {
   if (this.style.display !== 'none') {
        this.style.display = 'none';
      } else {
        this.style.display = 'inherit';
      }
   return this;
}

Element.prototype.size = function(width,height) {
     this.style.height = height + 'px';
      this.style.width = width + 'px';
   return this;
}
Element.prototype.bgColor = function(color) {
    this.style.backgroundColor = color;
   return this;
}

Element.prototype.fontSize = function(size) {
    this.style.fontSize = size + 'px';
    return this;
  }

HTMLCollection.prototype.hide = function() {
    if( this == null ) 
      return false;

    for (var i=0; i<this.length; i++) {
     this[i].hide();
    };
    return this;
}
HTMLCollection.prototype.html = function(data) {
    if( this == null ) 
      return false;

    for (var i=0; i<this.length; i++) {
     this[i].html(data);
    };
    return this;
}
HTMLCollection.prototype.show = function() {
    if( this == null ) 
      return false;

    for (var i=0; i<this.length; i++) {
     this[i].show();
    };
    return this;
}

HTMLCollection.prototype.toogle = function() {
    if( this == null ) 
      return false;

    for (var i=0; i<this.length; i++) {
     this[i].toogle();
    };
    return this;
}
HTMLCollection.prototype.size = function(width,size) {
    if( this == null ) 
      return false;

    for (var i=0; i<this.length; i++) {
     this[i].size(width,size);
    };
    return this;
}

HTMLCollection.prototype.bgColor= function(color) {
    if( this == null ) 
      return false;

    for (var i=0; i<this.length; i++) {
     this[i].bgColor(color);
    };
    return this;
}

HTMLCollection.prototype.fontSize = function(size) {
    if( this == null ) 
      return false;

    for (var i=0; i<this.length; i++) {
     this[i].fontSize(size);
    };
    return this;
}
})()




