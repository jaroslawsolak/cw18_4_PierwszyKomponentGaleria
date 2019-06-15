/*
var GalleryItem = React.createClass({
  render: function() {
    return React.createElement('h2', {}, 'Pierwszy komponent');
  }
});*/

var GalleryItem = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        //Nie rozumiem dla czego w poniższej linii jest odwołanie do elementu "props". Gdzie ono się odwołuje?
        React.createElement('h2', {}, this.props.image.name),
        React.createElement('img', {src: this.props.image.src})
      )
    )
  },
});

var element = React.createElement(GalleryItem);
ReactDOM.render(element, document.getElementById('app'));

var image = {
  name: 'Kotek',
  src: 'http://imgur.com/n8OYCzR.png'
};

var element = React.createElement(GalleryItem, {image: image});

