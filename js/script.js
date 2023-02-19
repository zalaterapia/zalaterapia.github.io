var captions = -1;
var showing = false;

$(function () 
{
    var video = document.querySelector('video');

    var tracks = video.textTracks;

    // console.log(tracks);

    for (let i = 0; i < video.textTracks.length; i++) 
    {
        // showing or disabled

        console.log(video.textTracks[i].mode);

        if(video.textTracks[i].mode=="showing")
        {
            captions = i;
            showing = true;
        }
    }

    console.log(captions);

    $( "#subtitles" ).click(function() 
    {
        if(showing)
        {
            video.textTracks[captions].mode = "disabled";
        }
        else
        {
            video.textTracks[captions].mode = "showing";
        }

        console.log(showing);

        console.log(video.textTracks[captions].mode);

        showing = !showing;
    });
});
