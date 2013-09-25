/*
// If offline, add in index.html:
<script type="text/javascript" src="js/questions.db.js"></script>
<script type="text/javascript" src="js/comments.db.js"></script>
// and
window.location = 'index.html';
// set OFFLINE_MODE to true
 var OFFLINE_MODE = true;
// web references
http://zend-php.appspot.com/questions_list
http://wmdn.ru/php/zend-php5-certification-mock-exam-sample-questions-1/
// Change CSS
iphone.css <> android.css
// SyntaxHighlighter
Android css: <link type="text/css" rel="Stylesheet" href="js/syntax/styles/shThemeRDark.css"/>
IOS css: <link rel='stylesheet' type='text/css' href='js/syntax/styles/shThemeDefault.css'>
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

    numQuestions: 173,

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
            if (OFFLINE_MODE) window.location = 'index_online.html';
            else window.location = 'index.html';
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

        $("#aboutClose").hammer().on("tap", function (e) {
            jQT.goBack('#home');
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
        for (var question in questions) {
            if ( ( num >= prev ) && ( num <= next) ) {
                q = questions[question].id;
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
        return questions['q'+id].num || 0;
    },

    questionIdFromPosition: function (pos) {
        for ( var q in questions ) {
            if ( questions[q].num == pos ) return questions[q].id;
        }
        return 0;
    },

    questionIndexFromPosition: function (pos) {
        var index = app.questionIdFromPosition(pos);

        if (index) return 'q'+index;
        else return 0;
    },

    questionIndexFromId: function (id) {
        if (id) return 'q'+id;
        else return 0;
    },

    answerIdFromQuestionId: function (qid) {
        if (qid) {
            var qnum = questions['q'+qid].num;
            if (qnum) {
                return 'a'+qnum;
            }
        }
        return 0;
    },

    isInArray: function(value, array) {
        return (array.indexOf(parseInt(value)) !== -1);
    },

    resolveQuestion: function () {
        var error = false;
        var questionId = $(".question-info").attr('qid');
        var answerId = app.answerIdFromQuestionId(questionId);
        $.each($('.question-answer input'), function () {
            var parent = $(this).parent();
            // check if the answer is a "TEXT" one
            if (answersDataBase[answerId].correct[0] && (typeof answersDataBase[answerId].correct[0] == "string")) {
                $(this).addClass('noborder');
                if ( $(this).val().toUpperCase() == answersDataBase[answerId].correct[0].toUpperCase() ) {
                    if (parent.hasClass('answer-incorrect')) {
                        parent.removeClass('answer-incorrect');
                    }
                    parent.addClass('answer-correct');
                    $('#free_form_answer_text').html('Correct!');
                }
                else {
                    if (parent.hasClass('answer-correct')) {
                        parent.removeClass('answer-correct');
                    }
                    parent.addClass('answer-incorrect');
                    error = true;
                    $('#free_form_answer_text').html('Incorrect, correct answer is: '+answersDataBase[answerId].correct[0]);
                }
            }
            // answer is radio or checkbox
            else {
                if ( $(this).is(':checked')) {
                    if ( app.isInArray($(this).val(), answersDataBase[answerId].correct ) ) {
                        if (parent.hasClass('answer-incorrect')) {
                            parent.removeClass('answer-incorrect');
                        }
                        parent.addClass('answer-correct');
                    }
                    else {
                        if (parent.hasClass('answer-correct')) {
                            parent.removeClass('answer-correct');
                        }
                        parent.addClass('answer-incorrect');
                        error = true;
                    }
                }
                else {
                    if ( app.isInArray($(this).val(), answersDataBase[answerId].correct ) ) {
                        if (parent.hasClass('answer-correct')) {
                            parent.removeClass('answer-correct');
                        }
                        parent.addClass('answer-correct');
                        error = true;
                    }
                    else {
                        if (parent.hasClass('answer-incorrect')) {
                            parent.removeClass('answer-incorrect');
                        }
                    }
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
        var title = 'Question ' + app.questionNumberFromId(questionNumber);
        var questionIndex = app.questionNumberFromId(questionNumber);

        // show question
        if (OFFLINE_MODE) {
            var questionContent = questionsDataBase[app.questionIndexFromId(questionNumber)];
            app.setQuestionTitle(title, questionIndex);
            app.setQuestionContent(questionContent);
            SyntaxHighlighter.highlight();
            $('#question-content').show();
            app.buildQuestionButtons(questionNumber, questionIndex);
        }
        else {
            $.ajax({
                url: BASE_URL + 'questions/question_' + questionNumber + '.html',
                dataType: "html",
                timeout: 6000,
                success: function (data, status, xhr) {
                    app.setQuestionTitle(title, questionIndex);
                    app.setQuestionContent(data);
                    SyntaxHighlighter.highlight();
                    $('#question-content').show();
                    app.buildQuestionButtons(questionNumber, questionIndex);
                },
                error: function (xhr, errorType, error) {
                    app.setQuestionTitle(title, questionIndex);
                    app.setQuestionContent('ERROR RETRIEVING THE QUESTION');
                    $('#question-content').show();
                }
            });
        }
    },

    buildQuestionButtons: function(qId, qNum) {
        if ( !$('#question-content #question-buttons').length ) {
            $('#question-content').append('<div id="question-buttons">' +
                '<a href="#" class="whiteButton" id="resolve-question">Resolve</a>' +
                ((qNum == 1) ? '' : '<a href="#" class="whiteButton" id="prev-question">Previous</a>') +
                ((qNum == app.numQuestions) ? '' : '<a href="#" class="whiteButton" id="next-question">Next</a>') +
                ((commentsDataBase['c'+qId] == '') ? '' : '<a href="#" class="whiteButton" id="show-comments">Show comments</a>') +
                '</div><div id="question-comments" style="display:none;"></div>');
            $('#question-content').append(app.buildHelpLink());
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

        // button to previous question
        $('#prev-question').hammer().on("tap", function (e) {
            app.goToQuestion(app.questionIdFromPosition(qNum - 1));
        });

        // button to next question
        $('#next-question').hammer().on("tap", function (e) {
            app.goToQuestion(app.questionIdFromPosition(qNum + 1));
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
    },

    buildHelpLink: function () {
        var questionId = $(".question-info").attr('qid');
        var answerId = app.answerIdFromQuestionId(questionId);
        var links = answersDataBase[answerId].link;
        if (links.length > 0) {
            var html = '<ul class="individual">';
            for (var i = 0, j = links.length; i < j; i++) {
                html += '<li><a href="#" onclick="var ref = window.open(\''+links[i]+'\', \'_system\'); return false;" class="question-help">'+links[i]+'</a></li>';
            }
            html += '</ul>';
        }
        else {
            html = '';
        }
        return html;
    }

};
