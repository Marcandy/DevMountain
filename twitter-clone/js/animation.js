$(document).ready(function () {

    $('#tweet-content').on('click', function () {
    $('#tweet-controls').css('visibility', 'visible');
    //tweet-focus it only tweet box and not other on  the stream
    $('#tweet-focus').css('height', '5em');
  });

//text content
function updateCountdown() {
    // 140 is the max message length
    //http://stackoverflow.com/questions/2136647/character-countdown-like-on-twitter
    var remaining = 140 - $('#tweet-focus').val().length;
    $('#char-count').text(remaining);

    if (remaining <= 10) {
      $('#char-count').css('color', 'red');
    }else {
      $('#char-count').css('color', 'black');
    }
    //stop with inputing text with slice
    // if (remaining <= 0) {
    //   var limit = $('#tweet-focus').val().slice(0, 139);
    //   $('#tweet-focus').val(limit);
    // }
    //--------------------
    if (remaining < 0) {
      $('.button').attr('disabled', 'true');
    }
    else {
      $('.button').removeAttr('disabled');
    }
}

  // updateCountdown();
  // $('.tweet-compose').change(updateCountdown);
  $('#tweet-focus').keydown(updateCountdown);

  //tweet actions
  $( '.tweet-actions' ).animate( {opacity: 0}, 0 );
  $( '.tweet' ).hover( function() {
         $( this )
             .find(".tweet-actions")
             .animate( {opacity: 1}, 400, "linear" );
     }, function() {
         $( this )
             .find(".tweet-actions")
             .animate( {opacity: 0}, 200, "linear" );
     });

  //retweets/temestamp reveal
  $('.stats').css('display', 'none');
  $(document).on('click', '.tweet', function () {
    $('.stats').slideToggle('slow');
  });


  //create tweet-action
  var storeTweet;
  $('.button').click(function () {
    storeTweet= $('#tweet-focus').val()
    $('#stream').prepend(
      '<div class="tweet">' +
           '<div class="content">' +
           '<img class="avatar" src="' + $('#myImg').attr("src") + '" />' +
           '<strong class="fullname">My BFF</strong>' +
           '<span class="username">@mybff</span>' +
           '<p class="tweet-text">' + storeTweet + '</p>' +
           '<div class="tweet-actions">' +
           '<ul>' +
           '<li><span class="icon action-reply"></span> Reply</li>' +
           '<li><span class="icon action-favorite"></span> Favorite</li>' +
           '<li><span class="icon action-more"></span> More</li>' +
           '</ul>' +
           '</div>' +
           '<div class="stats">' +
           '<div class="retweets">' +
           '<p class="num-retweets">30</p>' +
           '<p>RETWEETS</p>' +
           '</div>' +
           '<div class="favorites">' +
           '<p class="num-favorites">6</p>' +
           '<p>FAVORITES</p>' +
           '</div>' +
           '<div class="users-interact">' +
           '<div>' +
           '<img src="img/alagoon.jpg" />' +
           '<img src="img/vklimenko.jpg" />' +
           '</div>' +
           '</div>' +
           '<div class="time">' +
           '1:04 PM - 19 Sep 13' +
           '</div>' +
           '</div>' +
           '<div class="reply">' +
           '<img class="avatar" src="img/alagoon.jpg" />' +
           '<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
           '</div>' +
           '</div>'
    )
  });




});
