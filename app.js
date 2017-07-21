/**
 * Created by Amir on 7/9/2017.
 */
$(document).ready(function () {

    DivImage('sup');

    var s = skrollr.init({
        render: function (data) {
            //Log the current scroll position.
            $('#info').text(data.curTop);
        }
    });
});

function DivImage(name) {

    //a counter to set for div id
    let counter = 0;

    //create the urls based on a nr
    var Images = makeUrls();

    //first create the div and pass the counter to it
    CreateDiv(Images);

}

function makeUrls() {

    let base = 'https://raw.githubusercontent.com/codacy20/RubyExercism/master/SkyCompressed/IMG_';
    let rest = '.jpg';
    let result = [];

    for (let i = 0; i < 230; i++) {

        let baseNr = 1907 + i;
        if (baseNr === 2000) {

        }
        else {

            result.push(base + baseNr + rest);
        }
    }
    return result;
}
function CreateDiv(Images) {

    let i = 0;

    //creating the initial div
    let empty = Math.random().toString(36).substring(7);
    let to = Creating(0, 1, Images[i], empty);
    empty = Math.random().toString(36).substring(7);
    i++;
    to = Creating(0, 0, Images[i], empty);
    i++;

    while (i < Images.length) {

        empty = Math.random().toString(36).substring(7);
        to = Creating(to, 0, Images[i], empty);

        i++;
    }

    // //creating the div
    // let empty = Math.random().toString(36).substring(7);
    // let to = Creating(0, 1, Images[0], empty);
    // empty = Math.random().toString(36).substring(7);
    // to = Creating(0, 0, Images[110], empty);
    // empty = Math.random().toString(36).substring(7);
    // to = Creating(to, 0, Images[120], empty);
    // empty = Math.random().toString(36).substring(7);
    // to = Creating(to, 0, Images[131], empty);
}

function Creating(from, config, url, name) {

    let to = 0;

    if (config === 0) {

        $('#slide').append('<div class="item" id="' + name + '"></div>');
        let mydiv = $("#" + name + "");

        //first create a structure for your data with jquery
        mydiv.attr('data--' + from + '-top', 'opacity: 0;');
        from += 800;
        mydiv.attr('data--' + from + '-top', 'opacity: 0;');
        from += 400;
        mydiv.attr('data--' + from + '-top', 'opacity: 1;');
        mydiv.attr('data-anchor-target', '#slide');
        mydiv.html('<img id="img" src="' + url + '"' +
            'style="width: 1000px;">');

        to = from;

    } else if (config === 1) {

        $('#slide').append('<div class="item" id="' + name + '"></div>');
        let mydiv = $("#" + name + "");

        //first create a structure for your data with jquery
        mydiv.attr('data--' + from + '-top', 'opacity: 1;');
        from += 800;
        mydiv.attr('data--' + from + '-top', 'opacity: 1;');
        from += 400;
        // mydiv.attr('data--' + from + '-top', 'opacity: 0;');
        mydiv.attr('data-anchor-target', '#slide');
        mydiv.html('<img id="img" src="' + url + '"' +
            'style="width: 1000px;">');

        to = from;
    }
    return to;
}