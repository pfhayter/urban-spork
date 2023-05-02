$(document).ready(function() {

  // Define an array of aspect ratio objects

  var aspectRatios = [

    {

      ratio: "1:1",

      description: "Commonly used for square images on social media platforms like Instagram."

    },

    {

      ratio: "4:3",

      description: "Used for standard definition television and some digital cameras."

    },

    {

      ratio: "3:2",

      description: "Commonly used for film and some digital cameras."

    },

    {

      ratio: "16:9",

      description: "Commonly used for widescreen video formats and some digital cameras."

    },

    {

      ratio: "2:1",

      description: "Used for panoramic photos and some movie formats."

    },

    {

      ratio: "5:3",

      description: "Used for some film and video formats."

    },

    {

      ratio: "5:4",

      description: "Used for some film and photography formats."

    },

    {

      ratio: "7:5",

      description: "Used for some film and photography formats."

    },

    {

      ratio: "11:8",

      description: "Used for some film formats."

    },

    {

      ratio: "14:9",

      description: "Used for some television and video formats."

    },

    {

      ratio: "21:9",

      description: "Used for some widescreen movie formats and some computer monitors."

    },

    {

      ratio: "2.35:1",

      description: "Used for some widescreen movie formats."

    },

    {

      ratio: "1.43:1",

      description: "Used for some IMAX projection formats."

    },

    {

      ratio: "1.44:1",

      description: "Used for some film projection formats."

    },

    {

      ratio: "1.50:1",

      description: "Used for some old TV formats."

    },

    {

      ratio: "1.66:1",

      description: "Used for some European film formats."

    },

    {

      ratio: "1.75:1",

      description: "Used for some film and television formats."

    },

    {

      ratio: "1.85:1",

      description: "Used for some film and television formats."

    },

    {

      ratio: "1.90:1",

      description: "Used for some widescreen movie formats."

    },

    {

      ratio: "2.20:1",

      description: "Used for some film projection formats."

    },

    {

      ratio: "2.39:1",

      description: "Used for some widescreen movie formats."

    },

    {

      ratio: "2.59:1",

      description: "Used for some Cinerama projection formats."

    },

    {

      ratio: "2.76:1",

      description: "Used for some large-format film projection formats."

    }

  ];

  // Generate the ratio elements dynamically

  $.each(aspectRatios, function(i, ratio) {

    var ratioItem = $('<div>', { class: 'ratio-item' });

    var ratioExample = $('<div>', { class: 'ratio-example' });

    ratioExample.css({ paddingBottom: (100 / eval(ratio.ratio)) + '%' });

    var ratioInfo = $('<div>', { class: 'ratio-info' });

    var ratioTitle = $('<h3>', { text: ratio.ratio });

    var ratioDescription = $('<p>', { text: ratio.description });

    ratioInfo.append(ratioTitle).append(ratioDescription);

    ratioItem.append(ratioExample).append(ratioInfo);

    $('#ratio-container').append(ratioItem);

  });

});
