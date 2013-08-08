/*
// If offline, add in index.html:
<script type="text/javascript" src="js/questions.db.js"></script>
<script type="text/javascript" src="js/comments.db.js"></script>
// and
window.location = 'index.html';
// set OFFLINE_MODE to true
 var OFFLINE_MODE = true;
// also change toolbar to reflect offline
*/

// config data
var BASE_URL = 'https://my.sandbox.zyncro.com/zyncroapps/ext/zyncroapps/bmartinez/test/';
var BOOKMARK = localStorage.getItem("PHPEXAM_BOOKMARK");
var BOOKMARK_ID = localStorage.getItem("PHPEXAM_BOOKMARK_ID");
var isTouchSupported = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;
var bindAction = isTouchSupported ? 'touchstart' : 'click';

// jqTouch
$.jQTouch({
    statusBar: 'black-translucent',
    preloadImages: []
});

// app Object
var app = {

    questions: {
        q2: 2,
        q3: 3,
        q4: 4,
        q5: 5,
        q6: 6,
        q7: 7,
        q8: 8,
        q10: 10,
        q11: 11,
        q15: 15,
        q16: 16,
        q17: 17,
        q18: 18,
        q19: 19,
        q20: 20,
        q21: 21,
        q22: 22,
        q23: 23,
        q25: 25,
        q26: 26,
        q27: 27,
        q28: 28,
        q30: 30,
        q31: 31,
        q32: 32,
        q33: 33,
        q34: 34,
        q35: 35,
        q36: 36,
        q37: 37,
        q38: 38,
        q39: 39,
        q40: 40,
        q41: 41,
        q42: 42,
        q43: 43,
        q44: 44,
        q45: 45,
        q46: 46,
        q47: 47,
        q48: 48,
        q49: 49,
        q50: 50,
        q53: 53,
        q54: 54,
        q55: 55,
        q57: 57,
        q59: 59,
        q60: 60,
        q61: 61,
        q62: 62,
        q63: 63,
        q64: 64,
        q65: 65,
        q66: 66,
        q67: 67,
        q68: 68,
        q69: 69,
        q71: 71,
        q72: 72,
        q73: 73,
        q74: 74,
        q75: 75,
        q76: 76,
        q77: 77,
        q78: 78,
        q79: 79,
        q80: 80,
        q81: 81,
        q82: 82,
        q83: 83,
        q85: 85,
        q86: 86,
        q87: 87,
        q88: 88,
        q89: 89,
        q90: 90,
        q91: 91,
        q92: 92,
        q93: 93,
        q94: 94,
        q95: 95,
        q97: 97,
        q99: 99,
        q100: 100,
        q102: 102,
        q104: 104,
        q107: 107,
        q108: 108,
        q109: 109,
        q111: 111,
        q113: 113,
        q114: 114,
        q115: 115,
        q116: 116,
        q117: 117,
        q118: 118,
        q119: 119,
        q126: 126,
        q127: 127,
        q131: 131,
        q132: 132,
        q134: 134,
        q135: 135,
        q136: 136,
        q137: 137,
        q143: 143,
        q144: 144,
        q147: 147,
        q150: 150,
        q152: 152,
        q153: 153,
        q155: 155,
        q158: 158,
        q159: 159,
        q160: 160,
        q161: 161,
        q162: 162,
        q163: 163,
        q164: 164,
        q165: 165,
        q166: 166,
        q167: 167,
        q168: 168,
        q169: 169,
        q170: 170,
        q171: 171,
        q172: 172,
        q173: 173,
        q174: 174,
        q177: 177,
        q178: 178,
        q179: 179,
        q180: 180,
        q181: 181,
        q183: 183,
        q185: 185,
        q191: 191,
        q192: 192,
        q194: 194,
        q195: 195,
        q196: 196,
        q197: 197,
        q199: 199,
        q200: 200,
        q205: 205,
        q206: 206,
        q207: 207,
        q209: 209,
        q214: 214,
        q215: 215,
        q217: 217,
        q218: 218,
        q220: 220,
        q221: 221,
        q224: 224,
        q226: 226,
        q227: 227,
        q228: 228,
        q229: 229,
        q230: 230,
        q231: 231,
        q232: 232,
        q233: 233,
        q234: 234,
        q236: 236,
        q238: 238,
        q239: 239,
        q240: 240,
        q241: 241,
        q242: 242
    },
    numQuestions: 171,

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('DOMContentLoaded', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        if (OFFLINE_MODE) $('input#offline-mode').attr('checked', 'checked');

        // control offline mode
        $('input#offline-mode').on('change', function (e) {
            if (OFFLINE_MODE) window.location = 'index.html';
            else window.location = 'index_offline.html';
        });

        // build questions links
        app.buildQuestions(BOOKMARK);
        // build questions pagination
        app.buildQuestionsPagination();
        // set bookmark
        app.buildBookmarkQuestion();

        // hide question and re-write loading
        $('.question-out').hammer().on("tap", function (e) {
            app.setQuestionTitle('Loading...');

            // rebuild questions list
            var qId = $(".question-info").attr('qid');
            var qNum = app.questionNumberFromId(qId);
            app.buildQuestions(qNum);
            // rebuild bookmark question
            app.buildBookmarkQuestion();
        });

        // pagination
        $("#questions-pagination .pagination").hammer().on("tap", function (e) {
            var page = this.getAttribute('data-page');

            app.buildQuestions( (page*10)+1, 0, 9 );
        });

        // about button
        $("#infoButton").hammer().on("tap", function (e) {
            jQT.goTo($('#about'), 'slideup');
        });
    },

    setQuestionTitle: function(title, qId) {
        $("#page-bookmark").remove();
        $("#bookmark-button").remove();
        $('#question .toolbar h1').html(title);

        if ( qId ) {
            if ( qId == BOOKMARK ) {
                $('#question .toolbar').append('<div id="page-bookmark"></div>');
            }
            else {
                if ( !$('#question .toolbar #bookmark-button').length ) {
                    $('#question .toolbar').append('<a class="button" id="bookmark-button" href="#"><img src="img/bookmark_v5.png" /><div>Bookmark</div></a>');
                }
            }
        }
    },

    setQuestionContent: function(content) {
        $('#question-content').html(content);
    },

    buildQuestions: function(from, stepBack, stepForward) {
        from = from || 1;
        var html, q;
        var num = 1;
        stepBack = typeof stepBack !== "undefined" ? stepBack : 4;
        stepForward = typeof stepForward !== "undefined" ? stepForward : 5;
        var prev = ( ( from - stepBack ) > 0 ) ? (from - stepBack) : 1;
        var next = ( ( prev + stepBack + stepForward ) >= app.numQuestions ) ? app.numQuestions : ( prev + stepBack + stepForward );

        $("#questions-list").html('');
        for (var question in app.questions) {
            if ( ( num >= prev ) && ( num <= next) ) {
                q = app.questions[question];
                html = '<li class="arrow">' +
                    '<a href="#question" data-question-number="'+q+'" class="slide question-token">' +
                    'Question '+num+
                    (num == BOOKMARK ? '<div class="bookmark"></div>' : '') +
                    (localStorage.getItem("PHPEXAM_QUESTION_"+app.questionIdFromPosition(num)) ? '<small class="counter">DONE</small>' : '') +
                    '</a></li>';
                $("#questions-list").append(html);
            }
            num++;
        }

        // write loading, show and load question
        $('.question-token').hammer().on("tap", function (e) {
            var questionNumber = this.getAttribute('data-question-number');

            app.goToQuestion(questionNumber);
        });

    },

    buildQuestionsPagination: function() {
        var itemsPerPage = 10;
        var numQuestions = app.numQuestions;
        var numPages = Math.ceil(numQuestions / 10);
        var html = '';

        $("#questions-pagination").html('');
        for (var i = 0; i < numPages; i++) {
            html = '<li class="pagination" data-page="'+i+'">'+(i+1)+'</li>';
            $("#questions-pagination").append(html);
        }
    },

    buildBookmarkQuestion: function() {
        var html = '<span class="no-bookmark">Without bookmark</span>';

        if (BOOKMARK) {
            var q = app.questionIdFromPosition(BOOKMARK);
            html = '<a href="#question" data-question-number="'+q+'" class="slide question-token">Last bookmark: <span id="bookmark-question">Question '+BOOKMARK+'</span></a>';
        }
        $("#bookmark-question").html(html);

        // go to bookmark
        $("#bookmark-question a").hammer().on("tap", function (e) {
            var questionNumber = this.getAttribute('data-question-number');
            app.goToQuestion(questionNumber);
        });
    },

    setBookmark: function (el) {
        var questionId = $(".question-info").attr('qid');

        BOOKMARK = app.questionNumberFromId(questionId);
        BOOKMARK_ID = questionId;
        localStorage.setItem('PHPEXAM_BOOKMARK', app.questionNumberFromId(questionId));
        localStorage.setItem('PHPEXAM_BOOKMARK_ID', questionId);

        el.remove();
        $('#question .toolbar').append('<div id="page-bookmark"></div>');
    },

    questionNumberFromId: function (id) {
        var num = 1;
        for ( var q in app.questions ) {
            if ( app.questions[q] == id ) return num;
            num++;
        }
        return 0;
    },

    questionIdFromPosition: function (pos) {
        var num = 1;
        for ( var q in app.questions ) {
            if ( num == pos ) return app.questions[q];
            num++;
        }
        return 0;
    },

    questionIndexFromPosition: function (pos) {
        var num = 1;
        for ( var q in app.questions ) {
            if ( num == pos ) return q;
            num++;
        }
        return 0;
    },

    questionIndexFromId: function (id) {
        var num = 1;
        for ( var q in app.questions ) {
            if ( app.questions[q] == id ) return q;
            num++;
        }
        return 0;
    },

    resolveQuestion: function () {
        var error = false;
        var questionId = $(".question-info").attr('qid');
        $.each($('.question-answer input'), function () {
            if ( $(this).is(':checked')) {
                if ( $(this).attr('correct') == 1 ) {
                    $(this).parent().css('background-color', '#CCFFDD');
                }
                else {
                    $(this).parent().css('background-color', '#FFCCDD');
                    error = true;
                }
            }
            else {
                if ( $(this).attr('correct') == 1 ) {
                    $(this).parent().css('background-color', '#FFCCDD');
                    error = true;
                }
                else {
                    $(this).parent().css('background-color', '#FFFFFF');
                }
            }
        });
        if (!error) {
            localStorage.setItem("PHPEXAM_QUESTION_"+questionId, "OK");
            $('#resolve-question').remove();
        }
    },

    goToQuestion: function (questionNumber) {
        // start loading and show
        app.setQuestionTitle('Loading...');
        $('#question-content').hide();
        var title = app.questionNumberFromId(questionNumber);
        var questionIndex = app.questionNumberFromId(questionNumber);

        // show question
        if (OFFLINE_MODE) {
            var questionContent = questionsDataBase[app.questionIndexFromId(questionNumber)];
            app.setQuestionTitle(title, questionIndex);
            app.setQuestionContent(questionContent);
            $('#question-content').show();
            app.buildQuestionButtons();
        }
        else {
            $.ajax({
                url: BASE_URL + 'questions/question_' + questionNumber + '.html',
                dataType: "html",
                timeout: 6000,
                success: function (data, status, xhr) {
                    app.setQuestionTitle(title, questionIndex);
                    app.setQuestionContent(data);
                    $('#question-content').show();
                    app.buildQuestionButtons();
                },
                error: function (xhr, errorType, error) {
                    app.setQuestionTitle(title, questionIndex);
                    app.setQuestionContent('ERROR RETRIEVING THE QUESTION');
                    $('#question-content').show();
                }
            });
        }
    },

    buildQuestionButtons: function() {
        if ( !$('#question-content #question-buttons').length ) {
            $('#question-content').append('<div id="question-buttons">' +
                '<a href="#" class="whiteButton" id="resolve-question">Resolve</a>' +
                '<a href="#" class="whiteButton" id="show-comments">Comments</a>' +
                '</div><div id="question-comments" style="display:none;"></div>');
            $('#question-content').append('<ul class="individual">' +
                '<li><a target="_blank" href="http://www.stackoverflow.com" class="question-help">StackOverflow</a></li>'+
                '<li><a target="_blank" href="http://www.php.net" class="question-help">PHP Manual</a></li>'+
                '<li><a target="_blank" href="http://www.google.com" class="question-help">Google</a></li>');
        }

        // button to resolve question
        $('#resolve-question').hammer().on("tap", function (e) {
            app.resolveQuestion();
        });

        // bind bookmark button
        $('#bookmark-button').hammer().on("tap", function (e) {
            app.setBookmark($(this));
        });

        // show comments
        $('#show-comments').hammer().on("tap", function (e) {
            var questionId = $(".question-info").attr('qid');

            app.buildComments(questionId);
            $(this).remove();
        });
    },

    buildComments: function (qId) {
        var layer = $('#question-comments');

        // start loading and show
        layer.html('Loading...');
        layer.show();

        // show question
        if (OFFLINE_MODE) {
            layer.html(commentsDataBase['c'+qId]);
        }
        else {
            $.ajax({
                url: BASE_URL + 'comments/comments_question_' + qId + '.html',
                dataType: "html",
                timeout: 6000,
                success: function (data, status, xhr) {
                    layer.html(data);
                },
                error: function (xhr, errorType, error) {
                    layer.html('ERROR RETRIEVING THE COMMENTS');
                }
            });
        }
    }

};
