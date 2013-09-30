/*
    TYPE:
    1 = Open Question
    2 = Single answer
    3 = multiple choice

    CATEGORY:
    0 = PHP Basics
    1 = Web Features
    2 = Object Oriented Programming
    3 = Security
    4 = Data Format & Types
    5 = Input/Output
    6 = Strings & Patterns
    7 = Databases
    8 = Arrays
    9 = PHP4 vs PHP5 (deprecated for PHP 5.3 certification, DO NOT USE FOR TESTS)
*/
var index = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243];

var questionsDataBase = {
    q1: {
        id: 1,
        text: 'Which of the following tags are an acceptable way to begin a PHP Code block?',
        type: 3,
        category: 0,
        answer: {
            options: ['&lt;SCRIPT LANGUAGE="php"&gt;', '&lt;!', '&lt;%', '&lt;?php', '&lt;?'],
            correct: [1, 3, 4, 5],
            link: ["http://php.net/manual/en/language.basic-syntax.phpmode.php"],
            explanation: []
        }
    },
    q2: {
        id: 2,
        text: 'Which of the following are valid PHP variables?',
        type: 3,
        category: 0,
        answer: {
            options: ['@$foo', '&amp;$variable', '${0x0}', '$variable', '$0x0'],
            correct: [1, 2, 3, 4],
            link: ["http://php.net/manual/en/language.variables.php"],
            explanation: ["@$foo is a valid $foo variable with the @ error control operator attached to it. \n&amp;$variable is a valid $variable variable with the & reference operator attached to it. \n${0x0} uses a valid curly braces syntax, anything inside the braces will be interpolated. So 0x0 will be interpolated to 0 and stored as a variable with the name 0."]
        }
    },
    q3: {
        id: 3,
        text: 'What is the best way to iterate and modify every element of an array using PHP 5?',
        type: 2,
        category: 8,
        answer: {
            options: ['You cannot modify an array during iteration', 'for($i = 0; $i &lt; count($array); $i++) { /* ... */ }', 'foreach($array as $key =&gt; &amp;$val) { /* ... */ }', 'foreach($array as $key =&gt; $val) { /* ... */ }', 'while(list($key, $val) = each($array)) { /* ... */'],
            correct: [3],
            link: ["http://php.net/manual/en/control-structures.foreach.php"],
            explanation: ["As stated in PHP manual (see link): \"In order to be able to directly modify array elements within the loop precede $value with &. In that case the value will be assigned by reference.\""]
        }
    },
    q4: {
        id: 4,
        text: 'What is the output of the following PHP code? <pre class=\'brush: php; html-script: true\'>&lt;?phpdefine(\'FOO\', 10);$array = array(10 =&gt; FOO, "FOO" =&gt; 20);print $array[$array[FOO]] * $array["FOO"];?&gt;</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['FOO', '100', '200', '20', '10'],
            correct: [3],
            link: ["http://www.php.net/manual/en/function.define.php", "http://php.net/manual/en/language.constants.php"],
            explanation: ["Another tricky question. \n$array[\"FOO\"] = 20, but $array[FOO] = 10, because FOO has been defined as a constant."]
        }
    },
    q5: {
        id: 5,
        text: 'What is the output of the following PHP script? <pre class=\'brush: php; html-script: true\'>&lt;?php$a = 1;$b = 2.5;$c = 0xFF;$d = $b + $c;$e = $d * $b;$f = ($d + $e) % $a;print ($f + $e);?&gt;</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['643.75', '432', '643', '257', '432.75'],
            correct: [1],
            link: ["http://en.wikipedia.org/wiki/Hexadecimal", "http://www.php.net/manual/en/language.operators.arithmetic.php"],
            explanation: ["0xFF is the hexadecimal notation for 255 \n The operator % is the modulus, but it only takes into account the integer part of the number, so 643.75 % 1 = 0"]
        }
    },
    q6: {
        id: 6,
        text: 'What combination of boolean values for <code>$a</code>, <code>$b</code>, <code>$c</code>, and <code>$d</code> will result in the variable <code>$number</code> being equal to <code>3</code>? <pre class=\'brush: php; html-script: true\'>&lt;?php$a = null;$b = null;$c = null;$d = null;if($a &amp;&amp; !$b) { if(!!$c &amp;&amp; !$d) { if($d &amp;&amp; ($a || $c)) { if(!$d &amp;&amp; $b) { $number = 1; } else { $number = 2; } } else { $number = 3; } } else { $number = 4; }} else { $number = 5;}?&gt;</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['false, true, true, true', 'true, false, true, false', 'true, true, false, false', 'false, true, true, false', 'false, false, true, false'],
            correct: [2],
            link: ["http://www.php.net/manual/en/language.operators.logical.php"],
            explanation: ["Fastest way to answer this question is to take a look at the first condition ($a &amp;&amp; !$b), so $a have to be TRUE and $b have to be FALSE. Only one answer provides this combination."]
        }
    },
    q7: {
        id: 7,
        text: 'What is the output of the following code? <pre class=\'brush: php; html-script: true\'>&lt;?php$string = "111221";for($i = 0; $i &lt; strlen($string); $i++) {$current = $string[$i];$count = 1;while(isset($string[$i + $count]) &amp;&amp; ($string[$i + $count] == $current)) $count++;$newstring .= "$count{$current}";$i += $count-1;}print $newstring;?&gt;</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['312211', '3312212', '11221221', '221131', '3211122'],
            correct: [1],
            link: ["http://stackoverflow.com/questions/2596837/curly-braces-in-string-in-php", "http://php.net/manual/en/language.types.string.php"],
            explanation: ["The only difficult part in this script are the curly braces. Anything inside of it will be evaluated individually."]
        }
    },
    q8: {
        id: 8,
        text: 'What is the best way to ensure that a user-defined function is always passed an object as its single parameter?',
        type: 2,
        category: 0,
        answer: {
            options: ['function myfunction(stdClass $a)', 'function myfunciton($a = stdClass)', 'Use is_object() within the function', 'There is no way to ensure the parameter will be an object', 'function myfunction(Object $a)'],
            correct: [1],
            link: ["http://php.net/manual/en/language.oop5.typehinting.php"],
            explanation: ["Check the type hinting section in php manual. The correct answer is 1 because the stdClass is the base class, 5 is not correct because you cant define an user-created object as the parameter."]
        }
    },
    q9: {
        id: 9,
        text: 'What does the following function do, when passed two integer values for <code>$p</code> and <code>$q</code>? <pre class=\'brush: php; html-script: true\'>&lt;?phpfunction magic($p, $q) { return ($q == 0) ? $p : magic($q, $p % $q);}?&gt;</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['Loops infinitely', 'Switches the values of $p and $q', 'Determines if they are both even or odd', 'Determines the greatest common divisor between them', 'Calculates the modulus between the two'],
            correct: [4],
            link: ["http://en.wikipedia.org/wiki/Euclidean_algorithm", "http://php.net/manual/en/language.operators.comparison.php"],
            explanation: ["A simple implementation of the Euclidian algorithm. \nIf you are wondering what the \"?\" does, it's the ternary operator (search it in the provided link to the PHP manual)"]
        }
    },
    q10: {
        id: 10,
        text: 'The <code>____</code> operator is used to test if two values are identical in every way.',
        type: 2,
        category: 0,
        answer: {
            options: ['!==', 'instanceof', '=', '==', '==='],
            correct: [5],
            link: ["http://www.php.net/manual/en/language.operators.comparison.php"],
            explanation: []
        }
    },
    q11: {
        id: 11,
        text: 'What would go in place of <code>??????</code> below to make this script execute without a fatal error? <pre class=\'brush: php; html-script: true\'>&lt;?php$a = 1;$b = 0;??????$c = $a / $b;?&gt;</pre>',
        type: 3,
        category: 0,
        answer: {
            options: ['quit();', 'die();', 'stop();', '__halt_compiler();', 'exit();'],
            correct: [2, 4, 5],
            link: ["http://www.php.net/manual/en/function.die.php", "http://php.net/manual/en/function.halt-compiler.php", "http://www.php.net/manual/en/function.exit.php"],
            explanation: ["die() and exit() terminates the execution, __halt_compiler() halts the execution of the compiler."]
        }
    },
    q12: {
        id: 12,
        text: 'What is the output of the following? <pre class=\'brush: php; html-script: true\'>&lt;?php$a = 010;$b = 0xA;$c = 2;print $a + $b + $c;?&gt;</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['20', '22', '18', '$a is an invalid value', '2'],
            correct: [1],
            link: ["http://en.wikipedia.org/wiki/Octal", "http://en.wikipedia.org/wiki/Hexadecimal"],
            explanation: ["$a is a number with octal notation, so $a = 010 = 8; \n$b is a number with hexadecimal notation, so $b = 0xA = 10; \nCheck the PHP manual for different notations."]
        }
    },
    q13: {
        id: 13,
        text: 'What is the output of the following? <pre class=\'brush: php; html-script: true\'>&lt;?php$a = 20;function myfunction($b) {$a = 30;global $a, $c;return $c = ($b + $a);}print myfunction(40) + $c;?&gt;</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['120', 'Syntax Error', '60', '70'],
            correct: [1],
            link: ["http://php.net/manual/en/language.variables.scope.php"],
            explanation: ["The variable $a equals to 20 because the by nature of it being defined outside the function it IS a global variable. \nThe global declaration within the function tells the function to use the global value, rather than the local value of 30."]
        }
    },
    q14: {
        id: 14,
        text: 'What would you replace <code>???????</code> with, below, to make the string <code>Hello, World!</code> be displayed? <pre class=\'brush: php; html-script: true\'>&lt;?phpfunction myfunction() { ???????print $string;}myfunction("Hello, World!");?&gt;</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['There is no way to do this', '$string = $argv[1];', '$string = $_ARGV[0];', 'list($string) = func_get_args();', '$string = get_function_args()'],
            correct: [4],
            link: ["http://www.php.net/manual/en/function.func-get-args.php", "http://www.php.net/manual/en/function.list.php"],
            explanation: ["func_get_args() returns the function parameters and list() assigns them as if it were an array."]
        }
    },
    q15: {
        id: 15,
        text: 'What is the output of the following function? <pre class=\'brush: php; html-script: true\'>&lt;?phpfunction &amp;find_variable(&amp;$one, &amp;$two, &amp;$three) {if($one &gt; 10 &amp;&amp; $one &lt; 20) return $one;if($two &gt; 10 &amp;&amp; $two &lt; 20) return $two;if($three &gt; 10 &amp;&amp; $three &lt; 20) return $three;}$one = 2;$two = 20;$three = 15;$var = &amp;find_variable($one, $two, $three);$var++;print "1: $one, 2: $two, 3: $three";?&gt;</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['1: 2, 2: 20, 3: 15', '1: 3, 2:21, 3:16', '1: 2, 2:21, 3:15', '1: 3, 2: 20, 3: 15', '1: 2, 2: 20, 3: 16'],
            correct: [5],
            link: ["http://www.php.net/manual/en/functions.returning-values.php", "http://www.php.net/manual/en/language.references.return.php", "http://www.php.net/manual/en/language.references.pass.php"],
            explanation: ["Function returns a reference to $three, therefore incrementing $var also increments $three."]
        }
    },
    q16: {
        id: 16,
        text: 'For an arbitrary string <code>$mystring</code>, which of the following checks will correctly determine if the string <code>PHP</code> exists within it?',
        type: 2,
        category: 6,
        answer: {
            options: ['if(strpos($mystring, "PHP") !== false)', 'if(!strpos($mystring,"PHP"))', 'if(strpos($mystring, "PHP") === true)', 'if(strloc($mystring, "PHP") == true)', 'if(strloc($mystring, "PHP") === false)'],
            correct: [1],
            link: ["http://php.net/manual/en/function.strpos.php", "http://www.php.net/manual/en/language.types.boolean.php", "http://www.php.net/manual/en/language.operators.comparison.php"],
            explanation: ["strpos() will look for the desired value (PHP in this case) in $string. If found then it will return the position of the first match, otherwise it will return FALSE. \nThe operator !== is used so that if \"PHP\" is found in the 0 position, it'll be not converted to FALSE by means of type juggling."]
        }
    },
    q17: {
        id: 17,
        text: 'What are the values of <code>$a</code> in <code>$obj_one</code> and <code>$obj_two</code> when this script is executed? <pre class=\'brush: php; html-script: true\'>&lt;?phpclass myClass { private $a; public function __construct() { $this-&gt;a = 10; } public function printValue() { print "The Value is: {$this-&gt;a}"; } public function changeValue($val, $obj = null) { if(is_null($obj)) { $this-&gt;a = $val; } else { $obj-&gt;a = $val; } } public function getValue() { return $this-&gt;a; }}$obj_one = new myClass();$obj_two = new myClass();$obj_one-&gt;changeValue(20, $obj_two);$obj_two-&gt;changeValue($obj_two-&gt;getValue(), $obj_one);$obj_two-&gt;printValue();$obj_one-&gt;printValue();?&gt;</pre>',
        type: 2,
        category: 2,
        answer: {
            options: ['10,20', 'You cannot modify private member variables of a different class', '20,20', '10,10', '20,10'],
            correct: [3],
            link: ["http://php.net/manual/en/language.oop5.visibility.php", "http://php.net/manual/en/language.oop5.references.php"],
            explanation: ["For the PHP 5.3 certification, the correct answer is be 20, 20 (objects pointers as passed by copy, but it's as if objects themselves are always \"passed\" by reference). \nIn PHP4, objects are passed by value and as such the correct answer would be 10, 10"]
        }
    },
    q18: {
        id: 18,
        text: 'What are the three access modifiers that you can use in PHP objects?',
        type: 3,
        category: 2,
        answer: {
            options: ['protected', 'public', 'static', 'private', 'final'],
            correct: [1, 2, 4],
            link: ["http://php.net/manual/en/language.oop5.visibility.php"],
            explanation: ["The keywords static and final are not considered access modifiers."]
        }
    },
    q19: {
        id: 19,
        text: 'When checking to see if two variables contain the same instance of an object, which of the following comparisons should be used?',
        type: 2,
        category: 2,
        answer: {
            options: ['if($obj1-&gt;equals($obj2) &amp;&amp; ($obj1 instanceof $obj2))', 'if($obj1-&gt;equals($obj2))', 'if($obj1 === $obj2)', 'if($obj1 instanceof $obj2)', 'if($obj1 == $obj2)'],
            correct: [3],
            link: ["http://www.php.net/manual/en/language.oop5.object-comparison.php", "http://php.net/manual/en/internals2.opcodes.instanceof.php"],
            explanation: ["For the PHP 5.3 certification: \n($obj1 == $obj2) is TRUE if they have the same same values \n($obj1 === $obj2) is TRUE only if they are the same instance"]
        }
    },
    q20: {
        id: 20,
        text: 'In PHP 5 you can use the <code>______</code> operator to ensure that an object is of a particular type. You can also use <code>_______</code> in the function declaration.',
        type: 2,
        category: 0,
        answer: {
            options: ['instanceof, is_a', 'instanceof, type-hinting', 'type, instanceof', '===, type-hinting', '===, is_a'],
            correct: [2],
            link: ["http://php.net/manual/en/internals2.opcodes.instanceof.php", "http://php.net/manual/en/language.oop5.typehinting.php"],
            explanation: ["instanceof will check for the object type, while === will check if two comparing objects are the same instance"]
        }
    },
    q21: {
        id: 21,
        text: 'Does the following code accomplish it\'s purpose? <pre class=\'brush: php; html-script: true\'>&lt;?phpfunction duplicate($obj) {$newObj = $obj;return $newObj;}$a = new MyClass();$a_copy = duplicate($a);$a-&gt;setValue(10);$a_copy-&gt;setValue(20);?&gt;</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['Return value have to be &amp;$newObj', 'Yes, it does', 'duplicate() must accept its parameter by reference (with &amp;)', 'You must use the clone operator to make a copy of an object', 'duplicate() must return a reference (with &amp; in fornt of the function name)'],
            correct: [4],
            link: ["http://php.net/manual/en/language.oop5.cloning.php"],
            explanation: ["When assigning one object (variable) to another the object is not duplicated, just a reference to the object is copied. \nWhen you want to duplicated an object, this is called \"cloning\" an is achieved as follows: <pre>$objectA = clone $objectB;</pre>"]
        }
    },
    q22: {
        id: 22,
        text: 'How can you modify the copy of an object during a clone operation?',
        type: 2,
        category: 0,
        answer: {
            options: ['Put the logic in the object\'s constructor to alter the values', 'Implment your own function to do object copying', 'Implement the object\'s __clone() method', 'Implement __get() and __set() methods with the correct logic', 'Implement the __copy() method with the correct logic'],
            correct: [3],
            link: ["http://php.net/manual/en/language.oop5.cloning.php"],
            explanation: ["When an object is cloned, the method __clone is automatically called (see link to the manual section)"]
        }
    },
    q23: {
        id: 23,
        text: 'What is the primary difference between a method declared as static and a normal method?',
        type: 2,
        category: 0,
        answer: {
            options: ['Static methods can only be called using the :: syntax and never from an instance', 'Static methods do not provide a reference to $this', 'Static methods cannot be called from within class instances', 'Static methods don\'t have access to the self keyword', 'There is no functional difference between a static and non-static method'],
            correct: [2],
            link: ["http://php.net/manual/en/language.oop5.static.php"],
            explanation: ["$this is a reference to the object instance and, as such, static functions can not make use of it."]
        }
    },
    q24: {
        id: 24,
        text: 'What is the output of the following script? <pre class=\'brush: php; html-script: true\'>&lt;?phpclass ClassOne { protected $a = 10; public function changeValue($b) { $this-&gt;a = $b; }}class ClassTwo extends ClassOne { protected $b = 10; public function changeValue($b) { $this-&gt;b = 10; parent::changeValue($this-&gt;a + $this-&gt;b); } public function displayValues() { print "a: {$this-&gt;a}, b: {$this-&gt;b}"; }}$obj = new ClassTwo();$obj-&gt;changeValue(20);$obj-&gt;changeValue(10);$obj-&gt;displayValues();?&gt;</pre>',
        type: 2,
        category: 2,
        answer: {
            options: ['a: 30, b: 30', 'a: 30, b: 20', 'a: 30, b: 10', 'a: 20, b: 20', 'a: 10, b: 10'],
            correct: [3],
            link: ["http://php.net/manual/en/language.oop5.visibility.php"],
            explanation: ["This is a tricky question, because ClassTwo::changeValue() never changes $this->b value."]
        }
    },
    q25: {
        id: 25,
        text: 'The <code>______</code>keyword is used to indicate an incomplete class or method, which mustbe further extended and/or implemented in order to be used.',
        type: 2,
        category: 2,
        answer: {
            options: ['final', 'protected', 'incomplete', 'abstract', 'implements'],
            correct: [4],
            link: ["http://php.net/manual/en/language.oop5.abstract.php"],
            explanation: []
        }
    },
    q26: {
        id: 26,
        text: 'To ensure that a given object has a particular set of methods, you must provide a method list in the form of an <code>________</code> and then attach it as part of your class using the <code>________</code> keyword.',
        type: 2,
        category: 2,
        answer: {
            options: ['array, interface', 'interface, implements', 'interface, extends', 'instance, implements', 'access-list, instance'],
            correct: [2],
            link: ["http://php.net/manual/en/language.oop5.interfaces.php"],
            explanation: []
        }
    },
    q27: {
        id: 27,
        text: 'Type-hinting and the <code>instanceof</code> keyword can be used to check what types of things about object variables?',
        type: 3,
        category: 2,
        answer: {
            options: ['If a particular child class extends from it', 'If they are an instance of a particular interface', 'If they are an abstract class', 'If they have a particular parent class', 'If they are an instance of a particular class'],
            correct: [2, 4, 5],
            link: ["http://php.net/manual/en/language.operators.type.php"],
            explanation: []
        }
    },
    q28: {
        id: 28,
        text: 'In PHP 5\'s object model, a class can have multiple <code>______</code> but only a single direct <code>________</code>.',
        type: 2,
        category: 2,
        answer: {
            options: ['None of the above', 'interfaces, child', 'children, interface', 'interfaces, parent', 'parents, interface'],
            correct: [4],
            link: ["http://php.net/manual/en/language.oop5.interfaces.php", "http://php.net/manual/en/keyword.extends.php"],
            explanation: ["A class can have only one parent, can implement many interfaces and can have many childs that extends from it."]
        }
    },
    q29: {
        id: 29,
        text: 'Whatthree special methods can be used to perform special logic in the eventa particular accessed method or member variable is not found?',
        type: 3,
        category: 2,
        answer: {
            options: ['__get($variable)', '__call($method, $params)', '__get($method)', '__set($variable, $value)', '__call($method)'],
            correct: [1, 2, 4],
            link: ["http://php.net/manual/en/language.oop5.overloading.php"],
            explanation: []
        }
    },
    q30: {
        id: 30,
        text: 'The <code>_______</code> method will be called automatically when an object is represented as a string.',
        type: 2,
        category: 2,
        answer: {
            options: ['getString()', '__get()', '__value()', '__toString()', '__getString()'],
            correct: [4],
            link: ["http://www.php.net/manual/en/language.oop5.magic.php#language.oop5.magic.tostring"],
            explanation: ["When representing as string, PHP will attempt to call the function __toString() to define the conversion."]
        }
    },
    q31: {
        id: 31,
        text: 'When an object is serialized, which method will be called, automatically,providing your object with an opportunity to close any resources orotherwise prepare to be serialized?',
        type: 2,
        category: 2,
        answer: {
            options: ['__destroy()', '__serialize()', '__destruct()', '__shutdown()', '__sleep()'],
            correct: [5],
            link: ["http://php.net/manual/en/function.serialize.php"],
            explanation: ["When serializing objects, PHP will attempt to call the function __sleep() prior to serialization."]
        }
    },
    q32: {
        id: 32,
        text: 'What is the output of the following code? <pre class=\'brush: php; html-script: true\'>&lt;?phpclass MyException extends Exception {}class AnotherException extends MyException {}class Foo { public function something() { throw new AnotherException(); } public function somethingElse() { throw new MyException(); }}$a = new Foo();try { try { $a-&gt;something(); } catch(AnotherException $e) { $a-&gt;somethingElse(); } catch(MyException $e) { print "Caught Exception"; }} catch(Exception $e) { print "Didn\'t catch the Exception!";}?&gt;</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['"Caught Exception" followed by "Didn\'t catch the Exception!"', 'A fatal error for an uncaught exception', '"Didn\'t catch the Exception!"', '"Didn\'t catch the Exception!" followed by a fatal error', '"Caught Exception"'],
            correct: [3],
            link: ["http://php.net/manual/en/language.exceptions.php", "http://stackoverflow.com/questions/2586608/confused-by-this-php-exception-try-catch-nesting"],
            explanation: ["The second catch (the one who looks for MyException) will never catch the exception because it'll bubble to the outer try/catch."]
        }
    },
    q33: {
        id: 33,
        text: 'Which two internal PHP interfaces provide functionality which allow you to treat an object like an array?',
        type: 3,
        category: 8,
        answer: {
            options: ['iteration', 'arrayaccess', 'objectarray', 'iterator', 'array'],
            correct: [2, 4],
            link: ["http://php.net/manual/en/class.arrayaccess.php", "http://php.net/manual/en/class.iterator.php"],
            explanation: []
        }
    },
    q34: {
        id: 34,
        text: 'Which <code>php.ini</code> directive should be disabled to prevent the execution of a remote PHP script via an <code>include</code> or <code>require</code> construct?',
        type: 2,
        category: 3,
        answer: {
            options: ['You cannot disable remote PHP script execution', 'curl.enabled', 'allow_remote_url', 'allow_url_fopen', 'allow_require'],
            correct: [4],
            link: ["http://www.php.net/manual/en/filesystem.configuration.php#ini.allow-url-fopen"],
            explanation: ["allow_url_include would be a better answer, but it needs allow_url_fopen to work"]
        }
    },
    q35: {
        id: 35,
        text: 'When attempting to prevent a cross-site scripting attack, which of the following is most important?',
        type: 2,
        category: 3,
        answer: {
            options: ['Not writing Javascript on the fly using PHP', 'Filtering Output used in form data', 'Filtering Output used in database transactions', 'Writing careful Javascript', 'Filtering all input'],
            correct: [5],
            link: [],
            explanation: ["The 2nd option might seem the right choice, but output should be escaped not filtered."]
        }
    },
    q36: {
        id: 36,
        text: 'Which of the following <code>php.ini</code> directives should be disabled to improve the outward security of your application?',
        type: 3,
        category: 3,
        answer: {
            options: ['safe_mode', 'magic_quotes_gpc', 'register_globals', 'display_errors', 'allow_url_fopen'],
            correct: [2, 3, 4, 5],
            link: ["http://php.net/manual/en/features.safe-mode.php", "http://www.php.net/manual/en/security.magicquotes.php"],
            explanation: ["magic_quotes_gpc should be disabled to ensure proper using of native database escape string functions."]
        }
    },
    q37: {
        id: 37,
        text: 'Which of the following list of potential data sources should be considered trusted?',
        type: 2,
        category: 3,
        answer: {
            options: ['None of the above', '$_ENV', '$_GET', '$_COOKIE', '$_SERVER'],
            correct: [1],
            link: [],
            explanation: ["Only trusted superglobal should be $_SESSION. \n$_SERVER contains user input (GET / POST parameters, PHP_SELF and headers) which can be manipulated by the client."]
        }
    },
    q38: {
        id: 38,
        text: 'What is the best way to ensure the distinction between filtered / trusted and unfiltered / untrusted data?',
        type: 2,
        category: 3,
        answer: {
            options: ['None of the above', 'Never trust any data from the user', 'Enable built-in security features such as magic_quotes_gpc and safe_mode', 'Always filter all incoming data', 'Use PHP 5\'s tainted mode'],
            correct: [4],
            link: ["http://devzone.zend.com/article/1113"],
            explanation: []
        }
    },
    q39: {
        id: 39,
        text: 'Consider the following code: <pre class=\'brush: php; html-script: true\'>&lt;?phpsession_start();if(!empty($_REQUEST[\'id\']) &amp;&amp; !empty($_REQUEST[\'quantity\'])) { $id = scrub_id($_REQUEST[\'id\']); $quantity = scrub_quantity($_REQUEST[\'quantity\']) $_SESSION[\'cart\'][] = array(\'id\' =&gt; $id, \'quantity\' =&gt; $quantity)}/* .... */?&gt;</pre> What potential security hole would this code snippet produce?',
        type: 2,
        category: 3,
        answer: {
            options: ['Cross-Site Scripting Attack', 'There is no security hole in this code', 'Code Injection', 'SQL Injection', 'Cross-Site Request Forgery'],
            correct: [5],
            link: ["http://en.wikipedia.org/wiki/Cross-site_request_forgery"],
            explanation: ["Getting the id and quantity by $_REQUEST would allow to pass this parameters by GET or POST. \nAlso, there isn't a 'token' parameter specified to prevent XSRF attacks. If someone manages to get the session id of another user (we can see that the session id is not renewed in this code), the lack of a token means he could manipulate that users cart."]
        }
    },
    q40: {
        id: 40,
        text: 'What is the best measure one can take to prevent a cross-site request forgery?',
        type: 2,
        category: 3,
        answer: {
            options: ['Disallow requests from outside hosts', 'Add a secret token to all form submissions', 'Turn off allow_url_fopen in php.ini', 'Filter all output', 'Filter all input'],
            correct: [2],
            link: ["http://en.wikipedia.org/wiki/Cross-site_request_forgery#Prevention", "http://shiflett.org/articles/cross-site-request-forgeries"],
            explanation: []
        }
    },
    q41: {
        id: 41,
        text: 'Consider the following code: <pre class=\'brush: php; html-script: true\'>&lt;?phpheader("Location: {$_GET[\'url\']}");?&gt;</pre> Which of the following values of $_GET[\'url\'] would cause session fixation?',
        type: 2,
        category: 3,
        answer: {
            options: ['Session Fixation is not possible with this code snippet', 'http://www.zend.com/?PHPSESSID=123', 'PHPSESSID%611243', 'Set-Cookie%3A+PHPSESSID%611234', 'http%3A%2F%2Fwww.zend.com%2F%0D%0ASet-Cookie%3A+PHPSESSID%611234'],
            correct: [2],
            link: ["http://www.php.net/manual/en/session.idpassing.php", "https://www.owasp.org/index.php/Session_fixation"],
            explanation: ["This will be only possible if session.use_only_cookies or session.use_cookies are NOT enabled in the php.ini, as we are not told otherwise we have to assume a worst case scenario."]
        }
    },
    q42: {
        id: 42,
        text: 'When implementing a permissions system for your Web site, what should always be done with regards to the session?',
        type: 2,
        category: 3,
        answer: {
            options: ['None of the above', 'You should not implement permission systems using sessions', 'Sessions should be cleared of all data and re-populated', 'The session key should be regenerated', 'The session should be destroyed'],
            correct: [4],
            link: ["http://www.php.net/manual/en/function.session-regenerate-id.php", "http://shiflett.org/articles/session-fixation"],
            explanation: ["Always regenerate the session identifier on the receiving script, regardless of the user's state."]
        }
    },
    q43: {
        id: 43,
        text: 'Which of the following is not valid syntax for creating a new array key?',
        type: 2,
        category: 8,
        answer: {
            options: ['$a[] = "value";', '$a{} = "value";', '$a[0] = "value";', '$a{0} = "value";', '$a[$b = 0] = "value";'],
            correct: [2],
            link: ["http://php.net/manual/en/language.types.array.php"],
            explanation: ["Square brackets can be used to access array elements and to add a new element to the end of the array. Curly braces can be used to access array elements."]
        }
    },
    q44: {
        id: 44,
        text: 'Which of the following functions will sort an array in ascending order by value, while preserving key associations?',
        type: 2,
        category: 8,
        answer: {
            options: ['asort()', 'usort()', 'krsort()', 'ksort()', 'sort()'],
            correct: [1],
            link: ["http://www.php.net/manual/en/function.asort.php"],
            explanation: ["asort() will sort the array [by value] in ascending order preserving key associations. \nsort() will sort the array in ascending order but will lose key associations. \nksort() and krsort() will sort the array by keys (not values) in ascending and descending order respectively. \nusort() will sort an array by its values using a user-supplied comparison function (but losing keys associations)."]
        }
    },
    q45: {
        id: 45,
        text: 'What is the output of the following code block? <pre class=\'brush: php; html-script: true\'>&lt;?php$a = "The quick brown fox jumped over the lazy dog.";$b = array_map("strtoupper", explode(" ", $a));foreach($b as $value) {print "$value ";}?&gt;</pre>',
        type: 2,
        category: 8,
        answer: {
            options: ['THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG.', 'A PHP Error', 'Array Array Array Array Array Array Array Array Array'],
            correct: [1],
            link: ["http://php.net/manual/en/function.array-map.php"],
            explanation: []
        }
    },
    q46: {
        id: 46,
        text: 'Which from the following list is not an approrpiate use of an array?',
        type: 2,
        category: 8,
        answer: {
            options: ['As a list', 'All of these uses are valid', 'As a Lookup Table', 'A Stack', 'As a hash table'],
            correct: [2],
            link: ["http://php.net/manual/en/language.types.array.php"],
            explanation: ["As a list: correct, using only values. \nAs a Look Up Table: correct, using keys and values. \nAs a stack: correct, using array_shift() and array_pop(). \nAs a hash table: correct, using keys and values."]
        }
    },
    q47: {
        id: 47,
        text: 'What is the output of this code snippet? <pre class=\'brush: php; html-script: true\'>&lt;?php$a = array(0.001 =&gt; \'b\', .1 =&gt; \'c\');print_r($a);?&gt;</pre>',
        type: 2,
        category: 8,
        answer: {
            options: ['An empty array', '0.001 =&gt; \'b\', .1 =&gt; c', '0 =&gt; \'c\'', '\'0.001\' =&gt; \'b\', \'0.1\' =&gt; c\'', 'A Syntax Error'],
            correct: [3],
            link: ["http://php.net/manual/en/language.types.array.php"],
            explanation: ["Array keys can not be floats: 0.001 gets interpoled to 0, and .1 also gets interpoled to 0, overwriting the first key."]
        }
    },
    q48: {
        id: 48,
        text: 'Which of the following functions could be used to break a string into an array?',
        type: 3,
        category: 6,
        answer: {
            options: ['array_split()', 'preg_split()', 'string_split()', 'preg_match_all()', 'explode()'],
            correct: [2, 4, 5],
            link: ["http://www.php.net/manual/en/function.split.php", "http://www.php.net/manual/en/function.preg-match-all.php", "http://www.php.net/manual/en/function.explode.php"],
            explanation: ["PHP 5.3 certification: string_split() and array_split() doesn't exist as functions."]
        }
    },
    q49: {
        id: 49,
        text: 'If you wanted a variable containing the letters <code>A</code> through <code>Z</code>, that allowed you to access each letter independently, which of the following approaches could you use?',
        type: 3,
        category: 6,
        answer: {
            options: ['$s = str_split("ABCDEFGHIJKLMNOPQRSTUVWXYZ");', '$s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";', '$s = range(\'A\', \'Z\');', '$s = explode("", "ABCDEFGHIJKLMNOPQRSTUVWXYZ");', 'You would use the ALPHA_ARRAY constant', 'None of the above'],
            correct: [1, 2, 3],
            link: ["http://www.php.net/manual/en/function.range.php", "http://www.php.net/manual/en/function.explode.php"],
            explanation: ["explode() does not accept an empty string as delimiter and ALPHA_ARRAY constant does not exist as of PHP 5.3"]
        }
    },
    q50: {
        id: 50,
        text: 'What is the output of the following code block? <pre class=\'brush: php; html-script: true\'>&lt;?php$array = array(1 =&gt; 0, 2, 3, 4);array_splice($array, 3, count($array), array_merge(array(\'x\'), array_slice($array, 3))); print_r($array);?&gt;</pre>',
        type: 2,
        category: 8,
        answer: {
            options: ['1 =&gt; 1, 2 =&gt; 2, 3 =&gt; x, 4=&gt; 4', '0 =&gt; 1, 2 =&gt; 2, 3 =&gt; 3, 4 =&gt; 4, x =&gt; 3', '0 =&gt; 0, 1=&gt; 2, 2 =&gt; 3, 3 =&gt; x, 4 =&gt; 4', '0 =&gt; x, 1 =&gt; 0, 2 =&gt; 1, 3=&gt; 2, 4=&gt;3', '1 =&gt; 1, 3 =&gt; x, 2 =&gt; 2, 4 =&gt; 4'],
            correct: [3],
            link: ["http://www.php.net/manual/en/function.array-slice.php", "http://www.php.net/manual/en/function.array-merge.php", "http://www.php.net/manual/en/function.array-splice.php"],
            explanation: ["The trick to understand this question is knowing that array_splice doesn't preserve keys."]
        }
    },
    q51: {
        id: 51,
        text: 'Which function would you use to add an element to the beginning of an array?',
        type: 2,
        category: 8,
        answer: {
            options: ['array_shift()', 'array_push();', '$array[0] = "value";', 'array_unshift()', 'array_pop();'],
            correct: [4],
            link: ["http://www.php.net/manual/en/function.array-unshift.php"],
            explanation: []
        }
    },
    q52: {
        id: 52,
        text: 'Which key will not be displayed from the following code block?  <pre class=\'brush: php; html-script: true\'>&lt;?php$array = array(\'a\' =&gt; \'John\', \'b\' =&gt; \'Coggeshall\', \'c\' =&gt; array(\'d\' =&gt; \'John\', \'e\' =&gt; \'Smith\')); function display($item, $key) {print "$key =&gt; $item";}array_walk_recursive($array, "display");?&gt;</pre>',
        type: 2,
        category: 8,
        answer: {
            options: ['d', 'c', 'b', 'a', 'They all will be displayed'],
            correct: [2],
            link: ["http://www.php.net/manual/en/function.array-walk-recursive.php"],
            explanation: ["As stated in the manual: \"Any key that holds an array will not be passed to the function\"."]
        }
    },
    q53: {
        id: 53,
        text: 'What is the result of the following code snippet? <pre class=\'brush: php; html-script: true\'>&lt;?php$array = array(\'a\' =&gt; \'John\', \'b\' =&gt; \'Coggeshall\', \'c\' =&gt; array(\'d\' =&gt; \'John\', \'e\' =&gt; \'Smith\')); function something($array) {extract($array);return $c[\'e\'];}print something($array);?&gt;</pre>',
        type: 2,
        category: 8,
        answer: {
            options: ['Smith', 'A PHP Warning', 'Coggeshall', 'NULL', 'Array'],
            correct: [1],
            link: ["http://www.php.net/manual/en/function.extract.php"],
            explanation: []
        }
    },
    q54: {
        id: 54,
        text: 'What should go in the missing line <code>?????</code> below to produce the output shown? <pre class=\'brush: php; html-script: true\'>Array( [5] =&gt; A [4] =&gt; B [3] =&gt; C [2] =&gt; D [1] =&gt; E)</pre>',
        type: 2,
        category: 8,
        answer: {
            options: ['$array_three = array_merge(array_reverse($array_one), $array_two);', '$array_three = array_combine($array_one, $array_two);', '$array_three = array_combine(array_reverse($array_one), $array_two);', '$array_three = array_merge($array_one, $array_two);', '$array_three = array_reverse($array_one) + $array_two;'],
            correct: [3],
            link: ["http://www.php.net/manual/en/function.array-combine.php", "http://www.php.net/manual/en/function.array-reverse.php"],
            explanation: []
        }
    },
    q55: {
        id: 55,
        text: 'Which of the following functions are used with the internal array pointer to accomplish an action?',
        type: 3,
        category: 8,
        answer: {
            options: ['key', 'forward', 'prev', 'current', 'next'],
            correct: [1, 3, 4, 5],
            link: ["http://php.net/manual/en/function.prev.php", "http://php.net/manual/en/function.current.php", "http://php.net/manual/en/function.next.php"],
            explanation: ["The forward function does not exist as of PHP 5.3"]
        }
    },
    q56: {
        id: 56,
        text: 'Given the following array: <p class="ceresIndent"><code>$array = array(1,1,2,3,4,4,5,6,6,6,6,3,2,2,2);</code></p> <p class="ceresIndent">The fastest way to determine the total number a particular value appears in the array is to use which function?</p>',
        type: 2,
        category: 8,
        answer: {
            options: ['array_total_values', 'array_count_values', 'A foreach loop', 'count', 'a for loop'],
            correct: [2],
            link: ["http://www.php.net/manual/en/function.array-count-values.php"],
            explanation: []
        }
    },
    q57: {
        id: 57,
        text: 'The ____ construct is particularly useful to assign your own variable names to values within an array.',
        type: 2,
        category: 8,
        answer: {
            options: ['array_get_variables', 'current', 'each', 'import_variables', 'list'],
            correct: [5],
            link: ["http://www.php.net/manual/en/function.list.php"],
            explanation: []
        }
    },
    q58: {
        id: 58,
        text: 'The following code snippet displays what for the resultant array?  <pre class=\'brush: php; html-script: true\'>&lt;?php$a = array(1 =&gt; 0, 3 =&gt; 2, 4 =&gt; 6);$b = array(3 =&gt; 1, 4 =&gt; 3, 6 =&gt; 4);print_r(array_intersect($a, $b));?&gt;</pre>',
        type: 2,
        category: 8,
        answer: {
            options: ['1 =&gt; 0', '1 =&gt; 3, 3 =&gt; 1, 4 =&gt; 3', '3 =&gt; 1, 3=&gt; 2, 4 =&gt; 3, 4=&gt; 6', '1 =&gt; 0, 3 =&gt; 2, 4 =&gt; 6', 'An empty Array'],
            correct: [5],
            link: ["http://www.php.net/manual/en/function.array-intersect.php"],
            explanation: ["There ara no coincidences by value, so it'll print an empty array."]
        }
    },
    q59: {
        id: 59,
        text: 'Which of the following are not valid ways to embed a variable into a string?',
        type: 3,
        category: 6,
        answer: {
            options: ['$a = "Value: $value-&gt;getValue()";', '$a = "Value: {$value}";', '$a = \'Value: $value\';', '$a = "Value: $value";', '$a = "Value: {$value[\'val\']}";'],
            correct: [1, 3],
            link: ["http://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.double"],
            explanation: ["The 1st option needs curly braces, the 3rd one uses single quotes and as such the variable will not be interpolated."]
        }
    },
    q60: {
        id: 60,
        text: 'What would go in the spots indcated by <code>?????</code> in the code segment below for the script to work? <pre class=\'brush: php; html-script: true\'>&lt;?php$msg = "The Quick Brown Foxed Jumped Over the Lazy Dog";$state = true;$retval = "";for($i = 0; (isset(??????)); $i++) {if($state) {$retval .= strtolower(?????);} else {$retval .= strtoupper(?????);}$state = !$state;}print $retval;?&gt;</pre>',
        type: 2,
        category: 6,
        answer: {
            options: ['$msg{$i}', 'ord($msg);', 'chr($msg);', 'substr($msg, $i, 2);'],
            correct: [1],
            link: ["http://www.php.net/manual/en/function.isset.php"],
            explanation: ["Fastest way to resolve this question is to see that there is a <code>?????</code> inside an isset() function. The isset() method only accepts variables."]
        }
    },
    q61: {
        id: 61,
        text: 'Given the two values below, which of the following possiblities will print <code>10 foos20 bars</code>? <pre class=\'brush: php; html-script: true\'>&lt;?php$var1 = "10 foos";$var2 = "20 bars";print ???????;?&gt;</pre>',
        type: 3,
        category: 6,
        answer: {
            options: ['None of the above', 'implode("", array($var1,$var2));', '$var1 . $var2', '$var1 + $var2', 'All of the above'],
            correct: [2, 3],
            link: ["http://php.net/manual/en/language.operators.string.php", "http://www.php.net/manual/en/function.implode.php"],
            explanation: []
        }
    },
    q62: {
        id: 62,
        text: 'Given the string: <code>$var = "james@test.com";</code> Which of the following will extract the TLD (".com") from the string?',
        type: 2,
        category: 6,
        answer: {
            options: ['strstr($var, strpos($var, "."));', 'substr($var, strpos($var, "@"));', 'substr($var, strstr($var, "."));', 'substr($var, strpos($var, ".") + 1);', 'substr($var, strpos($var, "."));'],
            correct: [5],
            link: ["http://www.php.net/manual/en/function.substr.php", "http://www.php.net/manual/en/function.strpos.php"],
            explanation: []
        }
    },
    q63: {
        id: 63,
        text: 'When comparing two strings, which of the following is acceptable?',
        type: 3,
        category: 6,
        answer: {
            options: ['$a === $b;', 'strcasecmp($a, $b);', 'strcmp($a, $b);', '$a == $b;', 'str_compare($a,$b);'],
            correct: [1, 2, 3, 4],
            link: ["http://www.php.net/manual/en/function.strcasecmp.php", "http://www.php.net/manual/en/function.strcmp.php"],
            explanation: ["str_compare() does not exist as of PHP 5.3"]
        }
    },
    q64: {
        id: 64,
        text: 'A fingerprint of a string can be determined using which of the following?',
        type: 2,
        category: 6,
        answer: {
            options: ['md5()', 'str_hash()', 'fingerprint()', 'None of the above'],
            correct: [1],
            link: ["http://www.php.net/manual/en/function.md5.php"],
            explanation: []
        }
    },
    q65: {
        id: 65,
        text: 'Which of the following is the best way to split a string on the "-=-" pattern?',
        type: 2,
        category: 6,
        answer: {
            options: ['They all are equally proper methods', 'str_split($string, strpos($string, "-=-"))', 'preg_split("-=-", $string);', 'explode("-=-" $string);'],
            correct: [3],
            link: ["http://www.php.net/manual/en/function.str-split.php", "http://www.php.net/manual/en/function.preg-split.php", "http://www.php.net/manual/en/function.explode.php"],
            explanation: ["The trick in this question is the pattern. \"-=-\" is a valid pattern splitting a string using \"=\" as the delimiter (\"-\" is the regex pattern delimiter). \nExplode is missing a comma."]
        }
    },
    q66: {
        id: 66,
        text: 'What is the output of the following code? <pre class=\'brush: php; html-script: true\'>&lt;?php $string = "14302"; $string[$string[2]] = "4"; print $string; ?&gt;</pre>',
        type: 2,
        category: 6,
        answer: {
            options: ['14304', '14342', '44302', '14402', 'Array'],
            correct: [2],
            link: [],
            explanation: []
        }
    },
    q67: {
        id: 67,
        text: 'Which of the following comparisons will evaluate to <code>true</code>?',
        type: 3,
        category: 6,
        answer: {
            options: ['\'t\' == t', '1 === "1time"', '"top" == 0', '"top" === 0', '1 == "1time"'],
            correct: [1, 3, 5],
            link: ["http://www.php.net/manual/en/language.types.type-juggling.php"],
            explanation: ["The most surprising case is the 1st option. PHP will throw a notice an assume t as an undefined constant, then it will proceed to instantiate it as a constant with the value 't'. \nThe other cases are type-juggling comparisons between integers and strings."]
        }
    },
    q68: {
        id: 68,
        text: 'Which function is best suited for removing markup tags from a string?',
        type: 2,
        category: 6,
        answer: {
            options: ['strip_markup', 'strip_tags', 'str_replace', 'preg_replace', 'preg_strip'],
            correct: [2],
            link: ["http://php.net/manual/en/function.strip-tags.php"],
            explanation: []
        }
    },
    q69: {
        id: 69,
        text: 'Identify the best approach to compare to variables in a binary-safe fashion',
        type: 2,
        category: 6,
        answer: {
            options: ['Both strcmp() and $a === $b', '$a == $b', '$a === $b', 'str_compare()', 'strstr()'],
            correct: [1],
            link: ["http://www.php.net/manual/en/function.strcmp.php", "http://php.net/manual/en/language.operators.comparison.php"],
            explanation: []
        }
    },
    q70: {
        id: 70,
        text: 'Consider the following script: <pre class=\'brush: php; html-script: true\'>&lt;?php$oranges = 10;$apples = 5;$string = "I have %d apples and %d oranges";????????&gt;</pre> What could be placed in place of <code>??????</code> to output the string: <p class="ceresIndent"><code>I have 5 apples and 10 oranges</code></p>',
        type: 3,
        category: 6,
        answer: {
            options: ['str_format($string, $apples, $oranges);', ' ($string, $apples, $oranges);', 'printf($string, $apples, $oranges);', 'print sprintf($apples, $oranges);', 'sprintf($string, $oranges, $apples);'],
            correct: [3],
            link: ["http://www.php.net/manual/en/function.sprintf.php"],
            explanation: []
        }
    },
    q71: {
        id: 71,
        text: 'Consider the following script: <pre class=\'brush: php; html-script: true\'>&lt;?php$string = "&lt;b&gt;I like \'PHP\' &amp; I think it is \"cool\"&lt;/b&gt;";var_dump(htmlentities($string, ENT_QUOTES));var_dump(print htmlspecialchars($string));?&gt;</pre> In this script, do the two <code>var_dump()</code> calls produce the same string? Why or Why Not?',
        type: 2,
        category: 6,
        answer: {
            options: ['No, the htmlentities() call will translate quotes while the htmlspecialchars() call will not', 'No, htmlentites() translates &lt; and &gt; symbols to their HTML entity equivalents while htmlspecialchars() only does quotes', 'No, the htmlentites() call won\'t translate quotes to HTML entities while the htmlspecialchars() call will', 'No, the resulting strings will be completely different', 'Yes, htmlspecialchars() and htmlentities() with the ENT_QUOTES constants produce the same result'],
            correct: [4],
            link: ["http://www.php.net/manual/en/function.htmlentities.php", "http://www.php.net/manual/en/function.htmlspecialchars.php"],
            explanation: ["This is another tricky question. The second var_dump have a \"print\" in front of htmlspecialchars, so it will only dump the returning integer."]
        }
    },
    q72: {
        id: 72,
        text: 'Consider the following String: <p class="ceresIndent"><code>$string = "John\tMarkTed\tLarry";</code></p> <p class="ceresIndent">Which of the following functions would best parse the string above by the tab (\t) and newline () characters?</p>',
        type: 2,
        category: 6,
        answer: {
            options: ['strsplit($string, "\t");', 'strtok($string, "\t");', 'strstr($string, "\t");', 'explode("\t", $string);', 'All of the above'],
            correct: [2],
            link: ["http://www.php.net/manual/en/function.strtok.php"],
            explanation: ["strtok(), even if it will need various iterations."]
        }
    },
    q73: {
        id: 73,
        text: 'Which functions would be needed to translate the following string:  <p class="ceresIndent"><code>I love PHP 5</code></p> <p class="ceresIndent">to the following?</p> <p class="ceresIndent"><code>5 PHP EVOL I</code></p>',
        type: 3,
        category: 6,
        answer: {
            options: ['mirror()', 'strtoupper()', 'toupper()', 'str_reverse()', 'strrev()'],
            correct: [2, 5],
            link: ["http://www.php.net/manual/en/function.strtoupper.php", "http://www.php.net/manual/en/function.strrev.php"],
            explanation: []
        }
    },
    q74: {
        id: 74,
        text: 'What is the best approach for converting this string: <p class="ceresIndent"><code>$string = "a=10&amp;b[]=20&amp;c=30&amp;d=40+50";</code></p> <p class="ceresIndent">Into this array?</p> <pre class=\'brush: php; html-script: true\'>array(4) { ["a"]=&gt; string(2) "10" ["b"]=&gt; array(1) { [0]=&gt; string(2) "20" } ["c"]=&gt; string(2) "30" ["d"]=&gt; string(5) "40 50"}</pre>',
        type: 2,
        category: 6,
        answer: {
            options: ['Write a parser completely by hand, it\'s the only way to make sure it\'s 100% accurate', 'Use the parse_str() function to translate it to an array()', 'Pass the variable to another PHP script via an HTTP GET request and return the array as a serialized variable', 'Just call unserialize() to translate it to an array()', 'Write a string parser using strtok() and unserialize() to convert it to an array'],
            correct: [2],
            link: ["http://www.php.net/manual/en/function.parse-str.php"],
            explanation: []
        }
    },
    q75: {
        id: 75,
        text: 'Which string does the following PCRE regular expression match?  <p class="ceresIndent"><code>$regex = "/^([a-z]{5})[1-5]+([a-z]+)/";</code></p>',
        type: 3,
        category: 6,
        answer: {
            options: ['None of the above', 'Hello34262343goodbye', 'frank12345abc', 'hello34212343goodbye', 'abcdefghi12345abc'],
            correct: [3, 4],
            link: ["http://en.wikipedia.org/wiki/Regular_expression"],
            explanation: []
        }
    },
    q76: {
        id: 76,
        text: 'Which PCRE regular expression will match the string <code>PhP5-rocks</code>?',
        type: 2,
        category: 6,
        answer: {
            options: ['/^[hp1-5]*\\-.*/i', '/[hp1-5]*\\-.?/', '/[hp][1-5]*\\-.*/', '/[PhP]{3}[1-5]{2,3}\\-.*$/', '/[a-z1-5\\-]*/'],
            correct: [1],
            link: ["http://www.phpro.org/tutorials/Introduction-to-PHP-Regex.html#8"],
            explanation: ["The \"i\" modifier at the end makes the pattern case-insensitive."]
        }
    },
    q77: {
        id: 77,
        text: 'If regular expressions must be used, in general which type of regular expression functions available to PHP is preferred for performance reasons?',
        type: 2,
        category: 6,
        answer: {
            options: ['strtok() using regular expressions', 'preg_* regular expression functions', 'parse_str() using regular expressions', 'strregex* regular expression functions', 'ereg* regular expression functions'],
            correct: [2],
            link: ["http://www.php.net/manual/en/function.ereg.php"],
            explanation: []
        }
    },
    q78: {
        id: 78,
        text: 'To destroy one variable within a PHP session you should use which method in PHP 5?',
        type: 2,
        category: 1,
        answer: {
            options: ['Unset the variable in $HTTP_SESSION_VARS', 'Use the session_destroy() function', 'Use the session_unset() function', 'unset the variable in $_SESSION using unset()', 'Any of the above are acceptable in PHP 5'],
            correct: [4],
            link: ["http://docs.php.net/manual/en/session.examples.basic.php"],
            explanation: ["session_unset() does unset all session variables, session_destroy() destroys all session data, to unset a specific variable in $_SESSION, we should use unset()."]
        }
    },
    q79: {
        id: 79,
        text: 'If you would like to store your session in the database, you would do which of the following?',
        type: 2,
        category: 1,
        answer: {
            options: ['It requires a custom PHP extension to change the session handler', 'Implement the session_set_save_handler() function', 'Create functions for each session handling step and use session_set_save_handler() to override PHP\'s internal settings', 'Configure the session.save_handler INI directive to your session class'],
            correct: [3],
            link: ["http://www.php.net/manual/en/function.session-set-save-handler.php"],
            explanation: ["The 2nd option isn't wrong in a strict sense of the word, but 3rd is a more complete answers (check the manual)."]
        }
    },
    q80: {
        id: 80,
        text: 'To destroy a PHP session completely, one must which of the following?',
        type: 3,
        category: 1,
        answer: {
            options: ['Regenerate the session ID using session_regenerate_id()', 'If cookies are used, destroy it', 'Use session_demolish() to completely destroy the session', 'Change the session name using session_name()', 'Destroy the session data using session_destroy()'],
            correct: [2, 5],
            link: ["http://www.php.net/manual/en/function.session-destroy.php"],
            explanation: []
        }
    },
    q81: {
        id: 81,
        text: 'If you would like to change the session ID generation function, which of the following is the best approach for PHP 5?',
        type: 2,
        category: 1,
        answer: {
            options: ['Set the session.hash_function INI configuration directive', 'Use the session_set_id_generator() function', 'Set the session id by force using the session_id() function', 'Use the session_regenerate_id() function', 'Implement a custom session handler'],
            correct: [1],
            link: ["http://www.php.net/manual/en/session.configuration.php#ini.session.hash-function"],
            explanation: ["Read the question carefully, it is not asking which function to call to change/set the session_id. \nIt's asking how to change the function that generates the session_id."]
        }
    },
    q82: {
        id: 82,
        text: 'Consider the following HTML fragement: <pre class=\'brush: php; html-script: true\'>&lt;select name="?????" multiple&gt;&lt;option value="1"&gt;Item #1&lt;/option&gt;&lt;!-- ... more options ... --&gt;&lt;/select&gt;</pre> Which of the following <code>name</code> attributes should be used to capture all of the data from the user in PHP?',
        type: 2,
        category: 1,
        answer: {
            options: ['myselectbox=array()', 'myselectbox[]', 'myselectbox[\'multiple\']', 'myselectbox{\'multiple\'}', 'myselectbox'],
            correct: [2],
            link: ["http://onlamp.com/pub/a/php/2004/08/26/PHPformhandling.html", "http://onlinetools.org/tricks/using_multiple_select.php"],
            explanation: []
        }
    },
    q83: {
        id: 83,
        text: 'When uploading a file using HTTP, which variable can be used to locate the file on PHP\'s local filesystem?',
        type: 2,
        category: 1,
        answer: {
            options: ['None of the above', '$_FILES[\'fieldname\'][\'tmp_name\']', '$_FILES[\'fieldname\']', '$_FILES[\'fieldname\'][0][\'filename\']', '$_FILES[\'fieldname\'][\'filename\']'],
            correct: [2],
            link: ["http://www.php.net/manual/en/features.file-upload.post-method.php"],
            explanation: []
        }
    },
    q84: {
        id: 84,
        text: 'To force a user to redirect to a new URL from within a PHP 5 script, which of the following should be used?',
        type: 2,
        category: 1,
        answer: {
            options: ['Send a HTTP "Location:" header', 'Use the HTML &lt;redirect&gt; Tag', 'Send a HTTP "Forward:" header', 'Use the redirect() function'],
            correct: [1],
            link: ["http://php.net/manual/en/function.header.php"],
            explanation: []
        }
    },
    q85: {
        id: 85,
        text: 'Setting a cookie on the client in PHP 5 can be best accomplished by:',
        type: 2,
        category: 1,
        answer: {
            options: ['Use the add_cookie() function', 'Use the setcookie() function', 'Use the the apache_send_header() function', 'Setting a variable in the $_COOKIE superglobal'],
            correct: [2],
            link: ["http://www.php.net/manual/en/function.setcookie.php"],
            explanation: []
        }
    },
    q86: {
        id: 86,
        text: 'How does one create a cookie which will exist only until the browser session is terminated?',
        type: 2,
        category: 1,
        answer: {
            options: ['You cannot create cookies that expire when the browser session is terminated', 'Setting the expiration time for a cookie to a time in the distant future', 'Do not provide a cookie expiration time', 'Enable Cookie Security', 'Set a cookie without a domain'],
            correct: [3],
            link: ["http://php.net/manual/en/function.setcookie.php"],
            explanation: []
        }
    },
    q87: {
        id: 87,
        text: 'Setting a HTTP cookie on the client which is not URL-encoded is done how in PHP 5?',
        type: 2,
        category: 1,
        answer: {
            options: ['Use the setrawcookie() function', 'Set the cookies.urlencode INI directive to false', 'Use urldecode() on the return value of setcookie()', 'Setting the $no_encode parameter of setcookie() to a boolean \'true\'', 'All cookies must be URL encoded'],
            correct: [1],
            link: ["http://www.php.net/manual/en/function.setrawcookie.php"],
            explanation: ["According to the manual: \"setrawcookie — Send a cookie without urlencoding the cookie value \""]
        }
    },
    q88: {
        id: 88,
        text: 'During an HTTP authentication, how does one determine the username and password provided by the browser?',
        type: 2,
        category: 1,
        answer: {
            options: ['Parse the HTTP headers manually using http_get_headers()', 'Use the get_http_username() and get_http_password() functions', 'Use the $_SERVER[\'HTTP_USER\'] and $_SERVER[\'HTTP_PASSWORD\'] variables', 'Use the $_SERVER[\'PHP_AUTH_USER\'] and $_SERVER[\'PHP_AUTH_PW\'] variables', 'Parse the $_SERVER[\'REQUEST_URI\'] variable'],
            correct: [4],
            link: ["http://php.net/manual/en/features.http-auth.php"],
            explanation: []
        }
    },
    q89: {
        id: 89,
        text: 'Consider the following function: <pre class=\'brush: php; html-script: true\'>&lt;?phpfunction redirect($url) { // Check to make sure we haven\'t already sent // the header: if(???????) { header("Location: $url"); }}?&gt;</pre> What conditional should replace the <code>?????</code> above?',
        type: 2,
        category: 1,
        answer: {
            options: ['!in_array("Location: $url", headers_list())', '!header_exists("Location: $url")', '!header_location($url)', '$_SERVER[\'HTTP_LOCATION\'] != $url'],
            correct: [1],
            link: ["http://www.php.net/manual/en/function.headers-list.php"],
            explanation: ["According to the manual: headers_list — Returns a list of response headers sent (or ready to send)"]
        }
    },
    q90: {
        id: 90,
        text: 'One can ensure that headers can always be sent from a PHP script by doing what?',
        type: 2,
        category: 1,
        answer: {
            options: ['Enable header buffering in PHP 5', 'Set the header.force INI directive to true', 'Enable output buffering in PHP 5', 'There is no way to ensure that headers can always be set, they must always be checked', 'None of the above'],
            correct: [3],
            link: ["http://php.net/manual/en/function.ob-start.php", "http://php.net/manual/en/function.header.php"],
            explanation: ["While output buffering is active no output is sent from the script (other than headers), instead the output is stored in an internal buffer."]
        }
    },
    q91: {
        id: 91,
        text: 'When is it acceptable to store sensitive information in an HTTP cookie?',
        type: 2,
        category: 3,
        answer: {
            options: ['Only under extremely controlled situations', 'When the cookie is sent over a secure HTTP request', 'When it is encrypted', 'It is always acceptable'],
            correct: [3],
            link: ["http://php.net/manual/en/function.setcookie.php"],
            explanation: ["The best option (besides never storing sensitive information in a cookie) is number 3"]
        }
    },
    q92: {
        id: 92,
        text: 'Removing undesired markup tags from input can best be done using which function?',
        type: 2,
        category: 6,
        answer: {
            options: ['strip_tags()', 'tidy_strip_html()', 'str_replace()', 'strip_html()'],
            correct: [1],
            link: ["http://www.php.net/manual/en/function.strip-tags.php"],
            explanation: []
        }
    },
    q93: {
        id: 93,
        text: 'When using a function such as strip_tags, are markup-based attacks still possible?',
        type: 2,
        category: 3,
        answer: {
            options: ['No, HTML does not pose any security risks', 'Yes, even a &lt;p&gt; HTML tag is a security risk', 'Yes, attributes of allowed tags are ignored', 'No, strip_tags will prevent any markup-based attack'],
            correct: [3],
            link: ["http://www.php.net/manual/en/function.strip-tags.php"],
            explanation: ["Number 3 is the more complete answer."]
        }
    },
    q94: {
        id: 94,
        text: 'Consider the following PHP string representing an SQL statement:  <p class="ceresIndent"><code>$query = "UPDATE users SET password=\'$password\' WHERE username=\'$username\'";</code></p> <p class="ceresIndent">Which of the following values for <code>$username</code> or <code>$password</code> would change the behavior of this query when executed?</p>',
        type: 2,
        category: 3,
        answer: {
            options: ['None of the above', '$username = "foobar\' WHERE username=\'admin\'";', '$password = "foobar\' WHERE username=\'admin\' --:";', '$password = "\"foobar\" WHERE username=\"admin\"";'],
            correct: [3],
            link: ["http://php.net/manual/en/security.database.sql-injection.php"],
            explanation: ["The \"--\" is the SQL notation for a comment."]
        }
    },
    q95: {
        id: 95,
        text: 'SQL Injections can be best prevented using which of the following database technologies?',
        type: 2,
        category: 3,
        answer: {
            options: ['All of the above', 'Prepared Statements', 'Persistent Connections', 'Unbuffered Queries', 'Query escaping'],
            correct: [2],
            link: ["http://php.net/manual/en/pdo.prepared-statements.php"],
            explanation: ["the 5th option is also correct, but the 2nd is the right choice because we are asked for the \"best\" method."]
        }
    },
    q96: {
        id: 96,
        text: 'Where should indirectly executed PHP scripts (i.e. include files) be stored in the file system?',
        type: 2,
        category: 3,
        answer: {
            options: ['Outside of the Document Root', 'In the document root', 'Anywhere you want', 'In the database'],
            correct: [1],
            link: ["http://phpsec.org/projects/guide/3.html"],
            explanation: ["It's better to keep those files outside the document root in a private folder."]
        }
    },
    q97: {
        id: 97,
        text: 'When executing system commands from PHP, what should one do to keep applications secure?',
        type: 3,
        category: 3,
        answer: {
            options: ['Remove all quote characters from variables used in a shell execution', 'Avoid using shell commands when PHP equivlents are available', 'Hard code all shell commands', 'Escape all shell arguments', 'Escape all shell commands executed'],
            correct: [2, 3, 4],
            link: ["http://www.php.net/manual/en/function.exec.php"],
            explanation: []
        }
    },
    q98: {
        id: 98,
        text: 'Whyis it important from a security perspective to never display PHP error messages directly to the end user, yet always log them?',
        type: 3,
        category: 3,
        answer: {
            options: ['Error messages will contain sensitive session information', 'Error messages can contain cross site scripting attacks', 'Security risks involved in logging are handled by PHP', 'Error messages give the perception of insecurity to the user', 'Error messages can contain data useful to a potential attacker'],
            correct: [4, 5],
            link: ["http://www.w3schools.com/php/php_error.asp"],
            explanation: []
        }
    },
    q99: {
        id: 99,
        text: 'The MVC pattern in Web development involves which of the following components?',
        type: 3,
        category: 2,
        answer: {
            options: ['View', 'Controller', 'Validation', 'Model', 'Front Controller'],
            correct: [1, 2, 4],
            link: ["http://en.wikipedia.org/wiki/Model–view–controller"],
            explanation: ["MVC = Model View Controller"]
        }
    },
    q100: {
        id: 100,
        text: 'Which of the following aspects of the MVC pattern is used in conjunction with the database?',
        type: 2,
        category: 2,
        answer: {
            options: ['Model', 'Schema', 'Validation', 'Controller', 'View'],
            correct: [1],
            link: ["http://en.wikipedia.org/wiki/Model–view–controller"],
            explanation: []
        }
    },
    q101: {
        id: 101,
        text: 'What are the primary benefits of object oriented programming?',
        type: 3,
        category: 2,
        answer: {
            options: ['Maintainability', 'Execution Speed', 'Encapsulation', 'Code Reuse'],
            correct: [1, 3, 4],
            link: ["http://en.wikipedia.org/wiki/Object-oriented_programming#cite_ref-realisticcodereuse_23-0"],
            explanation: []
        }
    },
    q102: {
        id: 102,
        text: 'What consistutes a View in the MVC pattern for PHP 5, in the following list?',
        type: 3,
        category: 2,
        answer: {
            options: ['Iterators', 'PDO', 'Classes', 'PHP', 'Smarty'],
            correct: [4, 5],
            link: ["http://en.wikipedia.org/wiki/Model–view–controller#Concepts"],
            explanation: ["Smarty is a templating system, while PHP is also, in itself, a templating system."]
        }
    },
    q103: {
        id: 103,
        text: 'Which of the following extensions are no longer part of PHP 5 and have been moved to PECL?',
        type: 3,
        category: 9,
        answer: {
            options: ['tidy', 'mysql', 'w32api', 'curl', 'dio'],
            correct: [3, 5],
            link: ["http://www.php.net/manual/en/intro.w32api.php", "http://www.php.net/manual/en/intro.dio.php"],
            explanation: ["Tidy is also a part os PECL, but it is so since PHP4. \nThis question does not affect the PHP 5.3 certification exam, as difference between PHP4 and PHP5 are no longer part of the test."]
        }
    },
    q104: {
        id: 104,
        text: 'Which of the following functions were added to PHP 5 for dealing with arrays?',
        type: 3,
        category: 9,
        answer: {
            options: ['array_intersect_key()', 'array_unshift()', 'array_diff_key()', 'array_merge()', 'array_slice()'],
            correct: [1, 3],
            link: ["http://www.php.net/manual/en/function.array-intersect-key.php", "http://www.php.net/manual/en/function.array-diff-key.php"],
            explanation: ["This question does not affect the PHP 5.3 certification exam, as difference between PHP4 and PHP5 are no longer part of the test."]
        }
    },
    q105: {
        id: 105,
        text: 'Consider the following script: <pre class=\'brush: php; html-script: true\'>&lt;?phpfunction func(&amp;$arraykey) { return $arraykey; // function returns by value!}$array = array(\'a\', \'b\', \'c\');foreach (array_keys($array) as $key) { $y = &amp;func($array[$key]); $z[] =&amp; $y;}var_dump($z);?&gt;</pre> Thiscode has changed behavior in PHP 5. Identify the output of this scriptas it would have been in PHP 4, as well as the new behavior in PHP 5.',
        type: 3,
        category: 9,
        answer: {
            options: ['array(\'a\', \'a\', \'b\')', 'array(\'a\', \'b\', \'c\')', 'array(\'c\', \'b\', \'a\')', 'array(\'c\', \'c\', \'c\')', 'array(\'b\', \'b\', \'b\')'],
            correct: [2, 4],
            link: ["http://www.php.net/manual/en/language.references.return.php", "http://php.net/manual/en/functions.returning-values.php"],
            explanation: ["This question does not affect the PHP 5.3 certification exam, as difference between PHP4 and PHP5 are no longer part of the test."]
        }
    },
    q106: {
        id: 106,
        text: 'Consider the following code block: <pre class=\'brush: php; html-script: true\'>&lt;?phpfunction &amp;myFunction() { $string = "MyString"; var_dump($string); return ($undefined);}for($i = 0; $i &lt; 10; $i++) { $retval = myFunction();}?&gt;</pre> This code block\'s behavior has changed between PHP 4 and PHP 5. Why?',
        type: 2,
        category: 9,
        answer: {
            options: ['None of the above', 'This could would cause an automatic segmentation fault in PHP 4', 'This code would throw a syntax error in PHP 4', 'Returning an undefined variable by reference in PHP 4 would cause eventual memory corruption', 'You could not return undefined variables by reference in PHP 4'],
            correct: [1],
            link: ["http://php.net/manual/en/function.return.php"],
            explanation: ["This question does not affect the PHP 5.3 certification exam, as difference between PHP4 and PHP5 are no longer part of the test."]
        }
    },
    q107: {
        id: 107,
        text: 'When migrating the following code from PHP 4 to PHP 5, what should be changed? <pre class=\'brush: php; html-script: true\'>&lt;?phpclass MyClass {function MyClass($param) {/* Do something with $param */$this-&gt;_doSomething($param);}// Private method to MyClassfunction _doSomething($param) {/* Do something with $param */}}class AnotherClass extends MyClass {var $param = "foo";function AnotherClass() {parent::MyClass($this-&gt;param);}}?&gt;</pre>',
        type: 3,
        category: 9,
        answer: {
            options: ['Access modifiers should be added to methods', 'The Constructors for the objects should both be renamed to __construct', 'The use of the parent keyword has changed to \'super\'', 'Constructors must have the same parameter lists'],
            correct: [1, 2],
            link: ["http://php.net/manual/en/language.oop5.decon.php", "http://devzone.zend.com/article/1714#Heading4"],
            explanation: ["This question does not affect the PHP 5.3 certification exam, as difference between PHP4 and PHP5 are no longer part of the test."]
        }
    },
    q108: {
        id: 108,
        text: 'Assuming every method call below returns an instance of an object, how can the following be re-written in PHP 5? <pre class=\'brush: php; html-script: true\'>&lt;?php$a = new MyClass();$b = $a-&gt;getInstance();$c = $b-&gt;doSomething();?&gt;</pre>',
        type: 2,
        category: 9,
        answer: {
            options: ['$c = ((MyClass)$a-&gt;getInstance())-&gt;doSomething();', 'This cannot be re-written in PHP 5', '$c = $a-&gt;getInstance()-&gt;doSomething();', '$c = (MyClass)$a-&gt;getInstance();', '$c = (new MyClass())-&gt;getInstance()-&gt;doSomething();'],
            correct: [3, 5],
            link: [],
            explanation: ["This question does not affect the PHP 5.3 certification exam, as difference between PHP4 and PHP5 are no longer part of the test."]
        }
    },
    q109: {
        id: 109,
        text: 'How can the following code be re-written from PHP 4 to PHP 5?  <pre class=\'brush: php; html-script: true\'>&lt;?phpif(get_class($myObj) == "MyClass") {// Do something}?&gt;</pre>',
        type: 2,
        category: 9,
        answer: {
            options: ['if(get_class($myObj) === "MyObject)', 'if(strtolower(get_class($myObj)) == "MyClass")', 'if($myObj implements MyClass)', 'if($myObj instanceof Object)', 'if($myObj instanceof MyClass)'],
            correct: [5],
            link: ["http://php.net/manual/en/internals2.opcodes.instanceof.php"],
            explanation: ["This question does not affect the PHP 5.3 certification exam, as difference between PHP4 and PHP5 are no longer part of the test."]
        }
    },
    q110: {
        id: 110,
        text: 'Is this code valid only in PHP 4, in PHP 5, or both? <pre class=\'brush: php; html-script: true\'>&lt;?phpfunction myfunction(&amp;$myvalue = null) { /* ... */}?&gt;</pre>',
        type: 2,
        category: 9,
        answer: {
            options: ['Both', 'PHP 5', 'PHP 4'],
            correct: [2],
            link: ["http://php.net/manual/en/functions.arguments.php"],
            explanation: ["This question does not affect the PHP 5.3 certification exam, as difference between PHP4 and PHP5 are no longer part of the test."]
        }
    },
    q111: {
        id: 111,
        text: 'Unlikea database such as MySQL, SQLite columns are not explicitly typed.Instead, SQLite catagorizes data into which of the following catagories?',
        type: 3,
        category: 7,
        answer: {
            options: ['textual', 'unicode', 'numeric', 'binary', 'constant'],
            correct: [1, 3],
            link: ["http://www.sqlite.org/datatype3.html"],
            explanation: ["The database engine may convert values between numeric storage classes (INTEGER and REAL) and TEXT during query execution."]
        }
    },
    q112: {
        id: 112,
        text: 'Which of the following SQL statements will improve SQLite write performance?',
        type: 3,
        answer: {
            options: ['PRAGMA locking_mode = "Row";', 'PRAGMA count_changes = Off;', 'PRAGMA default_synchronous = Off;', 'PRAGMA default_synchronous = On;', 'PRAGMA locking_mode = "Table";'],
            correct: [2, 3],
            link: ["http://web.utk.edu/~jplyon/sqlite/SQLite_optimization_FAQ.html#pragmas"],
            explanation: []
        }
    },
    q113: {
        id: 113,
        text: 'Consider the following code snippet: <pre class=\'brush: php; html-script: true\'>&lt;?php$link = mysqli_connect("hostname", "username", "password");if(!$link){ $error = ?????? die("Could not connect to the database: $error");}?&gt;</pre> What would go in place of the ???? above for this script to function properly?',
        type: 2,
        answer: {
            options: ['mysqli_connect_error();', 'mysqli_connect_error($link);', 'mysqli_error();', '$_MySQL[\'connect_error\']', 'mysqli_get_connect_error();'],
            correct: [1],
            link: ["http://php.net/manual/en/mysqli.connect-error.php"],
            explanation: []
        }
    },
    q114: {
        id: 114,
        text: 'Consider the following code snippet: <pre class=\'brush: php; html-script: true\'>&lt;?php$query = "INSERT INTO mytable (myinteger, mydouble, myblob, myvarchar) VALUES (?, ?, ?, ?)";$statement = mysqli_prepare($link, $query);if(!$statement){ die(mysqli_error($link));}/* The variables being bound to by MySQLi don\'t need to exist prior to binding */mysqli_bind_param($statement, "idbs", $myinteger, $mydouble, $myblob, $myvarchar);/* ???????????? */ /* execute the query, using the variables as defined. */if(!mysqli_execute($statement)){ die(mysqli_error($link));}?&gt;</pre> Assuming this snippet is a smaller part of a correctly written script, what actions must occur in place of the <code>?????</code> in the above code snippet to insert a row with the following values: <code>10</code>, <code>20.2</code>, <code>foo</code>, <code>string</code> ?',
        type: 2,
        answer: {
            options: ['A transaction must be begun and the variables must be assigned', 'Each value must be assigned prior to calling mysqli_bind_param(), and thus nothing should be done', 'Use mysqli_bind_value() to assign each of the values', 'Assign $myinteger, $mydouble, $myblob, $myvarchar the proper values'],
            correct: [4],
            link: ["http://www.php.net/manual/en/mysqli-stmt.bind-param.php", "http://php.net/manual/en/mysqli.prepare.php"],
            explanation: []
        }
    },
    q115: {
        id: 115,
        text: 'Consider the following code snippet: <pre class=\'brush: php; html-script: true\'>&lt;?php$query = "SELECT first, last, phone FROM contacts WHERE first LIKE \'John%\'";$statement = mysqli_prepare($link, $query);mysqli_execute($statement);/* ???? */while(($result = mysqli_stmt_fetch($statement))){ print "Name: $first $last"; print "Phone: $phone";}?&gt;</pre> Assuming this code snippet is part of a larger correct application, what must be done in place of the <code>????</code> above for the correct output to be displayed?',
        type: 2,
        answer: {
            options: ['None of the above', 'mysqli_fetch_columns($first, $last, $phone);', 'mysqli_stmt_bind_result($statement, $first, $last, $phone);', 'A while loop, fetching the row and assigning $first, $last, and $phone the proper value'],
            correct: [3],
            link: ["http://www.php.net/manual/en/mysqli-stmt.bind-result.php"],
            explanation: []
        }
    },
    q116: {
        id: 116,
        text: 'Which of the following cases are cases when you should use transactions?',
        type: 3,
        answer: {
            options: ['Updating a single row in a table', 'Inserting a new row into a single table', 'Performing a stored procedure', 'Selecting rows from multiple different tables', 'Updating a single row in multiple different tables'],
            correct: [5],
            link: ["http://php.net/manual/en/pdo.transactions.php"],
            explanation: []
        }
    },
    q117: {
        id: 117,
        text: 'PHP 5 supports which of the following XML parsing methods?',
        type: 3,
        answer: {
            options: ['SAX', 'FastDOM', 'DOM', 'XPath', 'XML to Object mapping'],
            correct: [1, 3, 4, 5],
            link: ["http://pear.php.net/package/XML_HTMLSax", "http://php.net/manual/de/book.dom.php", "http://php.net/manual/de/simplexmlelement.xpath.php", "http://www.php.net/manual/en/function.simplexml-load-file.php"],
            explanation: []
        }
    },
    q118: {
        id: 118,
        text: 'Which of the following is not a valid PDO DSN?',
        type: 2,
        answer: {
            options: ['All of the above are valid', 'mysql:unix_socket=/tmp/mysql.sock;dbname=testdb', 'oci:dbname=//localhost:1521/mydb', 'mysql:host=localhost;port=3307;dbname=testdb', 'sqlite2:/opt/databases/mydb.sq2'],
            correct: [1],
            link: ["http://php.net/manual/en/pdo.drivers.php", "http://www.php.net/manual/en/ref.pdo-mysql.connection.php", "http://www.php.net/manual/en/ref.pdo-oci.connection.php", "http://www.php.net/manual/en/ref.pdo-sqlite.connection.php"],
            explanation: []
        }
    },
    q119: {
        id: 119,
        text: 'Whenconnecting to a database using PDO, what must be done to ensure thatdatabase credentials are not compromised if the connection were to fail?',
        type: 2,
        answer: {
            options: ['wrap the PDO DSN in a try/catch block to catch any connection exception', 'Use constants in the PDO DSN', 'Place the login credentials in the php.ini file', 'Disable E_STRICT and E_NOTICE error reporting levels'],
            correct: [1],
            link: ["http://www.php.net/manual/en/pdo.connections.php"],
            explanation: []
        }
    },
    q120: {
        id: 120,
        text: 'Consider the following script: <pre class=\'brush: php; html-script: true\'>&lt;?phptry { $dbh = new PDO("sqlite::memory:");} catch(PDOException $e) { print $e-&gt;getMessage();}$dbh-&gt;query("CREATE TABLE foo(id INT)");$stmt = $dbh-&gt;prepare("INSERT INTO foo VALUES(:value)");$value = null;$data = array(1,2,3,4,5);$stmt-&gt;bindParam(":value", $value);/* ?????? */try { foreach($data as $value) { /* ????? */ }} catch(PDOException $e) { /* ??????? */}/* ?????? */?&gt;</pre> Whatlines of code need to go into the missing places above in order forthis script to function properly and insert the data into the databasesafely?',
        type: 3,
        answer: {
            options: ['$dbh-&gt;beginTransaction();', '$dbh-&gt;commit();', '$stmt-&gt;execute();', '$dbh-&gt;rollback();', '$dbh-&gt;query($stmt);'],
            correct: [1, 3, 4, 2],
            link: ["http://www.php.net/manual/en/pdo.query.php"],
            explanation: []
        }
    },
    q121: {
        id: 121,
        text: 'Implementing your own PDO class requires which steps from the list below?',
        type: 3,
        answer: {
            options: ['Extending the PDOStatement Class', 'Set the PDO::ATTR_STATEMENT_CLASS parameter', 'Call the PDO::setStatementClass() method', 'Extend the PDO class', 'Set the PDO::ATTR_USE_CLASS paramater'],
            correct: [4, 1, 2],
            link: ["http://php.net/manual/en/book.pdo.php"],
            explanation: []
        }
    },
    q122: {
        id: 122,
        text: 'When embedding PHP into XML documents, what must you ensure is true in order for things to function properly?',
        type: 2,
        answer: {
            options: ['Disabling of the short_tags PHP.ini directive', 'Enabling the asp_tags PHP.ini directive', 'That you have XPath support enabled in PHP 5', 'That your XML documents are well-formed', 'None of the above, PHP can be embedded in XML in all cases.'],
            correct: [4],
            link: ["http://www.daaq.net/old/php/index.php?page=embedding+php&amp;parent=php+basics"],
            explanation: []
        }
    },
    q123: {
        id: 123,
        text: 'What XML technology is used when you mix two different document types in a single XML document?',
        type: 2,
        answer: {
            options: ['Validators', 'DTD', 'Transformations', 'Namespaces'],
            correct: [4],
            link: ["http://www.webdeveloper.com/forum/showthread.php?t=230532"],
            explanation: []
        }
    },
    q124: {
        id: 124,
        text: 'Consider the following example XML document: <pre class=\'brush: php; html-script: true\'>&lt;?xml version="1.0" encoding="ISO-8859-1" ?&gt;&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;&lt;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"&gt; &lt;head&gt; &lt;title&gt;XML Example&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;p&gt; Moved to &lt;&lt;a href="http://example.org/"&gt;http://www.example.org/&lt;/a&gt;.&gt; &lt;br&gt; &lt;/p&gt; &lt;/body&gt;&lt;/html&gt;</pre> What is wrong with this document, and how can it be corrected?',
        type: 3,
        answer: {
            options: ['The document is completely valid', 'All special XML characters must be represented as entities within the content of a node', 'All tags must be closed', 'You cannot specify a namespace for the &lt;html&gt; attribute', 'The DOCTYPE declaration is malformed'],
            correct: [2, 3],
            link: ["http://en.wikipedia.org/wiki/Well-formed_element", "http://en.wikipedia.org/wiki/XML#Escaping"],
            explanation: []
        }
    },
    q125: {
        id: 125,
        text: 'Event-based XML parsing is an example of which parsing model?',
        type: 2,
        answer: {
            options: ['SAX', 'DOM', 'XML Object Mapping', 'XPath', 'XQuery'],
            correct: [1],
            link: ["http://en.wikipedia.org/wiki/Simple_API_for_XML#XML_processing_with_SAX"],
            explanation: []
        }
    },
    q126: {
        id: 126,
        text: 'Consider the following code segment: <pre class=\'brush: php; html-script: true\'>&lt;?php$xmldata = &lt;&lt;&lt; XML&lt;?xml version="1.0" encoding="ISO-8859-1" ?&gt;&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;&lt;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"&gt; &lt;head&gt; &lt;title&gt;XML Example&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;p&gt; Moved to &amp;lt;&lt;a href="http://example.org/"&gt;http://www.example.org/&lt;/a&gt;.&amp;gt; &lt;br/&gt; &lt;/p&gt; &lt;/body&gt;&lt;/html&gt;XML;$xml = xml_parser_create("UTF-8");/* ??????? */xml_parse($xml, $xmldata);function xml_start_handler($xml, $tag, $attributes) {print "Tag: $tag&lt;br/&gt;";}function xml_end_handler($xml, $tag) {}?&gt;</pre> What should be placed in place of <code>??????</code> above to have the above script display the name of each tag within the XML document?',
        type: 2,
        answer: {
            options: ['xml_set_callback("xml_start_handler");', 'xml_set_element_handler($xml, "xml_start_handler", "xml_end_handler");', 'xml_node_set_handler("xml_start_handler", "xml_end_handler");', 'xml_node_set_handler("xml_start_handler");'],
            correct: [2],
            link: ["http://php.net/manual/en/function.xml-set-element-handler.php"],
            explanation: []
        }
    },
    q127: {
        id: 127,
        text: 'What is the primary benefit of a SAX-based XML parser compared to DOM?',
        type: 2,
        answer: {
            options: ['All of the above', 'Faster then DOM methods', 'Requires less memory then DOM', 'Easier to develop parsers'],
            correct: [1],
            link: ["http://en.wikipedia.org/wiki/Simple_API_for_XML#Benefits"],
            explanation: []
        }
    },
    q128: {
        id: 128,
        text: 'What does the following PHP script accomplish? <pre class=\'brush: php; html-script: true\'>&lt;?php $dom = new DomDocument(); $dom-&gt;load(\'test.xml\'); $body = $dom-&gt;documentElement-&gt;getElementsByTagName(\'body\')-&gt;item(0); echo $body-&gt;getAttributeNode(\'background\')-&gt;value. "";?&gt;</pre>',
        type: 2,
        answer: {
            options: ['Displays the content of every &lt;body&gt; node', 'Displays the "background" attribute for the first node in the XML document named "body"', 'Displays the content of every node that has a "background" node', 'Displays the "background" attribute of every node named "body"'],
            correct: [2],
            link: ["http://www.php.net/manual/en/function.domdocument-get-elements-by-tagname.php"],
            explanation: []
        }
    },
    q129: {
        id: 129,
        text: 'Creating new nodes in XML documents using PHP can be done using which XML/PHP 5 technologies?',
        type: 3,
        answer: {
            options: ['XQuery', 'XPath', 'SimpleXML', 'DOM', 'SAX'],
            correct: [3, 4],
            link: ["http://php.net/manual/en/class.simplexmlelement.php", "http://php.net/manual/en/domdocument.createelement.php"],
            explanation: []
        }
    },
    q130: {
        id: 130,
        text: 'Consider the following simple PHP script: <pre class=\'brush: php; html-script: true\'>&lt;?php$dom = new DomDocument();$dom-&gt;load(\'test.xml\');$xpath = new DomXPath($dom);$nodes = $xpath-&gt;query(???????, $dom-&gt;documentElement);echo $nodes-&gt;item(0)-&gt;getAttributeNode(\'bgcolor\')-&gt;value . "";?&gt;</pre> What XPath query should go in the <code>?????? above</code> to display the "bgcolor" attribute of the first "body" node in the XML document?',
        type: 2,
        answer: {
            options: ['"*[local-name()=\'body\']"', '"/body[0]/text"', '"/body/body[0]"', '"name=\'body\'"', '"*[lname()=\'body\']"'],
            correct: [1],
            link: ["http://www.w3.org/TR/xpath/#function-local-name"],
            explanation: []
        }
    },
    q131: {
        id: 131,
        text: 'Consider the following PHP script fragment: <pre class=\'brush: php; html-script: true\'>&lt;?php$title = $dom-&gt;createElement(\'title\');$node = ????????$title-&gt;appendChild($node);$head-&gt;appendChild($title);?&gt;</pre> What should <code>???????</code> be replaced with to add a <code>&lt;title&gt;</code> node with the value of <code>Hello, World!</code>',
        type: 2,
        answer: {
            options: ['$dom-&gt;createTextNode("Hello, World");', '$dom-&gt;appendElement($title, "text", "Hello, world!");', '$dom-&gt;appendTextNode($title, "Hello, World!");', '$dom-&gt;createElement(\'text\', "Hello, World");', 'None of the above'],
            correct: [5],
            link: ["http://php.net/manual/en/domdocument.createtextnode.php", "http://php.net/manual/en/domdocument.createelement.php"],
            explanation: []
        }
    },
    q132: {
        id: 132,
        text: 'When working with <code>SimpleXML</code> in PHP 5, the four basic rules on how the XML document is accessed are which of the following?',
        type: 3,
        answer: {
            options: ['Element namespaces are denoted by the \'namespace\' attribute', 'converting an element to a string denotes text data', 'Non-numeric indexes are element attributes', 'Numeric indexes are elements', 'Properties denote element iterators'],
            correct: [2, 3, 4, 5],
            link: ["http://docs.php.net/manual/en/simplexmlelement.getnamespaces.php"],
            explanation: []
        }
    },
    q133: {
        id: 133,
        text: 'SimpleXML objects can be created from what types of data sources?',
        type: 3,
        answer: {
            options: ['A String', 'An array', 'A DomDocument object', 'A URI', 'A Database resource'],
            correct: [1, 3, 4],
            link: ["http://php.net/manual/en/simplexmlelement.construct.php"],
            explanation: []
        }
    },
    q134: {
        id: 134,
        text: 'Given the following XML document in a SimpleXML object: <pre class=\'brush: php; html-script: true\'>&lt;?xml version="1.0" encoding="ISO-8859-1" ?&gt;&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;&lt;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"&gt; &lt;head&gt; &lt;title&gt;XML Example&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;p&gt; Moved to &amp;lt;&lt;a href="http://example.org/"&gt;http://www.example.org/&lt;/a&gt;.&amp;gt; &lt;br/&gt; &lt;/p&gt; &lt;/body&gt;&lt;/html&gt;</pre> Select the proper statement below which will display the HREF attribute of the anchor tag.',
        type: 2,
        answer: {
            options: ['$sxe-&gt;body-&gt;p[0]-&gt;a[1][\'href\']', '$sxe-&gt;body-&gt;p-&gt;a-&gt;href', '$sxe-&gt;body-&gt;p-&gt;a[\'href\']', '$sxe[\'body\'][\'p\'][0][\'a\'][\'href\']', '$sxe-&gt;body-&gt;p[1]-&gt;a[\'href\']'],
            correct: [3],
            link: ["http://www.php.net/manual/en/simplexml.examples-basic.php"],
            explanation: []
        }
    },
    q135: {
        id: 135,
        text: 'Given the following PHP script: <pre class=\'brush: php; html-script: true\'>&lt;?php $xmldata = &lt;&lt;&lt; XML&lt;?xml version="1.0" encoding="ISO-8859-1" ?&gt;&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;&lt;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"&gt; &lt;head&gt; &lt;title&gt;XML Example&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;p&gt; &lt;b&gt;Hello, World!&lt;/b&gt; &lt;/p&gt; &lt;/body&gt;&lt;/html&gt;XML;$sxe = simplexml_load_string($xmldata);$p = $sxe-&gt;body-&gt;p;$string = ????????print $string;?&gt;</pre> What should go in place of <code>?????</code> above to print the string <code>Hello, World!</code> (with no leading/trailing whitespace or markup)?',
        type: 2,
        answer: {
            options: ['trim(($p[1]));', 'trim(strip_tags(($p-&gt;asText())));', 'trim(strip_tags(($p-&gt;asXML())));', 'trim(($p-&gt;asXML()));', 'strip_tags(($p-&gt;asXML()));'],
            correct: [3],
            link: ["http://php.net/manual/en/simplexmlelement.asxml.php"],
            explanation: []
        }
    },
    q136: {
        id: 136,
        text: 'The following is a common XML structure used in service oriented architectures, what does it represent? <pre class=\'brush: php; html-script: true\'>&lt;?xml version="1.0"?&gt;&lt;methodCall&gt; &lt;methodName&gt;myMethod&lt;/methodName&gt; &lt;params&gt; &lt;param&gt; &lt;value&gt;&lt;string&gt;HI!&lt;/string&gt;&lt;/value&gt; &lt;/param&gt; &lt;/params&gt;&lt;/methodCall&gt;</pre>',
        type: 2,
        answer: {
            options: ['None of the above', 'A fragment of a complete SOAP request', 'XML-RPC', 'REST', 'SOAP'],
            correct: [3],
            link: ["http://en.wikipedia.org/wiki/XML-RPC"],
            explanation: []
        }
    },
    q137: {
        id: 137,
        text: 'Which of the following functions are part of PHP\'s internal <code>Iterator</code> interface?',
        type: 3,
        answer: {
            options: ['rewind()', 'valid()', 'next()', 'key()', 'current()'],
            correct: [1, 2, 3, 4, 5],
            link: ["http://php.net/manual/en/class.iterator.php"],
            explanation: []
        }
    },
    q138: {
        id: 138,
        text: 'Consider the following script: <pre class=\'brush: php; html-script: true\'>&lt;?php$dom = new DOMDOcument();$dom-&gt;load("myxmlfile.xml");foreach($dom-&gt;documentElement-&gt;childNodes as $child){ if(($child-&gt;nodeType == XML_ELEMENT_NODE) &amp;&amp; $child-&gt;nodeName == "item") { foreach($child-&gt;childNodes as $item) { if(($item-&gt;nodeType == XML_ELEMENT_NODE) &amp;&amp; ($item-&gt;nodeName == "title")) { print "$item-&gt;firstChild-&gt;data"; } } }}?&gt;</pre> Assumingthe referenced XML document exists and matches the parsing logic, whatshould be displayed when this script is executed?',
        type: 2,
        answer: {
            options: ['None of the above', 'The XML of each \'title\' node', 'The XML of each \'item\' node', '"Title" for every title node in the document', 'The contents of every \'title\' node which exists under an \'item\' node'],
            correct: [5],
            link: ["http://php.net/manual/en/function.domnode-node-type.php"],
            explanation: []
        }
    },
    q139: {
        id: 139,
        text: 'Which of the following methods are used to fetch data from a PDO Statement?',
        type: 3,
        answer: {
            options: ['fetchColumn()', 'fetchObject()', 'fetch()', 'fetchClass()', 'fetchRow()'],
            correct: [1, 2, 3],
            link: ["http://php.net/manual/en/pdostatement.fetch.php"],
            explanation: []
        }
    },
    q140: {
        id: 140,
        text: 'In a general sense, which is more important: performance or maintainability of an application?',
        type: 2,
        answer: {
            options: ['performance first, maintainability second', 'Maintainability first, performance second', 'Maintainability', 'Performance'],
            correct: [2],
            link: [],
            explanation: []
        }
    },
    q141: {
        id: 141,
        text: 'When writing portable database code using PDO, what is the <code>PDO::ATTR_CASE</code> attribute useful for?',
        type: 2,
        answer: {
            options: ['None of the above', 'Ensuring that all columns are of a particular case when fetched', 'Adjusting the case of a query before it is processed for compatibility reasons', 'Controls the switch logic of how queries are processed', 'Allows you to adjust the memory cache (or "case") for increased performance'],
            correct: [3],
            link: ["http://php.net/manual/en/pdo.setattribute.php"],
            explanation: []
        }
    },
    q142: {
        id: 142,
        text: 'Consider the following PHP code segment, which attempts to execute a PDO query: <pre class=\'brush: php; html-script: true\'>&lt;?phptry { $dbh-&gt;exec($sql);} catch (PDOException $e) { // display warning message $info = $e-&gt;errorInfo;}?&gt;</pre> In the event of a PDOException, <code>$info</code> is set with the contents of the <code>$errorInfo</code> property of the exception. Which of the following are accurate descriptions of the contents?',
        type: 3,
        answer: {
            options: ['$info[1] is the database-specific error code', '$info[2] is the database-specific error message', '$info[1] is the unified error code', '$info[0] is the unified error code', '$info[0] Is the Database-specific error message'],
            correct: [1, 2, 4],
            link: ["http://www.php.net/manual/en/pdo.errorinfo.php"],
            explanation: []
        }
    },
    q143: {
        id: 143,
        text: 'Which of the following functions allow you to introspect the call stack during execution of a PHP script?',
        type: 3,
        answer: {
            options: ['get_backtrace()', 'get_function_stack()', 'debug_backtrace()', 'debug_print_backtrace()', 'print_backtrace()'],
            correct: [3, 4],
            link: ["http://php.net/manual-lookup.php?pattern=backtrace=en"],
            explanation: []
        }
    },
    q144: {
        id: 144,
        text: 'Whenworking with a database, which of the following can be used to mitigatethe possibility of exposing your database credientials to a malicioususer?',
        type: 3,
        answer: {
            options: ['Moving all database credentials into a single file', 'Moving all database credentials outside of the document root', 'Restricting access to files not designed to be executed independently', 'Setting creditial information as system environment variables', 'Using PHP constants instead of variables to store credentials'],
            correct: [2, 3, 4],
            link: ["http://forums.zend.com/viewtopic.php?f=63&amp;t=7124"],
            explanation: []
        }
    },
    q145: {
        id: 145,
        text: 'When running PHP in a shared host environment, what is the major security concern when it comes to session data?',
        type: 2,
        answer: {
            options: ['Sessions on shared hosts are easily hijacked by outside malicious users', 'All of the above', 'You cannot use a custom data store in shared hosts', 'Session data stored in the file system can be read by other scripts on the same shared host', 'Users outside the shared host can access any site which created a session for them'],
            correct: [4],
            link: ["http://phpsec.org/projects/guide/5.html"],
            explanation: []
        }
    },
    q146: {
        id: 146,
        text: 'Which of the following are examples of the new engine executor models available in PHP 5?',
        type: 3,
        answer: {
            options: ['Switch', 'Conditional', 'Goto', 'Call', 'Dynamic'],
            correct: [1, 3, 4],
            link: ["http://sebastian-bergmann.de/archives/504-PHP-5.1-Performance.html"],
            explanation: []
        }
    },
    q147: {
        id: 147,
        text: 'Which of the following are not true about streams?',
        type: 3,
        answer: {
            options: ['They are always seekable', 'When used properly they significantly reduce memory consumption', 'They can be applied to any data source', 'They are always bi-directional', 'They can be filtered'],
            correct: [1, 4],
            link: ["http://www.php.net/manual/en/streamwrapper.stream-seek.php", "http://www.php.net/manual/en/function.stream-get-meta-data.php", "http://php.net/manual/en/function.popen.php"],
            explanation: []
        }
    },
    q148: {
        id: 148,
        text: 'Using <code>flock()</code> to lock a stream is only assured to work under what circumstances?',
        type: 2,
        answer: {
            options: ['When running in a Linux environment local filesystem', 'When accessing the stream of the local filesystem', 'When running in a Windows environment and accessing a share', 'When accessing a bi-directional stream', 'When accessing a read-only stream'],
            correct: [2],
            link: ["http://php.net/manual/en/function.flock.php"],
            explanation: []
        }
    },
    q149: {
        id: 149,
        text: 'What is wrong with the following code snippet? Assume default configuration values apply. <pre class=\'brush: php; html-script: true\'>&lt;?php$fp = fsockopen(\'www.php.net\', 80);fwrite($fp, "GET / HTTP/1.0\rHost: www.php.net\r");$data = fread($fp, 8192);?&gt;</pre>',
        type: 2,
        answer: {
            options: ['The request is blocking and may cause fread() to hang', 'The HTTP request is malformed', 'This script should be re-written using fgets() instead of fread()', 'The request is non-blocking and fread() may miss the response', 'You cannot use fwrite() with fsockopen()'],
            correct: [2],
            link: ["http://php.net/manual/en/function.fsockopen.php"],
            explanation: []
        }
    },
    q150: {
        id: 150,
        text: '_______can be used to add additional functionality to a stream, such asimplementation of a specific protocol on top of a normal PHP streamimplementation.',
        type: 2,
        answer: {
            options: ['Buffered', 'Buckets', 'Wrappers', 'Filters'],
            correct: [3],
            link: ["http://php.net/manual/en/intro.stream.php"],
            explanation: []
        }
    },
    q151: {
        id: 151,
        text: 'Which of the following is not a valid <code>fopen()</code> access mode:',
        type: 2,
        answer: {
            options: ['b', 'x', 'a', 'w', 'r+'],
            correct: [1],
            link: ["http://php.net/manual/en/function.fopen.php"],
            explanation: []
        }
    },
    q152: {
        id: 152,
        text: 'The _______ constant in a CLI script is an automatically provided file resource representing standard input of the terminal.',
        type: 2,
        answer: {
            options: ['STDIN', '__STDIN__', 'STDIO', 'PHP::STDIO', 'STD_IN'],
            correct: [1],
            link: ["http://php.net/manual/en/wrappers.php.php"],
            explanation: []
        }
    },
    q153: {
        id: 153,
        text: 'What should go in the ??????? assignment below to create a Zlib-compressed file <code>foo.gz</code> with a compression level of <code>9</code>? <pre class=\'brush: php; html-script: true\'>&lt;?php$file = \'????????\';$fr = fopen($file, \'wb9\');fwrite($fr, $data);fclose($fr);?&gt;</pre>',
        type: 2,
        answer: {
            options: ['gzip://foo.gz?level=9', 'compress.zip://foo.gz?level=9', 'compress.zlib://foo.gz', 'compress.gzip://foo.gz?level=9', 'zlib://foo.gz'],
            correct: [3],
            link: ["http://php.net/manual/en/wrappers.compression.php"],
            explanation: []
        }
    },
    q154: {
        id: 154,
        text: 'Which of the following is not a valid default stream wrapper for PHP 5, assuming OpenSSL is enabled?',
        type: 2,
        answer: {
            options: ['ftps://', 'ftp://', 'sftp://', 'https://', 'http://'],
            correct: [3],
            link: ["http://www.php.net/manual/en/wrappers.php"],
            explanation: []
        }
    },
    q155: {
        id: 155,
        text: 'Whenopening a file in writing mode using the FTP handler, what must be doneso that the file will still be written to the server in the event itpreviously exists?',
        type: 2,
        answer: {
            options: ['Provide a context for fopen() using stream_context_create()', 'You must delete the file first before uploading a new file', 'Configure this behavior in the php.ini file using the ftp.overwrite directive', 'Open the file using the \'w+\' mode'],
            correct: [1],
            link: ["http://php.net/manual/en/context.ftp.php", "http://php.net/manual/en/function.stream-context-create.php"],
            explanation: []
        }
    },
    q156: {
        id: 156,
        text: 'Which of the following functions is used to determine if a given stream is blocking or not?',
        type: 2,
        answer: {
            options: ['stream_get_blocking', 'stream_get_meta_data', 'stream_is_blocking', 'stream_get_blocking_mode'],
            correct: [2],
            link: ["http://php.net/manual/en/function.stream-get-meta-data.php"],
            explanation: []
        }
    },
    q157: {
        id: 157,
        text: 'What is the difference between the <code>include</code> and <code>require</code> language constructs?',
        type: 2,
        answer: {
            options: ['Require constructs can\'t be used with URL filenames', 'Include constructs cause a fatal error if the file doesn\'t exist', 'There is no difference other than the name', 'Include constructs are processed at run time; require constructs are processed at compile time', 'Require constructs cause a fatal error if the file can\'t be read'],
            correct: [5],
            link: ["http://php.net/manual/en/function.require.php"],
            explanation: []
        }
    },
    q158: {
        id: 158,
        text: 'Whenwriting CLI scripts it is often useful to access the standard streamsavailable to the operating system such as standard input/output anderror. How does one access these streams in PHP 5?',
        type: 2,
        answer: {
            options: ['Use stdin(), stdout() and stderr() functions', 'PHP::STDIN, PHP::STDOUT, PHP::STDERR class constants in PHP 5', 'STDIN, STDOUT, and STDERR constants in PHP 5', 'use the php::stdin(), php::stdout(), and php::stderr() class methods'],
            correct: [3],
            link: ["http://php.net/manual/en/wrappers.php.php"],
            explanation: []
        }
    },
    q159: {
        id: 159,
        text: 'Howcan one take advantage of the time waiting for a lock during a streamaccess, to do other tasks using the following locking code as the base: <p class="ceresIndent"><code>$retval = flock($fr, LOCK_EX);</code></p>',
        type: 2,
        answer: {
            options: ['Use flock_lazy() instead of flock()', 'Use LOCK_EX|LOCK_NB instead of LOCK_EX', 'Use LOCK_UN instead of LOCK_EX', 'Check the value of $retval to see if the lock was obtained', 'Check to see if $retval == LOCK_WAIT'],
            correct: [2],
            link: ["http://php.net/manual/en/function.flock.php"],
            explanation: []
        }
    },
    q160: {
        id: 160,
        text: 'What is the output of? <pre class=\'brush: php; html-script: true\'>function apple($apples = 4){ $apples = $apples / 2; return $apples;}$apples = 10;apple($apples);echo $apples;</pre>',
        type: 2,
        answer: {
            options: ['2', '4', '5', '10'],
            correct: [4],
            link: ["http://www.php.net/manual/en/functions.returning-values.php"],
            explanation: []
        }
    },
    q161: {
        id: 161,
        text: 'Which statement will return the third parameter passed to a function?',
        type: 2,
        answer: {
            options: ['$argv[3];', '$argv[2];', 'func_get_args(3);', 'func_get_arg(2);', 'func_get_arg(3);'],
            correct: [4],
            link: ["http://php.net/manual/en/function.func-get-arg.php"],
            explanation: []
        }
    },
    q162: {
        id: 162,
        text: 'What is the output of the following code? <pre class=\'brush: php; html-script: true\'>function oranges(&amp;$oranges = 17){$oranges .= 1;}$apples = 5;oranges($apples);echo $apples++;</pre>',
        type: 2,
        answer: {
            options: ['16', '51', '15', '6', '5'],
            correct: [2],
            link: ["http://www.php.net/manual/en/functions.arguments.php", "http://php.net/manual/en/language.operators.increment.php"],
            explanation: []
        }
    },
    q163: {
        id: 163,
        text: 'What is the output of the following code? <pre class=\'brush: php; html-script: true\'>function pears(Array $pears){if (count($pears) &gt; 0){echo array_pop($pears);pears($pears);}}$fruit = array("Anjo", "Bartlet");pears($fruit);</pre>',
        type: 2,
        answer: {
            options: ['Bartlet', 'Anjo', 'BartletAnjo', 'AnjoBartlet', 'None / There is an Error'],
            correct: [3],
            link: ["http://php.net/manual/en/function.array-pop.php"],
            explanation: []
        }
    },
    q164: {
        id: 164,
        text: 'In PHP5 objects are passed by reference to a function when (Select the answer that is the most correct):',
        type: 2,
        answer: {
            options: ['Always; objects are passed by reference in PHP5', 'When the calling code preceeds the variable name with a &amp;', 'Never; objects are cloned when passed to a function', 'When the function paramater listing preceeds the variable name with a &amp;'],
            correct: [4],
            link: ["http://php.net/manual/en/language.oop5.references.php"],
            explanation: []
        }
    },
    q165: {
        id: 165,
        text: 'What is the output of the following code? <pre class=\'brush: php; html-script: true\'>&lt;?phpfunction byReference(&amp;$variable = 5){ echo ++$variable;}byReference();?&gt;</pre>',
        type: 2,
        answer: {
            options: ['No output or error. Variables can not be optional and passed by reference.', '5', '6'],
            correct: [3],
            link: ["http://php.net/manual/en/language.operators.increment.php"],
            explanation: []
        }
    },
    q166: {
        id: 166,
        text: 'What is the output of the following code? <pre class=\'brush: php; html-script: true\'>&lt;?phpfunction x10(&amp;$number) $number *= 10;$count = 5;x10($count);echo $count;?&gt;</pre>',
        type: 2,
        answer: {
            options: ['Error: Unexpected T_VARIABLE', '10', 'Notice regarding pass by reference', '50', '5'],
            correct: [1],
            link: ["http://www.tizag.com/phpT/phpfunctions.php"],
            explanation: []
        }
    },
    q167: {
        id: 167,
        text: 'What is the output of the following? <pre class=\'brush: php; html-script: true\'>&lt;?phpfunction 1dotEach($n){ if ($n &gt; 0) { 1dotEach(--$n); echo "."; }else { return $n; }}1dotEach(4);?&gt;</pre>',
        type: 2,
        answer: {
            options: ['...0', 'Parse Error: Syntax Error', '.....', '....', '...'],
            correct: [2],
            link: ["http://www.tizag.com/phpT/phpfunctions.php"],
            explanation: []
        }
    },
    q168: {
        id: 168,
        text: 'When your error reporting level includes <code>E_STRICT</code>, what will the output of the following code be? <pre class=\'brush: php; html-script: true\'>&lt;?phpfunction optionalParam($x = 1, $y = 5, $z){ if ((!$z &gt; 0)) { $z = 1; } for($count = $x; $count &lt; $y; $count+= $z) { echo "#"; }}optionalParam(2,4,2);?&gt;</pre>',
        type: 2,
        answer: {
            options: ['##', 'Notice', 'Warning', 'Syntax Error', '#'],
            correct: [5],
            link: ["http://php.net/manual/en/language.operators.arithmetic.php"],
            explanation: []
        }
    },
    q169: {
        id: 169,
        text: 'What is the output of the following? <pre class=\'brush: php; html-script: true\'>&lt;?phpfunction byRef(&amp;$number){ $number *= 10; return ($number - 5);}$number = 10;$number = byRef($number);echo $number;?&gt;</pre>',
        type: 2,
        answer: {
            options: ['50', '5', '95', '10', '100'],
            correct: [3],
            link: ["http://php.net/manual/en/language.references.pass.php"],
            explanation: []
        }
    },
    q170: {
        id: 170,
        text: 'What is the output of the following? <pre class=\'brush: php; html-script: true\'>&lt;?phpfunction byRef(&amp;$apples){ $apples++;}$oranges = 5;$apples = 5;byRef($oranges);echo "I have $apples apples and $oranges oranges";?&gt;</pre>',
        type: 2,
        answer: {
            options: ['I have 6 apples and 6 oranges', 'I have 6 apples and 5 oranges', 'I have 5 apples and 6 oranges', 'I have 5 apples and 5 oranges'],
            correct: [3],
            link: ["http://php.net/manual/en/language.references.pass.php"],
            explanation: []
        }
    },
    q171: {
        id: 171,
        text: 'What is the output of the following? <pre class=\'brush: php; html-script: true\'>&lt;?phpfunction a($number){ return (b($number) * $number);}function b(&amp;$number){ ++$number;}echo a(5);?&gt;</pre>',
        type: 2,
        answer: {
            options: ['0', '36', '6', '30', '5'],
            correct: [1],
            link: ["http://www.php.net/manual/en/functions.returning-values.php"],
            explanation: []
        }
    },
    q172: {
        id: 172,
        text: 'The ____ pattern is extremely useful for creating objects which watch the state of other objects and respond to those changes.',
        type: 1,
        answer: {
            options: [],
            correct: ["Observer"],
            link: [],
            explanation: []
        }
    },
    q173: {
        id: 173,
        text: 'In a databased that does not support the AUTO_INCREMENT modifier, you must use a ____ instead to auto-generate a numeric incrementing key',
        type: 1,
        answer: {
            options: [],
            correct: ["LAST_INSERT_ID"],
            link: [],
            explanation: []
        }
    },
    q174: {
        id: 174,
        text: 'What is the output of the following: <pre class="brush: php"> &lt;?php $m = 3; $n = 0; function l() { $m = 0; $m++; global $n; return array($n,$m); } echo implode((L(l())),\',\'); ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['0, 5', '0, 4', 'An error', '0,1', '4,1'],
            correct: [4],
            link: [],
            explanation: ["Look out for PHP function names; they are not case sensitive, so both l() and L() will call the same method.  The function doesn't have any declared parameters so the inside version of the function gets ignored."]
        }
    },
    q175: {
        id: 175,
        text: 'What would be output when the following code is run? <pre class="brush: php"> &lt;?php class M { function m() { echo "M"; } function construct() { echo "mmm"; } } $m = new M(); $m->m(); ?&gt; </pre>',
        type: 1,
        answer: {
            options: [],
            correct: ["MM"],
            link: [],
            explanation: ["A trap!  The function construct() isn't a constructor, that would need to be __construct() instead, so the function M::m() gets called twice. ZCE-style question set.  Prepared by Lorna Mitchell ©Lornajane Ltd v1.1"]
        }
    },
    q176: {
        id: 176,
        text: 'Which of the following could be used to add a book to an existing SimpleXMLElement object stored in $library representing a collection of books?',
        type: 2,
        answer: {
            options: ['$library->addChild(new SimpleXMLElement("title", "Best book ever"))', '$library->children()->add("title", "Best book ever")', '$library->xpath(new SimpleXMLElement("title", "Best book ever"))', '$library->addChild("title", "Best book ever")', '$library->addBook("title", "Best book ever")'],
            correct: [4],
            link: [],
            explanation: []
        }
    },
    q177: {
        id: 177,
        text: 'What is the output of the following line of code: <pre class="brush: php"> &lt;?php $a = 4 << 2 + 1; echo $a; ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['9', '16', '17', '1', '32'],
            correct: [5],
            link: ["http://www.php.net/manual/en/language.operators.precedence.php"],
            explanation: []
        }
    },
    q178: {
        id: 178,
        text: 'Which of the following is a valid way to pass the $callback parameter expected by array_walk()?',
        type: 3,
        answer: {
            options: ['An anonymous function', 'An array containing the name of the function as the first element, and an array of arguments as the second element', 'An instantiated object followed by the object operator and the method to call', 'An array containing an instantiated object as the first element, and the method name as the second element', 'A string containing the function name', 'An array containing the function name as the first element'],
            correct: [1, 4, 5],
            link: ["http://php.net/manual/en/language.types.callable.php"],
            explanation: []
        }
    },
    q179: {
        id: 179,
        text: 'How would you parse a web page at http://example.com/page.php as XML?',
        type: 2,
        answer: {
            options: ['You can\'t; it must be well-formed XML.', 'DOMDocument::loadFile(\'http://example.com/page.php\');', 'simple_xml_load_html(\'http://example.com/page.php\');', 'new SimpleXMLElement(file_get_contents(\'http://example.com/page.php\'));', 'DOMDocument::loadHTML(file_get_contents(\'http://example.com/page.php\'));'],
            correct: [5],
            link: ["http://php.net/manual/en/domdocument.loadhtml.php"],
            explanation: []
        }
    },
    q180: {
        id: 180,
        text: 'How many parameters does array_merge() accept?',
        type: 2,
        answer: {
            options: ['As many as you want', '3', '2', '1', '0'],
            correct: [1],
            link: [],
            explanation: ["From php.net, the function prototype is: array array_merge ( array $array1 [, array $... ] )"]
        }
    },
    q181: {
        id: 181,
        text: 'What would you expect to get from PDOStatement::fetch() in its default mode?',
        type: 2,
        answer: {
            options: ['Both an object and an array', 'An array containing both associative and enumerated keys', 'An associative array', 'An enumerated array', 'An error, you must pass in the fetch mode'],
            correct: [2],
            link: ["http://php.net/manual/en/pdostatement.fetch.php"],
            explanation: ["The other answers are all things you could obtain using different fetch modes in PHP, but the default is PDO_FETCH_BOTH. You can pass the fetch mode, but it isn't required."]
        }
    },
    q182: {
        id: 182,
        text: 'What is the output of the following code? <pre class="brush: php"> &lt;?php $pattern = \'/[a-z]{4} /\'; $string = \'Mary had a little lamb\'; $matches = preg_match($pattern, $string); print_r($matches); ?&gt; </pre>',
        type: 1,
        answer: {
            options: [],
            correct: [1],
            link: ["http://www.php.net/preg_match"],
            explanation: ["Tricky question, because preg_match() returns an integer – 1 if there were matches and 0 otherwise.  To capture the matches, you pass a third parameter for them to be placed into.  The pattern requires four lower case letters followed by a space, but doesn't anchor on to anthing so 'ttle ' does match."]
        }
    },
    q183: {
        id: 183,
        text: 'What is PDO::query() equivalent to?',
        type: 2,
        answer: {
            options: ['execute(), fetch()', 'prepare(), fetch(), execute()', 'prepare(), fetch()', 'exec(), fetch()', 'prepare(), execute()'],
            correct: [5],
            link: [],
            explanation: ["We usually use this when we don't have any parameters to pass in, for example fetching the contents of a lookup table."]
        }
    },
    q184: {
        id: 184,
        text: 'Which HTTP status code asks a user to provide credentials?',
        type: 2,
        answer: {
            options: ['404', '204', '401', '200', '302'],
            correct: [3],
            link: [],
            explanation: ["The 401 status code means 'Not Authorised', so the user will be asked to identify themselves."]
        }
    },
    q185: {
        id: 185,
        text: 'What would be in $matches[0] after running the following code? <pre class="brush: php"> &lt;?php $pattern = \'# \w*?[aeiou]{2}\w*? #\'; $string = "There\'s a moose loose about this house"; $matches = array(); preg_match_all($pattern, $string, $matches); ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['"There\'s a moose loose about this house"', 'An array containing " moose " and " about "', '"moose "', 'An array containing " moose ", " loose ", " about " and " house "', 'An array containing " moose " and " loose "'],
            correct: [2],
            link: [],
            explanation: ["There are a few things to spot here – first of all, don't be alarmed by all the punctuation in the regex, we'll get to that.  First the delimiters are # characters (you may know this as a pound or a hash, depending where your English is from).  These are valid delimiters, the only requirement is that whatever you pick to put at the start must be matched at the end. \nThe delimiters have spaces inside them, so there must be spaces at the start and end of any matches.  Then we must have any number of word characters – the ? after the * means that the match isn't greedy (this happens again towards the end of the pattern) – followed by any two vowels, then any more word characters.\nThe first match is \" moose \" but this uses up the space before \"loose\", so that can't match, but \" about \" does, but \"house\" which looks like it should match is missing the trailing space.\nStill with me?  preg_match_all returns results in a nested array – the first element contains an array of all matches."]
        }
    },
    q186: {
        id: 186,
        text: 'What would be the output of this script? <pre class="brush: php"> &lt;?php ob_start(); echo "dreaming"; $ob = ob_get_contents(); echo strlen($ob); ob_flush(); ?&gt; </pre>',
        type: 1,
        answer: {
            options: [],
            correct: ["dreaming8"],
            link: [],
            explanation: ["We turn on output buffering, put 'dreaming' into it, then grab the contents of the output buffer – but we haven't destroyed it.  So when we echo strlen('dreaming'), an 8 goes into the output buffer as well, and then we flush it."]
        }
    },
    q187: {
        id: 187,
        text: 'What does status code 403 indicate?',
        type: 2,
        answer: {
            options: ['Forbidden', 'Resource not found', 'Not modified', '403 is not a valid status code', 'Moved permanently'],
            correct: [1],
            link: [],
            explanation: ["Status code 403 means 'Forbidden' – the user has provided credentials but still is not allowed to have acecss to this resource."]
        }
    },
    q188: {
        id: 188,
        text: 'What is the output of the following code? <pre class="brush: php"> &lt;?php $a = "a, b,c, d, e f, g"; $b = array_merge(explode(\', \', $a), array("a", "b")); echo count($b); ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['9', '7', '5', '3', 'An error, because $a is not an array'],
            correct: [2],
            link: [],
            explanation: ["The explode function splits a string into an array, but the split is ', ' (note the space after the comma).  $a therefore has ', ' in it four times, making five pieces ('b,c' and 'ef' are two of the pieces.  Then we add two more elements on the end (array_merge doesn't mind duplicate entries) , making 7 in total."]
        }
    },
    q189: {
        id: 189,
        text: 'What is the output of this line of code? <pre class="brush: php"> &lt;?php echo 8 + 0x8 + 80 + 0x80; ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['156', '88', '224', '72', '96'],
            correct: [3],
            link: [],
            explanation: ["Hopefully you spotted that 0x8 is hexadecimal 8 ... which is the same as decimal 8. 0x80 is 8x16 (we use base 16 rather than base 10) which is 128.  So 8+8+80+128 = 224"]
        }
    },
    q190: {
        id: 190,
        text: 'Which of the following functions would be a valid way to create an array containing items from three existing arrays?',
        type: 2,
        answer: {
            options: ['array_merge()', 'array_combine()', 'array_splice()', 'array_keys()', 'array_intersect()'],
            correct: [1],
            link: [],
            explanation: ["The others are all valid array functions but don't do what we need"]
        }
    },
    q191: {
        id: 191,
        text: 'What is the output of the following line of code? <pre class="brush: php"> &lt;?php echo "4" + 05 + 011 + ord(\'a\'); ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['An error', '18', '117', '115', '14'],
            correct: [4],
            link: [],
            explanation: ["There are octal numbers in here, look for the leading zero on 05 and 011.  octal 5 is the same as decimal 5, our string '4' will convert to a number when we try to add it to any other number, and 011 in octabl is (8 + 1) = 9.  Hopefuly you knew that ord('a') was 97 and got 115 (or ('A') is 65, in case you're interested)"]
        }
    },
    q192: {
        id: 192,
        text: 'What is the output of the following? <pre class="brush: php"> &lt;?php $a = 7; $b = 4; function b($a, $b) { global $a, $b; $a += 7; $a++; $b += $a; return true; } echo $b, $a; ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['1419', '74', '1519', '1915', '47'],
            correct: [5],
            link: [],
            explanation: ["The function is never called."]
        }
    },
    q193: {
        id: 193,
        text: 'Which of the following are configuration settings for PHP?',
        type: 3,
        answer: {
            options: ['url_fopen_allow', 'url_include_allow', 'allow_open_url', 'allow_url_include', 'include_fopen_dir', 'open_url_dir', 'open_basedir'],
            correct: [4, 7],
            link: ["http://www.php.net/manual/en/ini.list.php"],
            explanation: ["None of the others are valid configuration directives for PHP"]
        }
    },
    q194: {
        id: 194,
        text: 'Is the following valid PHP code? <pre class="brush: php"> &lt;php&gt; echo \'There\'s a worm in my apple\'; &lt;/php&gt; </pre>',
        type: 2,
        answer: {
            options: ['Yes', 'No'],
            correct: [2],
            link: [],
            explanation: ["Those <php> style tags aren't valid for PHP."]
        }
    },
    q195: {
        id: 195,
        text: 'What is the output of: <pre class="brush: php"> &lt;?php $a = "0"; echo strlen($a); echo empty($a) ? $a : 5; echo $a ?: 5; ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['105', '100', '050', '005', '150'],
            correct: [1],
            link: [],
            explanation: ["Strlen($a) is 1, then empty($a) is true, so we hit the first leg of the ternary and echo $a, which is zero.  The third digit comes from the final line, $a is evaluated as false so we echo 5."]
        }
    },
    q196: {
        id: 196,
        text: 'What would happen when the following code was run? <pre class="brush: php"> &lt;?php define(\'Tree\', \'oak\'); echo \'This tree is: \' . tree; ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['A notice', 'This tree is: oak (and a notice)', 'An error', 'This tree is: tree (and a notice)', 'This tree is: (and a notice)'],
            correct: [4],
            link: [],
            explanation: ["We define a constant but they are case-sensitive in PHP, so tree is an undefined constant.  This is assumed to be a string in PHP (for historical reasons) but causes a notice to be emitted."]
        }
    },
    q197: {
        id: 197,
        text: 'Which of the following are valid constant names?',
        type: 3,
        answer: {
            options: ['R7yu', '9tur8UH4', '8rutil', 'AEN', '111', 'ablwesc_99', 'YU-8'],
            correct: [1, 4, 6],
            link: [],
            explanation: ["Valid constant names in PHP can be uppercase or lowercase, and contain numbers or underscores, but can't start with a number."]
        }
    },
    q198: {
        id: 198,
        text: 'What is the output of the following code? <pre class="brush: php"> &lt;?php $a = 42 & 05 + 17; echo $a; ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['17', '0', '2', '64', '10'],
            correct: [3],
            link: [],
            explanation: ["Did you spot the octal 5? It's irrelevant, because five is the same in base eight or base ten.  The operator precedence means we do 17 + 5 = 22 first, then we do 42 & 22 ... & is a binary operation, so we need those numbers in binary first.\n22 in binary: 10110.\n42 in binary: 101010. \nThe only column where both numbers have a 1, is in the 2 place."]
        }
    },
    q199: {
        id: 199,
        text: 'What will the output of the following code be? <pre class="brush: php"> &lt;?php $a = range(3,9); foreach ($a as $b) { switch($b) { case 3: $b = 7; case 7: $b = 3; default:// do nothing } } echo implode(\'-\',$a); ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['7-4-5-6-7-8-9', '3-4-5-6-7-8-9-10-11', '3-4-5-6-7-8-9', '7-4-5-6-3-8-9', '7-4-5-6-3-8-9-10-11'],
            correct: [3],
            link: [],
            explanation: ["The range(3,9) gives us an array containing all integers from 3 to 9.  When we foreach over them, we can't change the values in the array, so the contents of $a remain unchanged (you need to use the array and the key to update a value during foreach)"]
        }
    },
    q200: {
        id: 200,
        text: 'What is the output of: <pre class="brush: php"> &lt;?php $a = 10; echo strlen($a) . count($a); do { echo $a . "elephpant "; $a++; } while($a <= 1); ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['2110elephpant', '12', '1210elephpant', '21', '10elephpant'],
            correct: [1],
            link: [],
            explanation: ["The other answers are only partial.  We start with 2 and 1 from the strlen and count of $a.  Then we hit the do/while loop.  This executes, but $a is NOT <=1 so the loop ends immediately."]
        }
    },
    q201: {
        id: 201,
        text: 'What is the output of this code: <pre class="brush: php"> &lt;?php function c($a, $b = 1, $c) { return array($c, $a, $b); } list($a, $b, $c) = c(0,0,0); echo $b; ?&gt; </pre>',
        type: 1,
        answer: {
            options: [],
            correct: ["0"],
            link: [],
            explanation: ["First we call c() with three zero arguments, then we return those in a strange order (but they are all still zero).  These get assigned into variables $a, $b and $c by the list() function and $b is zero."]
        }
    },
    q202: {
        id: 202,
        text: 'What is the output of the following code: <pre class="brush: php"> &lt;?php function a($a) { echo $a . "&"; } function b($a) { echo "-" . $a; } $a = "!"; $b = &$a; echo a(b($b)); ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['-!!&', '!&-&', '-&!', '!&-!', '-!&'],
            correct: [5],
            link: [],
            explanation: ["This is a sharp question! We have $a as a string (containing symbols to make things more fun) and $b as a pointer to $a.  We call b($b) which outputs "-!" and then we pass the result of that into a() ... but b() doesn't return anything so null gets passed into a() and only the & is echoed."]
        }
    },
    q203: {
        id: 203,
        text: 'Which of the following are superglobals in PHP?',
        type: 3,
        answer: {
            options: ['$_FORMS', '$_COOKIE', '$_COOKIES', '$_REQUEST', '$_DATA', '$_ENVIRONMENT', '$_SERVER', '$_GLOBAL'],
            correct: [2, 4, 7],
            link: ["http://www.php.net/manual/en/language.variables.predefined.php"],
            explanation: ["Familiarity with PHP will help you on this one."]
        }
    },
    q204: {
        id: 204,
        text: 'Which of the following statements are true when applied to a Registry pattern?',
        type: 3,
        answer: {
            options: ['Only one instance of the class can exist', 'It implements ArrayAccess', 'It is designed to store values of various types', 'It uses static methods', 'It takes responsibility for instantiating objects'],
            correct: [1, 3],
            link: [],
            explanation: ["Applications will use a registry (or one of each of a number of related registry classes) to store values to be used multiple times in an application."]
        }
    },
    q205: {
        id: 205,
        text: 'Is this statement true or false? "Methods declared as static must be called statically"',
        type: 2,
        answer: {
            options: ['True', 'False'],
            correct: [2],
            link: [],
            explanation: ["It's safe to call static methods dynamically, and you can do so – but the opposite is nottrue so you can only call non-static methods non-statically."]
        }
    },
    q206: {
        id: 206,
        text: 'What is the output of this code? <pre class="brush: php"> &lt;?php $wish_list = array(1 => "Romeo and Juliet", 4 => "Bad Science", 2 => "To Kill A Mockingbird"); print_r(sort($wish_list)); ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['Array ( [1] => Romeo and Juliet [4] => Bad Science [2] => To Kill A Mockingbird )', 'Array ( [1] => Romeo and Juliet [2] => To Kill A Mockingbird [4] => Bad Science )', '1', 'Array ( [0] => Bad Science [1] => Romeo and Juliet [2] => To Kill A Mockingbird )', '3'],
            correct: [3],
            link: ["http://www.php.net/sort"],
            explanation: ["Look out for sort(), it (and its sister functions) return true!"]
        }
    },
    q207: {
        id: 207,
        text: 'ArrayAccess is an example of a:',
        type: 2,
        answer: {
            options: ['design pattern', 'interface', 'object', 'class'],
            correct: [2],
            link: ["http://www.php.net/arrayaccess"],
            explanation: ["The ArrayAccess interface is part of the SPL."]
        }
    },
    q208: {
        id: 208,
        text: 'Using the notation self::$property refers to:',
        type: 2,
        answer: {
            options: ['A property of the current object', 'The $property of the current object', 'The class constant $property in this class', 'The class property $property in this class', 'A variable called $property in this class or any parent class.'],
            correct: [4],
            link: [],
            explanation: ["The scope resolution operator (the two colons ::) indicates this is a class property, and self means it's the property of the current class."]
        }
    },
    q209: {
        id: 209,
        text: 'Which of the following is a valid namespace operator in PHP?',
        type: 2,
        answer: {
            options: ['\ ', '::', '@', '/', '->'],
            correct: [1],
            link: ["http://www.php.net/namespaces"],
            explanation: ["We use the backslash as the namespace operator in PHP."]
        }
    },
    q210: {
        id: 210,
        text: 'What is the output of the following code? <pre class="brush: php"> &lt;?php $x = 1; function print_conditional() { static $x; if($x++ == 1) echo "many"; echo "good"; echo "things"; return $x; } print_conditional(); $x++; print_conditional(); ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['manygoodthingsmanygoodthings', 'manygoodthings', 'goodthingsgoodthings', 'goodthingsmanygoodthings', 'there is no output'],
            correct: [4],
            link: [],
            explanation: ["The $x outside the function has no link with $x inside the function.  $x inside the function is a static variable so it retains its value between function calls. \nThe first time we call print_conditional(), $x is static but undefined.  The $x++ post increment operator returns the old value, then increments the variable, so on the first pass, the if() returns false and then $x is 1.  Look very closely at that if! \nThere are no {} brackets so only the 'many' line is conditional, the 'good' and 'things' lines will run regardless (this is why indentation should follow program flow).  On the second call, $x is 1 so the if() evaluates to true and we get the 'many' line as well."]
        }
    },
    q211: {
        id: 211,
        text: 'What does the html_errors configuration directive do?',
        type: 2,
        answer: {
            options: ['Enable reporting of invalid HTML output', 'Show PHP errors on webpages', 'html_errors is not a valid configuration directive', 'Apply HTML formatting to PHP errors', 'Suppress browser errors'],
            correct: [4],
            link: [],
            explanation: ["The html_errors setting enables hyperlinks and formatting in any error output; other libraries (for example Xdebug) may also observe this setting."]
        }
    },
    q212: {
        id: 212,
        text: 'What is the output of the following code? <pre class="brush: php"> &lt;?php $a = 1; function calculate() { global $a; $a += 7; $a = $a * 043; return --$a; } echo $a; ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['342', '279', '0', '343', '1'],
            correct: [5],
            link: [],
            explanation: ["The function is never called."]
        }
    },
    q213: {
        id: 213,
        text: 'What is the output of the following code? <pre class="brush: php"> &lt;?php function format(&$item) { $item = strtoupper($item) . \'.\'; return $item; } $shopping = array("fish", "bread", "eggs", "jelly", "apples"); array_walk($shopping, "format"); $shopping = sort($shopping); echo $shopping[1]; ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['"APPLES."', '"apples"', '"BREAD."', 'nothing (no output)', '"fish"'],
            correct: [4],
            link: [],
            explanation: ["This is the sort() function returning true, which makes no sense with array notation so PHP doesn't return us anything at all."]
        }
    },
    q214: {
        id: 214,
        text: 'What is the output of the following code? <pre class="brush: php"> &lt;?php class Content{ public function publish() { $this->published = true; $this->article(); return true; } protected function article() { echo "<i>Article:</i>"; } } class Article extends Content{ public function article() { echo "<i>Post:</i>"; } } $post = new Article(); echo $post->publish(); ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['<i>Post:</i>', 'an Error', '<i>Post:</i><i>Post:</i>1', '<i>Article:</i>', '<i>Post:</i><i>Article:</i>1'],
            correct: [3],
            link: [],
            explanation: ["We have a class Content and another class Article which extends Content.  When we instantiate a new Article() the function article() becomes our constructor because the method name meets the class name (this is from PHP 4 days but is still true) so we echo '<i>Post:</i>'.  Then we call publish() on our object, which calls Article::article() again (NOT Content::article()), and returns true.  We echoed the output of our call and the boolean becomes a 1 when we echo it."]
        }
    },
    q215: {
        id: 215,
        text: 'Given the following code: <pre class="brush: php"> &lt;?php Interface Verifiable{ public function verify(); } Class Cheque{ public function verify() {// interesting stuff happens return true; } } Class CurrencyCheque extends Cheque implements Verifiable { } ?&gt; </pre> What happens when we instantiate a CurrencyCheque object?',
        type: 2,
        answer: {
            options: ['An warning because the interface isn\'t implemented', 'A new CurrencyCheque object is created', 'The method must be redefined in CurrencyCheque', 'An error that the interface must be defined in the parent object', 'A fatal error'],
            correct: [2],
            link: [],
            explanation: ["Look closely at that parent object – it already defines the method we need to satisfy the interface.  Therefore we can implement it in the child class without needing to redeclare the method – everything will work fine."]
        }
    },
    q216: {
        id: 216,
        text: 'What is the output of the following code? <pre class="brush: php"> &lt;?php if(strcmp("hi", "HI")) echo "hello"; elseif(strcasecmp("hi","HI")) echo "world"; else throw new Exception("HI"); ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['"world"', 'an Exception', 'nothing (no output)', '"hello"', 'an error'],
            correct: [4],
            link: ["http://www.php.net/strcmp"],
            explanation: ["The key here is knowing that strcmp is case-sensitive but that it returns zero if things match.  For anything that isn't zero, the 'if' will evaluate to true."]
        }
    },
    q217: {
        id: 217,
        text: 'How can you recover the original information from this string? <pre class="brush: php"> &lt;?php a:4:{i:2;s:3:"foo";i:3;s:4:"spot";i:4;s:6:"stripe";s:3:"bar";i:64;} ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['using json_decode()', 'using the mcrypt extension', 'using unserialize()', 'using a database library', 'you can\'t – this is a custom format'],
            correct: [3],
            link: [],
            explanation: ["This data is PHP's serialized format so you wamt to unserialize it – it does look a bit like JSON, but the clue is that the example here includes information about the data type, which JSON does not."]
        }
    },
    q218: {
        id: 218,
        text: 'Which of the following are true (choose three)?',
        type: 3,
        answer: {
            options: ['Anonymous functions can accept variables passed into them at call time', 'Anonymous functions cannot be called recursively', 'Closures are a kind of anonymous function', 'Anonymous functions can have function names', 'It is possible to return multiple values from an anonymous function', 'Closures can have variable values "baked" in at declare time', 'Anonymous functions are always created in the global scope'],
            correct: [1, 3, 6],
            link: ["http://www.php.net/manual/en/functions.anonymous.php"],
            explanation: ["Anonymous functions were new in PHP 5.3, however hopefully either experience or study means you were able to pick your way through this question."]
        }
    },
    q219: {
        id: 219,
        text: 'What is the output of the following? <pre class="brush: php"> &lt;?php echo chr((ord(\'a\') + ord(\'A\'))/2); ?&gt; </pre>',
        type: 1,
        answer: {
            options: [],
            correct: ["Q"],
            link: [],
            explanation: ["Take the time to work this one out – it looks tiny but it still needs some attention. \nFirst we take ord('a') = 97 and ord('A') = 65, add them together (162) and then divide by 2 to make 81. Now count forwards from 65 (B is 66, C is 67, and so on) until you reach 81.  The chr() function is the opposite of ord() and makes numbers back into letters."]
        }
    },
    q220: {
        id: 220,
        text: 'How would you efficiently extract data from a csv file which is several gigabytes in size?',
        type: 3,
        answer: {
            options: ['Use a custom stream wrapper', 'file_get_contents() and explode()', 'fopen() and fgetcsv()', 'file() and explode()', 'fopen(), fgets() and explode()'],
            correct: [3, 5],
            link: [],
            explanation: ["Either of these solutions would work pretty well – for a very large file, loading it into memory  with file_get_contents or something similar would make PHP run out of memory (or at least use up a lot of it!) so it's better to use a file-pointer-based approach and do it a line at a time."]
        }
    },
    q221: {
        id: 221,
        text: 'Which of the following would you use to validate incoming data from a web form?',
        type: 3,
        answer: {
            options: ['filter_* functions', 'stripslashes()', 'htmlspecialchars()', 'database escape functions', 'ctype_* functions', 'strip_tags()', 'preg_* functions', 'url_decode()'],
            correct: [1, 5, 7],
            link: ["http://www.php.net/manual/en/book.filter.php", "http://www.php.net/manual/en/book.ctype.php", "http://www.php.net/manual/en/ref.pcre.php"],
            explanation: ["The key word in the question is 'validate' – some of the options to choose from are great ways to sanitize data, but not to validate it."]
        }
    },
    q222: {
        id: 222,
        text: 'Which of the following php configuration directives were deprecated in PHP 5.3 ?',
        type: 3,
        answer: {
            options: ['y2k_compliance', 'safe_mode', 'disable_functions', 'register_globals', 'gpc_order', 'max_file_uploads', 'register_syslog', 'register_long_arrays'],
            correct: [2, 4, 8],
            link: [],
            explanation: ["Some of these other options were removed in PHP 5.4 but since this is PHP 5.3 certification, imagine that 5.4 never happened!"]
        }
    },
    q223: {
        id: 223,
        text: 'What is the output of the following? <pre class="brush: php"> &lt;?php $a = 0xf2 + 0x09; $b = $a >> 3; echo $b; ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['31', '0', '27', '7', '16'],
            correct: [1],
            link: [],
            explanation: ["There are three steps here.  First, take the hexadecimal numbers and convert them to decimal, which gives you (242 + 9) = 251.  Next, write 251 in binary (it's 255 less 4 if you like shortcuts) which is 11111011. \nNow shift that number to the right three steps, ignoring the digits which get shifted away to the right of the 1 column.  This should give you 11111 – which is 31 when you turn it back into decimal."]
        }
    },
    q224: {
        id: 224,
        text: 'Which of the following would allow you to send a POST request to a remote resource via file_get_contents()?',
        type: 2,
        answer: {
            options: ['You can\'t, use the curl extension or an equivalent', 'stream_context(array("method" => "POST"));', 'array("method"=>"post");', 'stream_context_create("http_method" => "POST"));', 'stream_context_create(array("http" => array("method" => "POST")));'],
            correct: [5],
            link: [],
            explanation: ["It is possible to make all kinds of requests and set any headers you like by setting the context on a stream.  Here, we're setting the method option inside the http element of the context."]
        }
    },
    q225: {
        id: 225,
        text: 'Which function would you use to re-order an array by its keys?',
        type: 1,
        answer: {
            options: [],
            correct: ["X"],
            link: ["http://www.php.net/ksort"],
            explanation: ["There are lots of ways of sorting arrays, by key or by value, keeping keys intact or not – this time you need ksort."]
        }
    },
    q226: {
        id: 226,
        text: 'What does the chr() function do?',
        type: 2,
        answer: {
            options: ['Returns the ascii code of the given character', 'Returns the ascii codes for all characters in the string as an array', 'Returns the character at a given offset', 'Returns the character for a given ascii code', 'Returns the number of characters in the string'],
            correct: [4],
            link: ["http://www.php.net/chr"],
            explanation: ["The chr() is the opposite of the ord() function."]
        }
    },
    q227: {
        id: 227,
        text: 'Given this code sample: <pre class="brush: php"> &lt;?php interface A {} class C {} class B extends C {} class E extends C implements A {} class D extends E{} $b = new B(); $e = new E(); $c = new C(); $a = new B(); $d = new D(); Which of the following statements are true? ?&gt; </pre>',
        type: 3,
        answer: {
            options: ['$c instanceof B', '$d instanceof A', '$d instanceof C', '$e instanceof B', '$e instanceof A', '$c instanceof C', '$a instanceof E'],
            correct: [2, 3, 5, 6],
            link: [],
            explanation: ["This question is really about polymorphism.  Objects will claim to be instances of the classes they are actually instances of, but will also identify themselves as any of their ancestors or as any interface that their class, or any ancestor class, implements."]
        }
    },
    q228: {
        id: 228,
        text: 'Which of the following session save handlers are available by default in PHP?',
        type: 3,
        answer: {
            options: ['redis', 'postgresql', 'files', 'memcache', 'AWS', 'foxpro', 'sqlite'],
            correct: [3, 4, 7],
            link: [],
            explanation: ["PHP defaults to files, and many other options are available but providing you have memcache or sqlite, either of these can be use for session storage."]
        }
    },
    q229: {
        id: 229,
        text: 'The Active Record design pattern is used for which of the following?',
        type: 2,
        answer: {
            options: ['Creating audit trails of all file changes', 'Easily storing and retrieving objects in the database', 'Integrating PHP and Ruby on Rails projects', 'Separating business and presentation logic within a system', 'Managing output handlers'],
            correct: [2],
            link: [],
            explanation: ["Made famous by ruby on rails, the active record pattern is common in model layers to handle the translation between the objects we use in applications and the way we store them."]
        }
    },
    q230: {
        id: 230,
        text: 'With a single existing cookie set for this domain with the key "theme" and the value "green", what does the following code output? <pre class="brush: php"> &lt;?php print_r($_COOKIE); setcookie(\'theme\', NULL, time() - 3600); print_r($_COOKIE); unset($_COOKIE); print_r($_COOKIE); ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['an error', 'Array ( [theme] => green )', 'Array ( [theme] => green ) Array ( [theme] => green )', 'Array ( [theme] => green ) Array ( [theme] => green ) Array ( [theme] => green )', 'nothing'],
            correct: [3],
            link: [],
            explanation: ["Here we see the contents of the $_COOKIE array, but setting another cookie will not make any difference until the next request.  The contents of $_COOKIE are output again, then we unset the array.  We haven't destroyed any of the cookies being exchanged, but we have removed them from that variable in our script. So we don't see the output (but there would be a notice if they were enabled)."]
        }
    },
    q231: {
        id: 231,
        text: 'What does the following code output? <pre class="brush: php"> &lt;?php $i = function ($j) { $i = $j + 4; $i++; return $i; }; $j = 6; echo $i($j); ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['10', 'syntax error', 'nothing', '11', '6'],
            correct: [4],
            link: [],
            explanation: ["In this script, we have an anonymous function.  We declare it and assign it to $i. Then we call it, and pass in $j which is set to 6. \nThe $i inside the scope of the function has no link with anything outside, so it's fine (although confusing!) to use the variable name there. \n6 +4 is 10, then we increment $i and make 11, then return it."]
        }
    },
    q232: {
        id: 232,
        text: 'What is the output of the following code? <pre class="brush: php"> &lt;?php function swings(&$park) { $park++; $park = roundabout($park); } function roundabout($park) { $park *= 2; } $park = 17; echo swings($park); ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['19', '37', '36', '74', 'nothing'],
            correct: [5],
            link: [],
            explanation: ["Nothing is returned by swings() so there's no output echoed."]
        }
    },
    q233: {
        id: 233,
        text: 'What is the output of the following code? <pre class="brush: php"> &lt;?php $x = 1; function print_conditional($x) { if($x++ == 1) echo "none"; echo "one"; echo "none"; return $x; } print_conditional($x); $x++; print_conditional($x); ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['onenone', 'noneonenoneonenone', 'nonenoneonenone', 'onenoneonenoneonenone', 'noneonenone'],
            correct: [2],
            link: [],
            explanation: ["This is really similar to an earlier question but don't be fooled; there are some differences. \n$x is 1 and we call print_conditional, passing in $x. \nThe post increment means the if is evaluated to true and all three echo lines will be executed. \nThe function returns $x but it isn't assigned so $x is still 1. \nIn the last two lines we increment $x and pass it into the function again, but this time the if does not evaluate to true. \nThe absence of curly braces however means that we do still get the 'one' and second 'none' line."]
        }
    },
    q234: {
        id: 234,
        text: 'Which object method is automatically called when an object is cloned?',
        type: 2,
        answer: {
            options: ['__copy()', '__wakeup()', '__drone()', '__clone()', '__call()'],
            correct: [4],
            link: ["http://www.php.net/manual/en/language.oop5.magic.php"],
            explanation: ["This question is about magic methods; these are a key element of OOP theory in PHP."]
        }
    },
    q235: {
        id: 235,
        text: 'What is the output of the following code? <pre class="brush: php"> &lt;?php $g = range(5,8); $h = array("a", "b", "c", "e"); for($i = 0; $i < count($g); $i++) { foreach ($h as $j) { echo $i.$j; break; } } ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['0a1a2a3a', '5a6a7a8a', '0a0b0c0e', '0a0b0c0e1a1b1c1e2a2b2c2e3a3b3c3e', '5a5b5c5e6a6b6c6e7a7b7c7e8a8b8c8e'],
            correct: [1],
            link: [],
            explanation: ["We start off with the range statement which produces an array containing the values: 5,6,7,8, used only for count() purposes, and another array with letters in. \nThe for loop has a foreach inside it, but with a break statement, so the for loop operates as normal but the foreach loop only gets run once before we break out of it, on each turn around the for loop."]
        }
    },
    q236: {
        id: 236,
        text: 'What is the output of the following code? <pre class="brush: php"> &lt;?php $s = "This sentence contains many words"; $r = explode(\' \', ucfirst($s)); sort($r); echo implode(\',\', $r); ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['This Sentence Contains Many Words', 'This,contains,many,sentence,words', 'This,Sentence,Contains,Many,Words', 'This contains many sentence words', 'This Contains Many Sentence Words'],
            correct: [2],
            link: [],
            explanation: ["Applying ucfirst to $s makes no difference, but exploding on a space splits the sentence into an array with one word in each element.  We sort the words but look out because sort is case-sensitive and will sort the capital letter first, then the rest alphabetically."]
        }
    },
    q237: {
        id: 237,
        text: 'Given a class called SoapFunctions and a working WSDL for the methods in that class, what needs to be added to the code below to serve those methods over SOAP? <pre class="brush: php"> &lt;?php require("SoapFunctions.php"); $s = new SoapServer($wsdl); $s->handle(); ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['$s->setHandler("SoapFunctions");', 'set_soap_class($s, "SoapFunctions");', 'set_soap_handler($s, "SoapFunctions");', '$s->setClass("SoapFunctions");', 'nothing to add, the code above would work'],
            correct: [4],
            link: ["http://www.php.net/manual/en/soapserver.setclass.php"],
            explanation: ["None of the other options exist or are valid; the missing line needs the setClass() call."]
        }
    },
    q238: {
        id: 238,
        text: 'Which of the following is a magic method in PHP 5.3?',
        type: 3,
        answer: {
            options: ['__walk()', '__sleep()', '__return()', '__call()', '__function()', '__add()', '__set()'],
            correct: [2, 4, 7],
            link: ["http://www.php.net/manual/en/language.oop5.magic.php"],
            explanation: []
        }
    },
    q239: {
        id: 239,
        text: 'Which function would transform the string "excellent PHP functions" into the string "Excellent PHP Functions"?',
        type: 1,
        answer: {
            options: [],
            correct: ["X"],
            link: [],
            explanation: ["This method will make the first letter of every word into an upper case letter, regardless of its previous case."]
        }
    },
    q240: {
        id: 240,
        text: 'Which of the following would offer protection against an SQL injection attack?',
        type: 3,
        answer: {
            options: ['mysql_real_escape_string()', 'mysql_true_escape_string()', 'addslashes()', 'using PDO and prepared statements', 'htmlspecialchars()', 'strip_tags()'],
            correct: [1, 4],
            link: [],
            explanation: ["One of the answers here isn't a real PHP function (option B, mysql_true_escape_string) and the others aren't effective against SQL attacks (although they're great in other security-related uses)"]
        }
    },
    q241: {
        id: 241,
        text: 'What is the output of the following code? <pre class="brush: php"> &lt;?php class M { public function identify() { echo self::myName(); } public function myName() { return "Mike"; } } class N extends M { public function myName() { return "November"; } } function m(N $n) { $n->identify(); } $m = new N(); m($m); ?&gt; </pre>',
        type: 2,
        answer: {
            options: ['Fatal error', 'Catchable fatal error', 'Mike', 'November', 'Syntax error'],
            correct: [3],
            link: ["http://php.net/manual/en/language.oop5.late-static-bindings.php"],
            explanation: ["What happens is that we instantiate an N (confusingly stored in $m, and then call m() on it which, after passing the typehint successfully, calls the identify() method in the N class. \nThis is inherited from M, but PHP will use M where we put self instead of using N. \nLate static binding means we could use static instead of self and get November as the output."]
        }
    },
    q242: {
        id: 242,
        text: 'What is the output of the following code? <pre class="brush: php"> &lt;?php $a = "Apple"; echo <<<\'A\'pass me that $aA;?&gt;</pre>',
        type: 2,
        answer: {
            options: ['syntax error', '"pass me that Apple"', '"pass me that apple"', 'fatal error', 'pass me that $a'],
            correct: [5],
            link: ["http://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.nowdoc"],
            explanation: ["This question shows a NOWDOC rather than a HEREDOC, so the variables won't be interpreted."]
        }
    },
    q243: {
        id: 243,
        text: 'How would you transform a SimpleXMLElement object into a DOMElement object?',
        type: 2,
        category: 4,
        answer: {
            options: ['SimpleXMLElement::asXML()', 'simplexml_to_dom()', 'simplexml2dom()', 'dom_import_simplexml()', '$dom = new DOMElement($SimpleXMLElement)', 'SimpleXMLElement::asDom()', 'SimpleXMLElement::saveXML()'],
            correct: [4],
            link: ["http://www.php.net/manual/en/function.dom-import-simplexml.php"],
            explanation: ["The only functions that exists and generate a DOMElement are DOMElement and dom_import_simplexml, but DOMElement does not accept a SimpleXMLElement as a parameter."]
        }
    }
};
