/*
    TYPE:
    0 = Open Question
    1 = Single answer
    2 = multiple choice
*/
var questionsDataBase = {
    q100: {
        id: 100,
        num: 85,
        text: 'Setting a cookie on the client in PHP 5 can be best accomplished by:',
        type: 2,
        answers: ['Use the add_cookie() function', 'Use the setcookie() function', 'Use the the apache_send_header() function', 'Setting a variable in the $_COOKIE superglobal']
    },
    q102: {
        id: 102,
        num: 86,
        text: 'How does one create a cookie which will exist only until the browser session is terminated?',
        type: 2,
        answers: ['You cannot create cookies that expire when the browser session is terminated', 'Setting the expiration time for a cookie to a time in the distant future', 'Do not provide a cookie expiration time', 'Enable Cookie Security', 'Set a cookie without a domain']
    },
    q104: {
        id: 104,
        num: 87,
        text: 'Setting a HTTP cookie on the client which is not URL-encoded is done how in PHP 5?',
        type: 2,
        answers: ['Use the setrawcookie() function', 'Set the cookies.urlencode INI directive to false', 'Use urldecode() on the return value of setcookie()', 'Setting the $no_encode parameter of setcookie() to a boolean \'true\'', 'All cookies must be URL encoded']
    },
    q107: {
        id: 107,
        num: 88,
        text: 'During an HTTP authentication, how does one determine the username and password provided by the browser?',
        type: 2,
        answers: ['Parse the HTTP headers manually using http_get_headers()', 'Use the get_http_username() and get_http_password() functions', 'Use the $_SERVER[\'HTTP_USER\'] and $_SERVER[\'HTTP_PASSWORD\'] variables', 'Use the $_SERVER[\'PHP_AUTH_USER\'] and $_SERVER[\'PHP_AUTH_PW\'] variables', 'Parse the $_SERVER[\'REQUEST_URI\'] variable']
    },
    q108: {
        id: 108,
        num: 89,
        text: 'Consider the following function: <pre class=\'brush: php; html-script: true\'> &lt;?php function redirect($url) {  // Check to make sure we haven\'t already sent  // the header:   if(???????) {  header("Location: $url");  } }  ?&gt; </pre> What conditional should replace the <code>?????</code> above?',
        type: 2,
        answers: ['!in_array("Location: $url", headers_list())', '!header_exists("Location: $url")', '!header_location($url)', '$_SERVER[\'HTTP_LOCATION\'] != $url']
    },
    q109: {
        id: 109,
        num: 90,
        text: 'One can ensure that headers can always be sent from a PHP script by doing what?',
        type: 2,
        answers: ['Enable header buffering in PHP 5', 'Set the header.force INI directive to true', 'Enable output buffering in PHP 5', 'There is no way to ensure that headers can always be set, they must always be checked', 'None of the above']
    },
    q10: {
        id: 10,
        num: 8,
        text: 'What is the best way to ensure that a user-defined function is always passed an object as its single parameter?',
        type: 2,
        answers: ['function myfunction(stdClass $a)', 'function myfunciton($a = stdClass)', 'Use is_object() within the function', 'There is no way to ensure the parameter will be an object', 'function myfunction(Object $a)']
    },
    q111: {
        id: 111,
        num: 91,
        text: 'When is it acceptable to store sensitive information in an HTTP cookie?',
        type: 2,
        answers: ['Only under extremely controlled situations', 'When the cookie is sent over a secure HTTP request', 'When it is encrypted', 'It is always acceptable']
    },
    q113: {
        id: 113,
        num: 92,
        text: 'Removing undesired markup tags from input can best be done using which function?',
        type: 2,
        answers: ['strip_tags()', 'tidy_strip_html()', 'str_replace()', 'strip_html()']
    },
    q114: {
        id: 114,
        num: 93,
        text: 'When using a function such as strip_tags, are markup-based attacks still possible?',
        type: 2,
        answers: ['No, HTML does not pose any security risks', 'Yes, even a &lt;p&gt; HTML tag is a security risk', 'Yes, attributes of allowed tags are ignored', 'No, strip_tags will prevent any markup-based attack']
    },
    q115: {
        id: 115,
        num: 94,
        text: 'Consider the following PHP string representing an SQL statement:  <p class="ceresIndent"><code>$query = "UPDATE users SET password=\'$password\' WHERE username=\'$username\'";</code></p> <p class="ceresIndent">Which of the following values for <code>$username</code> or <code>$password</code> would change the behavior of this query when executed?</p>',
        type: 2,
        answers: ['None of the above', '$username = "foobar\\\' WHERE username=\'admin\'";', '$password = "foobar\' WHERE username=\'admin\' --:";', '$password = "\\"foobar\\" WHERE username=\\"admin\\"";']
    },
    q116: {
        id: 116,
        num: 95,
        text: 'SQL Injections can be best prevented using which of the following database technologies?',
        type: 2,
        answers: ['All of the above', 'Prepared Statements', 'Persistent Connections', 'Unbuffered Queries', 'Query escaping']
    },
    q117: {
        id: 117,
        num: 96,
        text: 'Where should indirectly executed PHP scripts (i.e. include files) be stored in the file system?',
        type: 2,
        answers: ['Outside of the Document Root', 'In the document root', 'Anywhere you want', 'In the database']
    },
    q118: {
        id: 118,
        num: 97,
        text: 'When executing system commands from PHP, what should one do to keep applications secure?',
        type: 3,
        answers: ['Remove all quote characters from variables used in a shell execution', 'Avoid using shell commands when PHP equivlents are available', 'Hard code all shell commands', 'Escape all shell arguments', 'Escape all shell commands executed']
    },
    q119: {
        id: 119,
        num: 98,
        text: 'Whyis it important from a security perspective to never display PHP errormessages directly to the end user, yet always log them?',
        type: 3,
        answers: ['Error messages will contain sensitive session information', 'Error messages can contain cross site scripting attacks', 'Security risks involved in logging are handled by PHP', 'Error messages give the perception of insecurity to the user', 'Error messages can contain data useful to a potential attacker']
    },
    q11: {
        id: 11,
        num: 9,
        text: 'What does the following function do, when passed two integer values for <code>$p</code> and <code>$q</code>? <pre class=\'brush: php; html-script: true\'> &lt;?php function magic($p, $q) {  return ($q == 0)  ? $p  : magic($q, $p % $q); } ?&gt; </pre>',
        type: 2,
        answers: ['Loops infinitely', 'Switches the values of $p and $q', 'Determines if they are both even or odd', 'Determines the greatest common divisor between them', 'Calculates the modulus between the two']
    },
    q126: {
        id: 126,
        num: 99,
        text: 'The MVC pattern in Web development involves which of the following components?',
        type: 3,
        answers: ['View', 'Controller', 'Validation', 'Model', 'Front Controller']
    },
    q127: {
        id: 127,
        num: 100,
        text: 'Which of the following aspects of the MVC pattern is used in conjunction with the database?',
        type: 2,
        answers: ['Model', 'Schema', 'Validation', 'Controller', 'View']
    },
    q131: {
        id: 131,
        num: 101,
        text: 'What are the primary benefits of object oriented programming? ',
        type: 3,
        answers: ['Maintainability', 'Execution Speed', 'Encapsulation', 'Code Reuse']
    },
    q132: {
        id: 132,
        num: 102,
        text: 'What consistutes a View in the MVC pattern for PHP 5, in the following list?',
        type: 3,
        answers: ['Iterators', 'PDO', 'Classes', 'PHP', 'Smarty']
    },
    q134: {
        id: 134,
        num: 103,
        text: 'Which of the following extensions are no longer part of PHP 5 and have been moved to PECL?',
        type: 3,
        answers: ['tidy', 'mysql', 'w32api', 'curl', 'dio']
    },
    q135: {
        id: 135,
        num: 104,
        text: 'Which of the following functions were added to PHP 5 for dealing with arrays?',
        type: 3,
        answers: ['array_intersect_key()', 'array_unshift()', 'array_diff_key()', 'array_merge()', 'array_slice()']
    },
    q136: {
        id: 136,
        num: 105,
        text: 'Consider the following script: <pre class=\'brush: php; html-script: true\'> &lt;?php function func(&amp;$arraykey) {  return $arraykey; // function returns by value! }  $array = array(\'a\', \'b\', \'c\'); foreach (array_keys($array) as $key) {  $y = &amp;func($array[$key]);  $z[] =&amp; $y; }  var_dump($z); ?&gt; </pre> Thiscode has changed behavior in PHP 5. Identify the output of this scriptas it would have been in PHP 4, as well as the new behavior in PHP 5.',
        type: 3,
        answers: ['array(\'a\', \'a\', \'b\')', 'array(\'a\', \'b\', \'c\')', 'array(\'c\', \'b\', \'a\')', 'array(\'c\', \'c\', \'c\')', 'array(\'b\', \'b\', \'b\')']
    },
    q137: {
        id: 137,
        num: 106,
        text: 'Consider the following code block: <pre class=\'brush: php; html-script: true\'> &lt;?php function &amp;myFunction() {  $string = "MyString";  var_dump($string);   return ($undefined); }  for($i = 0; $i &lt; 10; $i++) {  $retval = myFunction(); } ?&gt; </pre> This code block\'s behavior has changed between PHP 4 and PHP 5. Why?',
        type: 2,
        answers: ['None of the above', 'This could would cause an automatic segmentation fault in PHP 4', 'This code would throw a syntax error in PHP 4', 'Returning an undefined variable by reference in PHP 4 would cause eventual memory corruption', 'You could not return undefined variables by reference in PHP 4']
    },
    q143: {
        id: 143,
        num: 107,
        text: 'When migrating the following code from PHP 4 to PHP 5, what should be changed? <pre class=\'brush: php; html-script: true\'> &lt;?php  class MyClass {  function MyClass($param) { /* Do something with $param */ $this-&gt;_doSomething($param); }  // Private method to MyClass function _doSomething($param) { /* Do something with $param */ } }  class AnotherClass extends MyClass {  var $param = "foo";  function AnotherClass() { parent::MyClass($this-&gt;param); } }  ?&gt; </pre>',
        type: 3,
        answers: ['Access modifiers should be added to methods', 'The Constructors for the objects should both be renamed to __construct', 'The use of the parent keyword has changed to \'super\'', 'Constructors must have the same parameter lists']
    },
    q144: {
        id: 144,
        num: 108,
        text: 'Assuming every method call below returns an instance of an object, how can the following be re-written in PHP 5? <pre class=\'brush: php; html-script: true\'> &lt;?php  $a = new MyClass(); $b = $a-&gt;getInstance(); $c = $b-&gt;doSomething();  ?&gt; </pre>',
        type: 2,
        answers: ['$c = ((MyClass)$a-&gt;getInstance())-&gt;doSomething();', 'This cannot be re-written in PHP 5', '$c = $a-&gt;getInstance()-&gt;doSomething();', '$c = (MyClass)$a-&gt;getInstance();', '$c = (new MyClass())-&gt;getInstance()-&gt;doSomething();']
    },
    q147: {
        id: 147,
        num: 109,
        text: 'How can the following code be re-written from PHP 4 to PHP 5?  <pre class=\'brush: php; html-script: true\'> &lt;?php  if(get_class($myObj) == "MyClass") { // Do something }  ?&gt; </pre>',
        type: 2,
        answers: ['if(get_class($myObj) === "MyObject)', 'if(strtolower(get_class($myObj)) == "MyClass")', 'if($myObj implements MyClass)', 'if($myObj instanceof Object)', 'if($myObj instanceof MyClass)']
    },
    q150: {
        id: 150,
        num: 110,
        text: 'Is this code valid only in PHP 4, in PHP 5, or both? <pre class=\'brush: php; html-script: true\'> &lt;?php  function myfunction(&amp;$myvalue = null) {  /* ... */ }  ?&gt; </pre>',
        type: 2,
        answers: ['Both', 'PHP 5', 'PHP 4']
    },
    q152: {
        id: 152,
        num: 111,
        text: 'Unlikea database such as MySQL, SQLite columns are not explicitly typed.Instead, SQLite catagorizes data into which of the following catagories?',
        type: 3,
        answers: ['textual', 'unicode', 'numeric', 'binary', 'constant']
    },
    q153: {
        id: 153,
        num: 112,
        text: 'Which of the following SQL statements will improve SQLite write performance?',
        type: 3,
        answers: ['PRAGMA locking_mode = "Row";', 'PRAGMA count_changes = Off;', 'PRAGMA default_synchronous = Off;', 'PRAGMA default_synchronous = On;', 'PRAGMA locking_mode = "Table";']
    },
    q155: {
        id: 155,
        num: 113,
        text: 'Consider the following code snippet: <pre class=\'brush: php; html-script: true\'> &lt;?php $link = mysqli_connect("hostname",   "username",  "password");  if(!$link) {  $error = ??????  die("Could not connect to the database: $error"); }  ?&gt; </pre> What would go in place of the ???? above for this script to function properly?',
        type: 2,
        answers: ['mysqli_connect_error();', 'mysqli_connect_error($link);', 'mysqli_error();', '$_MySQL[\'connect_error\']', 'mysqli_get_connect_error();']
    },
    q158: {
        id: 158,
        num: 114,
        text: 'Consider the following code snippet: <pre class=\'brush: php; html-script: true\'> &lt;?php $query = "INSERT INTO mytable   (myinteger, mydouble, myblob, myvarchar)  VALUES (?, ?, ?, ?)";  $statement = mysqli_prepare($link, $query);  if(!$statement) {  die(mysqli_error($link)); }  /* The variables being bound to by MySQLi  don\'t need to exist prior to binding */ mysqli_bind_param($statement, "idbs",  $myinteger, $mydouble, $myblob, $myvarchar);  /* ???????????? */   /* execute the query, using the variables as defined. */  if(!mysqli_execute($statement)) {  die(mysqli_error($link)); }  ?&gt; </pre> Assuming this snippet is a smaller part of a correctly written script, what actions must occur in place of the <code>?????</code> in the above code snippet to insert a row with the following values: <code>10</code>, <code>20.2</code>, <code>foo</code>, <code>string</code> ?',
        type: 2,
        answers: ['A transaction must be begun and the variables must be assigned', 'Each value must be assigned prior to calling mysqli_bind_param(), and thus nothing should be done', 'Use mysqli_bind_value() to assign each of the values', 'Assign $myinteger, $mydouble, $myblob, $myvarchar the proper values']
    },
    q159: {
        id: 159,
        num: 115,
        text: 'Consider the following code snippet: <pre class=\'brush: php; html-script: true\'> &lt;?php $query = "SELECT first,  last,  phone  FROM contacts  WHERE first LIKE \'John%\'";  $statement = mysqli_prepare($link, $query); mysqli_execute($statement);  /* ???? */  while(($result = mysqli_stmt_fetch($statement))) {  print "Name: $first $last ";  print "Phone: $phone  "; } ?&gt; </pre> Assuming this code snippet is part of a larger correct application, what must be done in place of the <code>????</code> above for the correct output to be displayed?',
        type: 2,
        answers: ['None of the above', 'mysqli_fetch_columns($first, $last, $phone);', 'mysqli_stmt_bind_result($statement, $first, $last, $phone);', 'A while loop, fetching the row and assigning $first, $last, and $phone the proper value']
    },
    q15: {
        id: 15,
        num: 10,
        text: 'The <code>____</code> operator is used to test if two values are identical in every way.',
        type: 2,
        answers: ['!==', 'instanceof', '=', '==', '===']
    },
    q160: {
        id: 160,
        num: 116,
        text: 'Which of the following cases are cases when you should use transactions?',
        type: 3,
        answers: ['Updating a single row in a table', 'Inserting a new row into a single table', 'Performing a stored procedure', 'Selecting rows from multiple different tables', 'Updating a single row in multiple different tables']
    },
    q161: {
        id: 161,
        num: 117,
        text: 'PHP 5 supports which of the following XML parsing methods?',
        type: 3,
        answers: ['SAX', 'FastDOM', 'DOM', 'XPath', 'XML to Object mapping']
    },
    q162: {
        id: 162,
        num: 118,
        text: 'Which of the following is not a valid PDO DSN?',
        type: 2,
        answers: ['All of the above are valid', 'mysql:unix_socket=/tmp/mysql.sock;dbname=testdb', 'oci:dbname=//localhost:1521/mydb', 'mysql:host=localhost;port=3307;dbname=testdb', 'sqlite2:/opt/databases/mydb.sq2']
    },
    q163: {
        id: 163,
        num: 119,
        text: 'Whenconnecting to a database using PDO, what must be done to ensure thatdatabase credentials are not compromised if the connection were to fail?',
        type: 2,
        answers: ['wrap the PDO DSN in a try/catch block to catch any connection exception', 'Use constants in the PDO DSN', 'Place the login credentials in the php.ini file', 'Disable E_STRICT and E_NOTICE error reporting levels']
    },
    q164: {
        id: 164,
        num: 120,
        text: 'Consider the following script: <pre class=\'brush: php; html-script: true\'> &lt;?php try {  $dbh = new PDO("sqlite::memory:"); } catch(PDOException $e) {  print $e-&gt;getMessage(); }  $dbh-&gt;query("CREATE TABLE foo(id INT)"); $stmt = $dbh-&gt;prepare("INSERT INTO foo VALUES(:value)"); $value = null; $data = array(1,2,3,4,5); $stmt-&gt;bindParam(":value", $value);  /* ?????? */ try {  foreach($data as $value) {  /* ????? */  } } catch(PDOException $e) {  /* ??????? */ }  /* ?????? */ ?&gt; </pre> Whatlines of code need to go into the missing places above in order forthis script to function properly and insert the data into the databasesafely?',
        type: 3,
        answers: ['$dbh-&gt;beginTransaction();', '$dbh-&gt;commit();', '$stmt-&gt;execute();', '$dbh-&gt;rollback();', '$dbh-&gt;query($stmt);']
    },
    q165: {
        id: 165,
        num: 121,
        text: 'Implementing your own PDO class requires which steps from the list below?',
        type: 3,
        answers: ['Extending the PDOStatement Class', 'Set the PDO::ATTR_STATEMENT_CLASS parameter', 'Call the PDO::setStatementClass() method', 'Extend the PDO class', 'Set the PDO::ATTR_USE_CLASS paramater']
    },
    q166: {
        id: 166,
        num: 122,
        text: 'When embedding PHP into XML documents, what must you ensure is true in order for things to function properly?',
        type: 2,
        answers: ['Disabling of the short_tags PHP.ini directive', 'Enabling the asp_tags PHP.ini directive', 'That you have XPath support enabled in PHP 5', 'That your XML documents are well-formed', 'None of the above, PHP can be embedded in XML in all cases.']
    },
    q167: {
        id: 167,
        num: 123,
        text: 'What XML technology is used when you mix two different document types in a single XML document?',
        type: 2,
        answers: ['Validators', 'DTD', 'Transformations', 'Namespaces']
    },
    q168: {
        id: 168,
        num: 124,
        text: 'Consider the following example XML document: <pre class=\'brush: php; html-script: true\'> &lt;?xml version="1.0" encoding="ISO-8859-1" ?&gt; &lt;!DOCTYPE html  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt; &lt;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"&gt;  &lt;head&gt;  &lt;title&gt;XML Example&lt;/title&gt;  &lt;/head&gt;  &lt;body&gt;  &lt;p&gt;  Moved to &lt;&lt;a href="http://example.org/"&gt;http://www.example.org/&lt;/a&gt;.&gt;  &lt;br&gt;  &lt;/p&gt;  &lt;/body&gt; &lt;/html&gt; </pre> What is wrong with this document, and how can it be corrected?',
        type: 3,
        answers: ['The document is completely valid', 'All special XML characters must be represented as entities within the content of a node', 'All tags must be closed', 'You cannot specify a namespace for the &lt;html&gt; attribute', 'The DOCTYPE declaration is malformed']
    },
    q169: {
        id: 169,
        num: 125,
        text: 'Event-based XML parsing is an example of which parsing model? ',
        type: 2,
        answers: ['SAX', 'DOM', 'XML Object Mapping', 'XPath', 'XQuery']
    },
    q16: {
        id: 16,
        num: 11,
        text: 'What would go in place of <code>??????</code> below to make this script execute without a fatal error? <pre class=\'brush: php; html-script: true\'> &lt;?php  $a = 1; $b = 0;  ??????  $c = $a / $b; ?&gt; </pre>',
        type: 3,
        answers: ['quit();', 'die();', 'stop();', '__halt_compiler();', 'exit();']
    },
    q170: {
        id: 170,
        num: 126,
        text: 'Consider the following code segment: <pre class=\'brush: php; html-script: true\'> &lt;?php $xmldata = &lt;&lt;&lt; XML &lt;?xml version="1.0" encoding="ISO-8859-1" ?&gt; &lt;!DOCTYPE html  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt; &lt;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"&gt;  &lt;head&gt;  &lt;title&gt;XML Example&lt;/title&gt;  &lt;/head&gt;  &lt;body&gt;  &lt;p&gt;  Moved to &amp;lt;&lt;a href="http://example.org/"&gt;http://www.example.org/&lt;/a&gt;.&amp;gt;  &lt;br/&gt;  &lt;/p&gt;  &lt;/body&gt; &lt;/html&gt; XML;  $xml = xml_parser_create("UTF-8");  /* ??????? */  xml_parse($xml, $xmldata);  function xml_start_handler($xml, $tag, $attributes) { print "Tag: $tag&lt;br/&gt; "; }  function xml_end_handler($xml, $tag) {  }  ?&gt; </pre> What should be placed in place of <code>??????</code> above to have the above script display the name of each tag within the XML document?',
        type: 2,
        answers: ['xml_set_callback("xml_start_handler");', 'xml_set_element_handler($xml, "xml_start_handler", "xml_end_handler");', 'xml_node_set_handler("xml_start_handler", "xml_end_handler");', 'xml_node_set_handler("xml_start_handler");']
    },
    q171: {
        id: 171,
        num: 127,
        text: 'What is the primary benefit of a SAX-based XML parser compared to DOM?',
        type: 2,
        answers: ['All of the above', 'Faster then DOM methods', 'Requires less memory then DOM', 'Easier to develop parsers']
    },
    q172: {
        id: 172,
        num: 128,
        text: 'What does the following PHP script accomplish? <pre class=\'brush: php; html-script: true\'> &lt;?php  $dom = new DomDocument();  $dom-&gt;load(\'test.xml\');  $body = $dom-&gt;documentElement-&gt;getElementsByTagName(\'body\')-&gt;item(0);  echo $body-&gt;getAttributeNode(\'background\')-&gt;value. " "; ?&gt; </pre>',
        type: 2,
        answers: ['Displays the content of every &lt;body&gt; node', 'Displays the "background" attribute for the first node in the XML document named "body"', 'Displays the content of every node that has a "background" node', 'Displays the "background" attribute of every node named "body"']
    },
    q173: {
        id: 173,
        num: 129,
        text: 'Creating new nodes in XML documents using PHP can be done using which XML/PHP 5 technologies?',
        type: 3,
        answers: ['XQuery', 'XPath', 'SimpleXML', 'DOM', 'SAX']
    },
    q174: {
        id: 174,
        num: 130,
        text: 'Consider the following simple PHP script: <pre class=\'brush: php; html-script: true\'> &lt;?php $dom = new DomDocument(); $dom-&gt;load(\'test.xml\'); $xpath = new DomXPath($dom); $nodes = $xpath-&gt;query(???????, $dom-&gt;documentElement); echo $nodes-&gt;item(0)-&gt;getAttributeNode(\'bgcolor\')-&gt;value  . " "; ?&gt; </pre> What XPath query should go in the <code>?????? above</code> to display the "bgcolor" attribute of the first "body" node in the XML document?',
        type: 2,
        answers: ['"*[local-name()=\'body\']"', '"/body[0]/text"', '"/body/body[0]"', '"name=\'body\'"', '"*[lname()=\'body\']"']
    },
    q177: {
        id: 177,
        num: 131,
        text: 'Consider the following PHP script fragment: <pre class=\'brush: php; html-script: true\'> &lt;?php  $title = $dom-&gt;createElement(\'title\');  $node = ????????  $title-&gt;appendChild($node); $head-&gt;appendChild($title);  ?&gt; </pre> What should <code>???????</code> be replaced with to add a <code>&lt;title&gt;</code> node with the value of <code>Hello, World!</code> ',
        type: 2,
        answers: ['$dom-&gt;createTextNode("Hello, World");', '$dom-&gt;appendElement($title, "text", "Hello, world!");', '$dom-&gt;appendTextNode($title, "Hello, World!");', '$dom-&gt;createElement(\'text\', "Hello, World");', 'None of the above']
    },
    q178: {
        id: 178,
        num: 132,
        text: 'When working with <code>SimpleXML</code> in PHP 5, the four basic rules on how the XML document is accessed are which of the following?',
        type: 3,
        answers: ['Element namespaces are denoted by the \'namespace\' attribute', 'converting an element to a string denotes text data', 'Non-numeric indexes are element attributes', 'Numeric indexes are elements', 'Properties denote element iterators']
    },
    q179: {
        id: 179,
        num: 133,
        text: 'SimpleXML objects can be created from what types of data sources? ',
        type: 3,
        answers: ['A String', 'An array', 'A DomDocument object', 'A URI', 'A Database resource']
    },
    q17: {
        id: 17,
        num: 12,
        text: 'What is the output of the following? <pre class=\'brush: php; html-script: true\'> &lt;?php  $a = 010; $b = 0xA; $c = 2;  print $a + $b + $c;  ?&gt; </pre>',
        type: 2,
        answers: ['20', '22', '18', '$a is an invalid value', '2']
    },
    q180: {
        id: 180,
        num: 134,
        text: 'Given the following XML document in a SimpleXML object: <pre class=\'brush: php; html-script: true\'> &lt;?xml version="1.0" encoding="ISO-8859-1" ?&gt; &lt;!DOCTYPE html  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt; &lt;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"&gt;  &lt;head&gt;  &lt;title&gt;XML Example&lt;/title&gt;  &lt;/head&gt;  &lt;body&gt;  &lt;p&gt;  Moved to &amp;lt;&lt;a href="http://example.org/"&gt;http://www.example.org/&lt;/a&gt;.&amp;gt;  &lt;br/&gt;  &lt;/p&gt;  &lt;/body&gt; &lt;/html&gt; </pre> Select the proper statement below which will display the HREF attribute of the anchor tag.',
        type: 2,
        answers: ['$sxe-&gt;body-&gt;p[0]-&gt;a[1][\'href\']', '$sxe-&gt;body-&gt;p-&gt;a-&gt;href', '$sxe-&gt;body-&gt;p-&gt;a[\'href\']', '$sxe[\'body\'][\'p\'][0][\'a\'][\'href\']', '$sxe-&gt;body-&gt;p[1]-&gt;a[\'href\']']
    },
    q181: {
        id: 181,
        num: 135,
        text: 'Given the following PHP script: <pre class=\'brush: php; html-script: true\'> &lt;?php   $xmldata = &lt;&lt;&lt; XML &lt;?xml version="1.0" encoding="ISO-8859-1" ?&gt; &lt;!DOCTYPE html  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt; &lt;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"&gt;  &lt;head&gt;  &lt;title&gt;XML Example&lt;/title&gt;  &lt;/head&gt;  &lt;body&gt;  &lt;p&gt;  &lt;b&gt;Hello, World!&lt;/b&gt;  &lt;/p&gt;  &lt;/body&gt; &lt;/html&gt; XML;  $sxe = simplexml_load_string($xmldata);  $p = $sxe-&gt;body-&gt;p;  $string = ????????  print $string; ?&gt; </pre> What should go in place of <code>?????</code> above to print the string <code>Hello, World!</code> (with no leading/trailing whitespace or markup)?',
        type: 2,
        answers: ['trim(($p[1]));', 'trim(strip_tags(($p-&gt;asText())));', 'trim(strip_tags(($p-&gt;asXML())));', 'trim(($p-&gt;asXML()));', 'strip_tags(($p-&gt;asXML()));']
    },
    q183: {
        id: 183,
        num: 136,
        text: 'The following is a common XML structure used in service oriented architectures, what does it represent? <pre class=\'brush: php; html-script: true\'> &lt;?xml version="1.0"?&gt; &lt;methodCall&gt;  &lt;methodName&gt;myMethod&lt;/methodName&gt;  &lt;params&gt;  &lt;param&gt;  &lt;value&gt;&lt;string&gt;HI!&lt;/string&gt;&lt;/value&gt;  &lt;/param&gt;  &lt;/params&gt; &lt;/methodCall&gt; </pre>',
        type: 2,
        answers: ['None of the above', 'A fragment of a complete SOAP request', 'XML-RPC', 'REST', 'SOAP']
    },
    q185: {
        id: 185,
        num: 137,
        text: 'Which of the following functions are part of PHP\'s internal <code>Iterator</code> interface?',
        type: 3,
        answers: ['rewind()', 'valid()', 'next()', 'key()', 'current()']
    },
    q18: {
        id: 18,
        num: 13,
        text: 'What is the output of the following? <pre class=\'brush: php; html-script: true\'> &lt;?php  $a = 20;  function myfunction($b) { $a = 30;  global $a, $c; return $c = ($b + $a); }  print myfunction(40) + $c;  ?&gt; </pre>',
        type: 2,
        answers: ['120', 'Syntax Error', '60', '70']
    },
    q191: {
        id: 191,
        num: 138,
        text: 'Consider the following script: <pre class=\'brush: php; html-script: true\'> &lt;?php $dom = new DOMDOcument(); $dom-&gt;load("myxmlfile.xml");  foreach($dom-&gt;documentElement-&gt;childNodes as $child) {  if(($child-&gt;nodeType == XML_ELEMENT_NODE) &amp;&amp;  $child-&gt;nodeName == "item")  {  foreach($child-&gt;childNodes as $item)  {  if(($item-&gt;nodeType == XML_ELEMENT_NODE) &amp;&amp;  ($item-&gt;nodeName == "title"))  {  print "$item-&gt;firstChild-&gt;data ";  }  }  } } ?&gt; </pre> Assumingthe referenced XML document exists and matches the parsing logic, whatshould be displayed when this script is executed?',
        type: 2,
        answers: ['None of the above', 'The XML of each \'title\' node', 'The XML of each \'item\' node', '"Title" for every title node in the document', 'The contents of every \'title\' node which exists under an \'item\' node']
    },
    q192: {
        id: 192,
        num: 139,
        text: 'Which of the following methods are used to fetch data from a PDO Statement?',
        type: 3,
        answers: ['fetchColumn()', 'fetchObject()', 'fetch()', 'fetchClass()', 'fetchRow()']
    },
    q194: {
        id: 194,
        num: 140,
        text: 'In a general sense, which is more important: performance or maintainability of an application?',
        type: 2,
        answers: ['performance first, maintainability second', 'Maintainability first, performance second', 'Maintainability', 'Performance']
    },
    q195: {
        id: 195,
        num: 141,
        text: 'When writing portable database code using PDO, what is the <code>PDO::ATTR_CASE</code> attribute useful for?',
        type: 2,
        answers: ['None of the above', 'Ensuring that all columns are of a particular case when fetched', 'Adjusting the case of a query before it is processed for compatibility reasons', 'Controls the switch logic of how queries are processed', 'Allows you to adjust the memory cache (or "case") for increased performance']
    },
    q196: {
        id: 196,
        num: 142,
        text: 'Consider the following PHP code segment, which attempts to execute a PDO query: <pre class=\'brush: php; html-script: true\'> &lt;?php try {  $dbh-&gt;exec($sql); } catch (PDOException $e) {  // display warning message  $info = $e-&gt;errorInfo; } ?&gt; </pre> In the event of a PDOException, <code>$info</code> is set with the contents of the <code>$errorInfo</code> property of the exception. Which of the following are accurate descriptions of the contents?',
        type: 3,
        answers: ['$info[1] is the database-specific error code', '$info[2] is the database-specific error message', '$info[1] is the unified error code', '$info[0] is the unified error code', '$info[0] Is the Database-specific error message']
    },
    q197: {
        id: 197,
        num: 143,
        text: 'Which of the following functions allow you to introspect the call stack during execution of a PHP script?',
        type: 3,
        answers: ['get_backtrace()', 'get_function_stack()', 'debug_backtrace()', 'debug_print_backtrace()', 'print_backtrace()']
    },
    q199: {
        id: 199,
        num: 144,
        text: 'Whenworking with a database, which of the following can be used to mitigatethe possibility of exposing your database credientials to a malicioususer?',
        type: 3,
        answers: ['Moving all database credentials into a single file', 'Moving all database credentials outside of the document root', 'Restricting access to files not designed to be executed independently', 'Setting creditial information as system environment variables', 'Using PHP constants instead of variables to store credentials']
    },
    q19: {
        id: 19,
        num: 14,
        text: 'What would you replace <code>???????</code> with, below, to make the string <code>Hello, World!</code> be displayed? <pre class=\'brush: php; html-script: true\'> &lt;?php  function myfunction() {  ??????? print $string; }  myfunction("Hello, World!");  ?&gt; </pre>',
        type: 2,
        answers: ['There is no way to do this', '$string = $argv[1];', '$string = $_ARGV[0];', 'list($string) = func_get_args();', '$string = get_function_args()']
    },
    q200: {
        id: 200,
        num: 145,
        text: 'When running PHP in a shared host environment, what is the major security concern when it comes to session data?',
        type: 2,
        answers: ['Sessions on shared hosts are easily hijacked by outside malicious users', 'All of the above', 'You cannot use a custom data store in shared hosts', 'Session data stored in the file system can be read by other scripts on the same shared host', 'Users outside the shared host can access any site which created a session for them']
    },
    q205: {
        id: 205,
        num: 146,
        text: 'Which of the following are examples of the new engine executor models available in PHP 5?',
        type: 3,
        answers: ['Switch', 'Conditional', 'Goto', 'Call', 'Dynamic']
    },
    q206: {
        id: 206,
        num: 147,
        text: 'Which of the following are not true about streams?',
        type: 3,
        answers: ['They are always seekable', 'When used properly they significantly reduce memory consumption', 'They can be applied to any data source', 'They are always bi-directional', 'They can be filtered']
    },
    q207: {
        id: 207,
        num: 148,
        text: 'Using <code>flock()</code> to lock a stream is only assured to work under what circumstances?',
        type: 2,
        answers: ['When running in a Linux environment local filesystem', 'When accessing the stream of the local filesystem', 'When running in a Windows environment and accessing a share', 'When accessing a bi-directional stream', 'When accessing a read-only stream']
    },
    q209: {
        id: 209,
        num: 149,
        text: 'What is wrong with the following code snippet? Assume default configuration values apply. <pre class=\'brush: php; html-script: true\'> &lt;?php  $fp = fsockopen(\'www.php.net\', 80); fwrite($fp, "GET / HTTP/1.0\r Host: www.php.net\r "); $data = fread($fp, 8192);  ?&gt; </pre>',
        type: 2,
        answers: ['The request is blocking and may cause fread() to hang', 'The HTTP request is malformed', 'This script should be re-written using fgets() instead of fread()', 'The request is non-blocking and fread() may miss the response', 'You cannot use fwrite() with fsockopen()']
    },
    q20: {
        id: 20,
        num: 15,
        text: 'What is the output of the following function? <pre class=\'brush: php; html-script: true\'> &lt;?php  function &amp;find_variable(&amp;$one, &amp;$two, &amp;$three) {  if($one &gt; 10 &amp;&amp; $one &lt; 20) return $one; if($two &gt; 10 &amp;&amp; $two &lt; 20) return $two; if($three &gt; 10 &amp;&amp; $three &lt; 20) return $three; }  $one = 2; $two = 20; $three = 15;  $var = &amp;find_variable($one, $two, $three);  $var++;  print "1: $one, 2: $two, 3: $three";  ?&gt; </pre>',
        type: 2,
        answers: ['1: 2, 2: 20, 3: 15', '1: 3, 2:21, 3:16', '1: 2, 2:21, 3:15', '1: 3, 2: 20, 3: 15', '1: 2, 2: 20, 3: 16']
    },
    q214: {
        id: 214,
        num: 150,
        text: '_______can be used to add additional functionality to a stream, such asimplementation of a specific protocol on top of a normal PHP streamimplementation.',
        type: 2,
        answers: ['Buffered', 'Buckets', 'Wrappers', 'Filters']
    },
    q215: {
        id: 215,
        num: 151,
        text: 'Which of the following is not a valid <code>fopen()</code> access mode:',
        type: 2,
        answers: ['b', 'x', 'a', 'w', 'r+']
    },
    q217: {
        id: 217,
        num: 152,
        text: 'The _______ constant in a CLI script is an automatically provided file resource representing standard input of the terminal.',
        type: 2,
        answers: ['STDIN', '__STDIN__', 'STDIO', 'PHP::STDIO', 'STD_IN']
    },
    q218: {
        id: 218,
        num: 153,
        text: 'What should go in the ??????? assignment below to create a Zlib-compressed file <code>foo.gz</code> with a compression level of <code>9</code>? <pre class=\'brush: php; html-script: true\'> &lt;?php  $file = \'????????\';  $fr = fopen($file, \'wb9\'); fwrite($fr, $data); fclose($fr);  ?&gt; </pre>',
        type: 2,
        answers: ['gzip://foo.gz?level=9', 'compress.zip://foo.gz?level=9', 'compress.zlib://foo.gz', 'compress.gzip://foo.gz?level=9', 'zlib://foo.gz']
    },
    q21: {
        id: 21,
        num: 16,
        text: 'For an arbitrary string <code>$mystring</code>, which of the following checks will correctly determine if the string <code>PHP</code> exists within it?',
        type: 2,
        answers: ['if(strpos($mystring, "PHP") !== false)', 'if(!strpos($mystring,"PHP"))', 'if(strpos($mystring, "PHP") === true)', 'if(strloc($mystring, "PHP") == true)', 'if(strloc($mystring, "PHP") === false)']
    },
    q220: {
        id: 220,
        num: 154,
        text: 'Which of the following is not a valid default stream wrapper for PHP 5, assuming OpenSSL is enabled?',
        type: 2,
        answers: ['ftps://', 'ftp://', 'sftp://', 'https://', 'http://']
    },
    q221: {
        id: 221,
        num: 155,
        text: 'Whenopening a file in writing mode using the FTP handler, what must be doneso that the file will still be written to the server in the event itpreviously exists?',
        type: 2,
        answers: ['Provide a context for fopen() using stream_context_create()', 'You must delete the file first before uploading a new file', 'Configure this behavior in the php.ini file using the ftp.overwrite directive', 'Open the file using the \'w+\' mode']
    },
    q224: {
        id: 224,
        num: 156,
        text: 'Which of the following functions is used to determine if a given stream is blocking or not?',
        type: 2,
        answers: ['stream_get_blocking', 'stream_get_meta_data', 'stream_is_blocking', 'stream_get_blocking_mode']
    },
    q226: {
        id: 226,
        num: 157,
        text: 'What is the difference between the <code>include</code> and <code>require</code> language constructs?',
        type: 2,
        answers: ['Require constructs can\'t be used with URL filenames', 'Include constructs cause a fatal error if the file doesn\'t exist', 'There is no difference other than the name', 'Include constructs are processed at run time; require constructs are processed at compile time', 'Require constructs cause a fatal error if the file can\'t be read']
    },
    q227: {
        id: 227,
        num: 158,
        text: 'Whenwriting CLI scripts it is often useful to access the standard streamsavailable to the operating system such as standard input/output anderror. How does one access these streams in PHP 5?',
        type: 2,
        answers: ['Use stdin(), stdout() and stderr() functions', 'PHP::STDIN, PHP::STDOUT, PHP::STDERR class constants in PHP 5', 'STDIN, STDOUT, and STDERR constants in PHP 5', 'use the php::stdin(), php::stdout(), and php::stderr() class methods']
    },
    q228: {
        id: 228,
        num: 159,
        text: 'Howcan one take advantage of the time waiting for a lock during a streamaccess, to do other tasks using the following locking code as the base: <p class="ceresIndent"><code>$retval = flock($fr, LOCK_EX);</code></p>',
        type: 2,
        answers: ['Use flock_lazy() instead of flock()', 'Use LOCK_EX|LOCK_NB instead of LOCK_EX', 'Use LOCK_UN instead of LOCK_EX', 'Check the value of $retval to see if the lock was obtained', 'Check to see if $retval == LOCK_WAIT']
    },
    q229: {
        id: 229,
        num: 160,
        text: 'What is the output of? <pre class=\'brush: php; html-script: true\'>function apple($apples = 4) {  $apples = $apples / 2;  return $apples; } $apples = 10; apple($apples); echo $apples;</pre>',
        type: 2,
        answers: ['2', '4', '5', '10']
    },
    q22: {
        id: 22,
        num: 17,
        text: 'What are the values of <code>$a</code> in <code>$obj_one</code> and <code>$obj_two</code> when this script is executed? <pre class=\'brush: php; html-script: true\'> &lt;?php class myClass {  private $a;   public function __construct() {  $this-&gt;a = 10;  }   public function printValue() {  print "The Value is: {$this-&gt;a} ";  }   public function changeValue($val, $obj = null) {  if(is_null($obj)) {  $this-&gt;a = $val;  } else {  $obj-&gt;a = $val;  }  }   public function getValue() {  return $this-&gt;a;  } }  $obj_one = new myClass(); $obj_two = new myClass();  $obj_one-&gt;changeValue(20, $obj_two); $obj_two-&gt;changeValue($obj_two-&gt;getValue(), $obj_one);  $obj_two-&gt;printValue(); $obj_one-&gt;printValue();  ?&gt; </pre>',
        type: 2,
        answers: ['10,20', 'You cannot modify private member variables of a different class', '20,20', '10,10', '20,10']
    },
    q230: {
        id: 230,
        num: 161,
        text: 'Which statement will return the third parameter passed to a function?',
        type: 2,
        answers: ['$argv[3];', '$argv[2];', 'func_get_args(3);', 'func_get_arg(2);', 'func_get_arg(3);']
    },
    q231: {
        id: 231,
        num: 162,
        text: 'What is the output of the following code? <pre class=\'brush: php; html-script: true\'>function oranges(&amp;$oranges = 17) { $oranges .= 1; } $apples = 5; oranges($apples); echo $apples++;</pre>',
        type: 2,
        answers: ['16', '51', '15', '6', '5']
    },
    q232: {
        id: 232,
        num: 163,
        text: 'What is the output of the following code? <pre class=\'brush: php; html-script: true\'>function pears(Array $pears) { if (count($pears) &gt; 0) { echo array_pop($pears); pears($pears); } } $fruit = array("Anjo", "Bartlet"); pears($fruit);</pre>',
        type: 2,
        answers: ['Bartlet', 'Anjo', 'BartletAnjo', 'AnjoBartlet', 'None / There is an Error']
    },
    q233: {
        id: 233,
        num: 164,
        text: 'In PHP5 objects are passed by reference to a function when (Select the answer that is the most correct):',
        type: 2,
        answers: ['Always; objects are passed by reference in PHP5', 'When the calling code preceeds the variable name with a &amp;', 'Never; objects are cloned when passed to a function', 'When the function paramater listing preceeds the variable name with a &amp;']
    },
    q234: {
        id: 234,
        num: 165,
        text: 'What is the output of the following code? <pre class=\'brush: php; html-script: true\'> &lt;?php function byReference(&amp;$variable = 5) {  echo ++$variable; } byReference(); ?&gt; </pre>',
        type: 2,
        answers: ['No output or error. Variables can not be optional and passed by reference.', '5', '6']
    },
    q236: {
        id: 236,
        num: 166,
        text: 'What is the output of the following code? <pre class=\'brush: php; html-script: true\'> &lt;?php function x10(&amp;$number)  $number *= 10;  $count = 5; x10($count); echo $count; ?&gt; </pre>',
        type: 2,
        answers: ['Error: Unexpected T_VARIABLE', '10', 'Notice regarding pass by reference', '50', '5']
    },
    q238: {
        id: 238,
        num: 167,
        text: 'What is the output of the following? <pre class=\'brush: php; html-script: true\'> &lt;?php function 1dotEach($n) {  if ($n &gt; 0)  {  1dotEach(--$n);  echo ".";  }else   {  return $n;  } } 1dotEach(4); ?&gt; </pre>',
        type: 2,
        answers: ['...0', 'Parse Error: Syntax Error', '.....', '....', '...']
    },
    q239: {
        id: 239,
        num: 168,
        text: 'When your error reporting level includes <code>E_STRICT</code>, what will the output of the following code be? <pre class=\'brush: php; html-script: true\'> &lt;?php function optionalParam($x = 1, $y = 5, $z) {  if ((!$z &gt; 0))  {  $z = 1;  }  for($count = $x; $count &lt; $y; $count+= $z)  {  echo "#";  } } optionalParam(2,4,2); ?&gt; </pre>',
        type: 2,
        answers: ['##', 'Notice', 'Warning', 'Syntax Error', '#']
    },
    q23: {
        id: 23,
        num: 18,
        text: 'What are the three access modifiers that you can use in PHP objects?',
        type: 3,
        answers: ['protected', 'public', 'static', 'private', 'final']
    },
    q240: {
        id: 240,
        num: 169,
        text: 'What is the output of the following?  <pre class=\'brush: php; html-script: true\'> &lt;?php function byRef(&amp;$number) {  $number *= 10;  return ($number - 5); } $number = 10; $number = byRef($number); echo $number; ?&gt; </pre>',
        type: 2,
        answers: ['50', '5', '95', '10', '100']
    },
    q241: {
        id: 241,
        num: 170,
        text: 'What is the output of the following?  <pre class=\'brush: php; html-script: true\'> &lt;?php function byRef(&amp;$apples) {  $apples++; } $oranges = 5; $apples = 5; byRef($oranges); echo "I have $apples apples and $oranges oranges"; ?&gt; </pre>',
        type: 2,
        answers: ['I have 6 apples and 6 oranges', 'I have 6 apples and 5 oranges', 'I have 5 apples and 6 oranges', 'I have 5 apples and 5 oranges']
    },
    q242: {
        id: 242,
        num: 171,
        text: 'What is the output of the following? <pre class=\'brush: php; html-script: true\'> &lt;?php function a($number) {  return (b($number) * $number); }  function b(&amp;$number) {  ++$number; } echo a(5); ?&gt; </pre>',
        type: 2,
        answers: ['0', '36', '6', '30', '5']
    },
    q25: {
        id: 25,
        num: 19,
        text: 'When checking to see if two variables contain the same instance of an object, which of the following comparisons should be used?',
        type: 2,
        answers: ['if($obj1-&gt;equals($obj2) &amp;&amp; ($obj1 instanceof $obj2))', 'if($obj1-&gt;equals($obj2))', 'if($obj1 === $obj2)', 'if($obj1 instanceof $obj2)', 'if($obj1 == $obj2)']
    },
    q26: {
        id: 26,
        num: 20,
        text: 'In PHP 5 you can use the <code>______</code> operator to ensure that an object is of a particular type. You can also use <code>_______</code> in the function declaration. ',
        type: 2,
        answers: ['instanceof, is_a', 'instanceof, type-hinting', 'type, instanceof', '===, type-hinting', '===, is_a']
    },
    q27: {
        id: 27,
        num: 21,
        text: 'What is wrong with the following code? <pre class=\'brush: php; html-script: true\'> &lt;?php  function duplicate($obj) { $newObj = $obj; return $newObj; }  $a = new MyClass();  $a_copy = duplicate($a);  $a-&gt;setValue(10); $a_copy-&gt;setValue(20);  ?&gt; </pre>',
        type: 2,
        answers: ['You must use return &amp;$newObj instead', 'There is nothing wrong with this code', 'duplicate() must accept its parameter by reference', 'You must use the clone operator to make a copy of an object', 'duplicate() must return a reference']
    },
    q28: {
        id: 28,
        num: 22,
        text: 'How can you modify the copy of an object during a clone operation? ',
        type: 2,
        answers: ['Put the logic in the object\'s constructor to alter the values', 'Implment your own function to do object copying', 'Implement the object\'s __clone() method', 'Implement __get() and __set() methods with the correct logic', 'Implement the __copy() method with the correct logic']
    },
    q2: {
        id: 2,
        num: 1,
        text: 'Which of the following tags are an acceptable way to begin a PHP Code block?',
        type: 3,
        answers: ['&lt;SCRIPT LANGUAGE="php"&gt;', '&lt;!', '&lt;%', '&lt;?php', '&lt;?']
    },
    q30: {
        id: 30,
        num: 23,
        text: 'What is the primary difference between a method declared as static and a normal method?',
        type: 2,
        answers: ['Static methods can only be called using the :: syntax and never from an instance', 'Static methods do not provide a reference to $this', 'Static methods cannot be called from within class instances', 'Static methods don\'t have access to the self keyword', 'There is no functional difference between a static and non-static method']
    },
    q31: {
        id: 31,
        num: 24,
        text: 'What is the output of the following script? <pre class=\'brush: php; html-script: true\'> &lt;?php  class ClassOne {  protected $a = 10;   public function changeValue($b) {  $this-&gt;a = $b;  } }  class ClassTwo extends ClassOne {   protected $b = 10;   public function changeValue($b) {  $this-&gt;b = 10;  parent::changeValue($this-&gt;a + $this-&gt;b);  }   public function displayValues() {  print "a: {$this-&gt;a}, b: {$this-&gt;b} ";  } }  $obj = new ClassTwo();  $obj-&gt;changeValue(20); $obj-&gt;changeValue(10);  $obj-&gt;displayValues();  ?&gt; </pre>',
        type: 2,
        answers: ['a: 30, b: 30', 'a: 30, b: 20', 'a: 30, b: 10', 'a: 20, b: 20', 'a: 10, b: 10']
    },
    q32: {
        id: 32,
        num: 25,
        text: 'The <code>______</code>keyword is used to indicate an incomplete class or method, which mustbe further extended and/or implemented in order to be used.',
        type: 2,
        answers: ['final', 'protected', 'incomplete', 'abstract', 'implements']
    },
    q33: {
        id: 33,
        num: 26,
        text: 'To ensure that a given object has a particular set of methods, you must provide a method list in the form of an <code>________</code> and then attach it as part of your class using the <code>________</code> keyword.',
        type: 2,
        answers: ['array, interface', 'interface, implements', 'interface, extends', 'instance, implements', 'access-list, instance']
    },
    q34: {
        id: 34,
        num: 27,
        text: 'Type-hinting and the <code>instanceof</code> keyword can be used to check what types of things about variables?',
        type: 3,
        answers: ['If a particular child class extends from it', 'If they are an instance of a particular interface', 'If they are an abstract class', 'If they have a particular parent class', 'If they are an instance of a particular class']
    },
    q35: {
        id: 35,
        num: 28,
        text: 'In PHP 5\'s object model, a class can have multiple <code>______</code> but only a single direct  <code>________</code>.',
        type: 2,
        answers: ['None of the above', 'interfaces, child', 'children, interface', 'interfaces, parent', 'parents, interface']
    },
    q36: {
        id: 36,
        num: 29,
        text: 'Whatthree special methods can be used to perform special logic in the eventa particular accessed method or member variable is not found?',
        type: 3,
        answers: ['__get($variable)', '__call($method, $params)', '__get($method)', '__set($variable, $value)', '__call($method)']
    },
    q37: {
        id: 37,
        num: 30,
        text: 'The <code>_______</code> method will be called automatically when an object is represented as a string.',
        type: 2,
        answers: ['getString()', '__get()', '__value()', '__toString()', '__getString()']
    },
    q38: {
        id: 38,
        num: 31,
        text: 'Whenan object is serialized, which method will be called, automatically,providing your object with an opportunity to close any resources orotherwise prepare to be serialized?',
        type: 2,
        answers: ['__destroy()', '__serialize()', '__destruct()', '__shutdown()', '__sleep()']
    },
    q39: {
        id: 39,
        num: 32,
        text: 'What is the output of the following code? <pre class=\'brush: php; html-script: true\'> &lt;?php  class MyException extends Exception {} class AnotherException extends MyException {}  class Foo {  public function something() {  throw new AnotherException();  }  public function somethingElse() {  throw new MyException();  } }  $a = new Foo();  try {  try {  $a-&gt;something();  } catch(AnotherException $e) {  $a-&gt;somethingElse();  } catch(MyException $e) {  print "Caught Exception";  } } catch(Exception $e) {  print "Didn\'t catch the Exception!"; }  ?&gt; </pre>',
        type: 2,
        answers: ['"Caught Exception" followed by "Didn\'t catch the Exception!"', 'A fatal error for an uncaught exception', '"Didn\'t catch the Exception!"', '"Didn\'t catch the Exception!" followed by a fatal error', '"Caught Exception"']
    },
    q3: {
        id: 3,
        num: 2,
        text: 'Which of the following are valid PHP variables?',
        type: 3,
        answers: ['@$foo', '&amp;$variable', '${0x0}', '$variable', '$0x0']
    },
    q40: {
        id: 40,
        num: 33,
        text: 'Which two internal PHP interfaces provide functionality which allow you to treat an object like an array?',
        type: 3,
        answers: ['iteration', 'arrayaccess', 'objectarray', 'iterator', 'array']
    },
    q41: {
        id: 41,
        num: 34,
        text: 'Which <code>php.ini</code> directive should be disabled to prevent the execution of a remote PHP script via an <code>include</code> or <code>require</code> construct?',
        type: 2,
        answers: ['You cannot disable remote PHP script execution', 'curl.enabled', 'allow_remote_url', 'allow_url_fopen', 'allow_require']
    },
    q42: {
        id: 42,
        num: 35,
        text: 'When attempting to prevent a cross-site scripting attack, which of the following is most important?',
        type: 2,
        answers: ['Not writing Javascript on the fly using PHP', 'Filtering Output used in form data', 'Filtering Output used in database transactions', 'Writing careful Javascript', 'Filtering all input']
    },
    q43: {
        id: 43,
        num: 36,
        text: 'Which of the following <code>php.ini</code> directives should be disabled to improve the outward security of your application?',
        type: 3,
        answers: ['safe_mode', 'magic_quotes_gpc', 'register_globals', 'display_errors', 'allow_url_fopen']
    },
    q44: {
        id: 44,
        num: 37,
        text: 'Which of the following list of potential data sources should be considered trusted?',
        type: 2,
        answers: ['None of the above', '$_ENV', '$_GET', '$_COOKIE', '$_SERVER']
    },
    q45: {
        id: 45,
        num: 38,
        text: 'What is the best way to ensure the distinction between filtered / trusted and unfiltered / untrusted data?',
        type: 2,
        answers: ['None of the above', 'Never trust any data from the user', 'Enable built-in security features such as magic_quotes_gpc and safe_mode', 'Always filter all incoming data', 'Use PHP 5\'s tainted mode']
    },
    q46: {
        id: 46,
        num: 39,
        text: 'Consider the following code: <pre class=\'brush: php; html-script: true\'> &lt;?php session_start();  if(!empty($_REQUEST[\'id\'])  &amp;&amp; !empty($_REQUEST[\'quantity\'])) {  $id = scrub_id($_REQUEST[\'id\']);  $quantity = scrub_quantity($_REQUEST[\'quantity\'])  $_SESSION[\'cart\'][] = array(\'id\' =&gt; $id,  \'quantity\' =&gt; $quantity) }  /* .... */  ?&gt; </pre> What potential security hole would this code snippet produce?',
        type: 2,
        answers: ['Cross-Site Scripting Attack', 'There is no security hole in this code', 'Code Injection', 'SQL Injection', 'Cross-Site Request Forgery']
    },
    q47: {
        id: 47,
        num: 40,
        text: 'What is the best measure one can take to prevent a cross-site request forgery?',
        type: 2,
        answers: ['Disallow requests from outside hosts', 'Add a secret token to all form submissions', 'Turn off allow_url_fopen in php.ini', 'Filter all output', 'Filter all input']
    },
    q48: {
        id: 48,
        num: 41,
        text: 'Consider the following code: <pre class=\'brush: php; html-script: true\'> &lt;?php header("Location: {$_GET[\'url\']}"); ?&gt; </pre> Which of the following values of $_GET[\'url\'] would cause session fixation?',
        type: 2,
        answers: ['Session Fixation is not possible with this code snippet', 'http://www.zend.com/?PHPSESSID=123', 'PHPSESSID%611243', 'Set-Cookie%3A+PHPSESSID%611234', 'http%3A%2F%2Fwww.zend.com%2F%0D%0ASet-Cookie%3A+PHPSESSID%611234']
    },
    q49: {
        id: 49,
        num: 42,
        text: 'When implementing a permissions system for your Web site, what should always be done with regards to the session?',
        type: 2,
        answers: ['None of the above', 'You should not implement permission systems using sessions', 'Sessions should be cleared of all data and re-populated', 'The session key should be regenerated', 'The session should be destroyed']
    },
    q4: {
        id: 4,
        num: 3,
        text: 'What is the best way to iterate and modify every element of an array using PHP 5?',
        type: 2,
        answers: ['You cannot modify an array during iteration', 'for($i = 0; $i &lt; count($array); $i++) { /* ... */ }', 'foreach($array as $key =&gt; &amp;$val) { /* ... */ }', 'foreach($array as $key =&gt; $val) { /* ... */ }', 'while(list($key, $val) = each($array)) { /* ... */']
    },
    q50: {
        id: 50,
        num: 43,
        text: 'Which of the following is not valid syntax for creating a new array key?',
        type: 2,
        answers: ['$a[] = "value";', '$a{} = "value";', '$a[0] = "value";', '$a{0} = "value";', '$a[$b = 0] = "value";']
    },
    q53: {
        id: 53,
        num: 44,
        text: 'Which of the following functions will sort an array in ascending order by value, while preserving key associations?',
        type: 2,
        answers: ['asort()', 'usort()', 'krsort()', 'ksort()', 'sort()']
    },
    q54: {
        id: 54,
        num: 45,
        text: 'What is the output of the following code block? <pre class=\'brush: php; html-script: true\'> &lt;?php  $a = "The quick brown fox jumped over the lazy dog.";  $b = array_map("strtoupper", explode(" ", $a));  foreach($b as $value) { print "$value "; }  ?&gt; </pre>',
        type: 2,
        answers: ['THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG.', 'A PHP Error', 'Array Array Array Array Array Array Array Array Array']
    },
    q55: {
        id: 55,
        num: 46,
        text: 'Which from the following list is not an approrpiate use of an array?',
        type: 2,
        answers: ['As a list', 'All of these uses are valid', 'As a Lookup Table', 'A Stack', 'As a hash table']
    },
    q57: {
        id: 57,
        num: 47,
        text: 'What is the output of this code snippet? <pre class=\'brush: php; html-script: true\'> &lt;?php  $a = array(0.001 =&gt; \'b\', .1 =&gt; \'c\');  print_r($a);  ?&gt; </pre>',
        type: 2,
        answers: ['An empty array', '0.001 =&gt; \'b\', .1 =&gt; c', '0 =&gt; \'c\'', '\'0.001\' =&gt; \'b\', \'0.1\' =&gt; c\'', 'A Syntax Error']
    },
    q59: {
        id: 59,
        num: 48,
        text: 'Which of the following functions could be used to break a string into an array?',
        type: 3,
        answers: ['array_split()', 'split()', 'string_split()', 'preg_match_all()', 'explode()']
    },
    q5: {
        id: 5,
        num: 4,
        text: 'What is the output of the following PHP code? <pre class=\'brush: php; html-script: true\'> &lt;?php  define(\'FOO\', 10);  $array = array(10 =&gt; FOO,  "FOO" =&gt; 20);  print $array[$array[FOO]] * $array["FOO"];  ?&gt; </pre>',
        type: 2,
        answers: ['FOO', '100', '200', '20', '10']
    },
    q60: {
        id: 60,
        num: 49,
        text: 'If you wanted a variable containing the letters <code>A</code> through <code>Z</code>, that allowed you to access each letter independently, which of the following approaches could you use?',
        type: 3,
        answers: ['$str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";', 'range(\'A\', \'Z\');', 'explode("", "ABCDEFGHIJKLMNOPQRSTUVWXYZ");', 'You would use the ALPHA_ARRAY constant', 'None of the above']
    },
    q61: {
        id: 61,
        num: 50,
        text: 'What is the output of the following code block? <pre class=\'brush: php; html-script: true\'> &lt;?php  $array = array(1 =&gt; 0, 2, 3, 4);  array_splice($array, 3, count($array), array_merge(array(\'x\'), array_slice($array, 3)));   print_r($array);  ?&gt; </pre>',
        type: 2,
        answers: ['1 =&gt; 1, 2 =&gt; 2, 3 =&gt; x, 4=&gt; 4', '0 =&gt; 1, 2 =&gt; 2, 3 =&gt; 3, 4 =&gt; 4, x =&gt; 3', '0 =&gt; 0, 1=&gt; 2, 2 =&gt; 3, 3 =&gt; x, 4 =&gt; 4', '0 =&gt; x, 1 =&gt; 0, 2 =&gt; 1, 3=&gt; 2, 4=&gt;3', '1 =&gt; 1, 3 =&gt; x, 2 =&gt; 2, 4 =&gt; 4']
    },
    q62: {
        id: 62,
        num: 51,
        text: 'Which function would you use to add an element to the beginning of an array?',
        type: 2,
        answers: ['array_shift()', 'array_push();', '$array[0] = "value";', 'array_unshift()', 'array_pop();']
    },
    q63: {
        id: 63,
        num: 52,
        text: 'Which key will not be displayed from the following code block?  <pre class=\'brush: php; html-script: true\'> &lt;?php  $array = array(\'a\' =&gt; \'John\',  \'b\' =&gt; \'Coggeshall\',  \'c\' =&gt; array(\'d\' =&gt; \'John\',  \'e\' =&gt; \'Smith\'));   function display($item, $key) { print "$key =&gt; $item "; }  array_walk_recursive($array, "display");  ?&gt; </pre>',
        type: 2,
        answers: ['d', 'c', 'b', 'a', 'They all will be displayed']
    },
    q64: {
        id: 64,
        num: 53,
        text: 'What is the result of the following code snippet? <pre class=\'brush: php; html-script: true\'> &lt;?php  $array = array(\'a\' =&gt; \'John\',  \'b\' =&gt; \'Coggeshall\',  \'c\' =&gt; array(\'d\' =&gt; \'John\',  \'e\' =&gt; \'Smith\'));   function something($array) { extract($array); return $c[\'e\']; }  print something($array); ?&gt; </pre>',
        type: 2,
        answers: ['Smith', 'A PHP Warning', 'Coggeshall', 'NULL', 'Array']
    },
    q65: {
        id: 65,
        num: 54,
        text: 'What should go in the missing line <code>?????</code> below to produce the output shown? <pre class=\'brush: php; html-script: true\'> Array (  [5] =&gt; A  [4] =&gt; B  [3] =&gt; C  [2] =&gt; D  [1] =&gt; E ) </pre>',
        type: 2,
        answers: ['$array_three = array_merge(array_reverse($array_one), $array_two);', '$array_three = array_combine($array_one, $array_two);', '$array_three = array_combine(array_reverse($array_one), $array_two);', '$array_three = array_merge($array_one, $array_two);', '$array_three = array_reverse($array_one) + $array_two;']
    },
    q66: {
        id: 66,
        num: 55,
        text: 'Which of the following functions are used with the internal array pointer to accomplish an action?',
        type: 3,
        answers: ['key', 'forward', 'prev', 'current', 'next']
    },
    q67: {
        id: 67,
        num: 56,
        text: 'Given the following array: <p class="ceresIndent"><code>$array = array(1,1,2,3,4,4,5,6,6,6,6,3,2,2,2);</code></p> <p class="ceresIndent">The fastest way to determine the total number a particular value appears in the array is to use which function?</p>',
        type: 2,
        answers: ['array_total_values', 'array_count_values', 'A foreach loop', 'count', 'a for loop']
    },
    q68: {
        id: 68,
        num: 57,
        text: 'The ____ construct is particularly useful to assign your own variable names to values within an array.',
        type: 2,
        answers: ['array_get_variables', 'current', 'each', 'import_variables', 'list']
    },
    q69: {
        id: 69,
        num: 58,
        text: 'The following code snippet displays what for the resultant array?  <pre class=\'brush: php; html-script: true\'> &lt;?php  $a = array(1 =&gt; 0, 3 =&gt; 2, 4 =&gt; 6); $b = array(3 =&gt; 1, 4 =&gt; 3, 6 =&gt; 4);  print_r(array_intersect($a, $b)); ?&gt; </pre>',
        type: 2,
        answers: ['1 =&gt; 0', '1 =&gt; 3, 3 =&gt; 1, 4 =&gt; 3', '3 =&gt; 1, 3=&gt; 2, 4 =&gt; 3, 4=&gt; 6', '1 =&gt; 0, 3 =&gt; 2, 4 =&gt; 6', 'An empty Array']
    },
    q6: {
        id: 6,
        num: 5,
        text: 'What is the output of the following PHP script? <pre class=\'brush: php; html-script: true\'> &lt;?php  $a = 1; $b = 2.5; $c = 0xFF;  $d = $b + $c; $e = $d * $b; $f = ($d + $e) % $a;  print ($f + $e);  ?&gt; </pre>',
        type: 2,
        answers: ['643.75', '432', '643', '257', '432.75']
    },
    q71: {
        id: 71,
        num: 59,
        text: 'Which of the following are not valid ways to embed a variable into a string?',
        type: 3,
        answers: ['$a = "Value: $value-&gt;getValue()";', '$a = "Value: {$value}";', '$a = \'Value: $value\';', '$a = "Value: $value";', '$a = "Value: {$value[\'val\']}";']
    },
    q72: {
        id: 72,
        num: 60,
        text: 'What variable reference would go in the spots indcated by <code>?????</code> in the code segment below? <pre class=\'brush: php; html-script: true\'> &lt;?php  $msg = "The Quick Brown Foxed Jumped Over the Lazy Dog";  $state = true; $retval = ""; for($i = 0; (isset(??????)); $i++) { if($state) { $retval .= strtolower(?????); } else { $retval .= strtoupper(?????); }  $state = !$state; }  print $retval;  ?&gt; </pre>',
        type: 2,
        answers: ['$msg{$i}', 'ord($msg);', 'chr($msg);', 'substr($msg, $i, 2);']
    },
    q73: {
        id: 73,
        num: 61,
        text: 'Given the two values below, which of the following possiblities will print <code>10 foos20 bars</code>? <pre class=\'brush: php; html-script: true\'> &lt;?php  $var1 = "10 foos"; $var2 = "20 bars";  print ???????;  ?&gt; </pre>',
        type: 3,
        answers: ['None of the above', 'implode("", array($var1,$var2));', '$var1 . $var2', '$var1 + $var2', 'All of the above']
    },
    q74: {
        id: 74,
        num: 62,
        text: 'Given the string: <p class="ceresIndent"><code>$var = "john@php.net";</code></p> <p class="ceresIndent">Which of the following will extract the TLD (top level domain) of ".net" from the string?</p>',
        type: 2,
        answers: ['strstr($var, strpos($var, "."));', 'substr($var, strpos($var, "@"));', 'substr($var, strstr($var, "."));', 'substr($var, strpos($var, ".") + 1);', 'substr($var, strpos($var, "."));']
    },
    q75: {
        id: 75,
        num: 63,
        text: 'When comparing two strings, which of the following is acceptable? ',
        type: 3,
        answers: ['$a === $b;', 'strcasecmp($a, $b);', 'strcmp($a, $b);', '$a == $b;', 'str_compare($a,$b);']
    },
    q76: {
        id: 76,
        num: 64,
        text: 'A fingerprint of a string can be determined using which of the following?',
        type: 2,
        answers: ['md5()', 'hash()', 'fingerprint()', 'None of the above']
    },
    q77: {
        id: 77,
        num: 65,
        text: 'Which of the following is the best way to split a string on the "-=-" pattern?',
        type: 2,
        answers: ['They all are equally proper methods', 'str_split($string, strpos($string, "-=-"))', 'preg_split("-=-", $string);', 'explode("-=-" $string);']
    },
    q78: {
        id: 78,
        num: 66,
        text: 'What is the output of the following code? <pre class=\'brush: php; html-script: true\'> &lt;?php   $string = "14302";    $string[$string[2]] = "4";    print $string;   ?&gt; </pre>',
        type: 2,
        answers: ['14304', '14342', '44302', '14402', 'Array']
    },
    q79: {
        id: 79,
        num: 67,
        text: 'Which of the following comparisons will evaluate to <code>true</code>?',
        type: 3,
        answers: ['\'t\' == t', '1 === "1time"', '"top" == 0', '"top" === 0', '1 == "1time"']
    },
    q7: {
        id: 7,
        num: 6,
        text: 'What combination of boolean values for <code>$a</code>, <code>$b</code>, <code>$c</code>, and <code>$d</code> will result in the variable <code>$number</code> being equal to <code>3</code>? <pre class=\'brush: php; html-script: true\'> &lt;?php  $a = null; $b = null; $c = null; $d = null;  if($a &amp;&amp; !$b) {  if(!!$c &amp;&amp; !$d) {  if($d &amp;&amp; ($a || $c)) {  if(!$d &amp;&amp; $b) {  $number = 1;  } else {  $number = 2;  }  } else {  $number = 3;  }  } else {  $number = 4;  } } else {  $number = 5; } ?&gt; </pre>',
        type: 2,
        answers: ['false, true, true, true', 'true, false, true, false', 'true, true, false, false', 'false, true, true, false', 'false, false, true, false']
    },
    q80: {
        id: 80,
        num: 68,
        text: 'Which function is best suited for removing markup tags from a string?',
        type: 2,
        answers: ['strip_markup', 'strip_tags', 'str_replace', 'preg_replace', 'preg_strip']
    },
    q81: {
        id: 81,
        num: 69,
        text: 'Identify the best approach to compare to variables in a binary-safe fashion',
        type: 2,
        answers: ['Both strcmp() and $a === $b', '$a == $b', '$a === $b', 'str_compare()', 'strstr()']
    },
    q82: {
        id: 82,
        num: 70,
        text: 'Consider the following script: <pre class=\'brush: php; html-script: true\'> &lt;?php  $oranges = 10; $apples = 5;  $string = "I have %d apples and %d oranges";  ??????? ?&gt; </pre> What could be placed in place of <code>??????</code> to output the string: <p class="ceresIndent"><code>I have 5 apples and 10 oranges</code></p>',
        type: 3,
        answers: ['str_format($string, $apples, $oranges);', 'print($string, $apples, $oranges);', 'printf($string, $apples, $oranges);', 'print sprintf($apples, $oranges);', 'sprintf($string, $oranges, $apples);']
    },
    q83: {
        id: 83,
        num: 71,
        text: 'Consider the following script: <pre class=\'brush: php; html-script: true\'> &lt;?php  $string = "&lt;b&gt;I like \'PHP\' &amp; I think it is \\"cool\\"&lt;/b&gt;";  var_dump(htmlentities($string, ENT_QUOTES)); var_dump(print htmlspecialchars($string));  ?&gt; </pre> In this script, do the two <code>var_dump()</code> calls produce the same string? Why or Why Not?',
        type: 2,
        answers: ['No, the htmlentities() call will translate quotes while the htmlspecialchars() call will not', 'No, htmlentites() translates &lt; and &gt; symbols to their HTML entity equivalents while htmlspecialchars() only does quotes', 'No, the htmlentites() call won\'t translate quotes to HTML entities while the htmlspecialchars() call will', 'Yes, htmlspecialchars() and htmlentities() with the ENT_QUOTES constants produce the same result']
    },
    q85: {
        id: 85,
        num: 72,
        text: 'Consider the following String: <p class="ceresIndent"><code>$string = "John\tMark Ted\tLarry";</code></p> <p class="ceresIndent">Which of the following functions would best parse the string above by the tab (\t) and newline ( ) characters?</p>',
        type: 2,
        answers: ['strsplit($string, "\t ");', 'strtok($string, "\t ");', 'strstr($string, "\t ");', 'explode("\t ", $string);', 'All of the above']
    },
    q86: {
        id: 86,
        num: 73,
        text: 'Which functions would be needed to translate the following string:  <p class="ceresIndent"><code>I love PHP 5</code></p> <p class="ceresIndent">to the following?</p> <p class="ceresIndent"><code>5 PHP EVOL I</code></p>',
        type: 3,
        answers: ['mirror()', 'strtoupper()', 'toupper()', 'str_reverse()', 'strrev()']
    },
    q87: {
        id: 87,
        num: 74,
        text: 'What is the best approach for converting this string: <p class="ceresIndent"><code>$string = "a=10&amp;b[]=20&amp;c=30&amp;d=40+50";</code></p> <p class="ceresIndent">Into this array?</p> <pre class=\'brush: php; html-script: true\'> array(4) {  ["a"]=&gt;  string(2) "10"  ["b"]=&gt;  array(1) {  [0]=&gt;  string(2) "20"  }  ["c"]=&gt;  string(2) "30"  ["d"]=&gt;  string(5) "40 50" } </pre>',
        type: 2,
        answers: ['Write a parser completely by hand, it\'s the only way to make sure it\'s 100% accurate', 'Use the parse_str() function to translate it to an array()', 'Pass the variable to another PHP script via an HTTP GET request and return the array as a serialized variable', 'Just call unserialize() to translate it to an array()', 'Write a string parser using strtok() and unserialize() to convert it to an array']
    },
    q88: {
        id: 88,
        num: 75,
        text: 'Which string does the following PCRE regular expression match?  <p class="ceresIndent"><code>$regex = "/^([a-z]{5})[1-5]+([a-z]+)/";</code></p>',
        type: 3,
        answers: ['None of the above', 'Hello34262343goodbye', 'frank12345abc', 'hello34212343goodbye', 'abcdefghi12345abc']
    },
    q89: {
        id: 89,
        num: 76,
        text: 'Which PCRE regular expression will match the string <code>PhP5-rocks</code>? ',
        type: 2,
        answers: ['/^[hp1-5]*\-.*/i', '/[hp1-5]*\-.?/', '/[hp][1-5]*\-.*/', '/[PhP]{3}[1-5]{2,3}\-.*$/', '/[a-z1-5\-]*/']
    },
    q8: {
        id: 8,
        num: 7,
        text: 'What is the output of the following code? <pre class=\'brush: php; html-script: true\'> &lt;?php  $string = "111221";  for($i = 0; $i &lt; strlen($string); $i++) {  $current = $string[$i]; $count = 1;  while(isset($string[$i + $count]) &amp;&amp; ($string[$i + $count] == $current)) $count++;  $newstring .= "$count{$current}";  $i += $count-1; }  print $newstring; ?&gt; </pre>',
        type: 2,
        answers: ['312211', '3312212', '11221221', '221131', '3211122']
    },
    q90: {
        id: 90,
        num: 77,
        text: 'Ifregular expressions must be used, in general which type of regularexpression functions available to PHP is preferred for performancereasons?',
        type: 2,
        answers: ['strtok() using regular expressions', 'preg_* regular expression functions', 'parse_str() using regular expressions', 'strregex* regular expression functions', 'ereg* regular expression functions']
    },
    q91: {
        id: 91,
        num: 78,
        text: 'To destroy one variable within a PHP session you should use which method in PHP 5?',
        type: 2,
        answers: ['Unset the variable in $HTTP_SESSION_VARS', 'Use the session_destroy() function', 'Use the session_unset() function', 'unset the variable in $_SESSION using unset()', 'Any of the above are acceptable in PHP 5']
    },
    q92: {
        id: 92,
        num: 79,
        text: 'If you would like to store your session in the database, you would do which of the following?',
        type: 2,
        answers: ['It requires a custom PHP extension to change the session handler', 'Implement the session_set_save_handler() function', 'Create functions for each session handling step and use session_set_save_handler() to override PHP\'s internal settings', 'Configure the session.save_handler INI directive to your session class']
    },
    q93: {
        id: 93,
        num: 80,
        text: 'To destroy a PHP session completely, one must which of the following?',
        type: 3,
        answers: ['Regenerate the session ID using session_regenerate_id()', 'If cookies are used, destroy it', 'Use session_demolish() to completely destroy the session', 'Change the session name using session_name()', 'Destroy the session data using session_destroy()']
    },
    q94: {
        id: 94,
        num: 81,
        text: 'If you would like to change the session ID generation function, which of the following is the best approach for PHP 5?',
        type: 2,
        answers: ['Set the session.hash_function INI configuration directive', 'Use the session_set_id_generator() function', 'Set the session id by force using the session_id() function', 'Use the session_regenerate_id() function', 'Implement a custom session handler']
    },
    q95: {
        id: 95,
        num: 82,
        text: 'Consider the following HTML fragement: <pre class=\'brush: php; html-script: true\'> &lt;select name="?????" multiple&gt; &lt;option value="1"&gt;Item #1&lt;/option&gt; &lt;!-- ... more options ... --&gt; &lt;/select&gt; </pre> Which of the following <code>name</code> attributes should be used to capture all of the data from the user in PHP?',
        type: 2,
        answers: ['myselectbox=array()', 'myselectbox[]', 'myselectbox[\'multiple\']', 'myselectbox{\'multiple\'}', 'myselectbox']
    },
    q97: {
        id: 97,
        num: 83,
        text: 'When uploading a file using HTTP, which variable can be used to locate the file on PHP\'s local filesystem?',
        type: 2,
        answers: ['None of the above', '$_FILES[\'fieldname\'][\'tmp_name\']', '$_FILES[\'fieldname\']', '$_FILES[\'fieldname\'][0][\'filename\']', '$_FILES[\'fieldname\'][\'filename\']']
    },
    q99: {
        id: 99,
        num: 84,
        text: 'To force a user to redirect to a new URL from within a PHP 5 script, which of the following should be used?',
        type: 2,
        answers: ['Send a HTTP "Location:" header', 'Use the HTML &lt;redirect&gt; Tag', 'Send a HTTP "Forward:" header', 'Use the redirect() function']
    },
    q1001: {
        id: 1001,
        num: 173,
        text: ' In a databased that does not support the AUTO_INCREMENT modifier, you must use a ____ instead to auto-generate a numeric incrementing key  ',
        type: 2,
        answers: ['0, 5  ', '0, 4  ', 'An error  ', '0,1  ', '4,1  ', '$library->addChild(new SimpleXMLElement("title", "Best book ever"))  ', '$library->children()->add("title", "Best book ever")  ', '$library->xpath(new SimpleXMLElement("title", "Best book ever"))  ', '$library->addChild("title", "Best book ever")  ', '$library->addBook("title", "Best book ever")  ', '9  ', '16  ', '17  ', '1  ', '32  ']
    },
    q1104: {
        id: 1104,
        num: 178,
        text: '  Which of the following is a valid way to pass the $callback parameter expected by array_walk()? (choose three)  ',
        type: 2,
        answers: ['An anonymous function  ', 'An array containing the name of the function as the first element, and an array of arguments as the second element  ', 'An instantiated object followed by the object operator and the method to call  ', 'An array containing an instantiated object as the first element, and the method name as the second element  ', 'A string containing the function name  ', 'An array containing the function name as the first element  ']
    },
    q1105: {
        id: 1105,
        num: 179,
        text: '  How would you parse a web page at http://example.com/page.php as XML?  ',
        type: 2,
        answers: ['You can\'t; it must be well-formed XML.  ', 'DOMDocument::loadFile(\'http://example.com/page.php\');  ', 'simple_xml_load_html(\'http://example.com/page.php\');  ', 'new SimpleXMLElement(file_get_contents(\'http://example.com/page.php\'));  ', 'DOMDocument::loadHTML(file_get_contents(\'http://example.com/page.php\'));  ']
    },
    q1106: {
        id: 1106,
        num: 180,
        text: '  How many parameters does array_merge() accept?  ',
        type: 2,
        answers: ['As many as you want  ', '3  ', '2  ', '1  ', '0  ']
    },
    q1107: {
        id: 1107,
        num: 181,
        text: '  What would you expect to get from PDOStatement::fetch() in its default mode?  ',
        type: 2,
        answers: ['Both an object and an array  ', 'An array containing both associative and enumerated keys  ', 'An associative array  ', 'An enumerated array  ', 'An error, you must pass in the fetch mode  ']
    },
    q1108: {
        id: 1108,
        num: 182,
        text: '  What is the output of the following code?  <pre class="brush: php">  &lt;?php  $pattern = \'/[a-z]{4} /\';  $string = \'Mary had a little lamb\';  $matches = preg_match($pattern, $string);  print_r($matches);  ?&gt;  </pre>   ',
        type: 1,
        answers: []
    },
    q1109: {
        id: 1109,
        num: 183,
        text: '  What is PDO::query() equivalent to?  ',
        type: 2,
        answers: ['execute(), fetch()  ', 'prepare(), fetch(), execute()  ', 'prepare(), fetch()  ', 'exec(), fetch()  ', 'prepare(), execute()  ']
    },
    q1110: {
        id: 1110,
        num: 184,
        text: '  Which HTTP status code asks a user to provide credentials?  ',
        type: 2,
        answers: ['404  ', '204  ', '401  ', '200  ', '302  ']
    },
    q1111: {
        id: 1111,
        num: 185,
        text: '  What would be in $matches[0] after running the following code?  <pre class="brush: php">  &lt;?php  $pattern = \'# \w*?[aeiou]{2}\w*? #\';  $string = "There\'s a moose loose about this house";  $matches = array();  preg_match_all($pattern, $string, $matches);  ?&gt;  </pre>   ',
        type: 2,
        answers: ['"There\'s a moose loose about this house"  ', 'An array containing " moose " and " about "  ', '"moose "  ', 'An array containing " moose ", " loose ", " about " and " house "  ', 'An array containing " moose " and " loose "  ']
    },
    q1112: {
        id: 1112,
        num: 186,
        text: '  What would be the output of this script?  <pre class="brush: php">  &lt;?php  ob_start();  echo "dreaming";  $ob = ob_get_contents();  echo strlen($ob);  ob_flush();  ?&gt;  </pre>   ',
        type: 1,
        answers: []
    },
    q1113: {
        id: 1113,
        num: 187,
        text: '  What does status code 403 indicate?  ',
        type: 2,
        answers: ['Forbidden  ', 'Resource not found  ', 'Not modified  ', '403 is not a valid status code  ', 'Moved permanently  ']
    },
    q1114: {
        id: 1114,
        num: 188,
        text: '  What is the output of the following code?  <pre class="brush: php">  &lt;?php  $a = "a, b,c, d, e f, g";  $b = array_merge(explode(\', \', $a), array("a", "b"));  echo count($b);  ?&gt;  </pre>   ',
        type: 2,
        answers: ['9  ', '7  ', '5  ', '3  ', 'An error, because $a is not an array  ']
    },
    q1115: {
        id: 1115,
        num: 189,
        text: '  What is the output of this line of code?  <pre class="brush: php">  &lt;?php  echo 8 + 0x8 + 80 + 0x80;  ?&gt;  </pre>   ',
        type: 2,
        answers: ['156  ', '88  ', '224  ', '72  ', '96  ']
    },
    q1116: {
        id: 1116,
        num: 190,
        text: '  Which of the following functions would be a valid way to create an array containing items from three existing arrays?  ',
        type: 2,
        answers: ['array_merge()  ', 'array_combine()  ', 'array_splice()  ', 'array_keys()  ', 'array_intersect()  ']
    },
    q1117: {
        id: 1117,
        num: 191,
        text: '  What is the output of the following line of code?  <pre class="brush: php">  &lt;?php  echo "4" + 05 + 011 + ord(\'a\');  ?&gt;  </pre>   ',
        type: 2,
        answers: ['An error  ', '18  ', '117  ', '115  ', '14  ']
    },
    q1118: {
        id: 1118,
        num: 192,
        text: '  What is the output of the following?  <pre class="brush: php">  &lt;?php  $a = 7;  $b = 4;  function b($a, $b) {  global $a, $b;  $a += 7;  $a++;  $b += $a;  return true;  }  echo $b, $a;  ?&gt;  </pre>   ',
        type: 2,
        answers: ['1419  ', '74  ', '1519  ', '1915  ', '47  ']
    },
    q1119: {
        id: 1119,
        num: 193,
        text: '  Which of the following are configuration settings for PHP? (choose two)  ',
        type: 2,
        answers: ['url_fopen_allow  ', 'url_include_allow  ', 'allow_open_url  ', 'allow_url_include  ', 'include_fopen_dir  ', 'open_url_dir  ', 'open_basedir  ']
    },
    q1120: {
        id: 1120,
        num: 194,
        text: '  Is the following valid PHP code?  <pre class="brush: php">  &lt;php&gt;  echo \'There\'s a worm in my apple\';  &lt;/php&gt;  </pre>   ',
        type: 2,
        answers: ['Yes  ', 'No  ']
    },
    q1121: {
        id: 1121,
        num: 195,
        text: '  What is the output of:  <pre class="brush: php">  &lt;?php  $a = "0";  echo strlen($a);  echo empty($a) ? $a : 5;  echo $a ?: 5;  ?&gt;  </pre>   ',
        type: 2,
        answers: ['105  ', '100  ', '050  ', '005  ', '150  ']
    },
    q1122: {
        id: 1122,
        num: 196,
        text: '  What would happen when the following code was run?  <pre class="brush: php">  &lt;?php  define(\'Tree\', \'oak\');  echo \'This tree is: \' . tree;  ?&gt;  </pre>   ',
        type: 2,
        answers: ['A notice  ', 'This tree is: oak (and a notice)  ', 'An error  ', 'This tree is: tree (and a notice)  ', 'This tree is: (and a notice)  ']
    },
    q1123: {
        id: 1123,
        num: 197,
        text: '  Which of the following are valid constant names? (Choose three)  ',
        type: 2,
        answers: ['R7yu  ', '9tur8UH4  ', '8rutil  ', 'AEN  ', '111  ', 'ablwesc_99  ', 'YU-8  ']
    },
    q1124: {
        id: 1124,
        num: 198,
        text: '  What is the output of the following code?  <pre class="brush: php">  &lt;?php  $a = 42 & 05 + 17;  echo $a;  ?&gt;  </pre>   ',
        type: 2,
        answers: ['17  ', '0  ', '2  ', '64  ', '10  ']
    },
    q1125: {
        id: 1125,
        num: 199,
        text: '  What will the output of the following code be?  <pre class="brush: php">  &lt;?php  $a = range(3,9);  foreach ($a as $b) {  switch($b) {  case 3:  $b = 7;  case 7:  $b = 3;  default: // do nothing  }  }  echo implode(\'-\',$a);  ?&gt;  </pre>   ',
        type: 2,
        answers: ['7-4-5-6-7-8-9  ', '3-4-5-6-7-8-9-10-11  ', '3-4-5-6-7-8-9  ', '7-4-5-6-3-8-9  ', '7-4-5-6-3-8-9-10-11  ']
    },
    q1126: {
        id: 1126,
        num: 200,
        text: '  What is the output of:  <pre class="brush: php">  &lt;?php  $a = 10;  echo strlen($a) . count($a);  do {  echo $a . "elephpant ";  $a++;  } while($a <= 1);  ?&gt;  </pre>   ',
        type: 2,
        answers: ['2110elephpant  ', '12  ', '1210elephpant  ', '21  ', '10elephpant  ']
    },
    q1127: {
        id: 1127,
        num: 201,
        text: '  What is the output of this code:  <pre class="brush: php">  &lt;?php  function c($a, $b = 1, $c) {  return array($c, $a, $b);  }  list($a, $b, $c) = c(0,0,0);  echo $b;  ?&gt;  </pre>   ',
        type: 1,
        answers: []
    },
    q1128: {
        id: 1128,
        num: 202,
        text: '  What is the output of the following code:  <pre class="brush: php">  &lt;?php  function a($a) {  echo $a . "&";  }  function b($a) {  echo "-" . $a;  }  $a = "!";  $b = &$a;  echo a(b($b));  ?&gt;  </pre>   ',
        type: 2,
        answers: ['-!!&  ', '!&-&  ', '-&!  ', '!&-!  ', '-!&  ']
    },
    q1129: {
        id: 1129,
        num: 203,
        text: '  Which of the following are superglobals in PHP? (choose three)  ',
        type: 2,
        answers: ['$_FORMS  ', '$_COOKIE  ', '$_COOKIES  ', '$_REQUEST  ', '$_DATA  ', '$_ENVIRONMENT  ', '$_SERVER  ', '$_GLOBAL  ']
    },
    q1130: {
        id: 1130,
        num: 204,
        text: '  Which of the following statements are true when applied to a Registry pattern? (choose two)  ',
        type: 2,
        answers: ['Only one instance of the class can exist  ', 'It implements ArrayAccess  ', 'It is designed to store values of various types  ', 'It uses static methods  ', 'It takes responsibility for instantiating objects  ']
    },
    q1131: {
        id: 1131,
        num: 205,
        text: '  Is this statement true or false? "Methods declared as static must be called statically"  ',
        type: 2,
        answers: ['True  ', 'False  ']
    },
    q1132: {
        id: 1132,
        num: 206,
        text: '  What is the output of this code?  <pre class="brush: php">  &lt;?php  $wish_list = array(1 => "Romeo and Juliet",  4 => "Bad Science",  2 => "To Kill A Mockingbird");  print_r(sort($wish_list));  ?&gt;  </pre>   ',
        type: 2,
        answers: ['Array ( [1] => Romeo and Juliet [4] => Bad Science [2] => To Kill A Mockingbird )  ', 'Array ( [1] => Romeo and Juliet [2] => To Kill A Mockingbird [4] => Bad Science )  ', '1  ', 'Array ( [0] => Bad Science [1] => Romeo and Juliet [2] => To Kill A Mockingbird )  ', '3  ']
    },
    q1133: {
        id: 1133,
        num: 207,
        text: '  ArrayAccess is an example of a:  ',
        type: 2,
        answers: ['design pattern  ', 'interface  ', 'object  ', 'class  ']
    },
    q1134: {
        id: 1134,
        num: 208,
        text: '  Using the notation self::$property refers to:  ',
        type: 2,
        answers: ['A property of the current object  ', 'The $property of the current object  ', 'The class constant $property in this class  ', 'The class property $property in this class  ', 'A variable called $property in this class or any parent class.  ']
    },
    q1135: {
        id: 1135,
        num: 209,
        text: '  Which of the following is a valid namespace operator in PHP?  ',
        type: 2,
        answers: ['\  ', '::  ', '@  ', '/  ', '->  ']
    },
    q1136: {
        id: 1136,
        num: 210,
        text: '  What is the output of the following code?  <pre class="brush: php">  &lt;?php  $x = 1;  function print_conditional() {  static $x;  if($x++ == 1)  echo "many";  echo "good";  echo "things";  return $x;  }  print_conditional();  $x++;  print_conditional();  ?&gt;  </pre>   ',
        type: 2,
        answers: ['manygoodthingsmanygoodthings  ', 'manygoodthings  ', 'goodthingsgoodthings  ', 'goodthingsmanygoodthings  ', 'there is no output  ']
    },
    q1137: {
        id: 1137,
        num: 211,
        text: '  What does the html_errors configuration directive do?  ',
        type: 2,
        answers: ['Enable reporting of invalid HTML output  ', 'Show PHP errors on webpages  ', 'html_errors is not a valid configuration directive  ', 'Apply HTML formatting to PHP errors  ', 'Suppress browser errors  ']
    },
    q1138: {
        id: 1138,
        num: 212,
        text: '  What is the output of the following code?  <pre class="brush: php">  &lt;?php  $a = 1;  function calculate() {  global $a;  $a += 7;  $a = $a * 043;  return --$a;  }  echo $a;  ?&gt;  </pre>   ',
        type: 2,
        answers: ['342  ', '279  ', '0  ', '343  ', '1  ']
    },
    q1139: {
        id: 1139,
        num: 213,
        text: '  What is the output of the following code?  <pre class="brush: php">  &lt;?php  function format(&$item) {  $item = strtoupper($item) . \'.\';  return $item;  }  $shopping = array("fish", "bread", "eggs", "jelly", "apples");  array_walk($shopping, "format");  $shopping = sort($shopping);  echo $shopping[1];  ?&gt;  </pre>   ',
        type: 2,
        answers: ['"APPLES."  ', '"apples"  ', '"BREAD."  ', 'nothing (no output)  ', '"fish"  ']
    },
    q1140: {
        id: 1140,
        num: 214,
        text: '  What is the output of the following code?  <pre class="brush: php">  &lt;?php  class Content {  public function publish() {  $this->published = true;  $this->article();  return true;  }  protected function article() {  echo "<i>Article:</i>";  }  }  class Article extends Content {  public function article() {  echo "<i>Post:</i>";  }  }  $post = new Article();  echo $post->publish();  ?&gt;  </pre>   ',
        type: 2,
        answers: ['<i>Post:</i>  ', 'an Error  ', '<i>Post:</i><i>Post:</i>1  ', '<i>Article:</i>  ', '<i>Post:</i><i>Article:</i>1  ']
    },
    q1141: {
        id: 1141,
        num: 215,
        text: '  Given the following code:  <pre class="brush: php">  &lt;?php  Interface Verifiable {  public function verify();  }  Class Cheque {  public function verify() { // interesting stuff happens  return true;  }  }  Class CurrencyCheque extends Cheque implements Verifiable {  }  ?&gt;  </pre>   What happens when we instantiate a CurrencyCheque object?  ',
        type: 2,
        answers: ['An warning because the interface isn\'t implemented  ', 'A new CurrencyCheque object is created  ', 'The method must be redefined in CurrencyCheque  ', 'An error that the interface must be defined in the parent object  ', 'A fatal error  ']
    },
    q1142: {
        id: 1142,
        num: 216,
        text: '  What is the output of the following code?  <pre class="brush: php">  &lt;?php  if(strcmp("hi", "HI")) echo "hello";  elseif(strcasecmp("hi","HI")) echo "world";  else throw new Exception("HI");  ?&gt;  </pre>   ',
        type: 2,
        answers: ['"world"  ', 'an Exception  ', 'nothing (no output)  ', '"hello"  ', 'an error  ']
    },
    q1143: {
        id: 1143,
        num: 217,
        text: '  How can you recover the original information from this string?  <pre class="brush: php">  &lt;?php  a:4:{i:2;s:3:"foo";i:3;s:4:"spot";i:4;s:6:"stripe";s:3:"bar";i:64;}  ?&gt;  </pre>   ',
        type: 2,
        answers: ['using json_decode()  ', 'using the mcrypt extension  ', 'using unserialize()  ', 'using a database library  ', 'you can\'t – this is a custom format  ']
    },
    q1144: {
        id: 1144,
        num: 218,
        text: '  Which of the following are true (choose three)?  ',
        type: 2,
        answers: ['Anonymous functions can accept variables passed into them at call time  ', 'Anonymous functions cannot be called recursively  ', 'Closures are a kind of anonymous function  ', 'Anonymous functions can have function names  ', 'It is possible to return multiple values from an anonymous function  ', 'Closures can have variable values "baked" in at declare time  ', 'Anonymous functions are always created in the global scope  ']
    },
    q1145: {
        id: 1145,
        num: 219,
        text: '  What is the output of the following?  <pre class="brush: php">  &lt;?php  echo chr((ord(\'a\') + ord(\'A\'))/2);  ?&gt;  </pre>   ',
        type: 1,
        answers: []
    },
    q1146: {
        id: 1146,
        num: 220,
        text: '  How would you efficiently extract data from a csv file which is several gigabytes in size?  ',
        type: 2,
        answers: ['Use a custom stream wrapper  ', 'file_get_contents() and explode()  ', 'fopen() and fgetcsv()  ', 'file() and explode()  ', 'fopen(), fgets() and explode()  ']
    },
    q1147: {
        id: 1147,
        num: 221,
        text: '  Which of the following would you use to validate incoming data from a web form? (choose three)  ',
        type: 2,
        answers: ['filter_* functions  ', 'stripslashes()  ', 'htmlspecialchars()  ', 'database escape functions  ', 'ctype_* functions  ', 'strip_tags()  ', 'preg_* functions  ', 'url_decode()  ']
    },
    q1148: {
        id: 1148,
        num: 222,
        text: '  Which of the following php configuration directives were deprecated in PHP 5.3 (tick as many as apply)?  ',
        type: 2,
        answers: ['y2k_compliance  ', 'safe_mode  ', 'disable_functions  ', 'register_globals  ', 'gpc_order  ', 'max_file_uploads  ', 'register_syslog  ', 'register_long_arrays  ']
    },
    q1149: {
        id: 1149,
        num: 223,
        text: '  What is the output of the following?  <pre class="brush: php">  &lt;?php  $a = 0xf2 + 0x09;  $b = $a >> 3;  echo $b;  ?&gt;  </pre>   ',
        type: 2,
        answers: ['31  ', '0  ', '27  ', '7  ', '16  ']
    },
    q1150: {
        id: 1150,
        num: 224,
        text: '  Which of the following would allow you to send a POST request to a remote resource via file_get_contents()?  ',
        type: 2,
        answers: ['You can\'t, use the curl extension or an equivalent  ', 'stream_context(array("method" => "POST"));  ', 'array("method"=>"post");  ', 'stream_context_create("http_method" => "POST"));  ', 'stream_context_create(array("http" => array("method" => "POST")));  ']
    },
    q1151: {
        id: 1151,
        num: 225,
        text: '  Which function would you use to re-order an array by its keys?  ',
        type: 1,
        answers: []
    },
    q1152: {
        id: 1152,
        num: 226,
        text: '  What does the chr() function do?  ',
        type: 2,
        answers: ['Returns the ascii code of the given character  ', 'Returns the ascii codes for all characters in the string as an array  ', 'Returns the character at a given offset  ', 'Returns the character for a given ascii code  ', 'Returns the number of characters in the string  ']
    },
    q1153: {
        id: 1153,
        num: 227,
        text: '  Given this code sample:  <pre class="brush: php">  &lt;?php  interface A {}  class C {}  class B extends C {}  class E extends C implements A {}  class D extends E{}  $b = new B();  $e = new E();  $c = new C();  $a = new B();  $d = new D();  Which of the following statements are true? (choose 4)  ?&gt;  </pre>   ',
        type: 2,
        answers: ['$c instanceof B  ', '$d instanceof A  ', '$d instanceof C  ', '$e instanceof B  ', '$e instanceof A  ', '$c instanceof C  ', '$a instanceof E  ']
    },
    q1154: {
        id: 1154,
        num: 228,
        text: '  Which of the following session save handlers are available by default in PHP? (choose 3)  ',
        type: 2,
        answers: ['redis  ', 'postgresql  ', 'files  ', 'memcache  ', 'AWS  ', 'foxpro  ', 'sqlite  ']
    },
    q1155: {
        id: 1155,
        num: 229,
        text: '  The Active Record design pattern is used for which of the following?  ',
        type: 2,
        answers: ['Creating audit trails of all file changes  ', 'Easily storing and retrieving objects in the database  ', 'Integrating PHP and Ruby on Rails projects  ', 'Separating business and presentation logic within a system  ', 'Managing output handlers  ']
    },
    q1156: {
        id: 1156,
        num: 230,
        text: '  With a single existing cookie set for this domain with the key "theme" and the value "green", what does the following code output?  <pre class="brush: php">  &lt;?php  print_r($_COOKIE);  setcookie(\'theme\', NULL, time() - 3600);  print_r($_COOKIE);  unset($_COOKIE);  print_r($_COOKIE);  ?&gt;  </pre>   ',
        type: 2,
        answers: ['an error  ', 'Array ( [theme] => green )  ', 'Array ( [theme] => green ) Array ( [theme] => green )  ', 'Array ( [theme] => green ) Array ( [theme] => green ) Array ( [theme] => green )  ', 'nothing  ']
    },
    q1157: {
        id: 1157,
        num: 231,
        text: '  What does the following code output?  <pre class="brush: php">  &lt;?php  $i = function ($j) {  $i = $j + 4;  $i++;  return $i;  };  $j = 6;  echo $i($j);  ?&gt;  </pre>   ',
        type: 2,
        answers: ['10  ', 'syntax error  ', 'nothing  ', '11  ', '6  ']
    },
    q1158: {
        id: 1158,
        num: 232,
        text: '  What is the output of the following code?  <pre class="brush: php">  &lt;?php  function swings(&$park) {  $park++;  $park = roundabout($park);  }  function roundabout($park) {  $park *= 2;  }  $park = 17;  echo swings($park);  ?&gt;  </pre>   ',
        type: 2,
        answers: ['19  ', '37  ', '36  ', '74  ', 'nothing  ']
    },
    q1159: {
        id: 1159,
        num: 233,
        text: '  What is the output of the following code?  <pre class="brush: php">  &lt;?php  $x = 1;  function print_conditional($x) {  if($x++ == 1)  echo "none";  echo "one";  echo "none";  return $x;  }  print_conditional($x);  $x++;  print_conditional($x);  ?&gt;  </pre>   ',
        type: 2,
        answers: ['onenone  ', 'noneonenoneonenone  ', 'nonenoneonenone  ', 'onenoneonenoneonenone  ', 'noneonenone  ']
    },
    q1160: {
        id: 1160,
        num: 234,
        text: '  Which object method is automatically called when an object is cloned?  ',
        type: 2,
        answers: ['__copy()  ', '__wakeup()  ', '__drone()  ', '__clone()  ', '__call()  ']
    },
    q1161: {
        id: 1161,
        num: 235,
        text: '  What is the output of the following code?  <pre class="brush: php">  &lt;?php  $g = range(5,8);  $h = array("a", "b", "c", "e");  for($i = 0; $i < count($g); $i++) {  foreach ($h as $j) {  echo $i.$j;  break;  }  }  ?&gt;  </pre>   ',
        type: 2,
        answers: ['0a1a2a3a  ', '5a6a7a8a  ', '0a0b0c0e  ', '0a0b0c0e1a1b1c1e2a2b2c2e3a3b3c3e  ', '5a5b5c5e6a6b6c6e7a7b7c7e8a8b8c8e  ']
    },
    q1162: {
        id: 1162,
        num: 236,
        text: '  What is the output of the following code?  <pre class="brush: php">  &lt;?php  $s = "This sentence contains many words";  $r = explode(\' \', ucfirst($s));  sort($r);  echo implode(\',\', $r);  ?&gt;  </pre>   ',
        type: 2,
        answers: ['This Sentence Contains Many Words  ', 'This,contains,many,sentence,words  ', 'This,Sentence,Contains,Many,Words  ', 'This contains many sentence words  ', 'This Contains Many Sentence Words  ']
    },
    q1163: {
        id: 1163,
        num: 237,
        text: '  Given a class called SoapFunctions and a working WSDL for the methods in that class, what needs to be added to the code below to serve those methods over SOAP?  <pre class="brush: php">  &lt;?php  require("SoapFunctions.php");  $s = new SoapServer($wsdl);  $s->handle();  ?&gt;  </pre>   ',
        type: 2,
        answers: ['$s->setHandler("SoapFunctions");  ', 'set_soap_class($s, "SoapFunctions");  ', 'set_soap_handler($s, "SoapFunctions");  ', '$s->setClass("SoapFunctions");  ', 'nothing to add, the code above would work  ']
    },
    q1164: {
        id: 1164,
        num: 238,
        text: '  Which of the following is a magic method in PHP 5.3? (choose three)  ',
        type: 2,
        answers: ['__walk()  ', '__sleep()  ', '__return()  ', '__call()  ', '__function()  ', '__add()  ', '__set()  ']
    },
    q1165: {
        id: 1165,
        num: 239,
        text: '  Which function would transform the string "excellent PHP functions" into the string "Excellent PHP Functions"?  ',
        type: 1,
        answers: []
    },
    q1166: {
        id: 1166,
        num: 240,
        text: '  Which of the following would offer protection against an SQL injection attack? (choose two)  ',
        type: 2,
        answers: ['mysql_real_escape_string()  ', 'mysql_true_escape_string()  ', 'addslashes()  ', 'using PDO and prepared statements  ', 'htmlspecialchars()  ', 'strip_tags()  ']
    },
    q1167: {
        id: 1167,
        num: 241,
        text: '  What is the output of the following code?  <pre class="brush: php">  &lt;?php  class M {  public function identify() {  echo self::myName();  }  public function myName() {  return "Mike";  }  }  class N extends M {  public function myName() {  return "November";  }  }  function m(N $n) {  $n->identify();  }  $m = new N();  m($m);  ?&gt;  </pre>   ',
        type: 2,
        answers: ['Fatal error  ', 'Catchable fatal error  ', 'Mike  ', 'November  ', 'Syntax error  ']
    },
    q1168: {
        id: 1168,
        num: 242,
        text: '  What is the output of the following code?  <pre class="brush: php">  &lt;?php  $a = "Apple";  echo <<<\'A\' pass me that $a A; ?&gt; </pre>   ',
        type: 2,
        answers: ['syntax error ', '"pass me that Apple" ', '"pass me that apple" ', 'fatal error ', 'pass me that $a ']
    }
};

