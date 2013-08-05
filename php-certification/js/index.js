// config data
var BASE_URL = '';
var OFFLINE_MODE = false;

// jqTouch
$.jQTouch({
    statusBar: 'black-translucent',
    preloadImages: []
});

// app Object
var app = {

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {

        // write loading, show and load question
        $('.question-token').on('click', function (e) {
            // start loading and show
            app.setQuestiontitle('Loading...');
            $('#question .loading').show();

            var questionNumber = this.getAttribute('data-question-number');
            // show question
            if (OFFLINE_MODE) {
                $('#question .loading').hide();

            }
            else {
                $.ajax({
                    url: BASE_URL + '/questions/question_' + questionNumber + '.html',
                    dataType: "html",
                    timeoute: 10000,
                    success: function (data, status, xhr) {
                        $('#question .loading').hide();

                    },
                    error: function (xhr, errorType, error) {
                        $('#question .loading').hide();

                    }
                });
            }
        });

        // hide question and re-write loading
        $('.question-out').on('click', function (e) {
            app.setQuestiontitle('Loading...');
            $('#question .loading').show();
        });
    },

    setQuestiontitle: function(title) {
        $('#question .toolbar h1').html(title);
    }
};
