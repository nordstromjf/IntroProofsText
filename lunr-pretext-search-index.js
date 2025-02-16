var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This text is intended for a first course in proof-writing. The course builds fluency with proof techniques through examples from discrete math, number theory, and set theory. It emphasizes learning mathematical structure from logic and applying the strucure in a variety of contexts.  The material was developed for an Introduction to Proofs course at Linfield University. The course is currently taught as an intensive one month January Term course. The course is generally taken by math majors in their first year or two or by math minors who wish to improve their proof-writing ability.  There are no specific prerequisites besides some familariy with mathematical statements. The text assumes a familiarity with calculus, but only in that it references examples of statements from calculus. A background in calculus is not required for the content of the course.   Course Goals    To introduce basic mathematical terminology such as sets, functions, relations, and cardinality.   To introduce proof techniques such as direct proof, proof by contrapositive, proof by contradiction, and mathematical induction.   To develop proficiency in both reading and writing mathematical proofs.   To develop an understanding of logical structure.   To increase confidence in working through mathematical challenges.   To foster an appreciation and use of abstract reasoning.   To improve problem-solving abilities.     "
},
{
  "id": "whatisaproof",
  "level": "1",
  "url": "whatisaproof.html",
  "type": "Section",
  "number": "1.1",
  "title": "What is a Proof?",
  "body": " What is a Proof?  In this course we want to understand how to read and write mathematics as mathematicians. We would hope to eventually use these skills to generate our own mathematics. Before we can do that, we need to be familiar with how mathematicians convey ideas.  Generally we start with a definition of a mathematical concept.  An integer integer is a whole number. It can be positive, negative, or zero.   Before we can prove statements about integers, we need to have a common understanding of them. Note that this definition relies on us understanding other mathematical terms, such as positive and negative .  It is assumed that you bring some mathematical understanding with you to this course. But it is not assumed that that understanding is necessarly precise. One of the goals throughout this course will be to help make your current understanding more precise (or rigorous).  Types of Integers Without being precise, you can probably determine whether an integer is positive, even, or prime.  List three positive, even integers.  Is 235823576 even or odd? How do you know? Write down as precise a rule as possible for determining whether an integer is even or odd.  List three prime numbers. How do you know they are prime?  Is 235823576 prime? How do you know?  Is 23582357 prime? How do you know? If you are unsure, what would it take to determine the answer?  More General Integers Assume is an integer.  Is even or odd? Does you rule from still work? If not, can you refine your rule?  Is even or odd? Can it sometimes be even and sometimes be odd?  Can ever be prime? What about ?  For the time being, we will rely on our general understanding of whether an integer is even or odd, prime or not prime. But we will eventually want more formal definitions for these ideas, which we see in .  Now let's look at a more complicated mathematical statement. A conjecture conjecture is an uproven mathematical statement. Every mathematical theorem started out as a conjecture. You are encouraged to make your own mathematical conjectures throughout this course.  Goldbach's Conjecture Goldbach's Conjecture Every even positive integer greater than 2 can be written as a sum of two primes.  Exploring Goldbach's Conjecture We would like to know if Goldbach's Conjecture is true. We can start by just trying several examples. We want to see if positive even integers greater than 2 (like 4, 6, 8, 10, 12) can be written as the sum of two prime numbers. For example, and . Now try to write 4, 8, and 10 as the sum of two primes. Note, 1 is NOT prime. We will see this later when we formally define primes.  Verify Goldbach's Conjecture Verify Goldbach's Conjecture for 14, 16, 18, and 20. This means you want to show the conjecture is true for these even integers.  We have now verified Golbach's Conjecture for several examples. Does that mean it is true in general? How many examples would you need so that you were convinced it is true? How many examples do you think mathematicians would need to be convinced? What would it take to know that it is true for every even integer greater than 2?  In fact, althought it has been verified for integers up to at least , it has not been proven. Goldbach first conjectured the statement in a letter to Euler in 1742, and mathematicians have been unable to give a full proof.  Prime Number Generator Let's switch gears a bit and look for a way to find prime numbers.  Play around with different functions whose inputs are positive integers. See if you can find one whose outputs are an infinite set of prime numbers. For example, gives us . The first two are prime, but is not prime, so does not work.  Now try the function . Find outputs for from 1 to 10. Are the outputs all prime?  Based on (b), have we found a function whose outputs are only prime numbers? What would we have to check to know this is true?  In fact, there are values of for which is not prime. See if you can find one. Think carefully about what you would need to not be prime.  We have seen that in Goldbach's Conjecture, we will know the statement is true if we can find a proof that works for every even integer. On the other hand, we saw in that it only takes one example where the statement fails to show it is false. This is an idea we will return to many times in this course.  So what is a proof? How do we decide if a statement has been proven? Let's start with a definition and an example of a proof.  Let be an integer. Then is even even integer if there exists an integer such that .  Before moving to the proof, check your rule for determining whether an integer is even from . Is your rule similar to the formal definition? If it is different, can you see any advantages to using the more formal definition?  A First Proof Let be an integer. Prove is even.  We can rewrite as . Then let . Since is an integer, is an integer. Thus, for some integer .  The proof shows that is even for any , without need to check every possible integer .  In writing a proof we can see that it helps to have precise definitions of the mathematical terms. Then we need to connect our statements in a logical way so that we are convinced that the statement we are proving follows from the steps. The ability to connect our staements in a logical way is the heart of writing a proof. We will start our proof-writing journey by first understanding logical structure.  "
},
{
  "id": "whatisaproof-3",
  "level": "2",
  "url": "whatisaproof.html#whatisaproof-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "definition "
},
{
  "id": "D_integer",
  "level": "2",
  "url": "whatisaproof.html#D_integer",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "An integer integer is a whole number. It can be positive, negative, or zero.  "
},
{
  "id": "whatisaproof-5",
  "level": "2",
  "url": "whatisaproof.html#whatisaproof-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "positive negative "
},
{
  "id": "A_typesofint",
  "level": "2",
  "url": "whatisaproof.html#A_typesofint",
  "type": "Activity",
  "number": "1.1.1",
  "title": "Types of Integers.",
  "body": "Types of Integers Without being precise, you can probably determine whether an integer is positive, even, or prime.  List three positive, even integers.  Is 235823576 even or odd? How do you know? Write down as precise a rule as possible for determining whether an integer is even or odd.  List three prime numbers. How do you know they are prime?  Is 235823576 prime? How do you know?  Is 23582357 prime? How do you know? If you are unsure, what would it take to determine the answer? "
},
{
  "id": "A_genint",
  "level": "2",
  "url": "whatisaproof.html#A_genint",
  "type": "Activity",
  "number": "1.1.2",
  "title": "More General Integers.",
  "body": "More General Integers Assume is an integer.  Is even or odd? Does you rule from still work? If not, can you refine your rule?  Is even or odd? Can it sometimes be even and sometimes be odd?  Can ever be prime? What about ? "
},
{
  "id": "whatisaproof-10",
  "level": "2",
  "url": "whatisaproof.html#whatisaproof-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conjecture "
},
{
  "id": "C_Goldbach",
  "level": "2",
  "url": "whatisaproof.html#C_Goldbach",
  "type": "Claim",
  "number": "1.1.2",
  "title": "Goldbach’s Conjecture.",
  "body": "Goldbach's Conjecture Goldbach's Conjecture Every even positive integer greater than 2 can be written as a sum of two primes. "
},
{
  "id": "E_GBConj",
  "level": "2",
  "url": "whatisaproof.html#E_GBConj",
  "type": "Example",
  "number": "1.1.3",
  "title": "Exploring Goldbach’s Conjecture.",
  "body": "Exploring Goldbach's Conjecture We would like to know if Goldbach's Conjecture is true. We can start by just trying several examples. We want to see if positive even integers greater than 2 (like 4, 6, 8, 10, 12) can be written as the sum of two prime numbers. For example, and . Now try to write 4, 8, and 10 as the sum of two primes. Note, 1 is NOT prime. We will see this later when we formally define primes. "
},
{
  "id": "A_verifyGBC",
  "level": "2",
  "url": "whatisaproof.html#A_verifyGBC",
  "type": "Activity",
  "number": "1.1.3",
  "title": "Verify Goldbach’s Conjecture.",
  "body": "Verify Goldbach's Conjecture Verify Goldbach's Conjecture for 14, 16, 18, and 20. This means you want to show the conjecture is true for these even integers. "
},
{
  "id": "A_primegen",
  "level": "2",
  "url": "whatisaproof.html#A_primegen",
  "type": "Activity",
  "number": "1.1.4",
  "title": "Prime Number Generator.",
  "body": "Prime Number Generator Let's switch gears a bit and look for a way to find prime numbers.  Play around with different functions whose inputs are positive integers. See if you can find one whose outputs are an infinite set of prime numbers. For example, gives us . The first two are prime, but is not prime, so does not work.  Now try the function . Find outputs for from 1 to 10. Are the outputs all prime?  Based on (b), have we found a function whose outputs are only prime numbers? What would we have to check to know this is true?  In fact, there are values of for which is not prime. See if you can find one. Think carefully about what you would need to not be prime. "
},
{
  "id": "D_even",
  "level": "2",
  "url": "whatisaproof.html#D_even",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": "Let be an integer. Then is even even integer if there exists an integer such that . "
},
{
  "id": "E_proof8neven",
  "level": "2",
  "url": "whatisaproof.html#E_proof8neven",
  "type": "Example",
  "number": "1.1.5",
  "title": "A First Proof.",
  "body": "A First Proof Let be an integer. Prove is even.  We can rewrite as . Then let . Since is an integer, is an integer. Thus, for some integer . "
},
{
  "id": "arguments",
  "level": "1",
  "url": "arguments.html",
  "type": "Section",
  "number": "1.2",
  "title": "Validity and Soundness",
  "body": " Validity and Soundness  We want to be able to put mathematical statements together to form logical arguments. The structure of an argument is more important, at the moment, than the specific content.  A logical argument logical argument consists of premises premise and a conclusion conclusion . The premises and conclusion are statements. A statement logical statement is a sentence that is either true of false (not both!). An argument must have at least one premise, but can have as many as you like. It has exactly one conclusion.  Statements   is a statement. It is a true statement.  is a statement. It is a false statement.  is not a statement. It is neither true nor false. If we had additional information, such as specific information about the variables, then this might be a statement.  I ate breakfast today. is a statement. Although you might not be able to determine whether I ate breakfast, the statement is either true or false.     General Form of an Argument argument general form therefore   A  B  C   Here A and B are the premises, and C is the conclusion. The symbol is read therefore.    Since an argument is just a list of statements, we need some structure for what makes a good argument.  An argument is valid valid argument argument valid if whenever the premises are true, the conclusion must be true.  An argument is invalid invalid argument argument invalid if it is possible for the premises to be true and the conclusion false.  A Valid Argument The following general form is a valid argument. This means if the two premises are true, then the conclusion must be true.   All A are B.  All B are C.  All A are C.   For example, a specific argument of this form is  All parabolas are functions of degree 2.  All functions of degree 2 are quadratic.  All parabolas are quadratic.  Note that we don't even need to undertand the statements themselves to know that this is a valid argument. If the premises are true, then the conclusion must be true.   Exploring a Valid Argument Consider the general form from .  Write a specific argument that has this form, but where at least one of your premises is false. Note, your statements need not be mathematical.  Is your conclusion true or false?  Is it possible to have a valid argument with at least one false premise and a true conclusion?  Another Valid Argument One of the simplest forms for a valid argument is when your conclusion repeates a premise.  A  B  A   Although this form is probably too simple to use in actual proof writing, it is useful for understanding validity. It is straightforward to see that it would be impossible to have true premises and a false conclusion, as A can't be both true and false.  An Argument with False Premises and False Conclusion  Let's look at a more specific example:   The sun is purple.  The sun is a planet.  Therefore, the sun is purple.   Although the two statements are false, the argument is still valid.   An Inalid Argument An example of an invalid form of an argument is  All A are B.  All A are C.  All B are C.   For example, a specific argument of this form is  All cows are animals that eat grass.  All cows are animals that moo.  All animals that eat grass are animals that moo.   In this case it is possible for the two premises to be true while the conclusion is false. It doesn't actually matter that the premises are true, just that even if they are, it is still possible to have a false conclusion.  Exploring Invalid Arguments  Use the general form in to write an invalid argument with true premises and a true conclusion.  Possible Argument Forms If possible, give an example of an argument (in sentences, not variables) that meets the given criteria. If it is not possible, just state that it is not possible.  A valid argument that has false premises and a true conclusion.  An invalid argument that has false premises and a true conclusion.  A valid argument that has true premises and a true conclusion.  An invalid argument that has true premises and a true conclusion.  A valid argument that has true premises and a false conclusion.  An invalid argument that has true premises and a false conclusion.   We've seen that it is possible to have a valid argument with a false conclusion. But, certainly, the point of a proof is for our arguments to have true conclusions, Thus, we need something more to have a good argument.   An argument is sound if it is valid and all the premises are true.   Since a valid argument cannot have true premises and a false conclusion, if the premises are actually true, then the argument must have a true conclusion. Note, soundness of an argument does depend on the actual content of the statements.  Sound Arguments Which or your arguments in are sound?   Assume that the truth-value assignments for each statement are correct.    All math students are sleep-deprived. (True)    All sleep-deprived people are goofy. (True)    All sleep-deprived people are math students. (False)    All math students are goofy. (True)    Now given these assigned truth-values, determine the validity and soundness of each of the following arguments:     All math students are sleep-deprived.  All sleep-deprived people are goofy.  All math students are goofy.       All math students are goofy.  All sleep-deprived people are goofy.  All math students are sleep-deprived.       All sleep-deprived people are math students.  All math students are goofy.   All sleep-deprived people are goofy.       All sleep-deprived people are goofy.  All math students are goofy.  All math students are goofy.       Use the following set of statements and assigned truth-values to construct arguments with two premises satifying the indicated description.    All talented people are insightful. (True)    All talented people are rich. (False)    All college students are rich. (False)    All college students are talented. (False)    All rich people are insightful. (False)    All college students are insightful. (False)    All rich people are college students. (False)      The argument is valid, but both premises and the conclusion are false.    The argument is valid, but both premises are false, and the conclusion is true.    The argument is valid, one premise is true and one false, and the conclusion is true.    The argument is valid, one premise is true and one false, and the conclusion is false.      Indicate whether the following statements are true or false. For those that are false, show why they are false by giving an example of an argument which make the statement false.    Every argument with a false conclusion is invalid.    Every argument with a false premise is invalid.    Every argument with a false premise and a false conclusion is invalid.    Every argument with a false premise and a true conclusion is invalid.    Every argument with true premises and a false conclusion is invalid.    Every argument with a true conclusion is sound.    Every argument with a false conclusion is unsound.      "
},
{
  "id": "arguments-3",
  "level": "2",
  "url": "arguments.html#arguments-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logical argument premises conclusion statement "
},
{
  "id": "E_statement",
  "level": "2",
  "url": "arguments.html#E_statement",
  "type": "Example",
  "number": "1.2.1",
  "title": "Statements.",
  "body": "Statements   is a statement. It is a true statement.  is a statement. It is a false statement.  is not a statement. It is neither true nor false. If we had additional information, such as specific information about the variables, then this might be a statement.  I ate breakfast today. is a statement. Although you might not be able to determine whether I ate breakfast, the statement is either true or false.   "
},
{
  "id": "D_valid",
  "level": "2",
  "url": "arguments.html#D_valid",
  "type": "Definition",
  "number": "1.2.2",
  "title": "",
  "body": "An argument is valid valid argument argument valid if whenever the premises are true, the conclusion must be true. "
},
{
  "id": "D_invalid",
  "level": "2",
  "url": "arguments.html#D_invalid",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": "An argument is invalid invalid argument argument invalid if it is possible for the premises to be true and the conclusion false. "
},
{
  "id": "E_univtransitivity",
  "level": "2",
  "url": "arguments.html#E_univtransitivity",
  "type": "Example",
  "number": "1.2.4",
  "title": "A Valid Argument.",
  "body": "A Valid Argument The following general form is a valid argument. This means if the two premises are true, then the conclusion must be true.   All A are B.  All B are C.  All A are C.   For example, a specific argument of this form is  All parabolas are functions of degree 2.  All functions of degree 2 are quadratic.  All parabolas are quadratic.  Note that we don't even need to undertand the statements themselves to know that this is a valid argument. If the premises are true, then the conclusion must be true.  "
},
{
  "id": "A_explorevalid",
  "level": "2",
  "url": "arguments.html#A_explorevalid",
  "type": "Activity",
  "number": "1.2.1",
  "title": "Exploring a Valid Argument.",
  "body": "Exploring a Valid Argument Consider the general form from .  Write a specific argument that has this form, but where at least one of your premises is false. Note, your statements need not be mathematical.  Is your conclusion true or false?  Is it possible to have a valid argument with at least one false premise and a true conclusion? "
},
{
  "id": "E_anothergenform",
  "level": "2",
  "url": "arguments.html#E_anothergenform",
  "type": "Example",
  "number": "1.2.5",
  "title": "Another Valid Argument.",
  "body": "Another Valid Argument One of the simplest forms for a valid argument is when your conclusion repeates a premise.  A  B  A   Although this form is probably too simple to use in actual proof writing, it is useful for understanding validity. It is straightforward to see that it would be impossible to have true premises and a false conclusion, as A can't be both true and false. "
},
{
  "id": "E_argsentences",
  "level": "2",
  "url": "arguments.html#E_argsentences",
  "type": "Example",
  "number": "1.2.6",
  "title": "An Argument with False Premises and False Conclusion.",
  "body": "An Argument with False Premises and False Conclusion  Let's look at a more specific example:   The sun is purple.  The sun is a planet.  Therefore, the sun is purple.   Although the two statements are false, the argument is still valid.  "
},
{
  "id": "E_invalidform",
  "level": "2",
  "url": "arguments.html#E_invalidform",
  "type": "Example",
  "number": "1.2.7",
  "title": "An Inalid Argument.",
  "body": "An Inalid Argument An example of an invalid form of an argument is  All A are B.  All A are C.  All B are C.   For example, a specific argument of this form is  All cows are animals that eat grass.  All cows are animals that moo.  All animals that eat grass are animals that moo.   In this case it is possible for the two premises to be true while the conclusion is false. It doesn't actually matter that the premises are true, just that even if they are, it is still possible to have a false conclusion. "
},
{
  "id": "A_invalidtrueconcl",
  "level": "2",
  "url": "arguments.html#A_invalidtrueconcl",
  "type": "Activity",
  "number": "1.2.2",
  "title": "Exploring Invalid Arguments.",
  "body": "Exploring Invalid Arguments  Use the general form in to write an invalid argument with true premises and a true conclusion. "
},
{
  "id": "A_possibleforms",
  "level": "2",
  "url": "arguments.html#A_possibleforms",
  "type": "Activity",
  "number": "1.2.3",
  "title": "Possible Argument Forms.",
  "body": "Possible Argument Forms If possible, give an example of an argument (in sentences, not variables) that meets the given criteria. If it is not possible, just state that it is not possible.  A valid argument that has false premises and a true conclusion.  An invalid argument that has false premises and a true conclusion.  A valid argument that has true premises and a true conclusion.  An invalid argument that has true premises and a true conclusion.  A valid argument that has true premises and a false conclusion.  An invalid argument that has true premises and a false conclusion.  "
},
{
  "id": "D_sound",
  "level": "2",
  "url": "arguments.html#D_sound",
  "type": "Definition",
  "number": "1.2.8",
  "title": "",
  "body": " An argument is sound if it is valid and all the premises are true.  "
},
{
  "id": "arguments-19",
  "level": "2",
  "url": "arguments.html#arguments-19",
  "type": "Activity",
  "number": "1.2.4",
  "title": "Sound Arguments.",
  "body": "Sound Arguments Which or your arguments in are sound? "
},
{
  "id": "arguments-20-1",
  "level": "2",
  "url": "arguments.html#arguments-20-1",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": "Assume that the truth-value assignments for each statement are correct.    All math students are sleep-deprived. (True)    All sleep-deprived people are goofy. (True)    All sleep-deprived people are math students. (False)    All math students are goofy. (True)    Now given these assigned truth-values, determine the validity and soundness of each of the following arguments:     All math students are sleep-deprived.  All sleep-deprived people are goofy.  All math students are goofy.       All math students are goofy.  All sleep-deprived people are goofy.  All math students are sleep-deprived.       All sleep-deprived people are math students.  All math students are goofy.   All sleep-deprived people are goofy.       All sleep-deprived people are goofy.  All math students are goofy.  All math students are goofy.     "
},
{
  "id": "arguments-20-2",
  "level": "2",
  "url": "arguments.html#arguments-20-2",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": " Use the following set of statements and assigned truth-values to construct arguments with two premises satifying the indicated description.    All talented people are insightful. (True)    All talented people are rich. (False)    All college students are rich. (False)    All college students are talented. (False)    All rich people are insightful. (False)    All college students are insightful. (False)    All rich people are college students. (False)      The argument is valid, but both premises and the conclusion are false.    The argument is valid, but both premises are false, and the conclusion is true.    The argument is valid, one premise is true and one false, and the conclusion is true.    The argument is valid, one premise is true and one false, and the conclusion is false.    "
},
{
  "id": "arguments-20-3",
  "level": "2",
  "url": "arguments.html#arguments-20-3",
  "type": "Exercise",
  "number": "1.2.3",
  "title": "",
  "body": " Indicate whether the following statements are true or false. For those that are false, show why they are false by giving an example of an argument which make the statement false.    Every argument with a false conclusion is invalid.    Every argument with a false premise is invalid.    Every argument with a false premise and a false conclusion is invalid.    Every argument with a false premise and a true conclusion is invalid.    Every argument with true premises and a false conclusion is invalid.    Every argument with a true conclusion is sound.    Every argument with a false conclusion is unsound.    "
},
{
  "id": "connectives",
  "level": "1",
  "url": "connectives.html",
  "type": "Section",
  "number": "1.3",
  "title": "Logical Connectives",
  "body": " Logical Connectives logical connectives connective and connective or connective if...then connective not connective and connective if and only if connective nand  We want to understand what makes a mathematical proof. One of the foundations for proofs is logical structure. If we build a good foundation in logic, then we can better understand mathematical statements and proof structures. We have already seen the general form for an argument. Now we want to focus on types of statements used to make up an argument. In this section we will be looking at logical forms, independent of content.  If and are variables representing statements, we can combine these statements into new statements using logical connectives.   Logical Connectives: NOT, AND, OR   Negation connective negation not ; negation NOT. Notation: , read as not .   Conjunction connective conjunction and ; conjunction AND. Notation: , read as and .   Disjunction connective disjunction or ; disjunction (inclusive) OR. Notation: , read as or .      Our goal is to determine when these new statements are true or false based on whether and are true or false. We can create a truth table truth table that looks at all the possibilities of true or false for and . When writing a truth table, make a column for each variable, list all the possible cases of true and false, then for each case, determine whether the new statement (with the connective) is true or false.   Truth table for .          T  F    F  T    It should make sense that if we negate T we get F, and vice versa.   Truth table for .            T  T  T    T  F  F    F  T  F    F  F  F    Again, the truth values for an and statement should make sense. The only time it should be true is if both parts of the statement are true.   Truth table for .            T  T  T    T  F  T    F  T  T    F  F  F    The truth values for an or statement should, mostly, make sense, as long as one part of the or statement is true, the whole statement is true. You may ask about the case where both parts are true. We think of this as an inclusive or, which means we allow both to be true. For example, A computer science major must take Math 175 or Math 250. You will still get a major if you take both.  There is a connective for an exclusive or (one or the other, not both).   Logical Connective: EXCLUSIVE OR    Exclusive Or connective disjunction connective exclusive or exclusive or ; disjunction (exclusive) OR, NOT BOTH. Notation: , read as exclusive or .       Exclusive Or Give the truth table for based on a small change to the truth table for .  Now that we can connect two statements, we can connect as many as we'd like using multiple quantifiers. For example, we could form the statement Make sure you use parentheses when combining statements. For example, is not the same as .   Truth table for and .                  T  T  F  T  T  F    T  F  F  F  T  F    F  T  T  T  T  F    F  F  T  T  F  T     Truth Table Practice Give the truth table for .  More Truth Table Practice Give the truth table for .  Truth Table with Three Variables Truth tables can have more than two variables. We just need to make sure we have a row for every possible combination of truth values for the variables. How many rows will you need in a truth table for 3 variables? Give the truth table for .  One of the things we want to be able to do is to translate English (or mathematical) sentences into logical statements. We have to be careful about how common phrases are really hidden and s. For example, but is really . Similarly, neither nor is really .  A conditional statement conditional statement has the form if then . We use the connective for conditional statements.   Logical Connective: IF...THEN   Conditional connective conditional if then ; conditional IF THEN. Notation: , read as if then .      In a conditional statement , we call the hypothesis , and the conclusion .  Before looking at the truth table, we need to understand when an if...then... statement is true or false. This is actually trickier than it seems.  Conditional Statement  Suppose I say to you If it rains tomorrow, then class is cancelled. When would you accuse me of lying to you? For example, if it doesn't rain and we have class, would you have thought my statement false? No. Now, you might not think my statement is true, either. But remember, statements must be either true or false. So if it is not false, then it is true.  Now, what if it doesn't rain, but I cancel class anyway? Would I have lied? No, I didn't tell you I wouldn't cancel class. So, again, this would be a true statement.  The only time you could accuse me of having made a false statement is if it rains and we don't cancel class. If we think of it rains tomorrow as and class is cancelled as , then the only time the statement is false is when is true and is false.    Truth table for .            T  T  T    T  F  F    F  T  T    F  F  T     To better understand the truth or falsity of a conditional, let's look at another example.  A Mathematical Conditional Statement  Consider the mathematical statement If then . Do you agree this is a true mathematical statement?  Let be and be . Consider all the cases of and being true or false.  For example, if , then we have the case where is true and is true.  If , then we have the case where is false and is true. But remember, the original statement is still true!  If , then we have the case where is false and is false. But again, the original statement is still true.  It is impossible to find an that makes true and false. Thus, we never have the case where the conditional, if then , is false.   Understanding Conditionals Give an example of a conditional statement, not one of the examples from above. Write in your own words why must be true whenever is false.  Practice with Conditionals Give the truth table for .  The statement is useful in mathematics, but it is not very concise. We can simplify this statement by introducing another logical connective.   Logical Connective: IF AND ONLY IF   Biconditional connective biconditional if and only if ; biconditional IF AND ONLY IF. Notation: , read as if and only if .      The biconditional is really just the combination of two conditionals: and . In particular, and have the same truth tables.   Truth table for .            T  T  T    T  F  F    F  T  F    F  F  T     Understanding Biconditionals Explain, in your own words, how to decide when is true or false.  Biconditional as Two Conditionals We read the biconditional as if and only if . Determine which of the two statements and means the same as if and which means the same as only if . Think about when each statement should be true (or false).  In mathematics we might see statements such as is necessary for or is sufficient for . These are really conditional statements. In particular, is sufficient for means ; and is necessary for means , which, we will see shortly, is equivalent to . So, a statement such as is necessary and sufficient for means .  We introduce one last connective, which is not as commonly used. It is nice to have an additional connective for practice, but this connective has a particularly nice property which we will explore in the exercises.   Logical Connective: NAND    Nand connective nand nand ; not both NOT BOTH. Notation: , read as nand .      Nand is really just the negation of and : . In particular, has the same truth table as .   Truth table for .            T  T  F    T  F  T    F  T  T    F  F  T     A tautology tautology is a statement that is always true.  For example, is a tautology. If you check the truth table, you will see that the only values in the column for the statement are T.  A contradiction contradiction is a statement that is always false.  For example, is a contradiction. If you check the truth table, you will see that the only values in the column for the statement are F.  Note that tautologies and contradictions are logical statements that are always true or always false, independent of the content of .  If we want to make bigger statements using tautologies or contradictions, we can use tautology; always true to represent a tautology and contradiction; always false to represent a contradiction. For example, we could find the truth table for .  Example of   Truth table for .            T  T  T    F  T  F       Two statements are logically equivalent logical equivalence is logically equivalent to if they have identical truth tables. If statements and are logically equivalent, we denote it .  For example, we can see that is logically equivalent to by comparing the first and last columns of .  From the definitions and truth tables of and , we see that    Logical Equivalence Practice Use a truth table to determine if and are logically equivalent. What does this tell you about distributing negation?  Negating Or Use a truth table to show and are logically equivalent.  Negating And Use a truth table to show and are logically equivalent.  The equivalences in and are called DeMorgan's Laws DeMorgan's Laws . These are useful equivalences and are worth committing to memory. As we've seen in the above activities, we cannot simply distribute a negation sign. However, DeMorgan's Laws allow us to distribute the negation as long as we also change from and to or and vice versa. Given the importance of this concept in mathematics, it is useful at this point to convince yourself that the negation of and and statement is an or statement and vice versa using statements in English. For example, if the weather is not cold and rainy, then it is either not cold or not rainy.  One thing to be careful about with English statements is that they do not naturally contain parentheses. We often really have to think about the meaning of the statement and infer the intended parentheses. Even in the above cold and rainy sentence, we have to understand that we mean not (cold and rainy) rather than (not cold) and rainy.  Negating Conditionals Use a truth truth table to show is logically equivalent to . This is the rule for negating an if...then. Like DeMorgan's Law, it is worth committing to memory.  The following equivalences will be useful when working with conditional statements in mathematics.   Logical Equivalences for Conditionals conditional logical equvalences for    conditional negation of   This second equivalence is the negation of the conditional . It is going to be really important that we understand that the negation of a conditional is not a conditional itself.   Converse Give the truth table for . Is it equivalent to ? The statement is the converse of .  Contrapositive Give the truth table for . Is it equivalent to ? The statement is the contrapositive of .  Inverse What is the contrapositive of ? This is also called the inverse of .  We summarize the previous activities in the following definition.  A conditional statement has  contrapositive contrapositive : ;  converse converse : ;  inverse inverse of a conditional : .     Contrapositive and Converse  Consider the statement: If then . What is the contrapositive of this statement? What is the converse?  Contrapositive: If then ; Converse: If then .   The following is a list of important logical equivalences. All of them can be checked using truth tables.   Summary of Logical Equivalences logical equivalence  Let and be variables representing statements. Let be a tautology and be a contradiction.  Commutative Laws   Associative Laws   Distributive Laws   Identity Laws   Negation Laws   Double Negation Law   Idempotent Laws   Universal Bound Laws   DeMorgan's Laws   Absorption Laws       Below is a list of pairs of statements. Determine, using a truth table, whether the two statements in each pair are logically equivalent.     ;      ;      ;      ;      ;      ;      ;      ;      Determine, using a truth table, whether each of the following statements is a tautology, a contradiction, or neither.                                              Produce truth tables for the following statements. Then abbreviate them by finding the shortest possible logically equivalent statement.               Using only the connectives and , write statements logically equivalent to each of the following:                        Using only the connective \/\/ , write statements logically equivalent to each of the following:                                     "
},
{
  "id": "T_ttnot",
  "level": "2",
  "url": "connectives.html#T_ttnot",
  "type": "Table",
  "number": "1.3.1",
  "title": "Truth table for <span class=\"process-math\">\\(\\neg p\\text{.}\\)<\/span>",
  "body": " Truth table for .          T  F    F  T    "
},
{
  "id": "T_ttand",
  "level": "2",
  "url": "connectives.html#T_ttand",
  "type": "Table",
  "number": "1.3.2",
  "title": "Truth table for <span class=\"process-math\">\\(p\\wedge q\\text{.}\\)<\/span>",
  "body": " Truth table for .            T  T  T    T  F  F    F  T  F    F  F  F    "
},
{
  "id": "T_ttor",
  "level": "2",
  "url": "connectives.html#T_ttor",
  "type": "Table",
  "number": "1.3.3",
  "title": "Truth table for <span class=\"process-math\">\\(p\\vee q\\text{.}\\)<\/span>",
  "body": " Truth table for .            T  T  T    T  F  T    F  T  T    F  F  F    "
},
{
  "id": "A_xor",
  "level": "2",
  "url": "connectives.html#A_xor",
  "type": "Activity",
  "number": "1.3.1",
  "title": "Exclusive Or.",
  "body": "Exclusive Or Give the truth table for based on a small change to the truth table for . "
},
{
  "id": "T_ttparenexample",
  "level": "2",
  "url": "connectives.html#T_ttparenexample",
  "type": "Table",
  "number": "1.3.4",
  "title": "Truth table for <span class=\"process-math\">\\(\\neg p\\vee q\\)<\/span> and <span class=\"process-math\">\\(\\neg (p\\vee q)\\text{.}\\)<\/span>",
  "body": " Truth table for and .                  T  T  F  T  T  F    T  F  F  F  T  F    F  T  T  T  T  F    F  F  T  T  F  T    "
},
{
  "id": "A_ttpractice",
  "level": "2",
  "url": "connectives.html#A_ttpractice",
  "type": "Activity",
  "number": "1.3.2",
  "title": "Truth Table Practice.",
  "body": "Truth Table Practice Give the truth table for . "
},
{
  "id": "A_morepractice",
  "level": "2",
  "url": "connectives.html#A_morepractice",
  "type": "Activity",
  "number": "1.3.3",
  "title": "More Truth Table Practice.",
  "body": "More Truth Table Practice Give the truth table for . "
},
{
  "id": "A_numrows",
  "level": "2",
  "url": "connectives.html#A_numrows",
  "type": "Activity",
  "number": "1.3.4",
  "title": "Truth Table with Three Variables.",
  "body": "Truth Table with Three Variables Truth tables can have more than two variables. We just need to make sure we have a row for every possible combination of truth values for the variables. How many rows will you need in a truth table for 3 variables? Give the truth table for . "
},
{
  "id": "connectives-26",
  "level": "2",
  "url": "connectives.html#connectives-26",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conditional statement "
},
{
  "id": "connectives-28",
  "level": "2",
  "url": "connectives.html#connectives-28",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hypothesis conclusion "
},
{
  "id": "E_condstatement",
  "level": "2",
  "url": "connectives.html#E_condstatement",
  "type": "Example",
  "number": "1.3.5",
  "title": "Conditional Statement.",
  "body": "Conditional Statement  Suppose I say to you If it rains tomorrow, then class is cancelled. When would you accuse me of lying to you? For example, if it doesn't rain and we have class, would you have thought my statement false? No. Now, you might not think my statement is true, either. But remember, statements must be either true or false. So if it is not false, then it is true.  Now, what if it doesn't rain, but I cancel class anyway? Would I have lied? No, I didn't tell you I wouldn't cancel class. So, again, this would be a true statement.  The only time you could accuse me of having made a false statement is if it rains and we don't cancel class. If we think of it rains tomorrow as and class is cancelled as , then the only time the statement is false is when is true and is false.  "
},
{
  "id": "T_ttconditional",
  "level": "2",
  "url": "connectives.html#T_ttconditional",
  "type": "Table",
  "number": "1.3.6",
  "title": "Truth table for <span class=\"process-math\">\\(p\\rightarrow q\\text{.}\\)<\/span>",
  "body": " Truth table for .            T  T  T    T  F  F    F  T  T    F  F  T    "
},
{
  "id": "E_mathcond",
  "level": "2",
  "url": "connectives.html#E_mathcond",
  "type": "Example",
  "number": "1.3.7",
  "title": "A Mathematical Conditional Statement.",
  "body": "A Mathematical Conditional Statement  Consider the mathematical statement If then . Do you agree this is a true mathematical statement?  Let be and be . Consider all the cases of and being true or false.  For example, if , then we have the case where is true and is true.  If , then we have the case where is false and is true. But remember, the original statement is still true!  If , then we have the case where is false and is false. But again, the original statement is still true.  It is impossible to find an that makes true and false. Thus, we never have the case where the conditional, if then , is false.  "
},
{
  "id": "A_exconditional",
  "level": "2",
  "url": "connectives.html#A_exconditional",
  "type": "Activity",
  "number": "1.3.5",
  "title": "Understanding Conditionals.",
  "body": "Understanding Conditionals Give an example of a conditional statement, not one of the examples from above. Write in your own words why must be true whenever is false. "
},
{
  "id": "A_condpractice",
  "level": "2",
  "url": "connectives.html#A_condpractice",
  "type": "Activity",
  "number": "1.3.6",
  "title": "Practice with Conditionals.",
  "body": "Practice with Conditionals Give the truth table for . "
},
{
  "id": "T_ttbicond",
  "level": "2",
  "url": "connectives.html#T_ttbicond",
  "type": "Table",
  "number": "1.3.8",
  "title": "Truth table for <span class=\"process-math\">\\(p\\leftrightarrow q\\text{.}\\)<\/span>",
  "body": " Truth table for .            T  T  T    T  F  F    F  T  F    F  F  T    "
},
{
  "id": "A_understandingbicond",
  "level": "2",
  "url": "connectives.html#A_understandingbicond",
  "type": "Activity",
  "number": "1.3.7",
  "title": "Understanding Biconditionals.",
  "body": "Understanding Biconditionals Explain, in your own words, how to decide when is true or false. "
},
{
  "id": "A_piecebicond",
  "level": "2",
  "url": "connectives.html#A_piecebicond",
  "type": "Activity",
  "number": "1.3.8",
  "title": "Biconditional as Two Conditionals.",
  "body": "Biconditional as Two Conditionals We read the biconditional as if and only if . Determine which of the two statements and means the same as if and which means the same as only if . Think about when each statement should be true (or false). "
},
{
  "id": "T_nand",
  "level": "2",
  "url": "connectives.html#T_nand",
  "type": "Table",
  "number": "1.3.9",
  "title": "Truth table for <span class=\"process-math\">\\(p \/\/ q\\text{.}\\)<\/span>",
  "body": " Truth table for .            T  T  F    T  F  T    F  T  T    F  F  T    "
},
{
  "id": "D_tautology",
  "level": "2",
  "url": "connectives.html#D_tautology",
  "type": "Definition",
  "number": "1.3.10",
  "title": "",
  "body": "A tautology tautology is a statement that is always true. "
},
{
  "id": "D_contradiction",
  "level": "2",
  "url": "connectives.html#D_contradiction",
  "type": "Definition",
  "number": "1.3.11",
  "title": "",
  "body": "A contradiction contradiction is a statement that is always false. "
},
{
  "id": "connectives-53",
  "level": "2",
  "url": "connectives.html#connectives-53",
  "type": "Example",
  "number": "1.3.12",
  "title": "Example of <span class=\"process-math\">\\(p\\wedge \\mathbf{t}\\)<\/span>.",
  "body": "Example of   Truth table for .            T  T  T    F  T  F      "
},
{
  "id": "D_logequiv",
  "level": "2",
  "url": "connectives.html#D_logequiv",
  "type": "Definition",
  "number": "1.3.14",
  "title": "",
  "body": "Two statements are logically equivalent logical equivalence is logically equivalent to if they have identical truth tables. If statements and are logically equivalent, we denote it . "
},
{
  "id": "E_loqequivalence",
  "level": "2",
  "url": "connectives.html#E_loqequivalence",
  "type": "Example",
  "number": "1.3.15",
  "title": "",
  "body": "From the definitions and truth tables of and , we see that   "
},
{
  "id": "A_distribneg",
  "level": "2",
  "url": "connectives.html#A_distribneg",
  "type": "Activity",
  "number": "1.3.9",
  "title": "Logical Equivalence Practice.",
  "body": "Logical Equivalence Practice Use a truth table to determine if and are logically equivalent. What does this tell you about distributing negation? "
},
{
  "id": "A_demorgan1",
  "level": "2",
  "url": "connectives.html#A_demorgan1",
  "type": "Activity",
  "number": "1.3.10",
  "title": "Negating Or.",
  "body": "Negating Or Use a truth table to show and are logically equivalent. "
},
{
  "id": "A_demorgan2",
  "level": "2",
  "url": "connectives.html#A_demorgan2",
  "type": "Activity",
  "number": "1.3.11",
  "title": "Negating And.",
  "body": "Negating And Use a truth table to show and are logically equivalent. "
},
{
  "id": "connectives-60",
  "level": "2",
  "url": "connectives.html#connectives-60",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "DeMorgan's Laws "
},
{
  "id": "A_negcondit",
  "level": "2",
  "url": "connectives.html#A_negcondit",
  "type": "Activity",
  "number": "1.3.12",
  "title": "Negating Conditionals.",
  "body": "Negating Conditionals Use a truth truth table to show is logically equivalent to . This is the rule for negating an if...then. Like DeMorgan's Law, it is worth committing to memory. "
},
{
  "id": "B_equivforcond-4",
  "level": "2",
  "url": "connectives.html#B_equivforcond-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "negation of the conditional "
},
{
  "id": "A_converse",
  "level": "2",
  "url": "connectives.html#A_converse",
  "type": "Activity",
  "number": "1.3.13",
  "title": "Converse.",
  "body": "Converse Give the truth table for . Is it equivalent to ? The statement is the converse of . "
},
{
  "id": "A_contrapositive",
  "level": "2",
  "url": "connectives.html#A_contrapositive",
  "type": "Activity",
  "number": "1.3.14",
  "title": "Contrapositive.",
  "body": "Contrapositive Give the truth table for . Is it equivalent to ? The statement is the contrapositive of . "
},
{
  "id": "A_inverse",
  "level": "2",
  "url": "connectives.html#A_inverse",
  "type": "Activity",
  "number": "1.3.15",
  "title": "Inverse.",
  "body": "Inverse What is the contrapositive of ? This is also called the inverse of . "
},
{
  "id": "D_contrapositiveetc",
  "level": "2",
  "url": "connectives.html#D_contrapositiveetc",
  "type": "Definition",
  "number": "1.3.16",
  "title": "",
  "body": "A conditional statement has  contrapositive contrapositive : ;  converse converse : ;  inverse inverse of a conditional : .    "
},
{
  "id": "E_contrapositive",
  "level": "2",
  "url": "connectives.html#E_contrapositive",
  "type": "Example",
  "number": "1.3.17",
  "title": "Contrapositive and Converse.",
  "body": "Contrapositive and Converse  Consider the statement: If then . What is the contrapositive of this statement? What is the converse?  Contrapositive: If then ; Converse: If then .  "
},
{
  "id": "connectives-73-1",
  "level": "2",
  "url": "connectives.html#connectives-73-1",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "",
  "body": "Below is a list of pairs of statements. Determine, using a truth table, whether the two statements in each pair are logically equivalent.     ;      ;      ;      ;      ;      ;      ;      ;    "
},
{
  "id": "connectives-73-2",
  "level": "2",
  "url": "connectives.html#connectives-73-2",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "",
  "body": " Determine, using a truth table, whether each of the following statements is a tautology, a contradiction, or neither.                                            "
},
{
  "id": "connectives-73-3",
  "level": "2",
  "url": "connectives.html#connectives-73-3",
  "type": "Exercise",
  "number": "1.3.3",
  "title": "",
  "body": " Produce truth tables for the following statements. Then abbreviate them by finding the shortest possible logically equivalent statement.              "
},
{
  "id": "ER_onlyandnot",
  "level": "2",
  "url": "connectives.html#ER_onlyandnot",
  "type": "Exercise",
  "number": "1.3.4",
  "title": "",
  "body": "Using only the connectives and , write statements logically equivalent to each of the following:                       "
},
{
  "id": "connectives-73-5",
  "level": "2",
  "url": "connectives.html#connectives-73-5",
  "type": "Exercise",
  "number": "1.3.5",
  "title": "",
  "body": "Using only the connective \/\/ , write statements logically equivalent to each of the following:                                  "
},
{
  "id": "argumentswconnectives",
  "level": "1",
  "url": "argumentswconnectives.html",
  "type": "Section",
  "number": "1.4",
  "title": "Logical Arguments with Connectives",
  "body": " Logical Arguments with Connectives argument valid argument invalid  In we defined valid and and invalid arguments. In we looked at some common forms for logical statements. Now we want to look at how to determine if an argument made from logical statements is valid or invalid. As before, validity just depends on the structure of the argument, not the specific content.  Recall from and , an argument is valid valid argument if whenever the premises are true, the conclusion must be true, and an argument is invalid invalid argument if it is possible for the premises to be true and the conclusion false. Furthermore, validity of an argument does not depend on the actual truth or falsity of the statements.  To decide if an argument built from logical statements is valid, we construct a truth table for the premises and conclusion. Then we check for whether there is a case where the premises are true and the conclusion false.  Valid Argument Decide whether the following argument is valid or invalid.    We construct a truth table.               T  T  T  T    T  F  F  T    F  T  F  F    F  F  F  F     Since we are looking for where the premise is true, we only need to look at the first row (in bold). In this case, the conclusion is also true. Thus, whenever to premises are true the conclusion must be true. Hence, the argument is valid.   Invalid Argument Decide whether the following argument is valid or invalid.    We construct a truth table.               T  T  T  T    T  F  T  T    F  T  T  F    F  F  F  F     The first three rows all have true premises. However, in the case that is false and is true, the premise is true while the conclusion is false. Thus, it is possible to have true premises and a false conclusion. Hence, the argument is invalid.   Validity with a Truth Table Use a truth table to determine if the following argument is valid or invalid.       More Validity with a Truth Table Use a truth table to determine if the following argument is valid or invalid.       The following two argument forms are useful for constructing valid arguments.  Modus ponens: modus ponens        Transitivity: transitive argument        Validity of Transitivity transitive argument We will show that transitivity is a valid argument using a truth table.  Truth table for transitivity.                  T  T  T  T  T  T    T  T  F  T  F  F    T  F  T  F  T  T    T  F  F  F  T  F    F  T  T  T  T  T    F  T  F  T  F  T    F  F  T  T  T  T    F  F  F  T  T  T     Looking at the rows where both premises are true (in bold), we can see that the conclusion must be true. Thus, the argument is valid.   Validity of Modus Ponens modus ponens Use a truth table to show that modus ponens     is a valid argument.  Even More Validity with a Truth Table Use a truth table to determine if the following argument is valid or invalid.        The following arguments are common invalid arguments. Showing they are invalid is left as an exercise.  Converse error: converse error        Inverse error: inverse error          Use a truth table to show that the following argument (converse error) is invalid. Indicate the premises and conclusion on your table. Explain how your truth table supports your conclusion.               Use a truth table to show that the following argument (inverse error) is invalid. Indicate the premises and conclusion on your table. Explain how your truth table supports your conclusion.               Use a truth table to determine if the following argument is valid or invalid. Indicate the premises and conclusion on your table. Clearly state your conclusion and explain how your truth table supports your conclusion.                  Use a truth table to determine if the following argument is valid or invalid. Indicate the premises and conclusion on your table. Clearly state your conclusion and explain how your truth table supports your conclusion.                  Use a truth table to show that the following argument is valid. Indicate the premises and conclusion on your table. Explain how your truth table supports your conclusion.                "
},
{
  "id": "argumentswconnectives-5",
  "level": "2",
  "url": "argumentswconnectives.html#argumentswconnectives-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "valid invalid "
},
{
  "id": "E_validarg",
  "level": "2",
  "url": "argumentswconnectives.html#E_validarg",
  "type": "Example",
  "number": "1.4.1",
  "title": "Valid Argument.",
  "body": "Valid Argument Decide whether the following argument is valid or invalid.    We construct a truth table.               T  T  T  T    T  F  F  T    F  T  F  F    F  F  F  F     Since we are looking for where the premise is true, we only need to look at the first row (in bold). In this case, the conclusion is also true. Thus, whenever to premises are true the conclusion must be true. Hence, the argument is valid.  "
},
{
  "id": "E_invalidarg",
  "level": "2",
  "url": "argumentswconnectives.html#E_invalidarg",
  "type": "Example",
  "number": "1.4.3",
  "title": "Invalid Argument.",
  "body": "Invalid Argument Decide whether the following argument is valid or invalid.    We construct a truth table.               T  T  T  T    T  F  T  T    F  T  T  F    F  F  F  F     The first three rows all have true premises. However, in the case that is false and is true, the premise is true while the conclusion is false. Thus, it is possible to have true premises and a false conclusion. Hence, the argument is invalid.  "
},
{
  "id": "A_ttvalid1",
  "level": "2",
  "url": "argumentswconnectives.html#A_ttvalid1",
  "type": "Activity",
  "number": "1.4.1",
  "title": "Validity with a Truth Table.",
  "body": "Validity with a Truth Table Use a truth table to determine if the following argument is valid or invalid.      "
},
{
  "id": "A_ttvalid2",
  "level": "2",
  "url": "argumentswconnectives.html#A_ttvalid2",
  "type": "Activity",
  "number": "1.4.2",
  "title": "More Validity with a Truth Table.",
  "body": "More Validity with a Truth Table Use a truth table to determine if the following argument is valid or invalid.      "
},
{
  "id": "E_transitivearg",
  "level": "2",
  "url": "argumentswconnectives.html#E_transitivearg",
  "type": "Example",
  "number": "1.4.5",
  "title": "Validity of Transitivity.",
  "body": "Validity of Transitivity transitive argument We will show that transitivity is a valid argument using a truth table.  Truth table for transitivity.                  T  T  T  T  T  T    T  T  F  T  F  F    T  F  T  F  T  T    T  F  F  F  T  F    F  T  T  T  T  T    F  T  F  T  F  T    F  F  T  T  T  T    F  F  F  T  T  T     Looking at the rows where both premises are true (in bold), we can see that the conclusion must be true. Thus, the argument is valid.  "
},
{
  "id": "A_modusponens",
  "level": "2",
  "url": "argumentswconnectives.html#A_modusponens",
  "type": "Activity",
  "number": "1.4.3",
  "title": "Validity of Modus Ponens.",
  "body": "Validity of Modus Ponens modus ponens Use a truth table to show that modus ponens     is a valid argument. "
},
{
  "id": "A_ttvalid3",
  "level": "2",
  "url": "argumentswconnectives.html#A_ttvalid3",
  "type": "Activity",
  "number": "1.4.4",
  "title": "Even More Validity with a Truth Table.",
  "body": "Even More Validity with a Truth Table Use a truth table to determine if the following argument is valid or invalid.       "
},
{
  "id": "argumentswconnectives-20-1",
  "level": "2",
  "url": "argumentswconnectives.html#argumentswconnectives-20-1",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": " Use a truth table to show that the following argument (converse error) is invalid. Indicate the premises and conclusion on your table. Explain how your truth table supports your conclusion.             "
},
{
  "id": "argumentswconnectives-20-2",
  "level": "2",
  "url": "argumentswconnectives.html#argumentswconnectives-20-2",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": " Use a truth table to show that the following argument (inverse error) is invalid. Indicate the premises and conclusion on your table. Explain how your truth table supports your conclusion.             "
},
{
  "id": "argumentswconnectives-20-3",
  "level": "2",
  "url": "argumentswconnectives.html#argumentswconnectives-20-3",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": " Use a truth table to determine if the following argument is valid or invalid. Indicate the premises and conclusion on your table. Clearly state your conclusion and explain how your truth table supports your conclusion.                "
},
{
  "id": "argumentswconnectives-20-4",
  "level": "2",
  "url": "argumentswconnectives.html#argumentswconnectives-20-4",
  "type": "Exercise",
  "number": "1.4.4",
  "title": "",
  "body": " Use a truth table to determine if the following argument is valid or invalid. Indicate the premises and conclusion on your table. Clearly state your conclusion and explain how your truth table supports your conclusion.                "
},
{
  "id": "argumentswconnectives-20-5",
  "level": "2",
  "url": "argumentswconnectives.html#argumentswconnectives-20-5",
  "type": "Exercise",
  "number": "1.4.5",
  "title": "",
  "body": " Use a truth table to show that the following argument is valid. Indicate the premises and conclusion on your table. Explain how your truth table supports your conclusion.             "
},
{
  "id": "setnotation",
  "level": "1",
  "url": "setnotation.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction to Sets",
  "body": " Introduction to Sets set element subset  Sets set are collections of objects. They may be collections of mathematical objects, such as numbers or functions. They may be collections of any other type of object such as students in a class or times of day. We can even have sets of sets.  It is useful to understand some general notation when working with sets. We will work with sets more explicitly in later sections. For now, we really just need to be able to understand the notation.  We will usually use capital letters for sets, such as or . If we want to talk about elements in a set , we use the notation is an element of set . We read this notatation as is in or is an element of . If is not in , then we use the notation is not an element of set .  If we want to list the specific elements of a set, we use curly brackets, , around the elements of the set. We can also do this with a description of the elements in the set.   Set roster notation set roster notation  . This is the set whose elements are 1, 2, 3, 4, 5.  . This describes the odd numbers in , so 1, 3, 5.  . This describes the real numbers between 1 and 5 (which there are too many to list).   In general, if we use to describe a property of , we use the notation and read the statement as in such that has property .  A subset subset , , of a set is a set of elements that are also in .  We use the notation is a subset of for is a subset of . If is not a subset of , then we use the notation is not a subset of . Note, some books use as the notation for subset.  Subsets  , but .  It is important to understand the difference between subset, , and element, . For example, if , then , but . This is because 1 is an element, not a set. Similarly, , but . This is because is a set, not an element. In general, when working with sets, you should identify the elements of the set. Then sets of those elements are subsets. The curly brackets are our way of saying set.  There are some special subsets that we will use throughout the course (and, in fact, the rest of your mathematical career).   Notation for special sets of numbers  the set of real numbers , the set of real numbers real number . These are all the numbers your are familiar with from calculus: whole numbers, positives, negatives, fractions, decimals, square roots, , , etc.  the set of integers , the set integers integer . These are all the whole numbers: positive, negative, and zero.  the set of rational numbers , the set rational numbers rational number . These are all the whole numbers and fractions: positive, negative, and zero. We will revisit this set in more detail later.  the set of natural numbers , the set of natural numbers natural number . These are all the positive whole numbers. Some books include zero, some do not. Since this can be confusing, we will avoid this notation in this class (but you might see it in future classes). Instead, we will use one of the next two notations, which more clearly denote inclusion of zero, or not.  the set of positive integers , the set of positive integers. These are all the positive whole numbers. This set does NOT include zero.  the set of nonnegative integers , the set of nonnegative integers. These are the whole numbers that are not negative. This set DOES include zero.  the set of positive real numbers , the set of positive real numbers.  the set of nonnegative real numbers , the set of nonnegative real numbers. These are the real numbers that are not negative.   It is also useful to have a notation for the set with no elements. The empty set empty set is denoted empty set; set with no elements .  New Notation Based on the notations above, what would be a good notation for the set of integers less than zero?  No Zero Which of the following sets do NOT contain zero: ?  Practice with Sets Let . List the elements in each of the following sets.      Elements or Subsets  It is important to be able to distinguish between elements of a set and subsets of a set. Determine if each of the following is true or false. If it is false, what small change in notation would make it true?         Exercises  Explain in your own words why does not equal .  How many elements are in the set ?   Use set-roster notation to list the elements in each of the following sets.         Determine whether the following statements are true or false.               "
},
{
  "id": "E_roster",
  "level": "2",
  "url": "setnotation.html#E_roster",
  "type": "Example",
  "number": "2.1.1",
  "title": "Set roster notation.",
  "body": " Set roster notation set roster notation  . This is the set whose elements are 1, 2, 3, 4, 5.  . This describes the odd numbers in , so 1, 3, 5.  . This describes the real numbers between 1 and 5 (which there are too many to list).  "
},
{
  "id": "setnotation-11",
  "level": "2",
  "url": "setnotation.html#setnotation-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subset "
},
{
  "id": "E_subsetnotsubset",
  "level": "2",
  "url": "setnotation.html#E_subsetnotsubset",
  "type": "Example",
  "number": "2.1.2",
  "title": "Subsets.",
  "body": "Subsets  , but . "
},
{
  "id": "setnotation-17",
  "level": "2",
  "url": "setnotation.html#setnotation-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "empty set "
},
{
  "id": "A_notelessthan0",
  "level": "2",
  "url": "setnotation.html#A_notelessthan0",
  "type": "Activity",
  "number": "2.1.1",
  "title": "New Notation.",
  "body": "New Notation Based on the notations above, what would be a good notation for the set of integers less than zero? "
},
{
  "id": "A_nozero",
  "level": "2",
  "url": "setnotation.html#A_nozero",
  "type": "Activity",
  "number": "2.1.2",
  "title": "No Zero.",
  "body": "No Zero Which of the following sets do NOT contain zero: ? "
},
{
  "id": "A_setpractice",
  "level": "2",
  "url": "setnotation.html#A_setpractice",
  "type": "Activity",
  "number": "2.1.3",
  "title": "Practice with Sets.",
  "body": "Practice with Sets Let . List the elements in each of the following sets.     "
},
{
  "id": "A_elementsubset",
  "level": "2",
  "url": "setnotation.html#A_elementsubset",
  "type": "Activity",
  "number": "2.1.4",
  "title": "Elements or Subsets.",
  "body": "Elements or Subsets  It is important to be able to distinguish between elements of a set and subsets of a set. Determine if each of the following is true or false. If it is false, what small change in notation would make it true?       "
},
{
  "id": "setnotation-22-2",
  "level": "2",
  "url": "setnotation.html#setnotation-22-2",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": "Explain in your own words why does not equal . "
},
{
  "id": "setnotation-22-3",
  "level": "2",
  "url": "setnotation.html#setnotation-22-3",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": "How many elements are in the set ? "
},
{
  "id": "setnotation-22-4",
  "level": "2",
  "url": "setnotation.html#setnotation-22-4",
  "type": "Exercise",
  "number": "2.1.3",
  "title": "",
  "body": "Use set-roster notation to list the elements in each of the following sets.        "
},
{
  "id": "setnotation-22-5",
  "level": "2",
  "url": "setnotation.html#setnotation-22-5",
  "type": "Exercise",
  "number": "2.1.4",
  "title": "",
  "body": "Determine whether the following statements are true or false.             "
},
{
  "id": "quantifiers",
  "level": "1",
  "url": "quantifiers.html",
  "type": "Section",
  "number": "2.2",
  "title": "Quantifiers",
  "body": " Quantifiers quantifier   As we move into proving mathematical statements, we need to better understand the statements themselves. In your previous work with mathematics, you've often used variables and equations.  Think of some examples of variables variable you've seen in other math classes. What do these variables represent? Probably, the first example that comes to mind is something from an algebra class, such as or . You may also think of examples such as solving for in an expression such as . We use variables in mathematical statements to represent quantities that can vary. But we also use them to be more precise. Think of how much more confusing the first statement would be if we had to write it as \"a number squared equals another number;\" or the second statement, \"the function which multiplies a number by 3 and adds 2.\" When you first learned varables, you probably WERE introduced to them in terms of sentences, but eventually, you got used to what the symbols mean.  In this class, we will rarely be interested in mathematical equations. We want to move to the common format of mathematical statements often found when describing mathematical defintions or theorems.  Common forms of mathematical statements:  Universal Statements universal statement  We use these statements when a property is true for all things in a set.  Example: Every math student takes Calculus.   Conditional Statements conditional statement  These statements usually have the form if...then... .  Example: If a student majors in Computer Science, then she takes Discrete Math.  Existential Statements existential statement  We use these statements when somthing exists with a particular property.  Example: There exists a Linfield class that meets at 9am on Mondays.   Many mathematical statements use variables. For example, is not a statement since it has no truth value. However, if we say, there exists such that or for all , , and we know what set belongs to, then we can decide whether these statements are true or false.   Each Type   Give an additional example of each type of statement.     Quantified Statements   We want to be able to work with generic statements, like and , but also with variables. So instead of , we will use . An expression, , represents some property or expression about . We call the predicate predicate .  Statements with Variables  Let . Determine whether the statement for all , is true or false.  Since is the only value satisfying the equation, certainly every integer does not satisfy the equation. The statement is false.  Let . Determine whether the statement for all , is true or false.  Since is the only value satisfying the equation, certainly every real number does not satisfy the equation. The statement is false.  Let . Determine whether the statement for all , is true or false.  Since satisfies the equation, and is the only value in , the statement is true.  In these examples, is .   Our properties don't just need to be mathematical, though. For example we could have a predicate such as is is a math major. In this case the set of possible values for could be the set of students at Linfield, or the set of students in Introduction to Proofs. As we saw in , it is important that we define our set of interest, as changing the set can change whether the statement is true or false.    Notation for Quantifiers quantifier   Universal Quantifier universal quantifier  for all; universal quantifier , read as for all or for every.   Existential Quantifier existential quantifier  there exists; existential quantifier , read as there exists or for some.      A universal statement universal statement has the form .  To show a universal statement is true , you need to show all values in make true. If your set is small, you can do this just by showing is true for each . If is infinite, however, we will need more general techniques.  To show a universal statement is false , you just need to find one value in which makes false.  An existential statement existential statement has the form .  To show an existential statement is true , you just need to find one value in which makes true.  To show an existential statement is false , you need to show all values in make false, or no values make it true. If your set is small, you can do this just by showing is false for each . If is infinite, however, we will need more general techniques.  True Existential Show the following statement is true: .  False Existential Show the following statement is false: .  True Universal Let . Show the following statement is true: .  False Existential Let . Show the following statement is false: .  Translating Statements  Translate the statement using quantifiers and variables, All positive real numbers have square roots greater than zero.   Translate the statement using quantifiers and variables, Nobody's perfect.  is not perfect.   Translating a Statement Write the following statement formally using quantifiers and variables: Every differentiable function is continuous.   More Translation Write the following statements formally using quantifiers and variables.  Some even integers are negative.  Everyone makes mistakes.  Someone will get an A.     Negating Quantified Statements  In this section we will look at how to negate statements involving quantifiers.    Negations of Quantified Statements quantifier negation   The negation of is ; or  The negation of is ; or    We can think of negation as switching the quantifier and negating , but it will be really helpful if we can understand WHY this is the negation. Thinking about negating a for all statement, we need the statement to not be true for all things, which means it must be false for something, Thus, there exists something making true. Thinking about negating a there exists statement, we need there not to exist anything making true, which means must be false for everything. Thus, everything makes true.  Negating a Quantified Statement  Negate the statement: For all primes , is odd. Is this statement true or false?  There exist a prime such that is not odd. The original statement is false, since we can find an even prime ( ).  Negate the statement: There exists a real number , such that . Is this statement true or false?  For all real numbers , . The original statement is false, since the negation is true.   Writing Negations Write the negation of the following statements (in English).  For all integers , is an integer.  There exists an integer , such that .   Many of our quantified statements may have predicates involving other logical connectives. So it is going to be important to remember how to negate \"and\"s, \"or\"s, and \"if...then\"s.  Reminder, keep in mind the rules we saw in for negating logical statements.  Useful Negation Rules   AND statements  . This is DeMorgan's Law.  OR statements  . This is DeMorgan's Law.  IF...THEN statements  . The negation of a conditional is NOT a conditional.       More Writing Negations Write the negation of the following statements (in English).  There exists an integer , such that .  For all real numbers , if then .  For all functions , if is continuous, then is differentiable.    The relationship between for all and there exists can be used to show some surprising things. In particular, what happens if our domain, , has nothing in it? Let , the empty set. Is true or false? Well, let's look at the negation: . Now the negation MUST be false since has nothing in it, so there can't exist something in making true. Since the negation is false, the original statement is true! We say is vacuously vacuously true statement true.  Vacuously True Statement  Consider the statement For all turtles, , in Intro to Proofs, is getting an A. The negation is There exists a turtle, , in Intro to Proofs, such that is not getting an A. Since no such turtle exists, the negation is false. Making the original true. So every turtle in Intro to Proofs is getting an A.   As one additional note, it can be helpful in deciding if your negation is correct to find the truth value of both the original and the negation. They should have opposite values. Similarly, if you need to determine the truth value of a complex statement, it might be easier to find the truth value of the negation.  True or False Determine if each of the following statements are true or false. It may be helpful to look at the negations you founds in the above activities, , , , and .  For all integers , is an integer.  There exists an integer , such that .  There exists an integer , such that .  For all real numbers , if then .  For all functions , if is continuous, then is differentiable.  For all real numbers , if then or .  For all integers , if has a factor of 15, then has a factor of 3 and has a factor of 5.    Multiple Quantifiers  Many statements in mathematics involve multple quantifiers. For example, For all real numbers , there exists a real number with . These statements, though frequent in math courses, represent some of the most complicated types of statements to understand. In this section we will try to understand the general structure of such statements.  Let's look at the various ways we could have statements with two quantifiers. Since we have two quantifiers, we will have two variables. Thus, our predicate will now involve both variables. We can use the notation to mean a statement about and .   .  This means we can find a in that makes true for each in . In such statements will often depend on .   .  The order of the quantifiers matters. This means we can find a SINGLE in that makes true for every in . In such statements does not depend on . The same must work for all the 's.   .  This means is true for all and for all .   .  This means is true for for at least one and at least one .    Statements with Multiple Quantifiers  Let . Determine whether the following statements are true or false.   For any can you always find a corresponding with ?  Yes, for each let . So the statement is true.   Is there a single that works for all ?  No, no single will always have . So the statement is false.     Let . Determine if each statement is true or false. Give a reason for your answer.  .  .  .  .  .  .   Although we won't study the mathematical context of the following example in this class, it is a classic example in mathematics of a statement with multiple quantifiers and a conditional. It is so important that it is the subject of one set of math bike racks in front of Taylor Hall!   Definition of a Limit  The definition of the limit of a function: For every , there exists a such that if then . Or in symbols, .   Now, we want to be able to negate statements with multiple quantifiers. There is nothing really new here, we just negate our quantified statements as we did for single quantifiers.   Negating Statements with Multiple Quantifiers: quantifiers negation    The negation of is ;or  The negation of is ; or  The negation of is ; or  The negation of is ; or     Negating the Definition of a Limit  If you take Elementary Analysis, you will need to be able to negate the definition of the limit from . Negate For every , there exists a such that if then . Our statement has the form , so the negation has the form  .   Negating Statements with Multiple Quantifiers Write the negation of the following statements. Then determine whether the original statment is true or false.  There exists an integer such that for all integers .  For every integer there exists an integer such that .  There exists an integer such that for all integers .  For every integer there exists an integer such that .   Translating Statements with Multiple Quantifiers  Let be loves . Translate each of the following statements using quantifiers and variables.  Someone loves everyone.   Someone is loved by everyone.   Everyone loves someone.   Everyone is loved by someone.       Give an example to show the following statement is false.     Give an example to show the following statement is false.      Consider the statement Which of the following are equivalent ways of expressing this statement?    There is at least one real number whose square is 2.    The square of each real number is 2.    Some real numbers have square 2.    The number has square 2, for some real number .    If is a real number, then .    Some real number has square 2.      Consider the statement Which of the following are equivalent ways of expressing this statement?    If the square of an integer is even, then that integer is even    All integers have even squares and are even.    Given any integer whose square is even, that integer is itself even.    For all integers, there are some whose square is even.    Any integer with an even square is even.    All even integers have even squares.      Rewrite the following statements using the form ____ ,____.     Every real number is positive, negative, or zero.    No irrational numbers are integers.        Rewrite the statement in English without using the symbols or . Express your answer as simply as possible. Then write a negation for the statement. Determine which statement is true, the original or the negation.     a book , people , has read .     odd integers , an integer such that .     , integers and such that .     , such that .     , , .      Rewrite the statement formally using quantifiers and variables. Write the negation of the statement.    Everybody trusts somebody.    Somebody trusts everybody.    Any even integer equals twice some other integer.    The number of rows in any truth-table is for some integer .    There is a prime number between every integer and its double.      For each statement write a new statement by interchanging the symbols and . Which is true– the given statement, the interchanged version, neither, or both?     , such that .     , (the set of negative real numbers), .      Consider the following sequence of digits: 2300204. A person claims that all of the 1’s in the sequence are to the left of all of the 0’s in the sequence. Is this true? Justify your answer.  Write the claim formally and write a formal negation for it. Is the negation true or false?    "
},
{
  "id": "A_statetypes",
  "level": "2",
  "url": "quantifiers.html#A_statetypes",
  "type": "Activity",
  "number": "2.2.1",
  "title": "Each Type.",
  "body": "Each Type   Give an additional example of each type of statement.   "
},
{
  "id": "SS_quantifiers-2",
  "level": "2",
  "url": "quantifiers.html#SS_quantifiers-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "predicate "
},
{
  "id": "E_predicates",
  "level": "2",
  "url": "quantifiers.html#E_predicates",
  "type": "Example",
  "number": "2.2.1",
  "title": "Statements with Variables.",
  "body": "Statements with Variables  Let . Determine whether the statement for all , is true or false.  Since is the only value satisfying the equation, certainly every integer does not satisfy the equation. The statement is false.  Let . Determine whether the statement for all , is true or false.  Since is the only value satisfying the equation, certainly every real number does not satisfy the equation. The statement is false.  Let . Determine whether the statement for all , is true or false.  Since satisfies the equation, and is the only value in , the statement is true.  In these examples, is .  "
},
{
  "id": "SS_quantifiers-6",
  "level": "2",
  "url": "quantifiers.html#SS_quantifiers-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "universal statement "
},
{
  "id": "SS_quantifiers-9",
  "level": "2",
  "url": "quantifiers.html#SS_quantifiers-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "existential statement "
},
{
  "id": "A_existT",
  "level": "2",
  "url": "quantifiers.html#A_existT",
  "type": "Activity",
  "number": "2.2.2",
  "title": "True Existential.",
  "body": "True Existential Show the following statement is true: . "
},
{
  "id": "A_existF",
  "level": "2",
  "url": "quantifiers.html#A_existF",
  "type": "Activity",
  "number": "2.2.3",
  "title": "False Existential.",
  "body": "False Existential Show the following statement is false: . "
},
{
  "id": "A_universalT",
  "level": "2",
  "url": "quantifiers.html#A_universalT",
  "type": "Activity",
  "number": "2.2.4",
  "title": "True Universal.",
  "body": "True Universal Let . Show the following statement is true: . "
},
{
  "id": "A_universalF",
  "level": "2",
  "url": "quantifiers.html#A_universalF",
  "type": "Activity",
  "number": "2.2.5",
  "title": "False Existential.",
  "body": "False Existential Let . Show the following statement is false: . "
},
{
  "id": "E_translating",
  "level": "2",
  "url": "quantifiers.html#E_translating",
  "type": "Example",
  "number": "2.2.2",
  "title": "Translating Statements.",
  "body": "Translating Statements  Translate the statement using quantifiers and variables, All positive real numbers have square roots greater than zero.   Translate the statement using quantifiers and variables, Nobody's perfect.  is not perfect.  "
},
{
  "id": "A_formaltrans",
  "level": "2",
  "url": "quantifiers.html#A_formaltrans",
  "type": "Activity",
  "number": "2.2.6",
  "title": "Translating a Statement.",
  "body": "Translating a Statement Write the following statement formally using quantifiers and variables: Every differentiable function is continuous. "
},
{
  "id": "A_moretrans",
  "level": "2",
  "url": "quantifiers.html#A_moretrans",
  "type": "Activity",
  "number": "2.2.7",
  "title": "More Translation.",
  "body": "More Translation Write the following statements formally using quantifiers and variables.  Some even integers are negative.  Everyone makes mistakes.  Someone will get an A.  "
},
{
  "id": "E_negquant1",
  "level": "2",
  "url": "quantifiers.html#E_negquant1",
  "type": "Example",
  "number": "2.2.3",
  "title": "Negating a Quantified Statement.",
  "body": "Negating a Quantified Statement  Negate the statement: For all primes , is odd. Is this statement true or false?  There exist a prime such that is not odd. The original statement is false, since we can find an even prime ( ).  Negate the statement: There exists a real number , such that . Is this statement true or false?  For all real numbers , . The original statement is false, since the negation is true.  "
},
{
  "id": "A_simpleneg",
  "level": "2",
  "url": "quantifiers.html#A_simpleneg",
  "type": "Activity",
  "number": "2.2.8",
  "title": "Writing Negations.",
  "body": "Writing Negations Write the negation of the following statements (in English).  For all integers , is an integer.  There exists an integer , such that .  "
},
{
  "id": "A_complexneg",
  "level": "2",
  "url": "quantifiers.html#A_complexneg",
  "type": "Activity",
  "number": "2.2.9",
  "title": "More Writing Negations.",
  "body": "More Writing Negations Write the negation of the following statements (in English).  There exists an integer , such that .  For all real numbers , if then .  For all functions , if is continuous, then is differentiable.  "
},
{
  "id": "SS_negquant-11",
  "level": "2",
  "url": "quantifiers.html#SS_negquant-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vacuously "
},
{
  "id": "E_vacuouslytrue",
  "level": "2",
  "url": "quantifiers.html#E_vacuouslytrue",
  "type": "Example",
  "number": "2.2.4",
  "title": "Vacuously True Statement.",
  "body": "Vacuously True Statement  Consider the statement For all turtles, , in Intro to Proofs, is getting an A. The negation is There exists a turtle, , in Intro to Proofs, such that is not getting an A. Since no such turtle exists, the negation is false. Making the original true. So every turtle in Intro to Proofs is getting an A.  "
},
{
  "id": "A_TFquant",
  "level": "2",
  "url": "quantifiers.html#A_TFquant",
  "type": "Activity",
  "number": "2.2.10",
  "title": "True or False.",
  "body": "True or False Determine if each of the following statements are true or false. It may be helpful to look at the negations you founds in the above activities, , , , and .  For all integers , is an integer.  There exists an integer , such that .  There exists an integer , such that .  For all real numbers , if then .  For all functions , if is continuous, then is differentiable.  For all real numbers , if then or .  For all integers , if has a factor of 15, then has a factor of 3 and has a factor of 5.  "
},
{
  "id": "E_multquant1",
  "level": "2",
  "url": "quantifiers.html#E_multquant1",
  "type": "Example",
  "number": "2.2.5",
  "title": "Statements with Multiple Quantifiers.",
  "body": "Statements with Multiple Quantifiers  Let . Determine whether the following statements are true or false.   For any can you always find a corresponding with ?  Yes, for each let . So the statement is true.   Is there a single that works for all ?  No, no single will always have . So the statement is false.    "
},
{
  "id": "quantifiers-6-6",
  "level": "2",
  "url": "quantifiers.html#quantifiers-6-6",
  "type": "Activity",
  "number": "2.2.11",
  "title": "",
  "body": "Let . Determine if each statement is true or false. Give a reason for your answer.  .  .  .  .  .  .  "
},
{
  "id": "E_deflimit",
  "level": "2",
  "url": "quantifiers.html#E_deflimit",
  "type": "Example",
  "number": "2.2.6",
  "title": "Definition of a Limit.",
  "body": "Definition of a Limit  The definition of the limit of a function: For every , there exists a such that if then . Or in symbols, .  "
},
{
  "id": "E_negdeflimit",
  "level": "2",
  "url": "quantifiers.html#E_negdeflimit",
  "type": "Example",
  "number": "2.2.7",
  "title": "Negating the Definition of a Limit.",
  "body": "Negating the Definition of a Limit  If you take Elementary Analysis, you will need to be able to negate the definition of the limit from . Negate For every , there exists a such that if then . Our statement has the form , so the negation has the form  .  "
},
{
  "id": "A_negmultquant",
  "level": "2",
  "url": "quantifiers.html#A_negmultquant",
  "type": "Activity",
  "number": "2.2.12",
  "title": "Negating Statements with Multiple Quantifiers.",
  "body": "Negating Statements with Multiple Quantifiers Write the negation of the following statements. Then determine whether the original statment is true or false.  There exists an integer such that for all integers .  For every integer there exists an integer such that .  There exists an integer such that for all integers .  For every integer there exists an integer such that .  "
},
{
  "id": "E_translatingmult",
  "level": "2",
  "url": "quantifiers.html#E_translatingmult",
  "type": "Example",
  "number": "2.2.8",
  "title": "Translating Statements with Multiple Quantifiers.",
  "body": "Translating Statements with Multiple Quantifiers  Let be loves . Translate each of the following statements using quantifiers and variables.  Someone loves everyone.   Someone is loved by everyone.   Everyone loves someone.   Everyone is loved by someone.   "
},
{
  "id": "quantifiers-6-14-1",
  "level": "2",
  "url": "quantifiers.html#quantifiers-6-14-1",
  "type": "Exercise",
  "number": "2.2.3.1",
  "title": "",
  "body": "Give an example to show the following statement is false.    "
},
{
  "id": "quantifiers-6-14-2",
  "level": "2",
  "url": "quantifiers.html#quantifiers-6-14-2",
  "type": "Exercise",
  "number": "2.2.3.2",
  "title": "",
  "body": "Give an example to show the following statement is false.    "
},
{
  "id": "quantifiers-6-14-3",
  "level": "2",
  "url": "quantifiers.html#quantifiers-6-14-3",
  "type": "Exercise",
  "number": "2.2.3.3",
  "title": "",
  "body": " Consider the statement Which of the following are equivalent ways of expressing this statement?    There is at least one real number whose square is 2.    The square of each real number is 2.    Some real numbers have square 2.    The number has square 2, for some real number .    If is a real number, then .    Some real number has square 2.    "
},
{
  "id": "quantifiers-6-14-4",
  "level": "2",
  "url": "quantifiers.html#quantifiers-6-14-4",
  "type": "Exercise",
  "number": "2.2.3.4",
  "title": "",
  "body": " Consider the statement Which of the following are equivalent ways of expressing this statement?    If the square of an integer is even, then that integer is even    All integers have even squares and are even.    Given any integer whose square is even, that integer is itself even.    For all integers, there are some whose square is even.    Any integer with an even square is even.    All even integers have even squares.    "
},
{
  "id": "quantifiers-6-14-5",
  "level": "2",
  "url": "quantifiers.html#quantifiers-6-14-5",
  "type": "Exercise",
  "number": "2.2.3.5",
  "title": "",
  "body": " Rewrite the following statements using the form ____ ,____.     Every real number is positive, negative, or zero.    No irrational numbers are integers.    "
},
{
  "id": "quantifiers-6-14-6",
  "level": "2",
  "url": "quantifiers.html#quantifiers-6-14-6",
  "type": "Exercise",
  "number": "2.2.3.6",
  "title": "",
  "body": " Rewrite the statement in English without using the symbols or . Express your answer as simply as possible. Then write a negation for the statement. Determine which statement is true, the original or the negation.     a book , people , has read .     odd integers , an integer such that .     , integers and such that .     , such that .     , , .    "
},
{
  "id": "quantifiers-6-14-7",
  "level": "2",
  "url": "quantifiers.html#quantifiers-6-14-7",
  "type": "Exercise",
  "number": "2.2.3.7",
  "title": "",
  "body": " Rewrite the statement formally using quantifiers and variables. Write the negation of the statement.    Everybody trusts somebody.    Somebody trusts everybody.    Any even integer equals twice some other integer.    The number of rows in any truth-table is for some integer .    There is a prime number between every integer and its double.    "
},
{
  "id": "quantifiers-6-14-8",
  "level": "2",
  "url": "quantifiers.html#quantifiers-6-14-8",
  "type": "Exercise",
  "number": "2.2.3.8",
  "title": "",
  "body": " For each statement write a new statement by interchanging the symbols and . Which is true– the given statement, the interchanged version, neither, or both?     , such that .     , (the set of negative real numbers), .    "
},
{
  "id": "quantifiers-6-14-9",
  "level": "2",
  "url": "quantifiers.html#quantifiers-6-14-9",
  "type": "Exercise",
  "number": "2.2.3.9",
  "title": "",
  "body": " Consider the following sequence of digits: 2300204. A person claims that all of the 1’s in the sequence are to the left of all of the 0’s in the sequence. Is this true? Justify your answer.  Write the claim formally and write a formal negation for it. Is the negation true or false? "
},
{
  "id": "conditionals",
  "level": "1",
  "url": "conditionals.html",
  "type": "Section",
  "number": "2.3",
  "title": "Conditional Statements",
  "body": " Conditional Statements conditional statement  In we focused on existential and universal statements. In this section, we want to focus on statements that involve a conditional.  Which Type  For each of the following statements, determine whether it is a conditional, universal, or existential statement.  All even numbers have a factor of 2.  If , then .  There exists a number greater than 100.   Relationship between Universal and Conditional  There is a relationship between universal statements and conditional statements.  Rewrite the statement All even numbers have a factor of 2. as a conditional statement.  Rewrite the statement If , then . as a universal statement.     A universal conditional statement universal conditional statement has the form for all , if then . In symbols, we can write a universal conditional as   Universal Conditional Statement  Translate the statement using quantifiers and variables, If an integer is even then it is divisible by 2.  Let be is even and be is divisible by 2.  .   Translating to Universal Conditional Write the following statement formally as a universal conditional: Every differentiable function is continuous.  In we introduced the connective for conditional statements. A conditional statement, as we've seen, has the form if then , and we use the connective .  As many mathematical statements are in the form of a conditional, it is important to keep in mind how to determine if a conditional statement is true or false.  A conditional, , is TRUE if you can show that whenever is true, then must be true. Or, using the contrapositive, is TRUE if you can show that whenever is false, then must be false.  A conditional, , is FALSE if you can show that there is a possibility for to be true and to be false. Note, by recalling the logical equivalence , we see that the negation of an if...then is an and statement.  A Geography Conditional Consider the statement If you are in Portland, then you are in Oregon.  Determine if this statement is true or false.  Write the negation of the statement. Use this to check your answer to (a). In particular, your negation should have the opposite truth value to what you decided in (a).  A Weather Conditional Consider the statement If there are no clouds in the sky, then it is not raining.  Determine if this statement is true or false.  Write the negation of the statement. Use this to check your answer to (a). In particular, your negation should have the opposite truth value to what you decided in (a).  An Argument Conditional Consider the statement If an argument is valid, then it is impossible for the premises to be true and the conclusion false.  Determine if this statement is true or false.  Write the negation of the statement. Note, you may need to recall how to negate an and statement. Use this to check your answer to (a).  A Mathematical Conditional Consider the statement If a number is even, then it is divisible by 2.  Determine if this statement is true or false.  Write the negation of the statement. Use this to check your answer to (a). In particular, your negation should have the opposite truth value to what you decided in (a).  We restate a few equivalences and definitions from for easy reference.   Logical Equivalences for Conditionals conditional logical equvalences for       Negating a universal conditional statement:   A conditional statement has  contrapositive contrapositive : ;  converse converse : ;  inverse inverse of a conditional : .     We can extend the definition of contrapositive and converse to universal conditional statements.   The universal conditional statement has contrapositive contrapositive universal conditional  .   The universal conditional statement has converse converse universal conditional  .  Writing Contrapositives Consider the statement For all real numbers , if then or .  Write the negation of the statement.  Write the contrapositive of the statement.   More Writing Contrapositives Consider the statement For all integers , if has a factor of 15, then has a factor of 3 and has a factor of 5.  Write the negation of the statement.  Write the contrapositive of the statement.   Converse Statements Now we want to look at the converses for the statements in the previous activities.  For the statement given in , write the converse and determine if it is true or false.  For the statement given in , write the converse and determine if it is true or false.  For the statement given in , write the converse and determine if it is true or false.  Recall that a logical argument as seen in and can be valid or invalid, while a statement can be true or false. It is important to distiguish between these ideas. Arguments are not true or false, and statements are not valid or invalid. However, there is a connection between these ideas. In particular, we can convert arguments into conditional statements, where the premises of the argument form the hypothesis and the conclusion of the argument forms the conclusion.   Converting an Argument to a Conditional Statement  The argument  A  B  C  can be represented by the conditional   The premises of the argument, connected with an and become the if part and the conclusion of the argument becomes the then part.   Converting and Argument to a Conditional Consider the argument from .    We determined, using a truth table, that this is a valid argument. We can convert this argument to the conditional   If you check the truth table for , you will see that it is always true.   Converting and Argument to a Conditional Consider the argument from .    We determined, using a truth table, that this is an invalid argument. We can convert this argument to the conditional   If you check the truth table for , you will see that it can be false.   The corresponding conditional for a valid argument will be a tautology (always true), while the corresponding conditional for a invalid argument can be false (has at least one case where it is false).  Checking Validity with Conditional Consider the argument from .        Convert the argument to a conditional statement.  Determine if it is possible for the conditional statement to be false. What does this tell you about the validity of the argument?   More Checking Validity with Conditional Consider the argument from .       Convert the argument to a conditional statement.  Determine if it is possible for the conditional statement to be false. What does this tell you about the validity of the argument?    Often it is necessary to convert an informal mathematical statement into a more formal one. Complete the following statements so they are equivalent to The reciprocal of any positive number is positive.   Given any positive real number , the reciprocal of ___.  For any real number , if is ___ then ___.  If a real number ___, then ___.    Complete the following statements so they are equivalent to The cube root of any negative real number is negative.   Given any negative real number , the cube root of ___.  For any real number , if is ___, then ___.  If a real number ___, then ___.    In order to better understand mathematical statements, it can be helpful to write statements less formally. First rewrite each statement without using variables, then determine whether the statements are true or false.   There are real numbers and with the property that .  There is a real number such that .  For all positive integers , .  For all real numbers and , .   Fill in the blanks to rewrite the statement Every nonzero real number has a reciprocal.    All nonzero real numbers ___.  For all nonzero real numbers , there is ___ for .  For all nonzero real numbers , there is a real number such that ___.    Write the negation of each of the statements.   real numbers , if then .   , if is prime then is odd or .   integers , if is divisible by 6, then is divisible by 2 and is divisible by 3.    Use a conditional statement to determine if the following argument is valid or invalid. Clearly state your conclusion and explain how your conditional statement supports your conclusion.                  Use a conditional statement to determine if the following argument is valid or invalid. Clearly state your conclusion and explain how your conditional statement supports your conclusion.                  Use a conditional statement to show the following argument is valid. Explain how your conditional statement supports your conclusion.               Use a conditional statement to show the following argument is invalid. Explain how your conditional statement supports your conclusion.               "
},
{
  "id": "A_whichtype",
  "level": "2",
  "url": "conditionals.html#A_whichtype",
  "type": "Activity",
  "number": "2.3.1",
  "title": "Which Type.",
  "body": "Which Type  For each of the following statements, determine whether it is a conditional, universal, or existential statement.  All even numbers have a factor of 2.  If , then .  There exists a number greater than 100.  "
},
{
  "id": "A_univtocond",
  "level": "2",
  "url": "conditionals.html#A_univtocond",
  "type": "Activity",
  "number": "2.3.2",
  "title": "Relationship between Universal and Conditional.",
  "body": "Relationship between Universal and Conditional  There is a relationship between universal statements and conditional statements.  Rewrite the statement All even numbers have a factor of 2. as a conditional statement.  Rewrite the statement If , then . as a universal statement.  "
},
{
  "id": "conditionals-6",
  "level": "2",
  "url": "conditionals.html#conditionals-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "universal conditional statement "
},
{
  "id": "E_univcond",
  "level": "2",
  "url": "conditionals.html#E_univcond",
  "type": "Example",
  "number": "2.3.1",
  "title": "Universal Conditional Statement.",
  "body": "Universal Conditional Statement  Translate the statement using quantifiers and variables, If an integer is even then it is divisible by 2.  Let be is even and be is divisible by 2.  .  "
},
{
  "id": "A_transtounivcond",
  "level": "2",
  "url": "conditionals.html#A_transtounivcond",
  "type": "Activity",
  "number": "2.3.3",
  "title": "Translating to Universal Conditional.",
  "body": "Translating to Universal Conditional Write the following statement formally as a universal conditional: Every differentiable function is continuous. "
},
{
  "id": "A_condPortland",
  "level": "2",
  "url": "conditionals.html#A_condPortland",
  "type": "Activity",
  "number": "2.3.4",
  "title": "A Geography Conditional.",
  "body": "A Geography Conditional Consider the statement If you are in Portland, then you are in Oregon.  Determine if this statement is true or false.  Write the negation of the statement. Use this to check your answer to (a). In particular, your negation should have the opposite truth value to what you decided in (a). "
},
{
  "id": "A_condweather",
  "level": "2",
  "url": "conditionals.html#A_condweather",
  "type": "Activity",
  "number": "2.3.5",
  "title": "A Weather Conditional.",
  "body": "A Weather Conditional Consider the statement If there are no clouds in the sky, then it is not raining.  Determine if this statement is true or false.  Write the negation of the statement. Use this to check your answer to (a). In particular, your negation should have the opposite truth value to what you decided in (a). "
},
{
  "id": "A_condvalid",
  "level": "2",
  "url": "conditionals.html#A_condvalid",
  "type": "Activity",
  "number": "2.3.6",
  "title": "An Argument Conditional.",
  "body": "An Argument Conditional Consider the statement If an argument is valid, then it is impossible for the premises to be true and the conclusion false.  Determine if this statement is true or false.  Write the negation of the statement. Note, you may need to recall how to negate an and statement. Use this to check your answer to (a). "
},
{
  "id": "A_condeven",
  "level": "2",
  "url": "conditionals.html#A_condeven",
  "type": "Activity",
  "number": "2.3.7",
  "title": "A Mathematical Conditional.",
  "body": "A Mathematical Conditional Consider the statement If a number is even, then it is divisible by 2.  Determine if this statement is true or false.  Write the negation of the statement. Use this to check your answer to (a). In particular, your negation should have the opposite truth value to what you decided in (a). "
},
{
  "id": "conditionals-19",
  "level": "2",
  "url": "conditionals.html#conditionals-19",
  "type": "Definition",
  "number": "2.3.2",
  "title": "",
  "body": "A conditional statement has  contrapositive contrapositive : ;  converse converse : ;  inverse inverse of a conditional : .    "
},
{
  "id": "D_contrapositiveunivcond",
  "level": "2",
  "url": "conditionals.html#D_contrapositiveunivcond",
  "type": "Definition",
  "number": "2.3.3",
  "title": "",
  "body": " The universal conditional statement has contrapositive contrapositive universal conditional  . "
},
{
  "id": "D_converseunivcond",
  "level": "2",
  "url": "conditionals.html#D_converseunivcond",
  "type": "Definition",
  "number": "2.3.4",
  "title": "",
  "body": " The universal conditional statement has converse converse universal conditional  . "
},
{
  "id": "A_contrapos1",
  "level": "2",
  "url": "conditionals.html#A_contrapos1",
  "type": "Activity",
  "number": "2.3.8",
  "title": "Writing Contrapositives.",
  "body": "Writing Contrapositives Consider the statement For all real numbers , if then or .  Write the negation of the statement.  Write the contrapositive of the statement.  "
},
{
  "id": "A_contrapos2",
  "level": "2",
  "url": "conditionals.html#A_contrapos2",
  "type": "Activity",
  "number": "2.3.9",
  "title": "More Writing Contrapositives.",
  "body": "More Writing Contrapositives Consider the statement For all integers , if has a factor of 15, then has a factor of 3 and has a factor of 5.  Write the negation of the statement.  Write the contrapositive of the statement.  "
},
{
  "id": "A_converses",
  "level": "2",
  "url": "conditionals.html#A_converses",
  "type": "Activity",
  "number": "2.3.10",
  "title": "Converse Statements.",
  "body": "Converse Statements Now we want to look at the converses for the statements in the previous activities.  For the statement given in , write the converse and determine if it is true or false.  For the statement given in , write the converse and determine if it is true or false.  For the statement given in , write the converse and determine if it is true or false. "
},
{
  "id": "E_argtocondvalid",
  "level": "2",
  "url": "conditionals.html#E_argtocondvalid",
  "type": "Example",
  "number": "2.3.5",
  "title": "Converting and Argument to a Conditional.",
  "body": "Converting and Argument to a Conditional Consider the argument from .    We determined, using a truth table, that this is a valid argument. We can convert this argument to the conditional   If you check the truth table for , you will see that it is always true.  "
},
{
  "id": "E_argtocondinvalid",
  "level": "2",
  "url": "conditionals.html#E_argtocondinvalid",
  "type": "Example",
  "number": "2.3.6",
  "title": "Converting and Argument to a Conditional.",
  "body": "Converting and Argument to a Conditional Consider the argument from .    We determined, using a truth table, that this is an invalid argument. We can convert this argument to the conditional   If you check the truth table for , you will see that it can be false.  "
},
{
  "id": "A_condvalid1",
  "level": "2",
  "url": "conditionals.html#A_condvalid1",
  "type": "Activity",
  "number": "2.3.11",
  "title": "Checking Validity with Conditional.",
  "body": "Checking Validity with Conditional Consider the argument from .        Convert the argument to a conditional statement.  Determine if it is possible for the conditional statement to be false. What does this tell you about the validity of the argument?  "
},
{
  "id": "A_condvalid2",
  "level": "2",
  "url": "conditionals.html#A_condvalid2",
  "type": "Activity",
  "number": "2.3.12",
  "title": "More Checking Validity with Conditional.",
  "body": "More Checking Validity with Conditional Consider the argument from .       Convert the argument to a conditional statement.  Determine if it is possible for the conditional statement to be false. What does this tell you about the validity of the argument?  "
},
{
  "id": "conditionals-33-1",
  "level": "2",
  "url": "conditionals.html#conditionals-33-1",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "",
  "body": "Often it is necessary to convert an informal mathematical statement into a more formal one. Complete the following statements so they are equivalent to The reciprocal of any positive number is positive.   Given any positive real number , the reciprocal of ___.  For any real number , if is ___ then ___.  If a real number ___, then ___.   "
},
{
  "id": "conditionals-33-2",
  "level": "2",
  "url": "conditionals.html#conditionals-33-2",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "",
  "body": "Complete the following statements so they are equivalent to The cube root of any negative real number is negative.   Given any negative real number , the cube root of ___.  For any real number , if is ___, then ___.  If a real number ___, then ___.   "
},
{
  "id": "conditionals-33-3",
  "level": "2",
  "url": "conditionals.html#conditionals-33-3",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "",
  "body": "In order to better understand mathematical statements, it can be helpful to write statements less formally. First rewrite each statement without using variables, then determine whether the statements are true or false.   There are real numbers and with the property that .  There is a real number such that .  For all positive integers , .  For all real numbers and , .  "
},
{
  "id": "conditionals-33-4",
  "level": "2",
  "url": "conditionals.html#conditionals-33-4",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "",
  "body": "Fill in the blanks to rewrite the statement Every nonzero real number has a reciprocal.    All nonzero real numbers ___.  For all nonzero real numbers , there is ___ for .  For all nonzero real numbers , there is a real number such that ___.  "
},
{
  "id": "conditionals-33-5",
  "level": "2",
  "url": "conditionals.html#conditionals-33-5",
  "type": "Exercise",
  "number": "2.3.5",
  "title": "",
  "body": " Write the negation of each of the statements.   real numbers , if then .   , if is prime then is odd or .   integers , if is divisible by 6, then is divisible by 2 and is divisible by 3.  "
},
{
  "id": "conditionals-33-6",
  "level": "2",
  "url": "conditionals.html#conditionals-33-6",
  "type": "Exercise",
  "number": "2.3.6",
  "title": "",
  "body": " Use a conditional statement to determine if the following argument is valid or invalid. Clearly state your conclusion and explain how your conditional statement supports your conclusion.                "
},
{
  "id": "conditionals-33-7",
  "level": "2",
  "url": "conditionals.html#conditionals-33-7",
  "type": "Exercise",
  "number": "2.3.7",
  "title": "",
  "body": " Use a conditional statement to determine if the following argument is valid or invalid. Clearly state your conclusion and explain how your conditional statement supports your conclusion.                "
},
{
  "id": "conditionals-33-8",
  "level": "2",
  "url": "conditionals.html#conditionals-33-8",
  "type": "Exercise",
  "number": "2.3.8",
  "title": "",
  "body": " Use a conditional statement to show the following argument is valid. Explain how your conditional statement supports your conclusion.             "
},
{
  "id": "conditionals-33-9",
  "level": "2",
  "url": "conditionals.html#conditionals-33-9",
  "type": "Exercise",
  "number": "2.3.9",
  "title": "",
  "body": " Use a conditional statement to show the following argument is invalid. Explain how your conditional statement supports your conclusion.             "
},
{
  "id": "directproof",
  "level": "1",
  "url": "directproof.html",
  "type": "Section",
  "number": "3.1",
  "title": "Direct Proof and Counterexample",
  "body": " Direct Proof and Counterexample  Before starting proof techniques, we introduce a few mathematical definitons. Keep in mind, mathematical definitions are constructed to provide a common language for proofs. They are intended to provide rigor and precision. They are NOT intended to provide conceptual understanding. You need to develop conceptual understanding of the terms apart from the definition. However, we need to rely on definitions to provide structure for our proofs.  We defined the integers in . Recall from , we use for the set of integers.  An integer, , is even even integer if it has the form for some .  An integer , is odd odd integer if it has the form for some .  You are probably familiar, generally, with even numbers such as 2, 4, 6, 8, and odd numbers such as 3, 5, 7, 9. But the next example uses the definitions to look at more examples.  Even or Odd  Is -5 even or odd?  where . Thus, -5 is odd.  Is 0 even or odd?  where . Thus, 0 is even.  Let . Is even or odd?  where . Thus is even.  Let . Is even or odd?  where . Thus is odd.   Always, Sometimes, or Never Even Let be integers. Determine if each of the following are always even, always odd, or sometimes even\/ sometimes odd.        We've now seen several examples of even\/ odd integers. Are there integers which are both even and odd? Can an integer be neither even nor odd? The answer to both questions is no. However, proving that every integer is even or odd (and not both), is pretty challenging, and we won't try to do it, yet. But for the moment we will assume if we know an integer is NOT even, then it must be odd, and vice versa.  We start our proof techniques by looking at how to prove universal conditional statements, which we studied in . Recall, a universal conditional statement has the form For all , if has property then has property . We can restate this using symbolic notation: For all . Although we saw how to write for all using the symbol , in this book we will generally avoid the quantifier symbols in our proofs. This just helps with clarity for the reader and is fairly standard in mathematical writing. However, the techniques for understanding and negating quantified statements from still apply.  One very limited method for proving universal conditional statements is the method of exhaustion proof method of exaustion : for each specific where is true, show is true. In other words, we check if then for each .  Method of Exhaustion  Prove for all , if is even and , then can be written as the sum of prime numbers.  We can find all the integers that are even and . This is the set . For each of these numbers we can demonstrate a way to write them as the sum of primes: .   The method of exhaustion only works if we can show the statement for every . But if is infinite, we need to use a more general method. We saw the limitations of this method in . Although this method won't result in a proof if our set is infinite, it can be a helpful first stab at a proof in that generating examples can lead to more general insight into the problem. Our first more general technique is the method of direct proof .   Method of Direct Proof proof direct proof universal conditional prove  To prove statements of the form for all using the method of direct proof we use the following process.  Let Make sure this is a variable or generic , not a specific value.  Assume is true.  Show is true.    Direct Proof  Prove for all , if is even, then is odd.  Let be even. Then by definition, for some . Then where . Which means is odd.   Sum of Even Numbers  Prove the sum of two even integers is even.  Note, this statement is not obviously in the form of an if...then. We often have to translate statements into more formal statements before proving them.  More formally, prove for all if and are even, then is even.  Let be even. Then by definition, for some and for some . (Note, we cannot use for both and as they likely are two different numbers.) Then where . Which means is even.     A counterexample counterexample is used to disprove a universal conditional statements. If we have a universal conditional statement of the form for all , we show it is false with the following process.  Disproving by Counterexample counterexample universal conditional disprove  To disprove statements of the form for all we find a counterexample.   Find making, true and false. Note, this step may happen as scratchwork, not part of your counterexample.  For your counterexample, state .  Show , is true and is false.     Counterexample  Disprove the statement every prime number, , is odd.  Let . Then is prime and is not odd.   Proving a Statement is False Give a counterexample to show the following statement is false: for all if then .  Some proof writing advice:  Make the proof self-contained. Try not to reference many other mathematical facts. Many proofs in this course will rely entirely on definitions.  Use complete sentences. Even equations have a sentence structure. Your proof should be able to be read in sentences.  Give reasons. Connect your statements together.  Include words. Often using a word is better that using a symbol. Many proofs have no symbols in them at all.  The audience for your proofs is not the instructor. Think of the audience as being your peers in the course or even yourself in a few weeks (or months) when you might have forgotten the specific content. Write so you will know what you meant later.  The goal of a proof is to write a clear, easy to follow argument--not to just get to the end. The answer is the proof itself. Use space, start a new line, set equations on their own line.  Never feel that you have to be able to know what the end of the proof will look like before you can start. Write proofs one step at a time. Start with what you know. See if you can do one thing. See if you can do another thing. Look at where you want to go. Do not try to see the whole picture at once. This is also good advice for reading a proof.   Some common proof-writing errors:  Using an example for a proof. If you need to prove a statement for all , it is not enough to show it for an example.  Using the same variable to represent two different things.  Jumping to conclusions. Giving inadequate reasons. This often occurs if you rely on additional mathematical ideas or don't connect your ideas to each other.  Assuming what you need to prove. This is a big one. This most often occurs when there is confusion about conditional statements. Be careful about identifying the if and the then in a statement.    Often in math we need to identify whether a statement is true or false, so that we know whether we need to prove the true statement or disprove the false one. In order to practice, we give a few more definitions.  An integer, , is prime prime if and, for all positive integers , if then or .  An integer, , is composite composite if and for some positive integers with and .  Prime or Composite  Is 1 prime?  No. The definiton requires .  Is 1 composite?  No. Again, the definiton requires .  Is 121 prime?  No. . Thus, 121 is composite.  Let . Is composite?  It depends. If then, no. We would need for to be composite.   Prove or Disprove  Prove or disprove there exists a positive integer such that is prime.  Since we need to try to decide if the statement is true or false, first try some examples.   After trying several examples, we might guess that it is false. If we want to disprove the statement then we need to prove the negation. Find the negation of the statement.  For all positive integers is not prime (is composite).  So we need to show that for a general we can always write as a product of with .  We can try to factor the expression: .  Let . We need to show that . Since and . Thus . Therefore, is not prime.   Prove or Disprove Let and be integers. Prove or disprove the following statements.  If is even, then is even.  If is odd, then is odd.  If are odd, then their product, , is odd.      Use the definitions of even, odd, prime and composite to justify your answer to each of the following questions. Let and be integers.    Is even?    Is odd?    If , is composite?      Prove there are integers and such that and and is an integer.    Prove there is an integer such that is prime.    Disprove by giving a counterexample: for all real numbers and , if then .    Disprove by giving a counterexample: for all integers, and , if is odd then and are both odd.    Find the mistakes in the following proof.    Theorem: For all integers , if then is composite.   Proof : For , . But , and so 9 is composite. Hence the theorem is true.    Find the mistakes in the following proof.    Theorem: The difference between any odd integer and any even integer is odd.   Proof : Suppose is an odd integer, and is an even integer. By definition of odd, where is an integer, and by definition of even where is an integer. Then Since 1 is odd the difference between an odd integer and and even integer is odd.    Prove the difference of any even integer minus any odd integer is odd.    Prove the sum of any two odd integers is even.    Prove the following statement is false: there exists an integer such that is prime.   Prove or disprove the following statements using the method of direct proof or counterexample.    The difference of any two odd integers is odd.    The product of any even integer and any integer is even.    The difference of any two even integers is even.    The difference of any two odd integers is even.    For all integers , if is prime then .    For all integers , is prime.    If and are perfect squares, then is a perfect square.     "
},
{
  "id": "directproof-4",
  "level": "2",
  "url": "directproof.html#directproof-4",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "An integer, , is even even integer if it has the form for some . "
},
{
  "id": "directproof-5",
  "level": "2",
  "url": "directproof.html#directproof-5",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": "An integer , is odd odd integer if it has the form for some . "
},
{
  "id": "E_evenodd",
  "level": "2",
  "url": "directproof.html#E_evenodd",
  "type": "Example",
  "number": "3.1.3",
  "title": "Even or Odd.",
  "body": "Even or Odd  Is -5 even or odd?  where . Thus, -5 is odd.  Is 0 even or odd?  where . Thus, 0 is even.  Let . Is even or odd?  where . Thus is even.  Let . Is even or odd?  where . Thus is odd.  "
},
{
  "id": "A_evenoddneither",
  "level": "2",
  "url": "directproof.html#A_evenoddneither",
  "type": "Activity",
  "number": "3.1.1",
  "title": "Always, Sometimes, or Never Even.",
  "body": "Always, Sometimes, or Never Even Let be integers. Determine if each of the following are always even, always odd, or sometimes even\/ sometimes odd.       "
},
{
  "id": "directproof-11",
  "level": "2",
  "url": "directproof.html#directproof-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "method of exhaustion "
},
{
  "id": "E_pfbyexhaustion",
  "level": "2",
  "url": "directproof.html#E_pfbyexhaustion",
  "type": "Example",
  "number": "3.1.4",
  "title": "Method of Exhaustion.",
  "body": "Method of Exhaustion  Prove for all , if is even and , then can be written as the sum of prime numbers.  We can find all the integers that are even and . This is the set . For each of these numbers we can demonstrate a way to write them as the sum of primes: .  "
},
{
  "id": "directproof-13",
  "level": "2",
  "url": "directproof.html#directproof-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direct proof "
},
{
  "id": "E_dpconsecnumevenodd",
  "level": "2",
  "url": "directproof.html#E_dpconsecnumevenodd",
  "type": "Example",
  "number": "3.1.5",
  "title": "Direct Proof.",
  "body": "Direct Proof  Prove for all , if is even, then is odd.  Let be even. Then by definition, for some . Then where . Which means is odd.  "
},
{
  "id": "E_dpsumevens",
  "level": "2",
  "url": "directproof.html#E_dpsumevens",
  "type": "Example",
  "number": "3.1.6",
  "title": "Sum of Even Numbers.",
  "body": "Sum of Even Numbers  Prove the sum of two even integers is even.  Note, this statement is not obviously in the form of an if...then. We often have to translate statements into more formal statements before proving them.  More formally, prove for all if and are even, then is even.  Let be even. Then by definition, for some and for some . (Note, we cannot use for both and as they likely are two different numbers.) Then where . Which means is even.  "
},
{
  "id": "directproof-17",
  "level": "2",
  "url": "directproof.html#directproof-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "counterexample "
},
{
  "id": "E_counterex1",
  "level": "2",
  "url": "directproof.html#E_counterex1",
  "type": "Example",
  "number": "3.1.7",
  "title": "Counterexample.",
  "body": "Counterexample  Disprove the statement every prime number, , is odd.  Let . Then is prime and is not odd.  "
},
{
  "id": "A_counterex",
  "level": "2",
  "url": "directproof.html#A_counterex",
  "type": "Activity",
  "number": "3.1.2",
  "title": "Proving a Statement is False.",
  "body": "Proving a Statement is False Give a counterexample to show the following statement is false: for all if then . "
},
{
  "id": "D_prime",
  "level": "2",
  "url": "directproof.html#D_prime",
  "type": "Definition",
  "number": "3.1.8",
  "title": "",
  "body": "An integer, , is prime prime if and, for all positive integers , if then or . "
},
{
  "id": "D_composite",
  "level": "2",
  "url": "directproof.html#D_composite",
  "type": "Definition",
  "number": "3.1.9",
  "title": "",
  "body": "An integer, , is composite composite if and for some positive integers with and . "
},
{
  "id": "E_primecomposite",
  "level": "2",
  "url": "directproof.html#E_primecomposite",
  "type": "Example",
  "number": "3.1.10",
  "title": "Prime or Composite.",
  "body": "Prime or Composite  Is 1 prime?  No. The definiton requires .  Is 1 composite?  No. Again, the definiton requires .  Is 121 prime?  No. . Thus, 121 is composite.  Let . Is composite?  It depends. If then, no. We would need for to be composite.  "
},
{
  "id": "provedisproveprime",
  "level": "2",
  "url": "directproof.html#provedisproveprime",
  "type": "Example",
  "number": "3.1.11",
  "title": "Prove or Disprove.",
  "body": "Prove or Disprove  Prove or disprove there exists a positive integer such that is prime.  Since we need to try to decide if the statement is true or false, first try some examples.   After trying several examples, we might guess that it is false. If we want to disprove the statement then we need to prove the negation. Find the negation of the statement.  For all positive integers is not prime (is composite).  So we need to show that for a general we can always write as a product of with .  We can try to factor the expression: .  Let . We need to show that . Since and . Thus . Therefore, is not prime.  "
},
{
  "id": "A_provedisprove",
  "level": "2",
  "url": "directproof.html#A_provedisprove",
  "type": "Activity",
  "number": "3.1.3",
  "title": "Prove or Disprove.",
  "body": "Prove or Disprove Let and be integers. Prove or disprove the following statements.  If is even, then is even.  If is odd, then is odd.  If are odd, then their product, , is odd.  "
},
{
  "id": "directproof-29-1",
  "level": "2",
  "url": "directproof.html#directproof-29-1",
  "type": "Exercise",
  "number": "3.1.1",
  "title": "",
  "body": " Use the definitions of even, odd, prime and composite to justify your answer to each of the following questions. Let and be integers.    Is even?    Is odd?    If , is composite?    "
},
{
  "id": "directproof-29-2",
  "level": "2",
  "url": "directproof.html#directproof-29-2",
  "type": "Exercise",
  "number": "3.1.2",
  "title": "",
  "body": " Prove there are integers and such that and and is an integer.  "
},
{
  "id": "directproof-29-3",
  "level": "2",
  "url": "directproof.html#directproof-29-3",
  "type": "Exercise",
  "number": "3.1.3",
  "title": "",
  "body": " Prove there is an integer such that is prime.  "
},
{
  "id": "directproof-29-4",
  "level": "2",
  "url": "directproof.html#directproof-29-4",
  "type": "Exercise",
  "number": "3.1.4",
  "title": "",
  "body": " Disprove by giving a counterexample: for all real numbers and , if then .  "
},
{
  "id": "directproof-29-5",
  "level": "2",
  "url": "directproof.html#directproof-29-5",
  "type": "Exercise",
  "number": "3.1.5",
  "title": "",
  "body": " Disprove by giving a counterexample: for all integers, and , if is odd then and are both odd.  "
},
{
  "id": "directproof-29-6",
  "level": "2",
  "url": "directproof.html#directproof-29-6",
  "type": "Exercise",
  "number": "3.1.6",
  "title": "",
  "body": " Find the mistakes in the following proof.    Theorem: For all integers , if then is composite.   Proof : For , . But , and so 9 is composite. Hence the theorem is true.  "
},
{
  "id": "directproof-29-7",
  "level": "2",
  "url": "directproof.html#directproof-29-7",
  "type": "Exercise",
  "number": "3.1.7",
  "title": "",
  "body": " Find the mistakes in the following proof.    Theorem: The difference between any odd integer and any even integer is odd.   Proof : Suppose is an odd integer, and is an even integer. By definition of odd, where is an integer, and by definition of even where is an integer. Then Since 1 is odd the difference between an odd integer and and even integer is odd.  "
},
{
  "id": "directproof-29-8",
  "level": "2",
  "url": "directproof.html#directproof-29-8",
  "type": "Exercise",
  "number": "3.1.8",
  "title": "",
  "body": " Prove the difference of any even integer minus any odd integer is odd.  "
},
{
  "id": "directproof-29-9",
  "level": "2",
  "url": "directproof.html#directproof-29-9",
  "type": "Exercise",
  "number": "3.1.9",
  "title": "",
  "body": " Prove the sum of any two odd integers is even.  "
},
{
  "id": "directproof-29-10",
  "level": "2",
  "url": "directproof.html#directproof-29-10",
  "type": "Exercise",
  "number": "3.1.10",
  "title": "",
  "body": " Prove the following statement is false: there exists an integer such that is prime.  "
},
{
  "id": "directproof-29-11",
  "level": "2",
  "url": "directproof.html#directproof-29-11",
  "type": "Exercise",
  "number": "3.1.11",
  "title": "",
  "body": "Prove or disprove the following statements using the method of direct proof or counterexample.    The difference of any two odd integers is odd.    The product of any even integer and any integer is even.    The difference of any two even integers is even.    The difference of any two odd integers is even.    For all integers , if is prime then .    For all integers , is prime.    If and are perfect squares, then is a perfect square.   "
},
{
  "id": "moredirect",
  "level": "1",
  "url": "moredirect.html",
  "type": "Section",
  "number": "3.2",
  "title": "More Direct Proof: Rational Numbers and Divisibility",
  "body": " More Direct Proof: Rational Numbers and Divisibility rational number divisibility  In this section we introduce some new defintions and use them to practice with the technique of direct proof.  Rational Numbers  The set of real numbers is the set you are likely familiar with from your previous math courses, particularly algebra and calculus. These are all the numbers found on the number line, such as , etc. Recall, we use the notation for the set of real numbers.  A real number, , is rational rational number if there exist such that and . The set of rational numbers is represented by  A real number, , that is not rational is irrational irrational number . There is not a nice notation for the irrational numbers. We will use the set of irrational numbers , which is the set of real numbers minus the set of rationals.  To determine if a given number is rational, we need to be able to find a way to write it as a fraction of integers. To prove a number is rational is really a type of existence proof--we need to show exist. To prove a number is not rational, we need to show there is no possible way to write it as a fraction of integers. Also, keep in mind that rational and irrational numbers first need to be real numbers. It is possible that a number that is not rational is not a real number, and thus, not irrational either.  Rational Numbers  Is is rational?  Yes: .  Is rational?  Yes: .  Is rational?  Yes: it already has the form of an integer over an integer.  Is rational?  No: the demoninator cannot be 0. In fact, is not a number.   You have seen some common examples of irrational numbers in previous courses: . It is, in fact, challenging to prove these are irrational. We will see the proof that is irrational later in .  In your earlier dealings with rational and irrational numbers, you may have seen the property that rational numbers are ones with terminating or repeating decimal expansions, while irrational numbers have non-terminating and non-repeating decimal expansions. The next couple of examples explore this property.  is Rational  Show is a rational number.  We need to find such that and . We can use what we know about decimals: for example, . Thus, . Letting , we can see that .   is Rational  Show the repeating decimal is a rational number.  We need to find such that and . This one is trickier than the last example and requires a new technique. First, let . Then multiply both sides of by 1000, so that . We chose 1000 in order to get one set of the repeated digits in front of the decimal point. Now we subtract the two equations from each other: Resulting in . Now we just solve for .  Letting , we can see that .   Practice with Rational Numbers Prove the following numbers, , are rational by finding integers, and so that .      The next theorem gives us an example of how to prove more general statements with rational numbers.  The sum of two rational numbers is rational.   Let be rational. Show is rational.  Since is rational, it can be written as for some . Similarly, since is rational, it can be written as for some . (Note, we need to use different letters since and are not necessarily the same.) Now, Finding a common denominator,   Then and, since . Therefore, is rational.   Once we have proven a theorem, we can use it to prove additional statements. Note, a corollary corollary is just a theorem that follows almost directly from a previous theorem.  The double of a rational number is rational.  Let be a rational number. We want to show is rational. But . By , is rational.  Proofs with Rationals Let be rational numbers.  Prove is rational.  Prove is rational.  Prove or disprove is rational.    Divisibility divisible divides  We introduce the idea of divisibility for integers. It is important to understand that this concept involves only integers and is not the same thing as division. Divisibility is a property while division is an operation.  Let . Then is divisible divisible by if for some .  If for some we can also say  is a multiple multiple of ;  is a factor factor of ;  is a divisor divisor of ;   divides divides  .   We use the notation divides , read divides .  Important note: is a relationship between two integers. It is a statement that is either true or false. It does NOT equal a number. It is NOT the same thing as a fraction. It is not an equation, but it can be translated to the equation for some integer .  It is useful to look at the special case when or is 0.  is always false.  is true if .  Thus, is false, even though, technically, one could write .    Finding Divisors  Find the divisors of 6.  1, 2, 3, 6, -1, -2, -3, -6  Find the divisors of 5.  1, 5, -1, -5  Find the divisors of 1.  1, -1   If does not divide , then for every . This can be difficult to show in general, but if and are specific integers, you could show is not an integer. This is the ONLY time a fraction can show up in proofs about divisibility.  Notation: means does not divide .  Determining Divisibility  True or false: .  True, .  True or false: .  False, has no integer solutions since .  True or false: .  False, has no integer solutions since .  True or false: .  True, .  True or false: .  True, .  True or false: .  True, .  True or false: .  True, .  True or false: .  False, has no integer solutions since .  True or false: .  False, has no integer solutions.   Divisibility Practice Determine if the following divisibility statements are true or false, and justify your answer.        Now, we use the definition of divisibility to prove a more general theorem.  For all integers, , if and , then .  Let . Assume and . Then by definition, for some and for some . Substituting the first equation into the second, . Since , .  Divisibility Proof Prove if 15 divides , then 5 divides .  Prove or Disprove Prove or disprove if 6 divides , then 12 divides .  Divisibility and Addition Prove if and , then .      Prove the following numbers are rational by writing them as a ratio of two integers.                 Prove every integer is a rational number.    Find the mistakes in the following proof.    Theorem: The sum of any two rational numbers is rational.   Proof : Suppose and are rational numbers. If is rational, then by definition of rational for integers and with . Since and are rational, and for integers and with and . Thus which is the quotient of two integers with nonzero denominator. Thus, it is rational.   Consider the statement: The square of any rational number is a rational number.    Write the statement formally as a conditional statement using variables.    Determine whether the statement is true or false and justify your answer.     Determine if the following statements are true or false. For true statements provide a proof. For false statements provide a counter example AND determine if a small change would make the statement true. If so, correct the statement and provide a proof of the new statement.    The quotient of any two rational numbers is a rational number.    If and are rational numbers then is a rational number.      Suppose , , , and are integers and . Suppose also that is a real number that satisfies the equation Must be rational? If so, express as a ratio of two integers. Is the condition important?  Solve for .   Let . Determine if the following statements are true or false. Justify your answer.    3 divides .    is divisible by 4.    100 divides     Show that the following statement is false.  For all integers and , if then .   Prove or disprove the following statements using the method of direct proof or counterexample.    For all integers , , and , if and , then .     For all integers , , and , if then .    For all integers , , and , if is a factor of , then is a factor of .    For all integers , , and , if , then and .    For all integers , , and , if then or .    For all integers and , if then .    A fast food chain has a contest in which a card with numbers on it is given to each customer who makes a purchase. If some of the numbers on the card add up to 100, then the customer wins $100. A certain customer receives a card with the numbers   .  Will the customer win $100? Prove or disprove your claim.   "
},
{
  "id": "D_rational",
  "level": "2",
  "url": "moredirect.html#D_rational",
  "type": "Definition",
  "number": "3.2.1",
  "title": "",
  "body": "A real number, , is rational rational number if there exist such that and . The set of rational numbers is represented by "
},
{
  "id": "D_irrational",
  "level": "2",
  "url": "moredirect.html#D_irrational",
  "type": "Definition",
  "number": "3.2.2",
  "title": "",
  "body": "A real number, , that is not rational is irrational irrational number . There is not a nice notation for the irrational numbers. We will use the set of irrational numbers , which is the set of real numbers minus the set of rationals. "
},
{
  "id": "E_rationals",
  "level": "2",
  "url": "moredirect.html#E_rationals",
  "type": "Example",
  "number": "3.2.3",
  "title": "Rational Numbers.",
  "body": "Rational Numbers  Is is rational?  Yes: .  Is rational?  Yes: .  Is rational?  Yes: it already has the form of an integer over an integer.  Is rational?  No: the demoninator cannot be 0. In fact, is not a number.  "
},
{
  "id": "E_termdecimal",
  "level": "2",
  "url": "moredirect.html#E_termdecimal",
  "type": "Example",
  "number": "3.2.4",
  "title": "<span class=\"process-math\">\\(0.2345\\)<\/span> is Rational.",
  "body": "is Rational  Show is a rational number.  We need to find such that and . We can use what we know about decimals: for example, . Thus, . Letting , we can see that .  "
},
{
  "id": "E_repeatdecimal",
  "level": "2",
  "url": "moredirect.html#E_repeatdecimal",
  "type": "Example",
  "number": "3.2.5",
  "title": "<span class=\"process-math\">\\(0.\\overline{123}\\)<\/span> is Rational.",
  "body": "is Rational  Show the repeating decimal is a rational number.  We need to find such that and . This one is trickier than the last example and requires a new technique. First, let . Then multiply both sides of by 1000, so that . We chose 1000 in order to get one set of the repeated digits in front of the decimal point. Now we subtract the two equations from each other: Resulting in . Now we just solve for .  Letting , we can see that .  "
},
{
  "id": "A_rationalpractice",
  "level": "2",
  "url": "moredirect.html#A_rationalpractice",
  "type": "Activity",
  "number": "3.2.1",
  "title": "Practice with Rational Numbers.",
  "body": "Practice with Rational Numbers Prove the following numbers, , are rational by finding integers, and so that .     "
},
{
  "id": "T_sumofrationals",
  "level": "2",
  "url": "moredirect.html#T_sumofrationals",
  "type": "Theorem",
  "number": "3.2.6",
  "title": "",
  "body": "The sum of two rational numbers is rational. "
},
{
  "id": "SS_rational-14",
  "level": "2",
  "url": "moredirect.html#SS_rational-14",
  "type": "Proof",
  "number": "3.2.1.1",
  "title": "",
  "body": " Let be rational. Show is rational.  Since is rational, it can be written as for some . Similarly, since is rational, it can be written as for some . (Note, we need to use different letters since and are not necessarily the same.) Now, Finding a common denominator,   Then and, since . Therefore, is rational.  "
},
{
  "id": "SS_rational-15",
  "level": "2",
  "url": "moredirect.html#SS_rational-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "corollary "
},
{
  "id": "SS_rational-16",
  "level": "2",
  "url": "moredirect.html#SS_rational-16",
  "type": "Corollary",
  "number": "3.2.7",
  "title": "",
  "body": "The double of a rational number is rational. "
},
{
  "id": "SS_rational-17",
  "level": "2",
  "url": "moredirect.html#SS_rational-17",
  "type": "Proof",
  "number": "3.2.1.2",
  "title": "",
  "body": "Let be a rational number. We want to show is rational. But . By , is rational. "
},
{
  "id": "A_rationalproofs",
  "level": "2",
  "url": "moredirect.html#A_rationalproofs",
  "type": "Activity",
  "number": "3.2.2",
  "title": "Proofs with Rationals.",
  "body": "Proofs with Rationals Let be rational numbers.  Prove is rational.  Prove is rational.  Prove or disprove is rational.  "
},
{
  "id": "D_divisible",
  "level": "2",
  "url": "moredirect.html#D_divisible",
  "type": "Definition",
  "number": "3.2.8",
  "title": "",
  "body": "Let . Then is divisible divisible by if for some . "
},
{
  "id": "SS_divisibility-6",
  "level": "2",
  "url": "moredirect.html#SS_divisibility-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multiple factor divisor divides "
},
{
  "id": "E_divides",
  "level": "2",
  "url": "moredirect.html#E_divides",
  "type": "Example",
  "number": "3.2.9",
  "title": "Finding Divisors.",
  "body": "Finding Divisors  Find the divisors of 6.  1, 2, 3, 6, -1, -2, -3, -6  Find the divisors of 5.  1, 5, -1, -5  Find the divisors of 1.  1, -1  "
},
{
  "id": "E_TFdivides",
  "level": "2",
  "url": "moredirect.html#E_TFdivides",
  "type": "Example",
  "number": "3.2.10",
  "title": "Determining Divisibility.",
  "body": "Determining Divisibility  True or false: .  True, .  True or false: .  False, has no integer solutions since .  True or false: .  False, has no integer solutions since .  True or false: .  True, .  True or false: .  True, .  True or false: .  True, .  True or false: .  True, .  True or false: .  False, has no integer solutions since .  True or false: .  False, has no integer solutions.  "
},
{
  "id": "A_practicedivisible",
  "level": "2",
  "url": "moredirect.html#A_practicedivisible",
  "type": "Activity",
  "number": "3.2.3",
  "title": "Divisibility Practice.",
  "body": "Divisibility Practice Determine if the following divisibility statements are true or false, and justify your answer.       "
},
{
  "id": "T_transdivides",
  "level": "2",
  "url": "moredirect.html#T_transdivides",
  "type": "Theorem",
  "number": "3.2.11",
  "title": "",
  "body": "For all integers, , if and , then . "
},
{
  "id": "SS_divisibility-17",
  "level": "2",
  "url": "moredirect.html#SS_divisibility-17",
  "type": "Proof",
  "number": "3.2.2.1",
  "title": "",
  "body": "Let . Assume and . Then by definition, for some and for some . Substituting the first equation into the second, . Since , . "
},
{
  "id": "A_15divides",
  "level": "2",
  "url": "moredirect.html#A_15divides",
  "type": "Activity",
  "number": "3.2.4",
  "title": "Divisibility Proof.",
  "body": "Divisibility Proof Prove if 15 divides , then 5 divides . "
},
{
  "id": "A_6divides",
  "level": "2",
  "url": "moredirect.html#A_6divides",
  "type": "Activity",
  "number": "3.2.5",
  "title": "Prove or Disprove.",
  "body": "Prove or Disprove Prove or disprove if 6 divides , then 12 divides . "
},
{
  "id": "A_divsum",
  "level": "2",
  "url": "moredirect.html#A_divsum",
  "type": "Activity",
  "number": "3.2.6",
  "title": "Divisibility and Addition.",
  "body": "Divisibility and Addition Prove if and , then . "
},
{
  "id": "moredirect-7-1",
  "level": "2",
  "url": "moredirect.html#moredirect-7-1",
  "type": "Exercise",
  "number": "3.2.3.1",
  "title": "",
  "body": " Prove the following numbers are rational by writing them as a ratio of two integers.              "
},
{
  "id": "moredirect-7-2",
  "level": "2",
  "url": "moredirect.html#moredirect-7-2",
  "type": "Exercise",
  "number": "3.2.3.2",
  "title": "",
  "body": " Prove every integer is a rational number.  "
},
{
  "id": "moredirect-7-3",
  "level": "2",
  "url": "moredirect.html#moredirect-7-3",
  "type": "Exercise",
  "number": "3.2.3.3",
  "title": "",
  "body": " Find the mistakes in the following proof.    Theorem: The sum of any two rational numbers is rational.   Proof : Suppose and are rational numbers. If is rational, then by definition of rational for integers and with . Since and are rational, and for integers and with and . Thus which is the quotient of two integers with nonzero denominator. Thus, it is rational.  "
},
{
  "id": "moredirect-7-4",
  "level": "2",
  "url": "moredirect.html#moredirect-7-4",
  "type": "Exercise",
  "number": "3.2.3.4",
  "title": "",
  "body": "Consider the statement: The square of any rational number is a rational number.    Write the statement formally as a conditional statement using variables.    Determine whether the statement is true or false and justify your answer.   "
},
{
  "id": "ER_averagerat",
  "level": "2",
  "url": "moredirect.html#ER_averagerat",
  "type": "Exercise",
  "number": "3.2.3.5",
  "title": "",
  "body": " Determine if the following statements are true or false. For true statements provide a proof. For false statements provide a counter example AND determine if a small change would make the statement true. If so, correct the statement and provide a proof of the new statement.    The quotient of any two rational numbers is a rational number.    If and are rational numbers then is a rational number.    "
},
{
  "id": "moredirect-7-6",
  "level": "2",
  "url": "moredirect.html#moredirect-7-6",
  "type": "Exercise",
  "number": "3.2.3.6",
  "title": "",
  "body": " Suppose , , , and are integers and . Suppose also that is a real number that satisfies the equation Must be rational? If so, express as a ratio of two integers. Is the condition important?  Solve for . "
},
{
  "id": "moredirect-7-7",
  "level": "2",
  "url": "moredirect.html#moredirect-7-7",
  "type": "Exercise",
  "number": "3.2.3.7",
  "title": "",
  "body": " Let . Determine if the following statements are true or false. Justify your answer.    3 divides .    is divisible by 4.    100 divides   "
},
{
  "id": "moredirect-7-8",
  "level": "2",
  "url": "moredirect.html#moredirect-7-8",
  "type": "Exercise",
  "number": "3.2.3.8",
  "title": "",
  "body": " Show that the following statement is false.  For all integers and , if then .  "
},
{
  "id": "moredirect-7-9",
  "level": "2",
  "url": "moredirect.html#moredirect-7-9",
  "type": "Exercise",
  "number": "3.2.3.9",
  "title": "",
  "body": "Prove or disprove the following statements using the method of direct proof or counterexample.    For all integers , , and , if and , then .     For all integers , , and , if then .    For all integers , , and , if is a factor of , then is a factor of .    For all integers , , and , if , then and .    For all integers , , and , if then or .    For all integers and , if then .   "
},
{
  "id": "moredirect-7-10",
  "level": "2",
  "url": "moredirect.html#moredirect-7-10",
  "type": "Exercise",
  "number": "3.2.3.10",
  "title": "",
  "body": "A fast food chain has a contest in which a card with numbers on it is given to each customer who makes a purchase. If some of the numbers on the card add up to 100, then the customer wins $100. A certain customer receives a card with the numbers   .  Will the customer win $100? Prove or disprove your claim. "
},
{
  "id": "cases",
  "level": "1",
  "url": "cases.html",
  "type": "Section",
  "number": "3.3",
  "title": "Proof by Cases",
  "body": " Proof by Cases proof by cases  In this section we will learn another proof technique, proof by cases. We will also see an important theorem that can be useful for proof by cases, the Division Algorithm.  Proof by cases proof by cases is used for statements of the form for all , where the set can be broken into smaller sets. For example, a statement might be easier to prove for even numbers and odd numbers separately, rather than more general integers.  Every truth table represents all possible cases of true and false for a logical statement. For example, when you use a truth table to determine if an argument is valid, you are really using proof by cases.   Proof by Cases proof by cases cases proof by  To prove for all by cases, break into smaller subsets. Each subset represents a case. Then each case is proven separately. Make sure you state each case, each subset, clearly.  If can be broken into smaller subsets, say, and , Case 1 Let , Prove .  Case 2 Let , Prove .    Important: in choosing your subsets, make sure you cover all the elements of . You can have as many cases as necessary.   Proof by Cases  Prove given any two consecutive integers, one is even and one is odd.  Let and be consecutive integers.  Case 1: Let be even. Then for some . Then for . Hence is odd.  Case 2: Let be odd. Then for some . Then for . Hence is even.  Thus, for any two consecutive integers, one is even and one is odd.   Practice with Proof by Cases Prove for every integer , is even.  Absolute Value Recall the absolute value function is defined as Prove for all , . What would appropriate cases be?  More than Two Cases Prove for all integers and , and are either both even or both odd. There are four cases, depending on whether and are even or odd.  The next theorem gives us an example of proof by cases, where the cases involve prime and compsite numbers. Although the theorem may seem like a well-known fact, the proof is not entirely simple.  Any integer is divisible by a prime.  We will divide this proof into two cases, where is prime and where is composite.  Case 1: is prime. We can see that . Since n is prime, is divisible by a prime.  Case 2: is composite. Then where , and . If is prime, then is divisible by a prime.  If is not prime, then where , and . If is prime, then and is divisible by a prime.  Similarly, if is not prime, then where , and , etc.  We can keep applying this process to get with , and .  If at any point is prime, then we are done, as we have found a prime divisor of . We know that there cannot be infinitely many non-prime since there are only finitely many integers between 1 and . Thus, the process must terminate with a prime divisor of . Hence, every integer is divisible by a prime.   In , we looked at the idea of divisibility. Remember, this is a relationship between two integers, not actual division. We will continue to focus on integers. One of the issues with division of integers is that if you divide two integers, you no longer necessarily have an integer. So what if the only numbers we are allowed to use are integers? Can we still somehow think of division? Well, yes. This is, in fact, how you were probably introduced to division long ago. When you were first learning arithmetic you only knew about integers (probably only positive integers).  Suppose you want to divide 15 by 5. This is easy, . But what if you want to divide 15 by 6? Now 6 does not \"go evenly\" into 10 (in other words, 6 does not divide 10). In this case, we get a remainder. In particular, 6 goes into 15 two times with a remainder of 3. Or, has quotient 2 and remainder 3.  OK, we want to formalize this idea of division, making sure we are only using integers. We know 5 divides 15, since . Can we do the same sort of thing for 15 and 6? Almost. In this case, .  In general, given any integers with , we can find integers with . In general, are not unique: , or or , for example. But as we noted, we want to think of as the remainder. If we are more specific about conditions on the remainder, then and are unique.  The Division Algorithm Division Algorithm Given any integer and any positive integer , there exist unique integers such that and .  We say is the quotient quotient and is the remainder remainder when is divided by .  We will see the proof later, in  Although this theorem is usually called the Division Algorithm, Division Algorithm the name can be confusing. In particular, the Division Algorithm is not really an algorithm.  Some important observations: the remainder MUST be nonnegative. It can be 0. This is what happens when . Although can be ANY integer, we will limit to being positive. The Division Algorithm can be extended to any , but we will just need in this class.  Finding Quotients and Remainders  Let , Find the quotient and remainder .   Let , Find the quotient and remainder .   Let , Find the quotient and remainder .   Let , Find the quotient and remainder .   Let , Find the quotient and remainder .    Quotients and Remainders For the given and , find and as in the Division Algorithm.  and  and  and  and   We can use the Division Algorithm to find representations of the integers .  For example, if we let , what are the possible remainders? In this case, or . Thus, there are two possible forms for : or . We see that these are the two forms corresponding to being even or odd. Now, as a corollary of the Division Algorithm, we have that every integer must be even or odd.  We can use the Division Algorithm to get other forms, as well. For example, if , the possible forms are or . We can use these forms to get different cases for the integers.  More Cases  Prove that the square of any odd integer has the form for some .  First let's try to just prove this directly.  Let be odd. Then . Thus, . It is not clear this has the form . If we try using some cases, we may get a bit more to work with. We know any integer has the form or . But only and are odd.  Let be odd.  Case 1: Let for some . Then for some . Let . Then has the form .  Case 2: Let for some . Then for some . Let . Then has the form .  Thus, any odd integer has the form .  Note, what this theorem really says is that the square of an odd integer must have remainder 1 when divided by 8. That might be a little surprising.   Dividing by 3 Use the Division Algorithm to find the possible forms of an integer when . What are the possible values for ?  Consecutive Integers Prove the product of any two consecutive integers has the form or for some integer . Use the cases in .     For the given and , find and such that with (as in the Division Algorithm).   and  and     Prove for all integers , is odd.     Prove the square of of any integer has the form or for some integer .    Prove that the product of any two consecutive integers is even.   Prove that the square of any integer has the form or for some integer .  Prove that for any integer , is divisible by 4.   "
},
{
  "id": "cases-4",
  "level": "2",
  "url": "cases.html#cases-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Proof by cases "
},
{
  "id": "E_casesconsec",
  "level": "2",
  "url": "cases.html#E_casesconsec",
  "type": "Example",
  "number": "3.3.1",
  "title": "Proof by Cases.",
  "body": "Proof by Cases  Prove given any two consecutive integers, one is even and one is odd.  Let and be consecutive integers.  Case 1: Let be even. Then for some . Then for . Hence is odd.  Case 2: Let be odd. Then for some . Then for . Hence is even.  Thus, for any two consecutive integers, one is even and one is odd.  "
},
{
  "id": "A_twocases",
  "level": "2",
  "url": "cases.html#A_twocases",
  "type": "Activity",
  "number": "3.3.1",
  "title": "Practice with Proof by Cases.",
  "body": "Practice with Proof by Cases Prove for every integer , is even. "
},
{
  "id": "A_absvalue",
  "level": "2",
  "url": "cases.html#A_absvalue",
  "type": "Activity",
  "number": "3.3.2",
  "title": "",
  "body": "Absolute Value Recall the absolute value function is defined as Prove for all , . What would appropriate cases be? "
},
{
  "id": "A_fourcases",
  "level": "2",
  "url": "cases.html#A_fourcases",
  "type": "Activity",
  "number": "3.3.3",
  "title": "",
  "body": "More than Two Cases Prove for all integers and , and are either both even or both odd. There are four cases, depending on whether and are even or odd. "
},
{
  "id": "T_divbyprime",
  "level": "2",
  "url": "cases.html#T_divbyprime",
  "type": "Theorem",
  "number": "3.3.2",
  "title": "",
  "body": "Any integer is divisible by a prime. "
},
{
  "id": "cases-13",
  "level": "2",
  "url": "cases.html#cases-13",
  "type": "Proof",
  "number": "3.3.1",
  "title": "",
  "body": "We will divide this proof into two cases, where is prime and where is composite.  Case 1: is prime. We can see that . Since n is prime, is divisible by a prime.  Case 2: is composite. Then where , and . If is prime, then is divisible by a prime.  If is not prime, then where , and . If is prime, then and is divisible by a prime.  Similarly, if is not prime, then where , and , etc.  We can keep applying this process to get with , and .  If at any point is prime, then we are done, as we have found a prime divisor of . We know that there cannot be infinitely many non-prime since there are only finitely many integers between 1 and . Thus, the process must terminate with a prime divisor of . Hence, every integer is divisible by a prime.  "
},
{
  "id": "T_divisionalgorthm",
  "level": "2",
  "url": "cases.html#T_divisionalgorthm",
  "type": "Theorem",
  "number": "3.3.3",
  "title": "The Division Algorithm.",
  "body": "The Division Algorithm Division Algorithm Given any integer and any positive integer , there exist unique integers such that and . "
},
{
  "id": "cases-19",
  "level": "2",
  "url": "cases.html#cases-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quotient remainder "
},
{
  "id": "E_divalgform",
  "level": "2",
  "url": "cases.html#E_divalgform",
  "type": "Example",
  "number": "3.3.4",
  "title": "Finding Quotients and Remainders.",
  "body": "Finding Quotients and Remainders  Let , Find the quotient and remainder .   Let , Find the quotient and remainder .   Let , Find the quotient and remainder .   Let , Find the quotient and remainder .   Let , Find the quotient and remainder .   "
},
{
  "id": "A_qrpractice",
  "level": "2",
  "url": "cases.html#A_qrpractice",
  "type": "Activity",
  "number": "3.3.4",
  "title": "Quotients and Remainders.",
  "body": "Quotients and Remainders For the given and , find and as in the Division Algorithm.  and  and  and  and  "
},
{
  "id": "cases-25",
  "level": "2",
  "url": "cases.html#cases-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "representations of the integers "
},
{
  "id": "cases-27",
  "level": "2",
  "url": "cases.html#cases-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cases "
},
{
  "id": "E_morecases",
  "level": "2",
  "url": "cases.html#E_morecases",
  "type": "Example",
  "number": "3.3.5",
  "title": "More Cases.",
  "body": "More Cases  Prove that the square of any odd integer has the form for some .  First let's try to just prove this directly.  Let be odd. Then . Thus, . It is not clear this has the form . If we try using some cases, we may get a bit more to work with. We know any integer has the form or . But only and are odd.  Let be odd.  Case 1: Let for some . Then for some . Let . Then has the form .  Case 2: Let for some . Then for some . Let . Then has the form .  Thus, any odd integer has the form .  Note, what this theorem really says is that the square of an odd integer must have remainder 1 when divided by 8. That might be a little surprising.  "
},
{
  "id": "A_casesfor3",
  "level": "2",
  "url": "cases.html#A_casesfor3",
  "type": "Activity",
  "number": "3.3.5",
  "title": "Dividing by 3.",
  "body": "Dividing by 3 Use the Division Algorithm to find the possible forms of an integer when . What are the possible values for ? "
},
{
  "id": "A_consec3",
  "level": "2",
  "url": "cases.html#A_consec3",
  "type": "Activity",
  "number": "3.3.6",
  "title": "Consecutive Integers.",
  "body": "Consecutive Integers Prove the product of any two consecutive integers has the form or for some integer . Use the cases in . "
},
{
  "id": "cases-31-1",
  "level": "2",
  "url": "cases.html#cases-31-1",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "",
  "body": " For the given and , find and such that with (as in the Division Algorithm).   and  and   "
},
{
  "id": "cases-31-2",
  "level": "2",
  "url": "cases.html#cases-31-2",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "",
  "body": " Prove for all integers , is odd.  "
},
{
  "id": "cases-31-3",
  "level": "2",
  "url": "cases.html#cases-31-3",
  "type": "Exercise",
  "number": "3.3.3",
  "title": "",
  "body": " Prove the square of of any integer has the form or for some integer .  "
},
{
  "id": "cases-31-4",
  "level": "2",
  "url": "cases.html#cases-31-4",
  "type": "Exercise",
  "number": "3.3.4",
  "title": "",
  "body": " Prove that the product of any two consecutive integers is even.  "
},
{
  "id": "cases-31-5",
  "level": "2",
  "url": "cases.html#cases-31-5",
  "type": "Exercise",
  "number": "3.3.5",
  "title": "",
  "body": "Prove that the square of any integer has the form or for some integer . "
},
{
  "id": "cases-31-6",
  "level": "2",
  "url": "cases.html#cases-31-6",
  "type": "Exercise",
  "number": "3.3.6",
  "title": "",
  "body": "Prove that for any integer , is divisible by 4. "
},
{
  "id": "contradiction",
  "level": "1",
  "url": "contradiction.html",
  "type": "Section",
  "number": "3.4",
  "title": "Proof by Contradiction and Contrapositive",
  "body": " Proof by Contradiction and Contrapositive contradiction proof by contrapositive proof by  In this section we will learn two new proof techniques, contradiction and contrapositive. Both proof techniques rely on being able to negate mathematical statements.  As we add more proof techniques, it is important to realize that you are not expected to know which technique to use when you start a proof. Proof-writing often takes some trial and error. First try a direct proof, if you get stuck, you may think about whether breaking your set into cases will help, or whether negating a statement will make it easier to use. It is also quite possible that different methods can be used to prove the same statement.  Proof by Contradiction contradiction proof by  The basic idea behind proof by contradiction is that if you assume the statement you want to prove is false, and this forces a logical contradiction, then you must have been wrong to start. Thus, you can conclude the original statement was true. By a logical contradiction, we generally mean a statement that must be both true and false at the same time. When writing a proof by contradiction you must be very careful in your logical reasoning. It must be clear that you reach a contradiction though careful logical deduction.   Method of Proof by Contradiction contradiction proof by proof by contradiction    Assume the statement to be proved is false. Or, assume the negation of the statement is true.  Show you reach some logical contradiction. This means you have a statement in your proof that must be both true and false.  Conclude the original statement is true.    Since contradiction relies on negating statements, recall the following negations from :  has negation  has negation  has negation    Proof by Contradiction  Prove if and then .  Before proving this statement, we note that it has logical form . Since we are doing a proof by contradiction, we need to negate this statement. The negation has form . Thus, we will assume is true, is true, and is false.  By contradiction. We assume and . Since and , we get . Thus, . But this contradicts that .   There Is No Greatest Integer  Prove there is no greatest integer.  By contradiction. Assume there is a greatest integer. Call this greatest integer . Now consider . Since is an integer, is an integer. We can see that , which contradicts that was the greatest. Therefore, there is no greatest integer.   Rational Plus Irrational Consider the statement: the sum of a rational number and an irrational number is irrational.  Try to determine if the statement is true or false by trying examples and looking for a counterexample.  Write the statement using variables and quantifiers.  Write the negation of the statement.  Now assume the negation is true and find a contradiction.  The work in (d) is your scratch work. Write a careful proof by contradiction to show the original statement is true.   Proof by Contrapositive contrapositive proof by  Recall from the contrapositive of is . Also recall, that and are logically equivalent. This allows us to use the contrapositive in place of the original statement. Thus, a proof by contrapositive is just a direct proof of the contrapositive statement.   Method of Proof by Contrapositive contrapositive proof by proof by contrapositive   Write the statement to be proved in the form , if then .  Write the contrapositive of the statement: , if then .  Prove the contrapositive directly: assume , show .    A Divisibility Proof by Contrapositive  Prove for all , if then .  This statement has contrapositive: for all , if then .  By contrapositive. Let . Assume . This means for some . Then , where . Thus, .   If the Square is Even Consider the statement: for all integers , if is even then is even.  Write the contrapositive of the statement.  To prove the statement by contrapositive, what should you assume?  To prove the statement by contrapositive, what should you show?  Give a direct proof of the contrapositive. You have now proven the original statement by contrapositive.   Since we can use either contradiction or contrapositive on statements of the form , the following comparison may be helpful.   Comparison of the Techniques of Contradiction and Contrapositive  Contradiction with :  Assume .  Show any contradiction. The contradiction may be or it may be , or some other logical contradiction.  Since you can reach any contradiction at all, it may be difficult to know what you are looking for. It also may be difficult to know if you've made an error.  With contradiction you get to assume more, but it is less clear what you want to show.    Contrapositive with :  Assume .  Show .  With contrapositive you assume less than contradiction, but you know exactly what you are trying to show.      Two Classical Proofs  We are now able to use contradiction and contrapositive to prove two classical theorems in mathematics.  In you used contrapositive to prove if is even, then is even. This statement is an important step in our first big theorem. We state it here formally as a lemma.  Let . If is even, then is even.  We will prove this by contrapositive. Assume is odd. Show is odd. Since is odd, for some . Then Since , is odd.   is irrational.  We will prove this by contradiction. Assume is rational. Then with . We will additionally assume and have no common factors. [Note, this additional assumption just makes the proof simpler. You should convince yourself that it is reasonable to add this assumption--that given any fraction, we can always reduce so and have no common factors.]  Now, using algebra on the equation, Since , must be even. Then by , must be even.  Since is even, for some . Thus, we can substitute into the above equation. Since , must be even. Then by , must be even.  But now we have and both even, which means they both have a common factor of 2. This contradicts our assumption that and have no common factors. Since we reached a contradiction, we can conclude that is irrational.   Make sure you can read through the above proof and follow from one step to the next.  If the Square is Divisible by 3 In and , we proved if is even then is even. Now suppose you want to prove if is divisible by 3 then is divisible by 3.  To prove the statement by contrapositive, what should you assume?  To prove the statement by contrapositive, what should you show?  The problem with now giving a direct proof of the contrapositive is that we need to know what we mean by is not divisible by 3. Recall the Division Algorithm, . If is not divisible by 3, what are the possible forms for ? Think of the forms for .  Now write a proof by cases using the cases for from (c) to show if is not divisible by 3, then is not divisible by 3.   Our second classical theorem is to prove there are infinitely many prime numbers. In we proved there are infinitely many integers. In that proof, if we had a biggest integer, , we were able to construct an integer that was greater than , namely . However, primes are not that nice. If you were to list out several prime numbers, it would be impossible to find a pattern for the next prime. Sometimes primes are close together, like 17 and 19, and sometimes they are far apart. In fact, it is possible to prove that we can find a list of consecutive integers where none of the consecutive integers are prime for any positive integer . This means there are arbitrarily long sequences of consecutive integers with no primes, or there are primes that are arbitrarily far apart.  First we need to understand a bit more about divisibilty with primes.  Prime Divisor of Consider the statement: for all and primes , if then .  Write the contrapositive of the statement.  Write the negation of the statement.  Based on the contrapositive and the negation, which seem easier to use in a proof?  Assume and . Can you find a contradiction?  If you were able to find a contradiction, try to write a careful proof by contradiction for the statement.   The statement in is an important lemma for proving there are infinitely many primes.  For all and all primes , if then .  We will prove this by contradiction. Let , prime. Assume and . Since , for some . Since , for some . Thus, Since , and is a factor of 1. However, the only factors of 1 are 1 and -1, which are not prime. Thus, we have a contradiction.   There are infinitely many primes.  Assume there are finitely many primes. Since there are finitely many, we can list them all, say, . Now let , the product of all the primes. Consider . We know for each prime . By , . This means is an integer greater than 1 with no prime divisor, which contradicts .      Consider the statement: for all integers , if is odd then is odd.    Write what you would assume and what you would need to show to prove this statement by contradiction.    Write what you would assume and what you would need to show to prove this statement by contrapositive.       Carefully write the negation of each statement then prove the statement by contradiction.   There is no greatest even integer.  There is no least positive rational number.      Prove the following by contrapositive. Make sure you carefully write what you are assuming and what you need to show.    If the product of two positive real numbers is greater than 100, then at least one of the numbers is greater than 10.    If the sum of two real numbers is less than 50 then at least one of the numbers is less than 25.      Prove the following statements by either contradiction or contrapositive (be sure to note which method you used).    For all integers , if is odd then is odd.    For all integers , , and , if does not divide , then does not divide .    For all integers , , and , if divides and does not divide , then does not divide .      Determine whether the following statements are true or false. Prove the true statements by contradiction and provide counterexamples for the false ones.    The sum of any two irrational numbers is irrational.    If and are rational numbers, , and is an irrational number, then is irrational.    If is any rational number, and is any irrational number, then is irrational.      From we know that, given any statement of truth-functional logic, we can always find a logically equivalent statement that uses only the connectives and . For example, is logically equivalent to . So we could, if we wanted to, do without the connectives , , , and . Suppose that, instead, we chose to use only the connectives , , , and . Would these connective suffice? Why or why not? Remember that whatever your response, you should be able to offer a proof of it!    Consider the following statement and proof. Is the proof correct? If so, what proof strategies does it use? If not, can it be fixed? Is the theorem correct?   There are irrational numbers and such that is rational.    Proof: Either is rational or it is irrational.  Case 1: is rational. Let . Then and are irrational, and , which we assumed was rational.  Case 2: is irrational. Let and . Then is irrational by assumption, and we know that is also irrational. Furthermore, . Which is rational.     "
},
{
  "id": "E_contradiction",
  "level": "2",
  "url": "contradiction.html#E_contradiction",
  "type": "Example",
  "number": "3.4.1",
  "title": "Proof by Contradiction.",
  "body": "Proof by Contradiction  Prove if and then .  Before proving this statement, we note that it has logical form . Since we are doing a proof by contradiction, we need to negate this statement. The negation has form . Thus, we will assume is true, is true, and is false.  By contradiction. We assume and . Since and , we get . Thus, . But this contradicts that .  "
},
{
  "id": "E_nogreatinteger",
  "level": "2",
  "url": "contradiction.html#E_nogreatinteger",
  "type": "Example",
  "number": "3.4.2",
  "title": "There Is No Greatest Integer.",
  "body": "There Is No Greatest Integer  Prove there is no greatest integer.  By contradiction. Assume there is a greatest integer. Call this greatest integer . Now consider . Since is an integer, is an integer. We can see that , which contradicts that was the greatest. Therefore, there is no greatest integer.  "
},
{
  "id": "A_ratplusirr",
  "level": "2",
  "url": "contradiction.html#A_ratplusirr",
  "type": "Activity",
  "number": "3.4.1",
  "title": "Rational Plus Irrational.",
  "body": "Rational Plus Irrational Consider the statement: the sum of a rational number and an irrational number is irrational.  Try to determine if the statement is true or false by trying examples and looking for a counterexample.  Write the statement using variables and quantifiers.  Write the negation of the statement.  Now assume the negation is true and find a contradiction.  The work in (d) is your scratch work. Write a careful proof by contradiction to show the original statement is true. "
},
{
  "id": "E_contrapositiveproof",
  "level": "2",
  "url": "contradiction.html#E_contrapositiveproof",
  "type": "Example",
  "number": "3.4.3",
  "title": "A Divisibility Proof by Contrapositive.",
  "body": "A Divisibility Proof by Contrapositive  Prove for all , if then .  This statement has contrapositive: for all , if then .  By contrapositive. Let . Assume . This means for some . Then , where . Thus, .  "
},
{
  "id": "A_n2evenneven",
  "level": "2",
  "url": "contradiction.html#A_n2evenneven",
  "type": "Activity",
  "number": "3.4.2",
  "title": "If the Square is Even.",
  "body": "If the Square is Even Consider the statement: for all integers , if is even then is even.  Write the contrapositive of the statement.  To prove the statement by contrapositive, what should you assume?  To prove the statement by contrapositive, what should you show?  Give a direct proof of the contrapositive. You have now proven the original statement by contrapositive.  "
},
{
  "id": "L_nsquaredeven",
  "level": "2",
  "url": "contradiction.html#L_nsquaredeven",
  "type": "Lemma",
  "number": "3.4.4",
  "title": "",
  "body": "Let . If is even, then is even. "
},
{
  "id": "SS_twoproofs-5",
  "level": "2",
  "url": "contradiction.html#SS_twoproofs-5",
  "type": "Proof",
  "number": "3.4.3.1",
  "title": "",
  "body": "We will prove this by contrapositive. Assume is odd. Show is odd. Since is odd, for some . Then Since , is odd.  "
},
{
  "id": "T_roottwoirrational",
  "level": "2",
  "url": "contradiction.html#T_roottwoirrational",
  "type": "Theorem",
  "number": "3.4.5",
  "title": "",
  "body": "is irrational. "
},
{
  "id": "SS_twoproofs-7",
  "level": "2",
  "url": "contradiction.html#SS_twoproofs-7",
  "type": "Proof",
  "number": "3.4.3.2",
  "title": "",
  "body": "We will prove this by contradiction. Assume is rational. Then with . We will additionally assume and have no common factors. [Note, this additional assumption just makes the proof simpler. You should convince yourself that it is reasonable to add this assumption--that given any fraction, we can always reduce so and have no common factors.]  Now, using algebra on the equation, Since , must be even. Then by , must be even.  Since is even, for some . Thus, we can substitute into the above equation. Since , must be even. Then by , must be even.  But now we have and both even, which means they both have a common factor of 2. This contradicts our assumption that and have no common factors. Since we reached a contradiction, we can conclude that is irrational.  "
},
{
  "id": "A_squarediv3",
  "level": "2",
  "url": "contradiction.html#A_squarediv3",
  "type": "Activity",
  "number": "3.4.3",
  "title": "If the Square is Divisible by 3.",
  "body": "If the Square is Divisible by 3 In and , we proved if is even then is even. Now suppose you want to prove if is divisible by 3 then is divisible by 3.  To prove the statement by contrapositive, what should you assume?  To prove the statement by contrapositive, what should you show?  The problem with now giving a direct proof of the contrapositive is that we need to know what we mean by is not divisible by 3. Recall the Division Algorithm, . If is not divisible by 3, what are the possible forms for ? Think of the forms for .  Now write a proof by cases using the cases for from (c) to show if is not divisible by 3, then is not divisible by 3.  "
},
{
  "id": "A_divprimes",
  "level": "2",
  "url": "contradiction.html#A_divprimes",
  "type": "Activity",
  "number": "3.4.4",
  "title": "Prime Divisor of <span class=\"process-math\">\\(a+1\\)<\/span>.",
  "body": "Prime Divisor of Consider the statement: for all and primes , if then .  Write the contrapositive of the statement.  Write the negation of the statement.  Based on the contrapositive and the negation, which seem easier to use in a proof?  Assume and . Can you find a contradiction?  If you were able to find a contradiction, try to write a careful proof by contradiction for the statement.  "
},
{
  "id": "L_primedivplus1",
  "level": "2",
  "url": "contradiction.html#L_primedivplus1",
  "type": "Lemma",
  "number": "3.4.6",
  "title": "",
  "body": "For all and all primes , if then . "
},
{
  "id": "SS_twoproofs-15",
  "level": "2",
  "url": "contradiction.html#SS_twoproofs-15",
  "type": "Proof",
  "number": "3.4.3.3",
  "title": "",
  "body": "We will prove this by contradiction. Let , prime. Assume and . Since , for some . Since , for some . Thus, Since , and is a factor of 1. However, the only factors of 1 are 1 and -1, which are not prime. Thus, we have a contradiction.  "
},
{
  "id": "T_infmanyprimes",
  "level": "2",
  "url": "contradiction.html#T_infmanyprimes",
  "type": "Theorem",
  "number": "3.4.7",
  "title": "",
  "body": "There are infinitely many primes. "
},
{
  "id": "SS_twoproofs-17",
  "level": "2",
  "url": "contradiction.html#SS_twoproofs-17",
  "type": "Proof",
  "number": "3.4.3.4",
  "title": "",
  "body": "Assume there are finitely many primes. Since there are finitely many, we can list them all, say, . Now let , the product of all the primes. Consider . We know for each prime . By , . This means is an integer greater than 1 with no prime divisor, which contradicts . "
},
{
  "id": "SS_twoproofs-18-1",
  "level": "2",
  "url": "contradiction.html#SS_twoproofs-18-1",
  "type": "Exercise",
  "number": "3.4.3.1",
  "title": "",
  "body": " Consider the statement: for all integers , if is odd then is odd.    Write what you would assume and what you would need to show to prove this statement by contradiction.    Write what you would assume and what you would need to show to prove this statement by contrapositive.    "
},
{
  "id": "SS_twoproofs-18-2",
  "level": "2",
  "url": "contradiction.html#SS_twoproofs-18-2",
  "type": "Exercise",
  "number": "3.4.3.2",
  "title": "",
  "body": " Carefully write the negation of each statement then prove the statement by contradiction.   There is no greatest even integer.  There is no least positive rational number.    "
},
{
  "id": "SS_twoproofs-18-3",
  "level": "2",
  "url": "contradiction.html#SS_twoproofs-18-3",
  "type": "Exercise",
  "number": "3.4.3.3",
  "title": "",
  "body": " Prove the following by contrapositive. Make sure you carefully write what you are assuming and what you need to show.    If the product of two positive real numbers is greater than 100, then at least one of the numbers is greater than 10.    If the sum of two real numbers is less than 50 then at least one of the numbers is less than 25.    "
},
{
  "id": "SS_twoproofs-18-4",
  "level": "2",
  "url": "contradiction.html#SS_twoproofs-18-4",
  "type": "Exercise",
  "number": "3.4.3.4",
  "title": "",
  "body": " Prove the following statements by either contradiction or contrapositive (be sure to note which method you used).    For all integers , if is odd then is odd.    For all integers , , and , if does not divide , then does not divide .    For all integers , , and , if divides and does not divide , then does not divide .    "
},
{
  "id": "SS_twoproofs-18-5",
  "level": "2",
  "url": "contradiction.html#SS_twoproofs-18-5",
  "type": "Exercise",
  "number": "3.4.3.5",
  "title": "",
  "body": " Determine whether the following statements are true or false. Prove the true statements by contradiction and provide counterexamples for the false ones.    The sum of any two irrational numbers is irrational.    If and are rational numbers, , and is an irrational number, then is irrational.    If is any rational number, and is any irrational number, then is irrational.    "
},
{
  "id": "ER_neednot",
  "level": "2",
  "url": "contradiction.html#ER_neednot",
  "type": "Exercise",
  "number": "3.4.3.6",
  "title": "",
  "body": " From we know that, given any statement of truth-functional logic, we can always find a logically equivalent statement that uses only the connectives and . For example, is logically equivalent to . So we could, if we wanted to, do without the connectives , , , and . Suppose that, instead, we chose to use only the connectives , , , and . Would these connective suffice? Why or why not? Remember that whatever your response, you should be able to offer a proof of it!  "
},
{
  "id": "SS_twoproofs-18-7",
  "level": "2",
  "url": "contradiction.html#SS_twoproofs-18-7",
  "type": "Exercise",
  "number": "3.4.3.7",
  "title": "",
  "body": " Consider the following statement and proof. Is the proof correct? If so, what proof strategies does it use? If not, can it be fixed? Is the theorem correct?   There are irrational numbers and such that is rational.    Proof: Either is rational or it is irrational.  Case 1: is rational. Let . Then and are irrational, and , which we assumed was rational.  Case 2: is irrational. Let and . Then is irrational by assumption, and we know that is also irrational. Furthermore, . Which is rational.  "
},
{
  "id": "summation",
  "level": "1",
  "url": "summation.html",
  "type": "Section",
  "number": "4.1",
  "title": "Summation Notation",
  "body": " Summation Notation summation notation  In this section we look at summation notation, which is used to represent general sums, even infinite sums. Before we add terms together, we need some notation for the terms themselves.  A sequence sequence is an ordered list, .  Each is called a term sequence term in the sequence. The subscript is called the index sequence index . The index will be an integer, and almost always a nonnegative integer. The first term (or sometimes ) is called the initial term sequence initial term . The term is called the term. It is also often called the general sequence general term term of the sequence.  Sequences Consider the sequence . The initial term is . The term is .  We need to be careful with subscripts. For example, , but . If we add 1 to the index, we get the next term, which is not the same as adding 1 to the term.  Explicitly Defined Sequences We can define a sequence by giving the general term.  Let . Give the first five terms of the sequence.  1, 2, 4, 8, 16  Let . Give the term of the sequence.   Let . Give the first five terms of the sequence.  1\/2, 1\/3, 1\/4, 1\/5, 1\/6  Let . Give the term of the sequence.    An Alternating Sequence Consider the sequence for .  Write the first 5 terms of the sequence.  What is the initial term?   A Fractional Sequence Consider the sequence for .  Write the first 5 terms of the sequence.  What is the initial term?   Another Alternating Sequence Consider the sequence . Find a general formula for the th term, .   Now that we have general forms for sequences, we look at many examples where we add terms in a sequence.   Summation Notation summation notation the sum  We read as the sum of from to .   Summation Notation  Find .   Find .   Find .   Find .    Note, as we can see in , .  Using Summation Notation Consider the sum . Write out the summation and find the sum.  A Shifted Sum Consider the sum .  Write out the summation.  Now write out the summation for . How do (a) and (b) differ?  Now write out the summation for . Is this the same as either of the previous sums?   Adding Another Term Consider the sum .  Write out the summation.  Now write out the summation for . How do (a) and (b) differ?   Just as we can add several terms of a sequence, product notation product notation allows us to multiply several terms of a sequence. . the product  Product Notation  Find .   Find .    Products Write out the following products.     A particularly useful product is  factorial factorial , factorial; We also need to define .   Properties of Sums and Products  The following are useful properties when working with summation and product notation.        Summing Two Sums Prove . Try writing out the sum rather than using summation notation.   When we get to mathematical induction in , it will be important that we can work with summations where we want to add the term to a summation. In particular, the following observation is useful:   We should also note that there are often multiple ways to write the same sum.  Writing a Sum in Two Different Ways  Consider the sum . Depending on how we index the sum, we can write it in different ways.  If we index from to 3, we have .  If we index from to 4, we have .     Find an explicit formula for the following sequences with the given initial terms.              Compute the given product or sum.                   Write out the sum in expanded form.       Rewrite by separating off the final term:     Write using product notation:     Write using summation notation:     Transform the sum by making the change of variable :    Simplify.        Observe that   Find a general formula for .    Evaluate the sum for all . Find a formula for the sum for a general .    "
},
{
  "id": "summation-4",
  "level": "2",
  "url": "summation.html#summation-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sequence "
},
{
  "id": "summation-5",
  "level": "2",
  "url": "summation.html#summation-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "term index initial term general "
},
{
  "id": "E_sequences",
  "level": "2",
  "url": "summation.html#E_sequences",
  "type": "Example",
  "number": "4.1.1",
  "title": "Sequences.",
  "body": "Sequences Consider the sequence . The initial term is . The term is .  We need to be careful with subscripts. For example, , but . If we add 1 to the index, we get the next term, which is not the same as adding 1 to the term. "
},
{
  "id": "E_generalsequences",
  "level": "2",
  "url": "summation.html#E_generalsequences",
  "type": "Example",
  "number": "4.1.2",
  "title": "Explicitly Defined Sequences.",
  "body": "Explicitly Defined Sequences We can define a sequence by giving the general term.  Let . Give the first five terms of the sequence.  1, 2, 4, 8, 16  Let . Give the term of the sequence.   Let . Give the first five terms of the sequence.  1\/2, 1\/3, 1\/4, 1\/5, 1\/6  Let . Give the term of the sequence.   "
},
{
  "id": "A_sequence1",
  "level": "2",
  "url": "summation.html#A_sequence1",
  "type": "Activity",
  "number": "4.1.1",
  "title": "An Alternating Sequence.",
  "body": "An Alternating Sequence Consider the sequence for .  Write the first 5 terms of the sequence.  What is the initial term?  "
},
{
  "id": "A_sequence2",
  "level": "2",
  "url": "summation.html#A_sequence2",
  "type": "Activity",
  "number": "4.1.2",
  "title": "A Fractional Sequence.",
  "body": "A Fractional Sequence Consider the sequence for .  Write the first 5 terms of the sequence.  What is the initial term?  "
},
{
  "id": "A_sequence3",
  "level": "2",
  "url": "summation.html#A_sequence3",
  "type": "Activity",
  "number": "4.1.3",
  "title": "Another Alternating Sequence.",
  "body": "Another Alternating Sequence Consider the sequence . Find a general formula for the th term, .  "
},
{
  "id": "E_sumnotation",
  "level": "2",
  "url": "summation.html#E_sumnotation",
  "type": "Example",
  "number": "4.1.3",
  "title": "Summation Notation.",
  "body": "Summation Notation  Find .   Find .   Find .   Find .   "
},
{
  "id": "A_summation",
  "level": "2",
  "url": "summation.html#A_summation",
  "type": "Activity",
  "number": "4.1.4",
  "title": "Using Summation Notation.",
  "body": "Using Summation Notation Consider the sum . Write out the summation and find the sum. "
},
{
  "id": "A_shiftedsum",
  "level": "2",
  "url": "summation.html#A_shiftedsum",
  "type": "Activity",
  "number": "4.1.5",
  "title": "A Shifted Sum.",
  "body": "A Shifted Sum Consider the sum .  Write out the summation.  Now write out the summation for . How do (a) and (b) differ?  Now write out the summation for . Is this the same as either of the previous sums?  "
},
{
  "id": "A_nplus1sum",
  "level": "2",
  "url": "summation.html#A_nplus1sum",
  "type": "Activity",
  "number": "4.1.6",
  "title": "Adding Another Term.",
  "body": "Adding Another Term Consider the sum .  Write out the summation.  Now write out the summation for . How do (a) and (b) differ?  "
},
{
  "id": "summation-18",
  "level": "2",
  "url": "summation.html#summation-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "product notation "
},
{
  "id": "E_prodnotation",
  "level": "2",
  "url": "summation.html#E_prodnotation",
  "type": "Example",
  "number": "4.1.4",
  "title": "Product Notation.",
  "body": "Product Notation  Find .   Find .   "
},
{
  "id": "A_products",
  "level": "2",
  "url": "summation.html#A_products",
  "type": "Activity",
  "number": "4.1.7",
  "title": "Products.",
  "body": "Products Write out the following products.    "
},
{
  "id": "summation-21",
  "level": "2",
  "url": "summation.html#summation-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "factorial "
},
{
  "id": "A_sumofsums",
  "level": "2",
  "url": "summation.html#A_sumofsums",
  "type": "Activity",
  "number": "4.1.8",
  "title": "Summing Two Sums.",
  "body": "Summing Two Sums Prove . Try writing out the sum rather than using summation notation. "
},
{
  "id": "E_changevariables",
  "level": "2",
  "url": "summation.html#E_changevariables",
  "type": "Example",
  "number": "4.1.5",
  "title": "Writing a Sum in Two Different Ways.",
  "body": "Writing a Sum in Two Different Ways  Consider the sum . Depending on how we index the sum, we can write it in different ways.  If we index from to 3, we have .  If we index from to 4, we have .  "
},
{
  "id": "summation-27-1",
  "level": "2",
  "url": "summation.html#summation-27-1",
  "type": "Exercise",
  "number": "4.1.1",
  "title": "",
  "body": "Find an explicit formula for the following sequences with the given initial terms.             "
},
{
  "id": "summation-27-2",
  "level": "2",
  "url": "summation.html#summation-27-2",
  "type": "Exercise",
  "number": "4.1.2",
  "title": "",
  "body": "Compute the given product or sum.                  "
},
{
  "id": "summation-27-3",
  "level": "2",
  "url": "summation.html#summation-27-3",
  "type": "Exercise",
  "number": "4.1.3",
  "title": "",
  "body": "Write out the sum in expanded form.     "
},
{
  "id": "summation-27-4",
  "level": "2",
  "url": "summation.html#summation-27-4",
  "type": "Exercise",
  "number": "4.1.4",
  "title": "",
  "body": " Rewrite by separating off the final term:   "
},
{
  "id": "summation-27-5",
  "level": "2",
  "url": "summation.html#summation-27-5",
  "type": "Exercise",
  "number": "4.1.5",
  "title": "",
  "body": " Write using product notation:   "
},
{
  "id": "summation-27-6",
  "level": "2",
  "url": "summation.html#summation-27-6",
  "type": "Exercise",
  "number": "4.1.6",
  "title": "",
  "body": " Write using summation notation:   "
},
{
  "id": "summation-27-7",
  "level": "2",
  "url": "summation.html#summation-27-7",
  "type": "Exercise",
  "number": "4.1.7",
  "title": "",
  "body": " Transform the sum by making the change of variable :   "
},
{
  "id": "summation-27-8",
  "level": "2",
  "url": "summation.html#summation-27-8",
  "type": "Exercise",
  "number": "4.1.8",
  "title": "",
  "body": "Simplify.     "
},
{
  "id": "summation-27-9",
  "level": "2",
  "url": "summation.html#summation-27-9",
  "type": "Exercise",
  "number": "4.1.9",
  "title": "",
  "body": " Observe that   Find a general formula for .  "
},
{
  "id": "summation-27-10",
  "level": "2",
  "url": "summation.html#summation-27-10",
  "type": "Exercise",
  "number": "4.1.10",
  "title": "",
  "body": " Evaluate the sum for all . Find a formula for the sum for a general .  "
},
{
  "id": "induction",
  "level": "1",
  "url": "induction.html",
  "type": "Section",
  "number": "4.2",
  "title": "Mathematical Induction",
  "body": " Mathematical Induction mathematical induction  In this section we learn a new proof technique, mathematical induction. This technique is useful for proving statements about the positive (or nonnegative) integers. It is based on the following principle.   Principle of Mathematical Induction mathematical induction Principle of  Let be a property defined for integers , and let be a fixed integer. Suppose the following are true: is true;  For all with , if is true then is true; then for all , is true.   The way to think about the Principle of Mathematical Induction is that if you know the statement is true for some starting value, ( is true), and if you can show that knowing the statement is true for some value allows you to know it is true for the next value ( ), then you know it for all values greater than or equal to .  So why should this work? Suppose you know two things:  is true, and   .  Note, you do not know is true, just that if it is true, then will be true. Now since is true, by (2), must be true. Since is true, must be true, etc. In this way we can see that must be true for all .  The Principle of Mathematical Induction lets us skip all the intermediate steps, and conclude once we have (1) and (2).   Structure of a Mathematical Induction Proof proof by induction mathematical induction proof by  To prove ,  Base Step Show is true.  Induction Step Assume for some , show .  Conclude is true for all   In the above structure we used for simplicity, but an induction proof could have a base step starting at a different . Most commonly, the base step starts with 0 or 1.  When writing induction proofs, make sure you use the actual statement you are proving rather than the notation .  Adding the Next Term Since the induction step in mathematical induction connects a statement about to a statement about , we need to be comfortable with the relationship between sums of terms and sums of terms.  Write out the summation for .  Write out the summation for .  How do (a) and (b) differ?   Proof by Induction: Summation Formula  Prove for .   Base Step: Let . Then Since the left hand side of the equation equals the right hand side, for .  Induction Step:  Assume for some .  Show .  Proof of induction step: Thus, .  Hence, by induction for .    Note, in the base step we looked at each side of what we wanted to show separately. We can refer to this as a left hand side\/ right hand side proof , or in short hand, a LHS\/RHS proof. If we just start with the equation we want to show, then we are assuming what we are trying to prove. To avoid this, it is best, when trying to show two things are equal in the base step, to do a LHS\/ RHS proof.  now gives us a useful formula for finding the sum of 1 through :  Adding Terms Before the next example, we practice the relationship between sums of terms and sums of terms.  Write out the summation for .  Write out the summation for .  How do (a) and (b) differ?   Proof by Induction: Powers of 2  Prove for .   Base Step: Let . Then Since the left hand side of the equation equals the right hand side, for .  Induction Step:  Assume for some .  Show .  Proof of induction step: Thus, .  Hence, by induction for .    can be generalized to the sum .  Proof by Induction: Geometric Sum  Prove for .   Base Step: Let . Then Since the left hand side of the equation equals the right hand side, for .  Induction Step:  Assume for some .  Show .  Proof of induction step: Thus, .  Hence, by induction for .    The sum in is called a geometric sum geometric sum . Now we have a useful formula for the sum of for various values of :   Practice with Induction Suppose you want to prove for all by induction.  What would you want to prove in the base step?  What should you assume in the induction step?  What should you show in the induction step?  Now try to put this all together in the form of an induction proof. If you are unable to prove it, where do you get stuck?    The closed form closed form of a sum of a sum is the computational formula for the sum. For example, the closed form of is , as proved in .      Use mathematical induction to prove for all integers ,     Use mathematical induction to prove for all integers ,     Use mathematical induction to prove for all integers ,    Use to find a formula for . Prove your formula directly using induction.  Find a formula for . Prove your formula using induction.   Observe that   Conjecture a general formula for , and prove your conjecture by mathematical induction.    Evaluate the sum for all . Make a conjecture for a formula for the sum for a general , and prove your conjecture by induction.    "
},
{
  "id": "A_sumktokplus1",
  "level": "2",
  "url": "induction.html#A_sumktokplus1",
  "type": "Activity",
  "number": "4.2.1",
  "title": "Adding the Next Term.",
  "body": "Adding the Next Term Since the induction step in mathematical induction connects a statement about to a statement about , we need to be comfortable with the relationship between sums of terms and sums of terms.  Write out the summation for .  Write out the summation for .  How do (a) and (b) differ?  "
},
{
  "id": "E_sumofninduction",
  "level": "2",
  "url": "induction.html#E_sumofninduction",
  "type": "Example",
  "number": "4.2.1",
  "title": "Proof by Induction: Summation Formula.",
  "body": "Proof by Induction: Summation Formula  Prove for .   Base Step: Let . Then Since the left hand side of the equation equals the right hand side, for .  Induction Step:  Assume for some .  Show .  Proof of induction step: Thus, .  Hence, by induction for .   "
},
{
  "id": "A_geomsummation",
  "level": "2",
  "url": "induction.html#A_geomsummation",
  "type": "Activity",
  "number": "4.2.2",
  "title": "Adding <span class=\"process-math\">\\(k+1\\)<\/span> Terms.",
  "body": "Adding Terms Before the next example, we practice the relationship between sums of terms and sums of terms.  Write out the summation for .  Write out the summation for .  How do (a) and (b) differ?  "
},
{
  "id": "E_geosum2induction",
  "level": "2",
  "url": "induction.html#E_geosum2induction",
  "type": "Example",
  "number": "4.2.2",
  "title": "Proof by Induction: Powers of 2.",
  "body": "Proof by Induction: Powers of 2  Prove for .   Base Step: Let . Then Since the left hand side of the equation equals the right hand side, for .  Induction Step:  Assume for some .  Show .  Proof of induction step: Thus, .  Hence, by induction for .   "
},
{
  "id": "E_geosuminduction",
  "level": "2",
  "url": "induction.html#E_geosuminduction",
  "type": "Example",
  "number": "4.2.3",
  "title": "Proof by Induction: Geometric Sum.",
  "body": "Proof by Induction: Geometric Sum  Prove for .   Base Step: Let . Then Since the left hand side of the equation equals the right hand side, for .  Induction Step:  Assume for some .  Show .  Proof of induction step: Thus, .  Hence, by induction for .   "
},
{
  "id": "induction-19",
  "level": "2",
  "url": "induction.html#induction-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geometric sum "
},
{
  "id": "A_indpractice",
  "level": "2",
  "url": "induction.html#A_indpractice",
  "type": "Activity",
  "number": "4.2.3",
  "title": "Practice with Induction.",
  "body": "Practice with Induction Suppose you want to prove for all by induction.  What would you want to prove in the base step?  What should you assume in the induction step?  What should you show in the induction step?  Now try to put this all together in the form of an induction proof. If you are unable to prove it, where do you get stuck?  "
},
{
  "id": "induction-21",
  "level": "2",
  "url": "induction.html#induction-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "closed form "
},
{
  "id": "induction-22-1",
  "level": "2",
  "url": "induction.html#induction-22-1",
  "type": "Exercise",
  "number": "4.2.1",
  "title": "",
  "body": " Use mathematical induction to prove for all integers ,   "
},
{
  "id": "induction-22-2",
  "level": "2",
  "url": "induction.html#induction-22-2",
  "type": "Exercise",
  "number": "4.2.2",
  "title": "",
  "body": " Use mathematical induction to prove for all integers ,   "
},
{
  "id": "induction-22-3",
  "level": "2",
  "url": "induction.html#induction-22-3",
  "type": "Exercise",
  "number": "4.2.3",
  "title": "",
  "body": " Use mathematical induction to prove for all integers ,   "
},
{
  "id": "induction-22-4",
  "level": "2",
  "url": "induction.html#induction-22-4",
  "type": "Exercise",
  "number": "4.2.4",
  "title": "",
  "body": "Use to find a formula for . Prove your formula directly using induction. "
},
{
  "id": "induction-22-5",
  "level": "2",
  "url": "induction.html#induction-22-5",
  "type": "Exercise",
  "number": "4.2.5",
  "title": "",
  "body": "Find a formula for . Prove your formula using induction. "
},
{
  "id": "induction-22-6",
  "level": "2",
  "url": "induction.html#induction-22-6",
  "type": "Exercise",
  "number": "4.2.6",
  "title": "",
  "body": " Observe that   Conjecture a general formula for , and prove your conjecture by mathematical induction.  "
},
{
  "id": "induction-22-7",
  "level": "2",
  "url": "induction.html#induction-22-7",
  "type": "Exercise",
  "number": "4.2.7",
  "title": "",
  "body": " Evaluate the sum for all . Make a conjecture for a formula for the sum for a general , and prove your conjecture by induction.  "
},
{
  "id": "moreinduction",
  "level": "1",
  "url": "moreinduction.html",
  "type": "Section",
  "number": "4.3",
  "title": "More Mathematical Induction",
  "body": " More Mathematical Induction mathematical induction  In the last section we introduced mathematical induction by looking at proofs involving summation formulas. In this section we look at some more examples, including divisibility proofs and inequality proofs.  As in the previous section, we will assume . We continue to use the from the previous section.   Sum of Squares Prove for all by induction. Make sure your proof follows the form from .   Proof by Induction: Divisibility  Prove for .   Base Step: Let . Then . We know .  Thus, for .  Induction Step:  Assume for some .  Show .  Scratchwork: before proving the induction step, we might need to do some scratchwork. This is NOT part of the proof, but will help us structure a clear proof. We can do some algebra on the expression we are trying to prove: . But by our assumption, and since the remaining terms are multiples of 3, .  Now we are ready to use our scratch work to write the proof of the induction step.  Proof of induction step: Which is what we wanted to show.  Hence, by induction for .    Some comments about divisibility proofs:  You will likely need to do scratchwork. Do not include the scratchwork in your actual proof.  The point of the proof is that the reader can follow all of the steps. You do not need to explain where your choices came from. For example, in the proof in , it might not be obvious why you should add , but the reader just needs to know that 3 divides the expression, which is clear.  Divisibility proofs in this form can be challenging to do at first, but with practice, they often end up being some of the easier induction proofs to do, as they all follow a similar format.   Let's try another example.  Proof by Induction: Divisibility, Again  Prove for .   Base Step: Let . Then . We know .  Thus, for .  Induction Step:  Assume for some .  Show .  Scratchwork: But by our assumption, and since the remaining term is a multiple of 3, .  Now we are ready to use our scratchwork to write the proof of the induction step.  Proof of induction step: Which is what we wanted to show.  Hence, by induction for .    A Divisibility Proof Prove for all by induction. It may be helpful to do scratchwork first.  Our next example applies induction to a statement involving inequalities. Inequality induction proofs will be more challenging as they often take a bit more trial and error in the scratchwork. When dealing with equalities , you know for example, that you have to add the same thing to both sides. However, with inequalities you can change one side as long as you maintain the inequality. For example, if you know , then you also know . The fact that we can change one side of the expression makes it less intuitive to see what steps to take.  Proof by Induction: Inequality  Prove for .   Base Step: Let . Then , and We know .  Thus, for .  Induction Step:  Assume for some .  Show .  Scratchwork: Now we want to make a useful observation: in the LHS expression we are addding. In the RHS expression we are multiplying. We need a way to go between them. One way is to notice that . Then We know and , so we can put all this together into the proof.  Proof of induction step: Thus, , which is what we wanted to show.  Hence, by induction for .      For all non-negative integers , .   Use mathematical induction to prove is divisible by 4, for integers .    Use mathematical induction to prove is divisible by 6, for integers .    Use mathematical induction to prove the following statements.    For all non-negative integers , .    For all non-negative integers , .    For all non-negative integers , .    For all non-negative integers , .    For all non-negative integers , .     Find a generalization for . State your generalization and prove it with induction.   Use mathematical induction to prove for all , .    Use mathematical induction to prove , for all real numbers and integers .  You can only do induction on integers, and only one integer at a time. So in this problem you want to do induction on , not . Let just be a variable. This problem does require , so make sure you indicate in your proof where you needed to use that condition.   "
},
{
  "id": "A_indsumofsquares",
  "level": "2",
  "url": "moreinduction.html#A_indsumofsquares",
  "type": "Activity",
  "number": "4.3.1",
  "title": "Sum of Squares.",
  "body": "Sum of Squares Prove for all by induction. Make sure your proof follows the form from .  "
},
{
  "id": "E_divisinduction1",
  "level": "2",
  "url": "moreinduction.html#E_divisinduction1",
  "type": "Example",
  "number": "4.3.1",
  "title": "Proof by Induction: Divisibility.",
  "body": "Proof by Induction: Divisibility  Prove for .   Base Step: Let . Then . We know .  Thus, for .  Induction Step:  Assume for some .  Show .  Scratchwork: before proving the induction step, we might need to do some scratchwork. This is NOT part of the proof, but will help us structure a clear proof. We can do some algebra on the expression we are trying to prove: . But by our assumption, and since the remaining terms are multiples of 3, .  Now we are ready to use our scratch work to write the proof of the induction step.  Proof of induction step: Which is what we wanted to show.  Hence, by induction for .   "
},
{
  "id": "E_divisinduction2",
  "level": "2",
  "url": "moreinduction.html#E_divisinduction2",
  "type": "Example",
  "number": "4.3.2",
  "title": "Proof by Induction: Divisibility, Again.",
  "body": "Proof by Induction: Divisibility, Again  Prove for .   Base Step: Let . Then . We know .  Thus, for .  Induction Step:  Assume for some .  Show .  Scratchwork: But by our assumption, and since the remaining term is a multiple of 3, .  Now we are ready to use our scratchwork to write the proof of the induction step.  Proof of induction step: Which is what we wanted to show.  Hence, by induction for .   "
},
{
  "id": "A_divindproof",
  "level": "2",
  "url": "moreinduction.html#A_divindproof",
  "type": "Activity",
  "number": "4.3.2",
  "title": "A Divisibility Proof.",
  "body": "A Divisibility Proof Prove for all by induction. It may be helpful to do scratchwork first. "
},
{
  "id": "E_inequlinduction2",
  "level": "2",
  "url": "moreinduction.html#E_inequlinduction2",
  "type": "Example",
  "number": "4.3.3",
  "title": "Proof by Induction: Inequality.",
  "body": "Proof by Induction: Inequality  Prove for .   Base Step: Let . Then , and We know .  Thus, for .  Induction Step:  Assume for some .  Show .  Scratchwork: Now we want to make a useful observation: in the LHS expression we are addding. In the RHS expression we are multiplying. We need a way to go between them. One way is to notice that . Then We know and , so we can put all this together into the proof.  Proof of induction step: Thus, , which is what we wanted to show.  Hence, by induction for .   "
},
{
  "id": "moreinduction-13-1",
  "level": "2",
  "url": "moreinduction.html#moreinduction-13-1",
  "type": "Exercise",
  "number": "4.3.1",
  "title": "",
  "body": "For all non-negative integers , . "
},
{
  "id": "moreinduction-13-2",
  "level": "2",
  "url": "moreinduction.html#moreinduction-13-2",
  "type": "Exercise",
  "number": "4.3.2",
  "title": "",
  "body": " Use mathematical induction to prove is divisible by 4, for integers .  "
},
{
  "id": "moreinduction-13-3",
  "level": "2",
  "url": "moreinduction.html#moreinduction-13-3",
  "type": "Exercise",
  "number": "4.3.3",
  "title": "",
  "body": " Use mathematical induction to prove is divisible by 6, for integers .  "
},
{
  "id": "ER_indpowersof2",
  "level": "2",
  "url": "moreinduction.html#ER_indpowersof2",
  "type": "Exercise",
  "number": "4.3.4",
  "title": "",
  "body": " Use mathematical induction to prove the following statements.    For all non-negative integers , .    For all non-negative integers , .    For all non-negative integers , .    For all non-negative integers , .    For all non-negative integers , .    "
},
{
  "id": "moreinduction-13-5",
  "level": "2",
  "url": "moreinduction.html#moreinduction-13-5",
  "type": "Exercise",
  "number": "4.3.5",
  "title": "",
  "body": "Find a generalization for . State your generalization and prove it with induction. "
},
{
  "id": "moreinduction-13-6",
  "level": "2",
  "url": "moreinduction.html#moreinduction-13-6",
  "type": "Exercise",
  "number": "4.3.6",
  "title": "",
  "body": " Use mathematical induction to prove for all , .  "
},
{
  "id": "moreinduction-13-7",
  "level": "2",
  "url": "moreinduction.html#moreinduction-13-7",
  "type": "Exercise",
  "number": "4.3.7",
  "title": "",
  "body": " Use mathematical induction to prove , for all real numbers and integers .  You can only do induction on integers, and only one integer at a time. So in this problem you want to do induction on , not . Let just be a variable. This problem does require , so make sure you indicate in your proof where you needed to use that condition. "
},
{
  "id": "stronginduction",
  "level": "1",
  "url": "stronginduction.html",
  "type": "Section",
  "number": "4.4",
  "title": "Strong Induction",
  "body": " Strong Induction strong induction  In this section we look at a variation on induction called strong induction . This is really just regular induction except we make a stronger assumption in the induction hypothesis. It is possible that we need to show more than one base case as well, but for the moment we will just look at how and why we may need to change the assumption.   Strong Induction strong induction mathematical induction strong  Let be a property defined for integers . If  are true for some , and  if is true for all , then is true;  then we can conclude is true for all .   As in the previous section, we will assume .   Structure of a Strong Induction Proof proof by strong induction strong induction proof by  To prove ,  Base Step Assume is true.  Induction Step Assume is true for all . Show is true.    For now, we can use in the base step and just do one base step as before. But we might need to show, say, and .  The only real difference between strong induction and regular induction is that instead of assuming , we assume . In notation, this is for all .  Why can we change the assumption? Well, remember how induction works, first we show , then the induction step gets us to , which then gets us to , etc. But once we get to, say, , we already know . So we may as well assume we have for everything up to .  For the next two examples, we will look at proving every integer is divisible by a prime. Although we proved this using cases in , we will now prove it using induction. First we will attempt to use regular induction and see why it isn't enough.  Trying Regular Induction  Prove for all integers , is divisible by a prime.  First we try to do the proof using regular induction.   Base Step: Let . Then and 2 is prime.  Thus, is divisible by a prime.  Induction Step:  Assume is divisible by a prime for some .  Show is divisible by a prime.  Proof of induction step:  Case 1: is prime. Now, and hence is divisible by a prime.  Case 2: is not prime. This is were we get stuck, since although we know is divisible by a prime, that doesn't tell us anything about . In fact we showed that any prime dividing CANNOT divide .  Thus, regular induction is not going to work for this proof.    Now we can show how to do the proof with strong induction.  Strong Induction  Prove for all integers , is divisible by a prime.  The only change in the structure is to the induction assumption.   Base Step: Let . Then and 2 is prime.  Thus, is divisible by a prime.  Induction Step:  Assume is divisible by a prime for all and for some .  Show is divisible by a prime.  Proof of induction step:  Case 1: is prime. Now, and hence is divisible by a prime.  Case 2: is not prime. Thus where . Then . By our induction assumption, must be divisible by a prime. Since and is divisible by a prime, is divisible by a prime.  Thus, by induction, every is divisible by a prime.    In regular induction, we use that we know the statement holds for to get that it holds for . Strong induction is useful when we need to use some smaller case (not just ) to get the statement for .  Strong Induction on a Sequence Let be the sequence defined as   Write out the first 6 terms of the sequence.  Convince yourself that for the first six terms of the sequence, .  Now try to write a standard induction proof to prove for all . Does anything go wrong?  The proof requires strong induction. For the base step, how many previous terms do you need before you can first compute using the formula provided in defining the sequence? You need to show the base step for each of these initial terms since the induction won't apply to them. Check the base step for each of these terms.  Write the assume and show statements for the inductive step. Make sure your assume statement is in the form for strong induction.  Now prove the inductive step.  As we see in , strong induction is a useful technique for proving statements about sequences. One particularly nice sequence is the Fibonacci Sequence Fibonacci sequence .  The Fibonacci sequence Fibonacci sequence is the sequence, , defined by  The first two terms are called the initial terms . Then we generate terms by adding the previous two terms. For example, .  Generating the Fibonacci Sequence  Find the first 8 terms of the Fibonacci sequence.  A Fibonacci Sum Consider the sum of every other Fibonacci number:  Make a table of and the corresponding for to .  For each in your table, find the sum .  Conjecture a formula for .  Use induction to prove your formula.     Let be the sequence defined as    Prove that is odd for all integers .  Let be the sequence defined as    Prove that is divisible by 4 for all integers .   Let be the sequence defined as    Prove that for all integers .    Let be the sequence defined as    Prove that for all integers .    Let be the Fibonacci numbers. Find and prove a formula for .    Let be the Fibonacci numbers. Find and prove a formula for when is a positive integer.   Let be the Fibonacci numbers. Prove for all and all , .  Let be the Fibonacci numbers. Prove for all , .  Prove if is the th Fibonacci number, then   Prove your response to using mathematical induction. Let stand for the number of connectives contained in any given statement .   "
},
{
  "id": "stronginduction-3",
  "level": "2",
  "url": "stronginduction.html#stronginduction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "strong induction "
},
{
  "id": "E_divbyprimeregular",
  "level": "2",
  "url": "stronginduction.html#E_divbyprimeregular",
  "type": "Example",
  "number": "4.4.1",
  "title": "Trying Regular Induction.",
  "body": "Trying Regular Induction  Prove for all integers , is divisible by a prime.  First we try to do the proof using regular induction.   Base Step: Let . Then and 2 is prime.  Thus, is divisible by a prime.  Induction Step:  Assume is divisible by a prime for some .  Show is divisible by a prime.  Proof of induction step:  Case 1: is prime. Now, and hence is divisible by a prime.  Case 2: is not prime. This is were we get stuck, since although we know is divisible by a prime, that doesn't tell us anything about . In fact we showed that any prime dividing CANNOT divide .  Thus, regular induction is not going to work for this proof.   "
},
{
  "id": "E_divbyprimestrong",
  "level": "2",
  "url": "stronginduction.html#E_divbyprimestrong",
  "type": "Example",
  "number": "4.4.2",
  "title": "Strong Induction.",
  "body": "Strong Induction  Prove for all integers , is divisible by a prime.  The only change in the structure is to the induction assumption.   Base Step: Let . Then and 2 is prime.  Thus, is divisible by a prime.  Induction Step:  Assume is divisible by a prime for all and for some .  Show is divisible by a prime.  Proof of induction step:  Case 1: is prime. Now, and hence is divisible by a prime.  Case 2: is not prime. Thus where . Then . By our induction assumption, must be divisible by a prime. Since and is divisible by a prime, is divisible by a prime.  Thus, by induction, every is divisible by a prime.   "
},
{
  "id": "A_strongind",
  "level": "2",
  "url": "stronginduction.html#A_strongind",
  "type": "Activity",
  "number": "4.4.1",
  "title": "Strong Induction on a Sequence.",
  "body": "Strong Induction on a Sequence Let be the sequence defined as   Write out the first 6 terms of the sequence.  Convince yourself that for the first six terms of the sequence, .  Now try to write a standard induction proof to prove for all . Does anything go wrong?  The proof requires strong induction. For the base step, how many previous terms do you need before you can first compute using the formula provided in defining the sequence? You need to show the base step for each of these initial terms since the induction won't apply to them. Check the base step for each of these terms.  Write the assume and show statements for the inductive step. Make sure your assume statement is in the form for strong induction.  Now prove the inductive step. "
},
{
  "id": "stronginduction-16",
  "level": "2",
  "url": "stronginduction.html#stronginduction-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fibonacci Sequence "
},
{
  "id": "D_fibonacci",
  "level": "2",
  "url": "stronginduction.html#D_fibonacci",
  "type": "Definition",
  "number": "4.4.3",
  "title": "",
  "body": "The Fibonacci sequence Fibonacci sequence is the sequence, , defined by "
},
{
  "id": "stronginduction-18",
  "level": "2",
  "url": "stronginduction.html#stronginduction-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial terms "
},
{
  "id": "A_termsfibonacci",
  "level": "2",
  "url": "stronginduction.html#A_termsfibonacci",
  "type": "Activity",
  "number": "4.4.2",
  "title": "Generating the Fibonacci Sequence.",
  "body": "Generating the Fibonacci Sequence  Find the first 8 terms of the Fibonacci sequence. "
},
{
  "id": "A_fibproof",
  "level": "2",
  "url": "stronginduction.html#A_fibproof",
  "type": "Activity",
  "number": "4.4.3",
  "title": "A Fibonacci Sum.",
  "body": "A Fibonacci Sum Consider the sum of every other Fibonacci number:  Make a table of and the corresponding for to .  For each in your table, find the sum .  Conjecture a formula for .  Use induction to prove your formula. "
},
{
  "id": "stronginduction-21-1",
  "level": "2",
  "url": "stronginduction.html#stronginduction-21-1",
  "type": "Exercise",
  "number": "4.4.1",
  "title": "",
  "body": "Let be the sequence defined as    Prove that is odd for all integers . "
},
{
  "id": "stronginduction-21-2",
  "level": "2",
  "url": "stronginduction.html#stronginduction-21-2",
  "type": "Exercise",
  "number": "4.4.2",
  "title": "",
  "body": "Let be the sequence defined as    Prove that is divisible by 4 for all integers . "
},
{
  "id": "stronginduction-21-3",
  "level": "2",
  "url": "stronginduction.html#stronginduction-21-3",
  "type": "Exercise",
  "number": "4.4.3",
  "title": "",
  "body": " Let be the sequence defined as    Prove that for all integers .  "
},
{
  "id": "stronginduction-21-4",
  "level": "2",
  "url": "stronginduction.html#stronginduction-21-4",
  "type": "Exercise",
  "number": "4.4.4",
  "title": "",
  "body": " Let be the sequence defined as    Prove that for all integers .  "
},
{
  "id": "stronginduction-21-5",
  "level": "2",
  "url": "stronginduction.html#stronginduction-21-5",
  "type": "Exercise",
  "number": "4.4.5",
  "title": "",
  "body": " Let be the Fibonacci numbers. Find and prove a formula for .  "
},
{
  "id": "stronginduction-21-6",
  "level": "2",
  "url": "stronginduction.html#stronginduction-21-6",
  "type": "Exercise",
  "number": "4.4.6",
  "title": "",
  "body": " Let be the Fibonacci numbers. Find and prove a formula for when is a positive integer.  "
},
{
  "id": "stronginduction-21-7",
  "level": "2",
  "url": "stronginduction.html#stronginduction-21-7",
  "type": "Exercise",
  "number": "4.4.7",
  "title": "",
  "body": "Let be the Fibonacci numbers. Prove for all and all , . "
},
{
  "id": "stronginduction-21-8",
  "level": "2",
  "url": "stronginduction.html#stronginduction-21-8",
  "type": "Exercise",
  "number": "4.4.8",
  "title": "",
  "body": "Let be the Fibonacci numbers. Prove for all , . "
},
{
  "id": "stronginduction-21-9",
  "level": "2",
  "url": "stronginduction.html#stronginduction-21-9",
  "type": "Exercise",
  "number": "4.4.9",
  "title": "",
  "body": "Prove if is the th Fibonacci number, then  "
},
{
  "id": "stronginduction-21-10",
  "level": "2",
  "url": "stronginduction.html#stronginduction-21-10",
  "type": "Exercise",
  "number": "4.4.10",
  "title": "",
  "body": "Prove your response to using mathematical induction. Let stand for the number of connectives contained in any given statement . "
},
{
  "id": "existunique",
  "level": "1",
  "url": "existunique.html",
  "type": "Section",
  "number": "5.1",
  "title": "Existence and Uniqueness Proofs",
  "body": " Existence and Uniqueness Proofs existence proof uniqueness proof  In this section we will look at existential statements which have the form There exists such that , and There exists a unique such that . We first studied existence statements in .  Recall how to show an existential statement, , is true\/false:   To show an existential statement is true , you just need to find one value in which makes true.  To show an existential statement is false , you need to show all values in make false, or no values make it true. If your set is small, you can do this just by showing is false for each . If is infinite, however, we will need more general techniques.   In , we were generally able to find a specific in order to show a existential statement was true.  Existential Statements existential statement   Let . Determine whether the statement there exists such that is true or false.  Since is the only value satisfying the equation, but , the statement is false.  Let . Determine whether the statement there exists such that is true or false.  Since is the only value satisfying the equation, and , the statement is true.  Let . Determine whether the statement there exists such that is true or false.  Since is the only value satisfying the equation, and , the statement is true.   However, many existence statements in mathematics require us to find a more general solution.   Proving an Existential Statement proof existential statement  To prove there exists such that :  Produce a candidate. This means you state an which makes true. You may need to do work to find , but that work is not part of the actual proof.  Show the candidate works. In other words, show is true.    A More General Existence Proof  Let with . Prove there exists such that .  Before proving the statement, we need to find an that is between and . We need to find a general one, one that depends on and . There are lots of choices, but to guarantee it is in between and , we might want to take the midpoint, which is also the average of the two numbers, .  Let with . Let (this is stating the candidate). Then is rational (see or prove this as an exercise). Furthermore, Thus, . (We showed that satisfied all the necessary properties.)   A Bigger Integer  Prove for there exists an integer with .  Given a general integer , find an interger that will always be larger that . This is your candidate for .  Verify that and .  Is your choice for unique? Could you find a different that works? If you can find another choice for , write a second proof of existence with your new .   Existence statements are common in mathematics. You probably came across several in calculus, for example, Rolle's Theorem and the Mean Value Theorem. Although their proofs are beyond the scope of this course, you are encouraged to look up a proof and see how the techniques we've been studying are applied. In many contexts, it can be very difficult to find a candidate. If you are stuck, it might be worth trying proof by contradiction. In this case, you assume there does not exist satisfying . Symbolically this statement is . The negation is equivalent to . You can then use for your assumption and try to reach a contradiction.  Now we want to look at statements where the that exists is actually unique. Meaning, there is only one possible that will work. First we show exists, then we show it is unique.   Proving Uniqueness proof uniqueness statement  To prove there exists a unique such that :  Produce a candidate. This means you state the that makes true. You may need to do work to find , but that work is not part of the actual proof.  Show the candidate works. In other words, show is true. This shows existence .  Assume is true and is true. Show . This shows uniqueness .   The idea behind a uniqueness proof is that if the necessary property holds for and , then they must have been the same thing, so there can only be one solution. It is important to note that you just need to show in general. If there was a specific solution for in the existence part, you do not need to show that equals that specific .  A Uniqueness Proof  In we said that the solution to was unique. This may seem obvious since if we solve for , there is only one possible solution. But just to practice with the form of a uniqueness proof, we show how to prove uniqueness without showing .  Let and be solutions to . Then and . Thus,  Hence, the solution is unique.   A Unique Root Assume has a solution. Show the solution is unique. You do not need to find the actual solution to do this proof.  In we stated the Division Algorithm, . We restate it for convenience.  The Division Algorithm Division Algorithm Given any integer and any positive integer , there exist unique integers such that and .  This is a classic example of an exstence and uniqueness statement in mathematics. We need to prove exist and are unique. Before we do that we need the Well-Ordering Principle, which we will state without a proof.  Well-Ordering Principle Well-Ordering Principle Let be a set containing one or more integers, all of which are greater than some fixed integer. Then has a least element.  To check that the Well-Ordering Principle applies, you need to check three things:    Every element of is greater than some fixed integer.   Well-Ordering Principle  First note that the Well-Ordering Principle does not apply if the set is not integers. For example, This is not a subset of the integers and does not have a least element, even though every element is greater than 0.  Now consider . Check each of the conditions.  since .  since .  Every element of is greater than some fixed integer since when .     We now prove the existence part of the Division Algorithm.  Division Algorithm proof of existence Let . Show satisfies the Well-Ordering Principle. Clearly is a set of integers, and by definition, every element is greater than or equal to 0. So we just need to show that .  If , we can let . Then . Hence .  If , let . Then . But and . Thus, . Hence .  Thus, is nonempty and satisfies the conditions of the Well-Ordering Principle. Hence, has a least element. Call it .  Since , for some . Let . Then , and so .  We just need to show that . Well, since .  We will use contradiction to show . Assume . Then But then and . This contradicts that was the smallest element of . Therefore, .  Although this is a fairly complex proof, it is a good example of how many different techniques can be used in one proof. We do not have a specific value for , rather its existence (and hence existence of ) depends on existence in the Well-Ordering Principle. Now we prove and are unique.  Division Algorithm proof of uniqueness  Assume exist and satisfy the conditions of the theorem. Then, and and and . This gives us   Rewriting, We can assume (if they weren't, we could just rename them).  Thus, divides . But since and , . The only nonnegative integer divides that is smaller than itself is 0. Thus . Therefore, .  Now Hence, are unique.    Prove if is a positive real number, then there exists a positive real number less than .  Prove for all real numbers , if then there exists a unique in such that .  Prove there exists a unique integer such that for all integers .  Prove there exists a unique integer such that for all integers .  Let and be points in the plane. Prove there is a unique line through and . First show the line exists. You can use scratchwork to find the equation of the line. Then you need to show your line passes through the two points in your proof. For uniqueness assume you have two general lines, , passing through and . Show the two lines are the same. Each point on each line gives one equation.  Let and be points in the plane with . Prove there is a unique line through and . First show the line exists. You can use scratchwork to find the equation of the line. Then you need to show your line passes through the two points in your proof. For uniqueness assume you have two general lines passing through and . Show the two lines are the same. Each point on each line gives one equation.   "
},
{
  "id": "E_domainqexist1",
  "level": "2",
  "url": "existunique.html#E_domainqexist1",
  "type": "Example",
  "number": "5.1.1",
  "title": "Existential Statements.",
  "body": "Existential Statements existential statement   Let . Determine whether the statement there exists such that is true or false.  Since is the only value satisfying the equation, but , the statement is false.  Let . Determine whether the statement there exists such that is true or false.  Since is the only value satisfying the equation, and , the statement is true.  Let . Determine whether the statement there exists such that is true or false.  Since is the only value satisfying the equation, and , the statement is true.  "
},
{
  "id": "E_generalexistence",
  "level": "2",
  "url": "existunique.html#E_generalexistence",
  "type": "Example",
  "number": "5.1.2",
  "title": "A More General Existence Proof.",
  "body": "A More General Existence Proof  Let with . Prove there exists such that .  Before proving the statement, we need to find an that is between and . We need to find a general one, one that depends on and . There are lots of choices, but to guarantee it is in between and , we might want to take the midpoint, which is also the average of the two numbers, .  Let with . Let (this is stating the candidate). Then is rational (see or prove this as an exercise). Furthermore, Thus, . (We showed that satisfied all the necessary properties.)  "
},
{
  "id": "A_biginteger",
  "level": "2",
  "url": "existunique.html#A_biginteger",
  "type": "Activity",
  "number": "5.1.1",
  "title": "A Bigger Integer.",
  "body": "A Bigger Integer  Prove for there exists an integer with .  Given a general integer , find an interger that will always be larger that . This is your candidate for .  Verify that and .  Is your choice for unique? Could you find a different that works? If you can find another choice for , write a second proof of existence with your new .  "
},
{
  "id": "E_generaluniqueness",
  "level": "2",
  "url": "existunique.html#E_generaluniqueness",
  "type": "Example",
  "number": "5.1.3",
  "title": "A Uniqueness Proof.",
  "body": "A Uniqueness Proof  In we said that the solution to was unique. This may seem obvious since if we solve for , there is only one possible solution. But just to practice with the form of a uniqueness proof, we show how to prove uniqueness without showing .  Let and be solutions to . Then and . Thus,  Hence, the solution is unique.  "
},
{
  "id": "A_practiceunique",
  "level": "2",
  "url": "existunique.html#A_practiceunique",
  "type": "Activity",
  "number": "5.1.2",
  "title": "A Unique Root.",
  "body": "A Unique Root Assume has a solution. Show the solution is unique. You do not need to find the actual solution to do this proof. "
},
{
  "id": "existunique-20",
  "level": "2",
  "url": "existunique.html#existunique-20",
  "type": "Theorem",
  "number": "5.1.4",
  "title": "The Division Algorithm.",
  "body": "The Division Algorithm Division Algorithm Given any integer and any positive integer , there exist unique integers such that and . "
},
{
  "id": "T_wellordering",
  "level": "2",
  "url": "existunique.html#T_wellordering",
  "type": "Theorem",
  "number": "5.1.5",
  "title": "Well-Ordering Principle.",
  "body": "Well-Ordering Principle Well-Ordering Principle Let be a set containing one or more integers, all of which are greater than some fixed integer. Then has a least element. "
},
{
  "id": "E_wop",
  "level": "2",
  "url": "existunique.html#E_wop",
  "type": "Example",
  "number": "5.1.6",
  "title": "Well-Ordering Principle.",
  "body": "Well-Ordering Principle  First note that the Well-Ordering Principle does not apply if the set is not integers. For example, This is not a subset of the integers and does not have a least element, even though every element is greater than 0.  Now consider . Check each of the conditions.  since .  since .  Every element of is greater than some fixed integer since when .   "
},
{
  "id": "existunique-26",
  "level": "2",
  "url": "existunique.html#existunique-26",
  "type": "Proof",
  "number": "5.1.1",
  "title": "",
  "body": "Division Algorithm proof of existence Let . Show satisfies the Well-Ordering Principle. Clearly is a set of integers, and by definition, every element is greater than or equal to 0. So we just need to show that .  If , we can let . Then . Hence .  If , let . Then . But and . Thus, . Hence .  Thus, is nonempty and satisfies the conditions of the Well-Ordering Principle. Hence, has a least element. Call it .  Since , for some . Let . Then , and so .  We just need to show that . Well, since .  We will use contradiction to show . Assume . Then But then and . This contradicts that was the smallest element of . Therefore, . "
},
{
  "id": "existunique-28",
  "level": "2",
  "url": "existunique.html#existunique-28",
  "type": "Proof",
  "number": "5.1.2",
  "title": "",
  "body": "Division Algorithm proof of uniqueness  Assume exist and satisfy the conditions of the theorem. Then, and and and . This gives us   Rewriting, We can assume (if they weren't, we could just rename them).  Thus, divides . But since and , . The only nonnegative integer divides that is smaller than itself is 0. Thus . Therefore, .  Now Hence, are unique.  "
},
{
  "id": "existunique-29-1",
  "level": "2",
  "url": "existunique.html#existunique-29-1",
  "type": "Exercise",
  "number": "5.1.1",
  "title": "",
  "body": "Prove if is a positive real number, then there exists a positive real number less than . "
},
{
  "id": "existunique-29-2",
  "level": "2",
  "url": "existunique.html#existunique-29-2",
  "type": "Exercise",
  "number": "5.1.2",
  "title": "",
  "body": "Prove for all real numbers , if then there exists a unique in such that . "
},
{
  "id": "existunique-29-3",
  "level": "2",
  "url": "existunique.html#existunique-29-3",
  "type": "Exercise",
  "number": "5.1.3",
  "title": "",
  "body": "Prove there exists a unique integer such that for all integers . "
},
{
  "id": "existunique-29-4",
  "level": "2",
  "url": "existunique.html#existunique-29-4",
  "type": "Exercise",
  "number": "5.1.4",
  "title": "",
  "body": "Prove there exists a unique integer such that for all integers . "
},
{
  "id": "existunique-29-5",
  "level": "2",
  "url": "existunique.html#existunique-29-5",
  "type": "Exercise",
  "number": "5.1.5",
  "title": "",
  "body": "Let and be points in the plane. Prove there is a unique line through and . First show the line exists. You can use scratchwork to find the equation of the line. Then you need to show your line passes through the two points in your proof. For uniqueness assume you have two general lines, , passing through and . Show the two lines are the same. Each point on each line gives one equation. "
},
{
  "id": "existunique-29-6",
  "level": "2",
  "url": "existunique.html#existunique-29-6",
  "type": "Exercise",
  "number": "5.1.6",
  "title": "",
  "body": "Let and be points in the plane with . Prove there is a unique line through and . First show the line exists. You can use scratchwork to find the equation of the line. Then you need to show your line passes through the two points in your proof. For uniqueness assume you have two general lines passing through and . Show the two lines are the same. Each point on each line gives one equation. "
},
{
  "id": "settheory",
  "level": "1",
  "url": "settheory.html",
  "type": "Section",
  "number": "5.2",
  "title": "Set Theory",
  "body": " Set Theory set theory  In this section we review the set theory definitions of element and subset from . Then we introduce several definitions for operations on sets. Once we have the definitions, we will use those to prove statements about general sets.  Set Notation  Recall, we usually use capital letters for sets, such as or . If we want to talk about elements in a set , we use the notation . We read this notation as is in or is an element of . If is not in , then we use the notation .  In general, if we use to describe a property of , we use the notation and read the statement as in such that has property .  Examples of Sets   is the set of even integers.  is the set of points in the plane whose coordinates sum to 0.  is the closed interval .   A set is a subset of a set if all the elements of are also in .  Notation: . If is not a subset of , then we use the notation .  is a subset subset of , , if for all , if then .  is a not a subset of , , if there exists , such that and .   is a proper subset proper subset of if and .   Note that the definition of subset is an if...then statement. If we want to prove , we prove if then . Thus, we assume and show .  Multiples of 6 Are Multiples of 3 Prove . Make sure in your proof you identify what you need to assume and what you need to show.  Multiples of 3 Are Not Multiples of 6 Find a counterexample to prove .  We say two sets are equal, , if and .  We will let be the universal set universal set , which is the set of all possible elements. The universal set depend on the context. For example, in calculus, the universal set is often the set of all real numbers, while in discrete math, many times it is the integers. In set theory examples, it may be convenient to define a small universal set, such as . It is useful to note that every set is a subset of the universal set.  We also have the empty set empty set , , which is the set that contains no elements. It is useful to note that the empty set is a subset of every set. We will prove the formally in .   Operations on Sets  We now give the element definitions for common set operations, along with the Venn diagrams for each of the sets. A Venn diagram is a picture that represents sets.  Union union of sets : the union of and if and only if or .  In set notation, .   Venn diagram for     Intersection intersection of sets : the intersection of and if and only if and .  In set notation, .   Venn diagram for     Set difference set difference : the set difference minus (or the set difference minus ) if and only if and .  In set notation, .   Venn diagram for     Complement complement of a set : the complement of if and only if .  In set notation, .   Venn diagram for     Operations on Sets Let and .  Note, these sets can also be defined with interval notation, .  Find .   Find .   Find .   Find .   Find .    Practice with Set Operations Let and and the Universal set .  Find .  Find .  Find .  Find .  Find .   We can take the union or intersection of many sets using notation similar to summation notation:    We can also take the intersection or union of infinitely many sets:   Infinite Union and Intersection Let .  Find and .  Find .  Find .  Find .  Find .   The power set of a set is the set of all subsets of . We denote it The power set of .  Power Set Let . Find .  We need to find all the subsets of . The subsets are the elements of .  The subsets are . Thus, .  Finding a Power Set Let . Find .  Another important set in mathematics is the Cartesian product product of sets Cartesian product of two sets and . We define it as the Cartesian product of and This is a set of ordered pairs , where the first coordinate comes from set and the second coordinate comes from set .  Cartesian Product of Sets Let and .  Find .    Cartesian Product of Real Numbers Let and .  Then is the set of all points in the plane. This set is often written as .    Proofs of Set Properties  Now that we have defined operations on sets such as union and intersection, we can look at various properties of these operations. We saw that intersection involves an and statement, while union involves an or . As we work with these properties we will be able to see connections between properties of sets and the logical connectives we saw in .  We will refer to the following properties of sets as the subset relations subset relations .  ; .  ; .  Transitivity If and then .   One of our goals in this section is to learn how to prove properties such as these.  We can think of the statement as the conditional statement, if then .   To Prove subset proof   Assume .  Show .    We can translate set operations into logical statements, as well. These translations are how we will prove properites of sets using elements.   Translating Sets into Logical Form   Union if and only if or  Intersection if and only if and  Set Difference if and only if and  Complement if and only if  Cartesian Product if and only if and    Proving a Subset Property  Prove .   Let . Then and . Thus, .  Therefore, .    Intersection Subset Property Prove . Be sure to write what you want to assume and what you want to show.  Subset Union Property Prove . Be sure to write what you want to assume and what you want to show.   To prove two sets are equal, we prove they are subsets of each other.   Proving Set Equality set equality proof  To prove show  , ie, show if then , and  , ie, show if then .    Proving Two Sets are Equal  Prove .    : Let . Then or .  Case 1: . Then by the second subset relation. Similarly, . Thus, and .  Therefore, .  Case 2: . Then and . Then and by the second subset relation. Thus, and .  Therefore, .   : Let . Then and .  Case 1: . Then by the second subset relation (since we can form the union with ANY set).  Case 2: . Since by assumption, or . Since , .  Similarly, since , and , . Thus, .  Therefore, (again by the second subset relation).    The next theorem shows that the empty set is a subset of every set.  For all sets , .  By contradiction, assume there exists a set such that .  This means there exists such that . But we cannot have . Hence we have a contradiction. Therefore, .   There are many times in mathematics that we need to prove that a set is empty. We might need do do this if we need sets to be disjoint or if we need to prove that there are no elements with a particular property. The common method for proving a set is empty is to use contradiction. Note, usually if we want to prove , we show both subsets, and , but we just showed , always. Thus, we just need to show . We do this by contradiction.   Proving a Set is Empty  To prove   Assume .  Reach a contradiction.    Proving a Set is Empty  Prove , where is the universal set.  Let . Then . But since contains everything, , which is a contradiction. Therefore, .    Practice Proving a Set is Empty Prove . Be sure to write what you want to assume and what you want to show.  Two sets and are disjoint disjoint sets if .  A More Complicated Subset Proof Prove if then . Note, you need to show . So how do you show a subset? What set should you assume is in?   Summary of Set Identities set identities set properties  Let be the universal set, and , and be subsets of the universal set.   Commutative Laws    Associative Laws    Distributive Laws     Identity Laws    Complement Laws    Double Complement Law    Idempotent Laws    Universal Bound Laws    DeMorgan's Laws    Absorption Laws    Complements    Set Difference Law         Let , , and . Find each of the following:     .     .     .     .     .     .     .     .      Let the universal set be , and let , , and . Find each of the following:                                                        Determine whether each of the following are true or false.                                                   Let , , and .    Find , , and . Which of these sets are equal?    Find , , and . Which of these sets are equal?    Find and . Are these sets equal?     Determine if the following statements are true or false. Give a justification for you answer.    The number 0 is in .                     Let (the interval ) for all nonnegative integers .    Find .    Find .     Find .    Find .    Find .    Find .       Let and . Find     .     .     .     .     Prove if and then .  Prove if and then .  Prove if and then .  Prove . Give an example of two sets and such that .   Let and be subsets of the universal set . Prove if and only if .   Prove if then . Is the converse true? If so prove it; if not give a counterexample.  Prove if then, for all sets , . Explain why in the case that is the universal set , this property can be stated more concisely as .   True or False? If the statement is true give a proof. If the statement is false give a counterexample.     .     .     .       "
},
{
  "id": "E_setnotevarious",
  "level": "2",
  "url": "settheory.html#E_setnotevarious",
  "type": "Example",
  "number": "5.2.1",
  "title": "Examples of Sets.",
  "body": "Examples of Sets   is the set of even integers.  is the set of points in the plane whose coordinates sum to 0.  is the closed interval .  "
},
{
  "id": "D_subset",
  "level": "2",
  "url": "settheory.html#D_subset",
  "type": "Definition",
  "number": "5.2.2",
  "title": "",
  "body": "is a subset subset of , , if for all , if then .  is a not a subset of , , if there exists , such that and .  "
},
{
  "id": "D_propersubset",
  "level": "2",
  "url": "settheory.html#D_propersubset",
  "type": "Definition",
  "number": "5.2.3",
  "title": "",
  "body": "is a proper subset proper subset of if and .  "
},
{
  "id": "A_mult6subset",
  "level": "2",
  "url": "settheory.html#A_mult6subset",
  "type": "Activity",
  "number": "5.2.1",
  "title": "Multiples of 6 Are Multiples of 3.",
  "body": "Multiples of 6 Are Multiples of 3 Prove . Make sure in your proof you identify what you need to assume and what you need to show. "
},
{
  "id": "A_mult3nsubset",
  "level": "2",
  "url": "settheory.html#A_mult3nsubset",
  "type": "Activity",
  "number": "5.2.2",
  "title": "Multiples of 3 Are Not Multiples of 6.",
  "body": "Multiples of 3 Are Not Multiples of 6 Find a counterexample to prove . "
},
{
  "id": "SS_STnotation-13",
  "level": "2",
  "url": "settheory.html#SS_STnotation-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "universal set "
},
{
  "id": "SS_STnotation-14",
  "level": "2",
  "url": "settheory.html#SS_STnotation-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "empty set "
},
{
  "id": "SS_setoperations-3",
  "level": "2",
  "url": "settheory.html#SS_setoperations-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Union "
},
{
  "id": "F_unionvenn",
  "level": "2",
  "url": "settheory.html#F_unionvenn",
  "type": "Figure",
  "number": "5.2.4",
  "title": "",
  "body": " Venn diagram for    "
},
{
  "id": "SS_setoperations-6",
  "level": "2",
  "url": "settheory.html#SS_setoperations-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Intersection "
},
{
  "id": "F_intersetvenn",
  "level": "2",
  "url": "settheory.html#F_intersetvenn",
  "type": "Figure",
  "number": "5.2.5",
  "title": "",
  "body": " Venn diagram for    "
},
{
  "id": "SS_setoperations-9",
  "level": "2",
  "url": "settheory.html#SS_setoperations-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Set difference "
},
{
  "id": "F_setminusvenn",
  "level": "2",
  "url": "settheory.html#F_setminusvenn",
  "type": "Figure",
  "number": "5.2.6",
  "title": "",
  "body": " Venn diagram for    "
},
{
  "id": "SS_setoperations-12",
  "level": "2",
  "url": "settheory.html#SS_setoperations-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Complement "
},
{
  "id": "F_complementvenn",
  "level": "2",
  "url": "settheory.html#F_complementvenn",
  "type": "Figure",
  "number": "5.2.7",
  "title": "",
  "body": " Venn diagram for    "
},
{
  "id": "E_setops",
  "level": "2",
  "url": "settheory.html#E_setops",
  "type": "Example",
  "number": "5.2.8",
  "title": "Operations on Sets.",
  "body": "Operations on Sets Let and .  Note, these sets can also be defined with interval notation, .  Find .   Find .   Find .   Find .   Find .   "
},
{
  "id": "A_setoppractice",
  "level": "2",
  "url": "settheory.html#A_setoppractice",
  "type": "Activity",
  "number": "5.2.3",
  "title": "Practice with Set Operations.",
  "body": "Practice with Set Operations Let and and the Universal set .  Find .  Find .  Find .  Find .  Find .  "
},
{
  "id": "A_infunion",
  "level": "2",
  "url": "settheory.html#A_infunion",
  "type": "Activity",
  "number": "5.2.4",
  "title": "Infinite Union and Intersection.",
  "body": "Infinite Union and Intersection Let .  Find and .  Find .  Find .  Find .  Find .  "
},
{
  "id": "D_powerset",
  "level": "2",
  "url": "settheory.html#D_powerset",
  "type": "Definition",
  "number": "5.2.9",
  "title": "",
  "body": "The power set of a set is the set of all subsets of . We denote it The power set of . "
},
{
  "id": "E_powerset",
  "level": "2",
  "url": "settheory.html#E_powerset",
  "type": "Example",
  "number": "5.2.10",
  "title": "Power Set.",
  "body": "Power Set Let . Find .  We need to find all the subsets of . The subsets are the elements of .  The subsets are . Thus, . "
},
{
  "id": "A_powerset",
  "level": "2",
  "url": "settheory.html#A_powerset",
  "type": "Activity",
  "number": "5.2.5",
  "title": "",
  "body": "Finding a Power Set Let . Find . "
},
{
  "id": "SS_setoperations-23",
  "level": "2",
  "url": "settheory.html#SS_setoperations-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cartesian product ordered pairs "
},
{
  "id": "E_cartprod2",
  "level": "2",
  "url": "settheory.html#E_cartprod2",
  "type": "Example",
  "number": "5.2.11",
  "title": "Cartesian Product of Sets.",
  "body": "Cartesian Product of Sets Let and .  Find .   "
},
{
  "id": "E_rtwo",
  "level": "2",
  "url": "settheory.html#E_rtwo",
  "type": "Example",
  "number": "5.2.12",
  "title": "Cartesian Product of Real Numbers.",
  "body": "Cartesian Product of Real Numbers Let and .  Then is the set of all points in the plane. This set is often written as .  "
},
{
  "id": "SS_setproofs-3",
  "level": "2",
  "url": "settheory.html#SS_setproofs-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subset relations "
},
{
  "id": "E_subsetprop",
  "level": "2",
  "url": "settheory.html#E_subsetprop",
  "type": "Example",
  "number": "5.2.13",
  "title": "Proving a Subset Property.",
  "body": "Proving a Subset Property  Prove .   Let . Then and . Thus, .  Therefore, .   "
},
{
  "id": "A_ssprop1",
  "level": "2",
  "url": "settheory.html#A_ssprop1",
  "type": "Activity",
  "number": "5.2.6",
  "title": "Intersection Subset Property.",
  "body": "Intersection Subset Property Prove . Be sure to write what you want to assume and what you want to show. "
},
{
  "id": "Assprop2",
  "level": "2",
  "url": "settheory.html#Assprop2",
  "type": "Activity",
  "number": "5.2.7",
  "title": "Subset Union Property.",
  "body": "Subset Union Property Prove . Be sure to write what you want to assume and what you want to show. "
},
{
  "id": "E_DeMorgans",
  "level": "2",
  "url": "settheory.html#E_DeMorgans",
  "type": "Example",
  "number": "5.2.14",
  "title": "Proving Two Sets are Equal.",
  "body": "Proving Two Sets are Equal  Prove .    : Let . Then or .  Case 1: . Then by the second subset relation. Similarly, . Thus, and .  Therefore, .  Case 2: . Then and . Then and by the second subset relation. Thus, and .  Therefore, .   : Let . Then and .  Case 1: . Then by the second subset relation (since we can form the union with ANY set).  Case 2: . Since by assumption, or . Since , .  Similarly, since , and , . Thus, .  Therefore, (again by the second subset relation).   "
},
{
  "id": "T_emptyset",
  "level": "2",
  "url": "settheory.html#T_emptyset",
  "type": "Theorem",
  "number": "5.2.15",
  "title": "",
  "body": "For all sets , . "
},
{
  "id": "SS_setproofs-17",
  "level": "2",
  "url": "settheory.html#SS_setproofs-17",
  "type": "Proof",
  "number": "5.2.3.1",
  "title": "",
  "body": "By contradiction, assume there exists a set such that .  This means there exists such that . But we cannot have . Hence we have a contradiction. Therefore, .  "
},
{
  "id": "E_provesetisempty",
  "level": "2",
  "url": "settheory.html#E_provesetisempty",
  "type": "Example",
  "number": "5.2.16",
  "title": "Proving a Set is Empty.",
  "body": "Proving a Set is Empty  Prove , where is the universal set.  Let . Then . But since contains everything, , which is a contradiction. Therefore, .   "
},
{
  "id": "A_provesetempty",
  "level": "2",
  "url": "settheory.html#A_provesetempty",
  "type": "Activity",
  "number": "5.2.8",
  "title": "Practice Proving a Set is Empty.",
  "body": "Practice Proving a Set is Empty Prove . Be sure to write what you want to assume and what you want to show. "
},
{
  "id": "D_disjoint",
  "level": "2",
  "url": "settheory.html#D_disjoint",
  "type": "Definition",
  "number": "5.2.17",
  "title": "",
  "body": "Two sets and are disjoint disjoint sets if . "
},
{
  "id": "A_moresubset",
  "level": "2",
  "url": "settheory.html#A_moresubset",
  "type": "Activity",
  "number": "5.2.9",
  "title": "A More Complicated Subset Proof.",
  "body": "A More Complicated Subset Proof Prove if then . Note, you need to show . So how do you show a subset? What set should you assume is in? "
},
{
  "id": "SS_setproofs-25-1",
  "level": "2",
  "url": "settheory.html#SS_setproofs-25-1",
  "type": "Exercise",
  "number": "5.2.3.1",
  "title": "",
  "body": " Let , , and . Find each of the following:     .     .     .     .     .     .     .     .    "
},
{
  "id": "SS_setproofs-25-2",
  "level": "2",
  "url": "settheory.html#SS_setproofs-25-2",
  "type": "Exercise",
  "number": "5.2.3.2",
  "title": "",
  "body": " Let the universal set be , and let , , and . Find each of the following:                                                      "
},
{
  "id": "SS_setproofs-25-3",
  "level": "2",
  "url": "settheory.html#SS_setproofs-25-3",
  "type": "Exercise",
  "number": "5.2.3.3",
  "title": "",
  "body": " Determine whether each of the following are true or false.                                                 "
},
{
  "id": "SS_setproofs-25-4",
  "level": "2",
  "url": "settheory.html#SS_setproofs-25-4",
  "type": "Exercise",
  "number": "5.2.3.4",
  "title": "",
  "body": " Let , , and .    Find , , and . Which of these sets are equal?    Find , , and . Which of these sets are equal?    Find and . Are these sets equal?    "
},
{
  "id": "SS_setproofs-25-5",
  "level": "2",
  "url": "settheory.html#SS_setproofs-25-5",
  "type": "Exercise",
  "number": "5.2.3.5",
  "title": "",
  "body": "Determine if the following statements are true or false. Give a justification for you answer.    The number 0 is in .                   "
},
{
  "id": "SS_setproofs-25-6",
  "level": "2",
  "url": "settheory.html#SS_setproofs-25-6",
  "type": "Exercise",
  "number": "5.2.3.6",
  "title": "",
  "body": " Let (the interval ) for all nonnegative integers .    Find .    Find .     Find .    Find .    Find .    Find .    "
},
{
  "id": "SS_setproofs-25-7",
  "level": "2",
  "url": "settheory.html#SS_setproofs-25-7",
  "type": "Exercise",
  "number": "5.2.3.7",
  "title": "",
  "body": " Let and . Find     .     .     .     .    "
},
{
  "id": "ER_subsettrans",
  "level": "2",
  "url": "settheory.html#ER_subsettrans",
  "type": "Exercise",
  "number": "5.2.3.8",
  "title": "",
  "body": "Prove if and then . "
},
{
  "id": "SS_setproofs-25-9",
  "level": "2",
  "url": "settheory.html#SS_setproofs-25-9",
  "type": "Exercise",
  "number": "5.2.3.9",
  "title": "",
  "body": "Prove if and then . "
},
{
  "id": "SS_setproofs-25-10",
  "level": "2",
  "url": "settheory.html#SS_setproofs-25-10",
  "type": "Exercise",
  "number": "5.2.3.10",
  "title": "",
  "body": "Prove if and then . "
},
{
  "id": "SS_setproofs-25-11",
  "level": "2",
  "url": "settheory.html#SS_setproofs-25-11",
  "type": "Exercise",
  "number": "5.2.3.11",
  "title": "",
  "body": "Prove . Give an example of two sets and such that . "
},
{
  "id": "SS_setproofs-25-12",
  "level": "2",
  "url": "settheory.html#SS_setproofs-25-12",
  "type": "Exercise",
  "number": "5.2.3.12",
  "title": "",
  "body": " Let and be subsets of the universal set . Prove if and only if .  "
},
{
  "id": "SS_setproofs-25-13",
  "level": "2",
  "url": "settheory.html#SS_setproofs-25-13",
  "type": "Exercise",
  "number": "5.2.3.13",
  "title": "",
  "body": "Prove if then . Is the converse true? If so prove it; if not give a counterexample. "
},
{
  "id": "SS_setproofs-25-14",
  "level": "2",
  "url": "settheory.html#SS_setproofs-25-14",
  "type": "Exercise",
  "number": "5.2.3.14",
  "title": "",
  "body": "Prove if then, for all sets , . Explain why in the case that is the universal set , this property can be stated more concisely as . "
},
{
  "id": "SS_setproofs-25-15",
  "level": "2",
  "url": "settheory.html#SS_setproofs-25-15",
  "type": "Exercise",
  "number": "5.2.3.15",
  "title": "",
  "body": " True or False? If the statement is true give a proof. If the statement is false give a counterexample.     .     .     .    "
},
{
  "id": "functions",
  "level": "1",
  "url": "functions.html",
  "type": "Section",
  "number": "5.3",
  "title": "Functions",
  "body": " Functions one-to-one function onto function function  Functions are familar mathematical objects from algebra and calculus.  A function function , , is a map in which each input is related to one and only one output.  We say is the domain domain and is the codomain codomain of .   Exploring the Definition of a Function   Let be a map as shown in the figure.       shows a map that is not a function since maps to two different outputs.  Let be a map as shown in the figure.       shows a map that is not a function since does not map to any output.  Let be a map as shown in the figure.       shows a map that is a function since each maps to exactly one .    For a given , is  the output of ,  the value of at ,  the image of under .  The image image or range range of a set under is the set of outputs of corresponding to inputs from :  In we defined sequences as lists. Now we can define them as functions. A sequence sequence is a function from to . For example, .  Addition as a Function  We may have functions involving Cartesian products of sets. This is common when we want to define algebraic operations. For example, we can define addition on the integers as the function given by .    Find .   What is the image of under ?   Find all ordered pairs that map to 0.      Multiplication as a Function Define by .   Find .  What is the image of under ?  Find all ordered pairs that map to 0.    Since a function needs to satisfy the property that each can only map to one , we say a function is well-defined well-defined function if whenever , we have . Most of the functions you've seen in calculus are clearly well-defined since when , . This property is really only interesting when elements of have multiple representations. In other words, when two equal elements in have different forms. The most familiar set where this happens is . For example, .  A Map That is Not Well-Defined  Let be given by .  Then in , but and . Thus, but .  Therefore is not well-defined, and hence, is not a function.  Showing a Map is Not Well-Defined Let be given by . Show is NOT well-defined by finding two equivalent fractions in that map to two different integers.  Now we will look at specific properties of functions. We will learn how to prove a function is one-to-one and\/or onto its codomain. These properies are important as they are the exact properties we need in order for a function to have an inverse function.  A function, , is one-to-one one-to-one function function one-to-one or injective if for all , if then .   Equivalently, is one-to-one if implies . We note, this is just the contrapositive of the definition.  Although it is easier to prove a function is one-to-one using the definition, the contrapositive can be helpful for deciding if a function is one-to-one.   Proving and Disproving One-to-One one-to-one proof  To prove is one-to-one:  Assume  Show   To prove is NOT one-to-one:  Find a counterexample.  In particular, find with and .    Note that a one-to-one proof is really a proof of uniqueness. We are proving there is a unique input for each output.  Not One-to-One   A function which is not one-to-one.     The function given in in not one-to-one since and both map to the same value in .   Proving One-to-One Let be given by . Prove is one-to-one.   Assume . Then which is what we wanted to show.    Disproving One-to-One Let be given by . Disprove is one-to-one.  We need a counterexample with and . Let .  Then and . So , but .   A function, , is onto  onto function function onto or surjective if for all there exists such that .   Although we need the definition for onto to be able to write a proof, the concept of onto is easier to understand without the definition. Basically, we need every to get mapped to by some . We can also think about onto in terms of sets. A function is onto if is the range or image of .   Proving and Disproving Onto onto proof  To prove is onto :  Let be a general element of . You should not be using any information about the function at this point.  Find such that . Finding may involve scratchwork.  In your proof, state , show , and show .   To prove is NOT onto :  Find a counterexample.  In particular, find such that no will map to .    An onto proof is really an existence proof: state your candidate , show satifies the required properties. In particular we show and .  Not Onto   A function which is not onto      The function given in in not onto since 2 is not mapped to by any value in .   Proving Onto Let be given by . Prove is onto .   Let .  [Scratchwork: we want to find so that . So we want , or .]  Let . Then since . Furthermore, which is what we wanted to show.    Disproving Onto Let be given by . Prove is NOT onto .  Let .  We saw in the previous example . But is not necessarily in . So for our counterexample, let . Then we would need .  Hence, no element in will map to . Therefore, is not onto .   Prove or Disprove Onto Let be given by . Prove or disprove is onto .  Let . Then if is onto , we could find with .  But if , then , or . We know there are no real solutions to this equation. Hence no element in will map to . Therefore, is not onto .   Multiplication in the Reals Define by .  Prove or disprove is one-to-one.  Prove or disprove is onto .  Multiplication in the Integers Define by .  Prove or disprove is one-to-one.  Prove or disprove is onto .  Remainders Define by where is the remainder when is divided by 3.  Prove or disprove is one-to-one.  Prove or disprove is onto .  Subtraction Define by .  Prove or disprove is one-to-one.  Prove or disprove is onto .   A function is a one-to-one correspondence one-to-one correspondence or bijection bijection bijection one-to-one correspondence if is one-to-one and onto .  We showed in the above examples that given by is one-to-one and onto . Thus, it is an example of a bijection.  If is a bijection, then there exists a function such that   If it exists, we say is the inverse inverse function of .  Inverse Function  Since given by is one-to-one and onto, it has an inverse. We can find the inverse as we did in calculus.  Let , solve for .  We get . Thus .   If is one-to-one and onto , then is one-to-one and onto .  Show is one-to-one: assume . Then for some . Thus, and . Since is a function, .  Show is onto . Let . Then there exists such that since is a function from . Now, . Therefore, there exists such that .   Bijections Which of the functions from the activities, , , and are bijections? If a function is a bijection, find its inverse function. Is the inverse one-to-one and onto?      Let and .    Define by specifying that .  Is one-to-one? Is onto? Explain your answers.    Define by specifying that .  Is one-to-one? Is onto? Explain your answers.      Let , and .    Define a function that is one-to-one but not onto.    Define a function that is onto but not one-to-one.    Define a function that is neither one-to-one nor onto.    Define a function that is one-to-one and onto, but is not the identity function (does not send every element to itself).      Let be a function from the integers to the even integers given by .    Prove is one-to-one.    Prove is onto.      Define by .    Prove or disprove is one-to-one.    Prove or disprove is onto .      Define by .    Prove or disprove is one-to-one.    Prove or disprove is onto .      Let . Define by Prove is one-to-one but not onto.    Define by   the number of elements in .    Prove or disprove is one-to-one.    Prove or disprove is onto .      Let be given by .    Prove or disprove is one-to-one.    Prove or disprove is onto.  Note: this map is called a projection .    Let be given by .    Prove or disprove is one-to-one.    Prove or disprove is onto.  Note: this map is called an embedding .    Define by   .    Prove or disprove is one-to-one.    Prove or disprove is onto .      Define by   .    Prove or disprove is one-to-one.    Prove or disprove is onto .      Let be given by .    Prove or disprove is one-to-one.    Prove or disprove is onto.      "
},
{
  "id": "D_function",
  "level": "2",
  "url": "functions.html#D_function",
  "type": "Definition",
  "number": "5.3.1",
  "title": "",
  "body": "A function function , , is a map in which each input is related to one and only one output.  We say is the domain domain and is the codomain codomain of .  "
},
{
  "id": "E_notfunctionimages",
  "level": "2",
  "url": "functions.html#E_notfunctionimages",
  "type": "Example",
  "number": "5.3.2",
  "title": "Exploring the Definition of a Function.",
  "body": "Exploring the Definition of a Function   Let be a map as shown in the figure.       shows a map that is not a function since maps to two different outputs.  Let be a map as shown in the figure.       shows a map that is not a function since does not map to any output.  Let be a map as shown in the figure.       shows a map that is a function since each maps to exactly one .   "
},
{
  "id": "functions-8",
  "level": "2",
  "url": "functions.html#functions-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "output value image "
},
{
  "id": "D_image",
  "level": "2",
  "url": "functions.html#D_image",
  "type": "Definition",
  "number": "5.3.6",
  "title": "",
  "body": "The image image or range range of a set under is the set of outputs of corresponding to inputs from : "
},
{
  "id": "functions-10",
  "level": "2",
  "url": "functions.html#functions-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sequence "
},
{
  "id": "E_addasfn",
  "level": "2",
  "url": "functions.html#E_addasfn",
  "type": "Example",
  "number": "5.3.7",
  "title": "Addition as a Function.",
  "body": "Addition as a Function  We may have functions involving Cartesian products of sets. This is common when we want to define algebraic operations. For example, we can define addition on the integers as the function given by .    Find .   What is the image of under ?   Find all ordered pairs that map to 0.     "
},
{
  "id": "A_fnsubtraction",
  "level": "2",
  "url": "functions.html#A_fnsubtraction",
  "type": "Activity",
  "number": "5.3.1",
  "title": "Multiplication as a Function.",
  "body": "Multiplication as a Function Define by .   Find .  What is the image of under ?  Find all ordered pairs that map to 0.  "
},
{
  "id": "functions-13",
  "level": "2",
  "url": "functions.html#functions-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "well-defined "
},
{
  "id": "E_welldefined",
  "level": "2",
  "url": "functions.html#E_welldefined",
  "type": "Example",
  "number": "5.3.8",
  "title": "A Map That is Not Well-Defined.",
  "body": "A Map That is Not Well-Defined  Let be given by .  Then in , but and . Thus, but .  Therefore is not well-defined, and hence, is not a function. "
},
{
  "id": "A_notwelldefined",
  "level": "2",
  "url": "functions.html#A_notwelldefined",
  "type": "Activity",
  "number": "5.3.2",
  "title": "Showing a Map is Not Well-Defined.",
  "body": "Showing a Map is Not Well-Defined Let be given by . Show is NOT well-defined by finding two equivalent fractions in that map to two different integers. "
},
{
  "id": "D_onetoone",
  "level": "2",
  "url": "functions.html#D_onetoone",
  "type": "Definition",
  "number": "5.3.9",
  "title": "",
  "body": "A function, , is one-to-one one-to-one function function one-to-one or injective if for all , if then .  "
},
{
  "id": "E_arrownotonetoone",
  "level": "2",
  "url": "functions.html#E_arrownotonetoone",
  "type": "Example",
  "number": "5.3.10",
  "title": "Not One-to-One.",
  "body": "Not One-to-One   A function which is not one-to-one.     The function given in in not one-to-one since and both map to the same value in .  "
},
{
  "id": "E_pfonetoone",
  "level": "2",
  "url": "functions.html#E_pfonetoone",
  "type": "Example",
  "number": "5.3.12",
  "title": "Proving One-to-One.",
  "body": "Proving One-to-One Let be given by . Prove is one-to-one.   Assume . Then which is what we wanted to show.   "
},
{
  "id": "E_ceonetoone",
  "level": "2",
  "url": "functions.html#E_ceonetoone",
  "type": "Example",
  "number": "5.3.13",
  "title": "Disproving One-to-One.",
  "body": "Disproving One-to-One Let be given by . Disprove is one-to-one.  We need a counterexample with and . Let .  Then and . So , but .  "
},
{
  "id": "D_onto",
  "level": "2",
  "url": "functions.html#D_onto",
  "type": "Definition",
  "number": "5.3.14",
  "title": "",
  "body": "A function, , is onto  onto function function onto or surjective if for all there exists such that .  "
},
{
  "id": "E_arrownotonto",
  "level": "2",
  "url": "functions.html#E_arrownotonto",
  "type": "Example",
  "number": "5.3.15",
  "title": "Not Onto.",
  "body": "Not Onto   A function which is not onto      The function given in in not onto since 2 is not mapped to by any value in .  "
},
{
  "id": "E_pfonto",
  "level": "2",
  "url": "functions.html#E_pfonto",
  "type": "Example",
  "number": "5.3.17",
  "title": "Proving Onto.",
  "body": "Proving Onto Let be given by . Prove is onto .   Let .  [Scratchwork: we want to find so that . So we want , or .]  Let . Then since . Furthermore, which is what we wanted to show.   "
},
{
  "id": "E_dispfonto",
  "level": "2",
  "url": "functions.html#E_dispfonto",
  "type": "Example",
  "number": "5.3.18",
  "title": "Disproving Onto.",
  "body": "Disproving Onto Let be given by . Prove is NOT onto .  Let .  We saw in the previous example . But is not necessarily in . So for our counterexample, let . Then we would need .  Hence, no element in will map to . Therefore, is not onto .  "
},
{
  "id": "E_pfprdispfonto",
  "level": "2",
  "url": "functions.html#E_pfprdispfonto",
  "type": "Example",
  "number": "5.3.19",
  "title": "Prove or Disprove Onto.",
  "body": "Prove or Disprove Onto Let be given by . Prove or disprove is onto .  Let . Then if is onto , we could find with .  But if , then , or . We know there are no real solutions to this equation. Hence no element in will map to . Therefore, is not onto .  "
},
{
  "id": "A_real5x",
  "level": "2",
  "url": "functions.html#A_real5x",
  "type": "Activity",
  "number": "5.3.3",
  "title": "Multiplication in the Reals.",
  "body": "Multiplication in the Reals Define by .  Prove or disprove is one-to-one.  Prove or disprove is onto . "
},
{
  "id": "A_int5n",
  "level": "2",
  "url": "functions.html#A_int5n",
  "type": "Activity",
  "number": "5.3.4",
  "title": "Multiplication in the Integers.",
  "body": "Multiplication in the Integers Define by .  Prove or disprove is one-to-one.  Prove or disprove is onto . "
},
{
  "id": "A_rmod3",
  "level": "2",
  "url": "functions.html#A_rmod3",
  "type": "Activity",
  "number": "5.3.5",
  "title": "Remainders.",
  "body": "Remainders Define by where is the remainder when is divided by 3.  Prove or disprove is one-to-one.  Prove or disprove is onto . "
},
{
  "id": "A_aminusb",
  "level": "2",
  "url": "functions.html#A_aminusb",
  "type": "Activity",
  "number": "5.3.6",
  "title": "Subtraction.",
  "body": "Subtraction Define by .  Prove or disprove is one-to-one.  Prove or disprove is onto . "
},
{
  "id": "D_ontotoonecorrespondence",
  "level": "2",
  "url": "functions.html#D_ontotoonecorrespondence",
  "type": "Definition",
  "number": "5.3.20",
  "title": "",
  "body": "A function is a one-to-one correspondence one-to-one correspondence or bijection bijection bijection one-to-one correspondence if is one-to-one and onto . "
},
{
  "id": "T_inverse",
  "level": "2",
  "url": "functions.html#T_inverse",
  "type": "Theorem",
  "number": "5.3.21",
  "title": "",
  "body": "If is a bijection, then there exists a function such that  "
},
{
  "id": "functions-40",
  "level": "2",
  "url": "functions.html#functions-40",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse "
},
{
  "id": "E_inverse",
  "level": "2",
  "url": "functions.html#E_inverse",
  "type": "Example",
  "number": "5.3.22",
  "title": "Inverse Function.",
  "body": "Inverse Function  Since given by is one-to-one and onto, it has an inverse. We can find the inverse as we did in calculus.  Let , solve for .  We get . Thus .  "
},
{
  "id": "T_inverseonetooneonto",
  "level": "2",
  "url": "functions.html#T_inverseonetooneonto",
  "type": "Theorem",
  "number": "5.3.23",
  "title": "",
  "body": "If is one-to-one and onto , then is one-to-one and onto . "
},
{
  "id": "functions-43",
  "level": "2",
  "url": "functions.html#functions-43",
  "type": "Proof",
  "number": "5.3.1",
  "title": "",
  "body": "Show is one-to-one: assume . Then for some . Thus, and . Since is a function, .  Show is onto . Let . Then there exists such that since is a function from . Now, . Therefore, there exists such that .  "
},
{
  "id": "A_whichbijection",
  "level": "2",
  "url": "functions.html#A_whichbijection",
  "type": "Activity",
  "number": "5.3.7",
  "title": "Bijections.",
  "body": "Bijections Which of the functions from the activities, , , and are bijections? If a function is a bijection, find its inverse function. Is the inverse one-to-one and onto? "
},
{
  "id": "functions-45-1",
  "level": "2",
  "url": "functions.html#functions-45-1",
  "type": "Exercise",
  "number": "5.3.1",
  "title": "",
  "body": " Let and .    Define by specifying that .  Is one-to-one? Is onto? Explain your answers.    Define by specifying that .  Is one-to-one? Is onto? Explain your answers.    "
},
{
  "id": "functions-45-2",
  "level": "2",
  "url": "functions.html#functions-45-2",
  "type": "Exercise",
  "number": "5.3.2",
  "title": "",
  "body": " Let , and .    Define a function that is one-to-one but not onto.    Define a function that is onto but not one-to-one.    Define a function that is neither one-to-one nor onto.    Define a function that is one-to-one and onto, but is not the identity function (does not send every element to itself).    "
},
{
  "id": "functions-45-3",
  "level": "2",
  "url": "functions.html#functions-45-3",
  "type": "Exercise",
  "number": "5.3.3",
  "title": "",
  "body": " Let be a function from the integers to the even integers given by .    Prove is one-to-one.    Prove is onto.    "
},
{
  "id": "functions-45-4",
  "level": "2",
  "url": "functions.html#functions-45-4",
  "type": "Exercise",
  "number": "5.3.4",
  "title": "",
  "body": " Define by .    Prove or disprove is one-to-one.    Prove or disprove is onto .    "
},
{
  "id": "functions-45-5",
  "level": "2",
  "url": "functions.html#functions-45-5",
  "type": "Exercise",
  "number": "5.3.5",
  "title": "",
  "body": " Define by .    Prove or disprove is one-to-one.    Prove or disprove is onto .    "
},
{
  "id": "functions-45-6",
  "level": "2",
  "url": "functions.html#functions-45-6",
  "type": "Exercise",
  "number": "5.3.6",
  "title": "",
  "body": " Let . Define by Prove is one-to-one but not onto.  "
},
{
  "id": "functions-45-7",
  "level": "2",
  "url": "functions.html#functions-45-7",
  "type": "Exercise",
  "number": "5.3.7",
  "title": "",
  "body": " Define by   the number of elements in .    Prove or disprove is one-to-one.    Prove or disprove is onto .    "
},
{
  "id": "functions-45-8",
  "level": "2",
  "url": "functions.html#functions-45-8",
  "type": "Exercise",
  "number": "5.3.8",
  "title": "",
  "body": " Let be given by .    Prove or disprove is one-to-one.    Prove or disprove is onto.  Note: this map is called a projection .  "
},
{
  "id": "functions-45-9",
  "level": "2",
  "url": "functions.html#functions-45-9",
  "type": "Exercise",
  "number": "5.3.9",
  "title": "",
  "body": " Let be given by .    Prove or disprove is one-to-one.    Prove or disprove is onto.  Note: this map is called an embedding .  "
},
{
  "id": "functions-45-10",
  "level": "2",
  "url": "functions.html#functions-45-10",
  "type": "Exercise",
  "number": "5.3.10",
  "title": "",
  "body": " Define by   .    Prove or disprove is one-to-one.    Prove or disprove is onto .    "
},
{
  "id": "functions-45-11",
  "level": "2",
  "url": "functions.html#functions-45-11",
  "type": "Exercise",
  "number": "5.3.11",
  "title": "",
  "body": " Define by   .    Prove or disprove is one-to-one.    Prove or disprove is onto .    "
},
{
  "id": "functions-45-12",
  "level": "2",
  "url": "functions.html#functions-45-12",
  "type": "Exercise",
  "number": "5.3.12",
  "title": "",
  "body": " Let be given by .    Prove or disprove is one-to-one.    Prove or disprove is onto.    "
},
{
  "id": "relations",
  "level": "1",
  "url": "relations.html",
  "type": "Section",
  "number": "5.4",
  "title": "Equivalence Relations",
  "body": " Equivalence Relations relation equivalence relation equivalence class  In many area of mathematics we care about how mathematical objects relate to each other. In we used function to relate elements of two sets. In this section we define the more general concept of a relation between sets. We also look as several properties.  Introduction to Relations  A relation relation , , on , is a set of ordered pairs in .   Simply put, a relation, is just a subset of .  We say if and only if is related to . Notationally, we can either use the set or the symbol to describe the relation. When using , we read this as is related to .  Relation Defined by a Set  Let , define the relation on by Then , for example. But 3 is not related to 1, for example.   Relation Defined by Less Than  We can also define relations with familiar mathematical relationships.  Let , define the relation on by  Find the set of ordered pairs for .     A function is a relation. Let . Then define by   We can see that is not a function since an element of can map to two different elements of : .  A Function as a Relation  Let be given by . Let be the relation given by :  True or false: .  True  True or false: .  True  True or false: .  False  True or false: .  True  True or false: .  False  True or false: .  False   To determine if a relation is a function, we check the properties from the definition of a function, :  For every there must be a related to .  Each can only be related in one .   We can translate this idea into the ordered pair notation:  For every there must be a such that .  If and then .    A Difference Relation Let and . Define the relation from to by  Find the set of ordered pairs given by this relation.   Is the relation a function?  A relation on relation on a set is a relation on . We also call it a relation from to .   Divisibility by 3 Let . Define the relation on by  Find the set of ordered pairs given by this relation.   Is the relation a function?  The Divides Relation Let . Define the relation on by  Find the set of ordered pairs given by this relation.   Is the relation a function?   Equivalence Relations  We look at some properties of relations. In particular, we define the reflexive, symmetric, and transitive properties. We will look at how to prove whether a relation is reflexive, symmetric, and\/or transitive. We then use these properties to define equivalence relations.  Let be a relation on . Then  is reflexive reflexive if for all , . In ordered pair notation, .  is symmetric symmetric if for all , if then . In ordered pair notation, if then .  is transitive transitive if for all , if and then . In ordered pair notation, if and then .   relation properties   Reflexive, Symmetric, Transitive  Let , define the relation on by  is reflexive since for each .  is symmetric since if then . Note, this property does not mean , just that if a pair is in , then the reverse is as well.  is transitive since if and then . Note, this property can be tedious to check by hand. In this example, though, the only pairs that fit the hypothesis are pairs like , so , which is in .   Another Look at the Properties  Let , define the relation on by  is not reflexive since .  is not symmetric since , but not .  is transitive since if and then .  Check: , so , which is in . This is the only set of ordered pairs where the second coordinate matches the first.   Pratice with the Properties on a Finite Relation Let . Let .  Determine if is reflexive.  Determine if is symmetric.  Determine if is transitive.    More Practice with a Finite Relation Let . Let .  Determine if is reflexive.  Determine if is symmetric.  Determine if is transitive.    Checking that a relation is reflexive, symmetric, or transitive on a small finite set can be done by checking that the property holds for all the elements of . But if is infinite we need to prove the properties more generally.   Proving Reflexive, Symmetric, and Transitive Properties  To prove  Reflexive Let . Show .  Symmetric Assume . Show .  Transitive Assume . Show .   To disprove a property, find a specific counterexample.  Reflexive Find for some .  Symmetric Find with .  Transitive Find with .    Proving Refexive, Symmetric, Transitive  Let be the relation on given by .  Reflexive: Show . Now , and . So we get that . Thus for all .  Symmetric: Assume . Then . This implies for some . But then , where . Thus, . Hence, .  Transitive: Assume . Then and . This implies for some and for some . But then , where . Thus, . Hence, .   The Equals Relation Define the relation on by .  Prove or disprove is reflexive.  Prove or disprove is symmetric.  Prove or disprove is transitive.   The Less Than Relation Define the relation on by .  Prove or disprove is reflexive.  Prove or disprove is symmetric.  Prove or disprove is transitive.   A relation that is reflexive, symmetric and transitive is an equivalence relation equivalence relation .   In we proved that the relation given by is an equivalence relation since we proved it is reflexive, symmetric, and transitive.  In fact, the proof can easily be adapted to show is an equivalence relation for .  This is an important enough relation that it has its own notation.   Let . Then and are congruent modulo congruent mod if . We denote congruence mod by is congruent to mod .  We often just say is congruent to mod .  Congruence mod  True or false: .  Since , true.  True or false: .  Since , true.  True or false: .  Since , false.  True or false: .  Since , false.   Let be an equivalence relation on . Let . The set is the equivalence class equivalence class of . the equivalence class of  Given a specific , we find the equivalence class of by finding all the elements that are related to . Keep in mind the equivalence class is a set, denoted .  Equivalence Classes  Consider the equivalence relation , on .  Find , the set of elements in equivalent to 0.   Find , the set of elements in equivalent to 1.   Find , the set of elements in equivalent to 2.   Find , the set of elements in equivalent to 3.   Find , the set of elements in equivalent to -1.     We can notice a few things from this last example. We can see that some of our equivalence classes are the same. In particular, and . In fact, there are only three distinct equivalence classes, , any other equivalence class will equal one of these.  A few other things to notice, distinct equivalence classes are disjoint--they have no elements in common. Also, contains . Furthermore, the equivalence classes  partition the integers.  A set of subsets of a set , , is a partition partition of if  ,  whenever .    What this really says is that a set of subsets will be a partition of if the union of the subsets is all of , and the subsets are pairwise disjoint.  Partition  Let . Then let . We can see that is a partition of since and the subsets have no elements in common, hence they are disjoint.  Now if we let . We can see that is not a partition of since .   More Equivalence Classes  Let be the number of elements in .  Consider the equivalence relation , on .  This is the relation where two subsets of are related if they have the same number of elements. You can check that this is an equivalence relation.  Find , the set of elements in equivalent to .  , since this is the only subset with 0 elements.  Find .  , since these all have 1 element.  Find .   Find .      Once again, the distinct equivalence classes are disjoint--they have no elements in common. Furthermore, the equivalence classes partition the power set by size of the subset.  An Absolute Value Relation Define the relation on by .  Prove is an equivalence relation.  Find and .  Equivalence Mod 5 Recall that .  Prove the relation is an equivalence relation on .  Find and .  A Partition Relation Let . Let .  Check the conditions in to show is a partition of .  Define the relation on ,  and are in the same subset of the partition. Is ? Is Is  Show is reflexive, symmetric and transitive.  Find , the equivalence class of 1.  Do you think this particular partition matters? Could we define this relation on any partition of any set and still have it be reflexive, symmetric and transitive?  There is an important connection between equivalence classes and partitions, as we see in the next two theorems.  Let be a set and an equivalence relation. The equivalence classes of form a partition of .  Conversely, as we saw in , if we have a partition of and define the relation and are in the same subset , then is an equivalence relation. We call this the equivalence relation induced by the partition.  Let be a set and be a partition of . Let be the relation induced by the partition. Then is an equivalence relation.  We leave the details of the proof of as an exercise.  The proof of follows directly from the next two Lemmas.  Let be an equivalence relation on and . If then .   Since we want to show the sets are equal, we will show are subsets of each other.  Show . Let . Then by defintion of equivalence class, . We assumed . By the transitive property, . Thus, .  Show . Let . Then by defintion of equivalence class, . We assumed . By the symmetric property, . By the transitive property, . Thus, .   really says that if two elements are related in an equivalence relation, they the must have the same equivalence class. You can check this with the above examples. Note, we needed the symmetric and transitive properties to prove this lemma.  Let be an equivalence relation on and . Either or .  Before proving the lemma, note that we are trying to prove an or statement. A common technique is to assume one part is false and show the other part is true. This technique comes from the logical equivalence .  Assume . We want to show . Since , there exists . This means and . By the symmetric property, . By the transitive property, since and , we have . By , .   really say that two equivalence classes are either disjoint or exactly the same.  follows since, by the reflexive property, means every element is in an equivalence class. Thus, the union of the equivalence classes is all of . By distinct equivalence classes are disjoint. Thus, we have a partition of .     Define the congruence modulo 3 relation, , on by       Is ? Is ? Is ? Is ?    List five integers such that .    List five integers such that .    List five integers such that .       Define the relation, , on by       Is ?    Is ?    Is ?    Is ?       Let and and let be the divides relation. That is, for all , Find the set of ordered pairs in .     Let be the relation on defined by     Determine if is reflexive. Justify your answer.    Determine if is symmetric. Justify your answer.    Determine if is transitive. Justify your answer.      Let be the relation on defined by     Determine if is reflexive. Justify your answer.    Determine if is symmetric. Justify your answer.    Determine if is transitive. Justify your answer.      Let be the relation on defined by     Determine if is reflexive. Justify your answer.    Determine if is symmetric. Justify your answer.    Determine if is transitive. Justify your answer.      Define the relation on by     Prove or disprove is reflexive.    Prove or disprove is symmetric.    Prove or disprove is transitive.      Let and be the power set of . Define the relation on by     Prove or disprove is reflexive.    Prove or disprove is symmetric.    Prove or disprove is transitive.      Let be a nonempty set and be the power set of . Define the subset relation on by     Prove or disprove is reflexive.    Prove or disprove is symmetric.    Prove or disprove is transitive.       "
},
{
  "id": "D_relation",
  "level": "2",
  "url": "relations.html#D_relation",
  "type": "Definition",
  "number": "5.4.1",
  "title": "",
  "body": "A relation relation , , on , is a set of ordered pairs in .  "
},
{
  "id": "E_relationsasset",
  "level": "2",
  "url": "relations.html#E_relationsasset",
  "type": "Example",
  "number": "5.4.2",
  "title": "Relation Defined by a Set.",
  "body": "Relation Defined by a Set  Let , define the relation on by Then , for example. But 3 is not related to 1, for example.  "
},
{
  "id": "E_lessthan",
  "level": "2",
  "url": "relations.html#E_lessthan",
  "type": "Example",
  "number": "5.4.3",
  "title": "Relation Defined by Less Than.",
  "body": "Relation Defined by Less Than  We can also define relations with familiar mathematical relationships.  Let , define the relation on by  Find the set of ordered pairs for .   "
},
{
  "id": "E_fnasrelation",
  "level": "2",
  "url": "relations.html#E_fnasrelation",
  "type": "Example",
  "number": "5.4.4",
  "title": "A Function as a Relation.",
  "body": "A Function as a Relation  Let be given by . Let be the relation given by :  True or false: .  True  True or false: .  True  True or false: .  False  True or false: .  True  True or false: .  False  True or false: .  False  "
},
{
  "id": "A_reldiff",
  "level": "2",
  "url": "relations.html#A_reldiff",
  "type": "Activity",
  "number": "5.4.1",
  "title": "A Difference Relation.",
  "body": "A Difference Relation Let and . Define the relation from to by  Find the set of ordered pairs given by this relation.   Is the relation a function? "
},
{
  "id": "D_relonA",
  "level": "2",
  "url": "relations.html#D_relonA",
  "type": "Definition",
  "number": "5.4.5",
  "title": "",
  "body": "A relation on relation on a set is a relation on . We also call it a relation from to . "
},
{
  "id": "A_div3rel",
  "level": "2",
  "url": "relations.html#A_div3rel",
  "type": "Activity",
  "number": "5.4.2",
  "title": "Divisibility by 3.",
  "body": "Divisibility by 3 Let . Define the relation on by  Find the set of ordered pairs given by this relation.   Is the relation a function? "
},
{
  "id": "A_dividesrel",
  "level": "2",
  "url": "relations.html#A_dividesrel",
  "type": "Activity",
  "number": "5.4.3",
  "title": "The Divides Relation.",
  "body": "The Divides Relation Let . Define the relation on by  Find the set of ordered pairs given by this relation.   Is the relation a function? "
},
{
  "id": "D_RSTprop",
  "level": "2",
  "url": "relations.html#D_RSTprop",
  "type": "Definition",
  "number": "5.4.6",
  "title": "",
  "body": "Let be a relation on . Then  is reflexive reflexive if for all , . In ordered pair notation, .  is symmetric symmetric if for all , if then . In ordered pair notation, if then .  is transitive transitive if for all , if and then . In ordered pair notation, if and then .   relation properties  "
},
{
  "id": "E_propofsets",
  "level": "2",
  "url": "relations.html#E_propofsets",
  "type": "Example",
  "number": "5.4.7",
  "title": "Reflexive, Symmetric, Transitive.",
  "body": "Reflexive, Symmetric, Transitive  Let , define the relation on by  is reflexive since for each .  is symmetric since if then . Note, this property does not mean , just that if a pair is in , then the reverse is as well.  is transitive since if and then . Note, this property can be tedious to check by hand. In this example, though, the only pairs that fit the hypothesis are pairs like , so , which is in .  "
},
{
  "id": "E_propofsets2",
  "level": "2",
  "url": "relations.html#E_propofsets2",
  "type": "Example",
  "number": "5.4.8",
  "title": "Another Look at the Properties.",
  "body": "Another Look at the Properties  Let , define the relation on by  is not reflexive since .  is not symmetric since , but not .  is transitive since if and then .  Check: , so , which is in . This is the only set of ordered pairs where the second coordinate matches the first.  "
},
{
  "id": "A_proponaset",
  "level": "2",
  "url": "relations.html#A_proponaset",
  "type": "Activity",
  "number": "5.4.4",
  "title": "Pratice with the Properties on a Finite Relation.",
  "body": "Pratice with the Properties on a Finite Relation Let . Let .  Determine if is reflexive.  Determine if is symmetric.  Determine if is transitive.   "
},
{
  "id": "A_proponaset2",
  "level": "2",
  "url": "relations.html#A_proponaset2",
  "type": "Activity",
  "number": "5.4.5",
  "title": "More Practice with a Finite Relation.",
  "body": "More Practice with a Finite Relation Let . Let .  Determine if is reflexive.  Determine if is symmetric.  Determine if is transitive.   "
},
{
  "id": "E_provingRST",
  "level": "2",
  "url": "relations.html#E_provingRST",
  "type": "Example",
  "number": "5.4.9",
  "title": "Proving Refexive, Symmetric, Transitive.",
  "body": "Proving Refexive, Symmetric, Transitive  Let be the relation on given by .  Reflexive: Show . Now , and . So we get that . Thus for all .  Symmetric: Assume . Then . This implies for some . But then , where . Thus, . Hence, .  Transitive: Assume . Then and . This implies for some and for some . But then , where . Thus, . Hence, .  "
},
{
  "id": "A_equalsrel",
  "level": "2",
  "url": "relations.html#A_equalsrel",
  "type": "Activity",
  "number": "5.4.6",
  "title": "The Equals Relation.",
  "body": "The Equals Relation Define the relation on by .  Prove or disprove is reflexive.  Prove or disprove is symmetric.  Prove or disprove is transitive.  "
},
{
  "id": "A_lessthanrel",
  "level": "2",
  "url": "relations.html#A_lessthanrel",
  "type": "Activity",
  "number": "5.4.7",
  "title": "The Less Than Relation.",
  "body": "The Less Than Relation Define the relation on by .  Prove or disprove is reflexive.  Prove or disprove is symmetric.  Prove or disprove is transitive.  "
},
{
  "id": "D_equivrel",
  "level": "2",
  "url": "relations.html#D_equivrel",
  "type": "Definition",
  "number": "5.4.10",
  "title": "",
  "body": "A relation that is reflexive, symmetric and transitive is an equivalence relation equivalence relation .  "
},
{
  "id": "D_mod",
  "level": "2",
  "url": "relations.html#D_mod",
  "type": "Definition",
  "number": "5.4.11",
  "title": "",
  "body": "Let . Then and are congruent modulo congruent mod if . We denote congruence mod by is congruent to mod . "
},
{
  "id": "E_mod",
  "level": "2",
  "url": "relations.html#E_mod",
  "type": "Example",
  "number": "5.4.12",
  "title": "Congruence mod <span class=\"process-math\">\\(d\\)<\/span>.",
  "body": "Congruence mod  True or false: .  Since , true.  True or false: .  Since , true.  True or false: .  Since , false.  True or false: .  Since , false.  "
},
{
  "id": "SS_equivrelations-20",
  "level": "2",
  "url": "relations.html#SS_equivrelations-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalence class "
},
{
  "id": "E_equivclasses",
  "level": "2",
  "url": "relations.html#E_equivclasses",
  "type": "Example",
  "number": "5.4.13",
  "title": "Equivalence Classes.",
  "body": "Equivalence Classes  Consider the equivalence relation , on .  Find , the set of elements in equivalent to 0.   Find , the set of elements in equivalent to 1.   Find , the set of elements in equivalent to 2.   Find , the set of elements in equivalent to 3.   Find , the set of elements in equivalent to -1.    "
},
{
  "id": "SS_equivrelations-24",
  "level": "2",
  "url": "relations.html#SS_equivrelations-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partition "
},
{
  "id": "D_partition",
  "level": "2",
  "url": "relations.html#D_partition",
  "type": "Definition",
  "number": "5.4.14",
  "title": "",
  "body": "A set of subsets of a set , , is a partition partition of if  ,  whenever .   "
},
{
  "id": "E_partition",
  "level": "2",
  "url": "relations.html#E_partition",
  "type": "Example",
  "number": "5.4.15",
  "title": "Partition.",
  "body": "Partition  Let . Then let . We can see that is a partition of since and the subsets have no elements in common, hence they are disjoint.  Now if we let . We can see that is not a partition of since .  "
},
{
  "id": "E_equivclasses2",
  "level": "2",
  "url": "relations.html#E_equivclasses2",
  "type": "Example",
  "number": "5.4.16",
  "title": "More Equivalence Classes.",
  "body": "More Equivalence Classes  Let be the number of elements in .  Consider the equivalence relation , on .  This is the relation where two subsets of are related if they have the same number of elements. You can check that this is an equivalence relation.  Find , the set of elements in equivalent to .  , since this is the only subset with 0 elements.  Find .  , since these all have 1 element.  Find .   Find .     "
},
{
  "id": "A_absvaluerel",
  "level": "2",
  "url": "relations.html#A_absvaluerel",
  "type": "Activity",
  "number": "5.4.8",
  "title": "An Absolute Value Relation.",
  "body": "An Absolute Value Relation Define the relation on by .  Prove is an equivalence relation.  Find and . "
},
{
  "id": "A_mod5rel",
  "level": "2",
  "url": "relations.html#A_mod5rel",
  "type": "Activity",
  "number": "5.4.9",
  "title": "Equivalence Mod 5.",
  "body": "Equivalence Mod 5 Recall that .  Prove the relation is an equivalence relation on .  Find and . "
},
{
  "id": "A_partasequivrel",
  "level": "2",
  "url": "relations.html#A_partasequivrel",
  "type": "Activity",
  "number": "5.4.10",
  "title": "A Partition Relation.",
  "body": "A Partition Relation Let . Let .  Check the conditions in to show is a partition of .  Define the relation on ,  and are in the same subset of the partition. Is ? Is Is  Show is reflexive, symmetric and transitive.  Find , the equivalence class of 1.  Do you think this particular partition matters? Could we define this relation on any partition of any set and still have it be reflexive, symmetric and transitive? "
},
{
  "id": "T_equivclassespartition",
  "level": "2",
  "url": "relations.html#T_equivclassespartition",
  "type": "Theorem",
  "number": "5.4.17",
  "title": "",
  "body": "Let be a set and an equivalence relation. The equivalence classes of form a partition of . "
},
{
  "id": "SS_equivrelations-35",
  "level": "2",
  "url": "relations.html#SS_equivrelations-35",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induced "
},
{
  "id": "T_partitionequivrelation",
  "level": "2",
  "url": "relations.html#T_partitionequivrelation",
  "type": "Theorem",
  "number": "5.4.18",
  "title": "",
  "body": "Let be a set and be a partition of . Let be the relation induced by the partition. Then is an equivalence relation. "
},
{
  "id": "L_aRbsameclass",
  "level": "2",
  "url": "relations.html#L_aRbsameclass",
  "type": "Lemma",
  "number": "5.4.19",
  "title": "",
  "body": "Let be an equivalence relation on and . If then . "
},
{
  "id": "SS_equivrelations-40",
  "level": "2",
  "url": "relations.html#SS_equivrelations-40",
  "type": "Proof",
  "number": "5.4.2.1",
  "title": "",
  "body": " Since we want to show the sets are equal, we will show are subsets of each other.  Show . Let . Then by defintion of equivalence class, . We assumed . By the transitive property, . Thus, .  Show . Let . Then by defintion of equivalence class, . We assumed . By the symmetric property, . By the transitive property, . Thus, .  "
},
{
  "id": "L_classdisjoint",
  "level": "2",
  "url": "relations.html#L_classdisjoint",
  "type": "Lemma",
  "number": "5.4.20",
  "title": "",
  "body": "Let be an equivalence relation on and . Either or . "
},
{
  "id": "SS_equivrelations-44",
  "level": "2",
  "url": "relations.html#SS_equivrelations-44",
  "type": "Proof",
  "number": "5.4.2.2",
  "title": "",
  "body": "Assume . We want to show . Since , there exists . This means and . By the symmetric property, . By the transitive property, since and , we have . By , .  "
},
{
  "id": "SS_equivrelations-47-1",
  "level": "2",
  "url": "relations.html#SS_equivrelations-47-1",
  "type": "Exercise",
  "number": "5.4.2.1",
  "title": "",
  "body": " Define the congruence modulo 3 relation, , on by       Is ? Is ? Is ? Is ?    List five integers such that .    List five integers such that .    List five integers such that .    "
},
{
  "id": "SS_equivrelations-47-2",
  "level": "2",
  "url": "relations.html#SS_equivrelations-47-2",
  "type": "Exercise",
  "number": "5.4.2.2",
  "title": "",
  "body": " Define the relation, , on by       Is ?    Is ?    Is ?    Is ?    "
},
{
  "id": "SS_equivrelations-47-3",
  "level": "2",
  "url": "relations.html#SS_equivrelations-47-3",
  "type": "Exercise",
  "number": "5.4.2.3",
  "title": "",
  "body": " Let and and let be the divides relation. That is, for all , Find the set of ordered pairs in .  "
},
{
  "id": "SS_equivrelations-47-4",
  "level": "2",
  "url": "relations.html#SS_equivrelations-47-4",
  "type": "Exercise",
  "number": "5.4.2.4",
  "title": "",
  "body": " Let be the relation on defined by     Determine if is reflexive. Justify your answer.    Determine if is symmetric. Justify your answer.    Determine if is transitive. Justify your answer.    "
},
{
  "id": "SS_equivrelations-47-5",
  "level": "2",
  "url": "relations.html#SS_equivrelations-47-5",
  "type": "Exercise",
  "number": "5.4.2.5",
  "title": "",
  "body": " Let be the relation on defined by     Determine if is reflexive. Justify your answer.    Determine if is symmetric. Justify your answer.    Determine if is transitive. Justify your answer.    "
},
{
  "id": "SS_equivrelations-47-6",
  "level": "2",
  "url": "relations.html#SS_equivrelations-47-6",
  "type": "Exercise",
  "number": "5.4.2.6",
  "title": "",
  "body": " Let be the relation on defined by     Determine if is reflexive. Justify your answer.    Determine if is symmetric. Justify your answer.    Determine if is transitive. Justify your answer.    "
},
{
  "id": "SS_equivrelations-47-7",
  "level": "2",
  "url": "relations.html#SS_equivrelations-47-7",
  "type": "Exercise",
  "number": "5.4.2.7",
  "title": "",
  "body": " Define the relation on by     Prove or disprove is reflexive.    Prove or disprove is symmetric.    Prove or disprove is transitive.    "
},
{
  "id": "SS_equivrelations-47-8",
  "level": "2",
  "url": "relations.html#SS_equivrelations-47-8",
  "type": "Exercise",
  "number": "5.4.2.8",
  "title": "",
  "body": " Let and be the power set of . Define the relation on by     Prove or disprove is reflexive.    Prove or disprove is symmetric.    Prove or disprove is transitive.    "
},
{
  "id": "SS_equivrelations-47-9",
  "level": "2",
  "url": "relations.html#SS_equivrelations-47-9",
  "type": "Exercise",
  "number": "5.4.2.9",
  "title": "",
  "body": " Let be a nonempty set and be the power set of . Define the subset relation on by     Prove or disprove is reflexive.    Prove or disprove is symmetric.    Prove or disprove is transitive.    "
},
{
  "id": "orders",
  "level": "1",
  "url": "orders.html",
  "type": "Section",
  "number": "5.5",
  "title": "Ordered Sets",
  "body": " Ordered Sets partially ordered set totally ordered set partial order total order  In this section we look at an additional property of a relation. In particular, we define the antisymmetric property. We will then look at how a relation can be used to define ways to order elements of a set.  We will still need the properies from .  Let be a relation on . Then  is reflexive reflexive if for all , . In ordered pair notation, .  is symmetric symmetric if for all , if then . In ordered pair notation, if then .  is transitive transitive if for all , if and then . In ordered pair notation, if and then .     We add a new property to the list, the antisymmetric property.  Let be a relation on . Then is antisymmetric antisymmetric if for all , if and , then . In ordered pair notation, if and , then .   It is important to note, that antisymmetric is not the negation of symmetric. It is possible for a relation to be both symmetric and antisymmetric (thought this happens only in a special case). It is also possible for a relation to be neither symmetric nor antisymmetric.  Symmetric and Antisymmetric  Let , define the relation on by  is symmetric since if then .  is antisymmetric since if and then . This is straightforward to check since the only ordered pairs in the relation have .   It is often more useful to use the contrapositive form of the definition of antisymmetric:   is antisymmetric antisymmetric if for all , if , then or .  Another Look at Antisymmetric  Let , define the relation on by  is antisymmetric since for each , is not in . Since it is never the case that both and are in , the if part of the definition is always false, meaning, the conditional is always true.  By using the contrapositive form it is easier to check that for each pair with , .   Practice with Antisymmetric For each of the following relations, determine if it is antisymmetric.  Let and .  Let and .   Checking that a relation is antisymmetric on a small finite set can be done by checking that the property holds for all the elements of . But if is infinite we need to prove the properties more generally. We include a reminder of the other properties as well.   Proving Properties of Relations relations properties proof  To prove  Reflexive Let . Show .  Symmetric Assume . Show .  Antisymmetric Assume and . Show .  Transitive Assume . Show .   To disprove a property, find a specific counterexample.  Reflexive Find for some .  Symmetric Find with .  Antisymmetric Find and with .  Transitive Find with .    Proving Antisymmetric  Let be the relation on given by . Prove is antisymmtric.  Assume and . Then and . This implies for some and for some . Thus, , and then . But since , . Hence, .  We leave it as an exercise to show is reflexive and transitive, but not symmetric.    The Less Than or Equal Relation Define the relation on by . Prove or disprove is antisymmetric.   We've seen examples of relations that are functions and that are equivalence relations. We introduce another type of relation, that of an ordered set. Equivalence relations arise in mathematics as a way to equate element in a set, whereas orders give us a way to compare the size of elements in a set.  poset partially ordered set partial order A relation on a set is a partial order if it is reflexive, antisymmetric, and transitive. We will generally use the notation instead of : if and only if .  Furthermore, we call the set with partial order a partially ordered set , or poset .  The set with relation divides given in is a partially ordered set.  Subset Order Let be a set and be the set of all subsets of . Let be the relation given by if and only if . Then is a partial order.  Reflexive: For every subset , .  Antisymmetric: If and then , by defintion of set equality.  Transitive: If and then , which is an exercise, .   Greater Than or Equal  Show that the relation given by if and only if is a partial order on .  total order totally ordered set A partially ordered set, , with order is a totally ordered set if for all , either or .  We say that is a total order on .  The idea behind a total order is that every element in the set is comparable. So if we take any two elements, one must be less than the other. This, along with the transitive property allows us to order every element in the set, from smallest to largest.  Total Order on the Reals The less than or equal to order from is a total order on . Given any two real numbers, , either or . This property is what allows us to form the real number line.  Subset is Not a Total Order The subset order from is generally not a total order on . For example, let . Then for the sets and , and . Thus neither nor is smaller than the other and they cannot be ordered relative to each other with the subset order. Similarly, if , and . Once again, we cannot order these sets by .  The following Theorem is useful when working with orders.  A set with order is a totally ordered set totally ordered set if and only if exactly one of the following is true:  ,  ,  .     Again Subset is Not a Total Order If we check the conditions of , we can see again that the subset order from is generally not a total order on . Let . Then for the sets and , , , and . Similarly, if , , and .    Let Define if .    Prove or disprove is a partial order on .    Prove or disprove is a total order on .      Define if and .    Prove or disprove is a partial order on .    Prove or disprove is a total order on .      Define if and if then .    Prove or disprove is a partial order on .    Prove or disprove is a total order on .    Note, this is often called the lexicographic or dictionary order.    Define if .    Prove or disprove is a partial order on .    Prove or disprove is a total order on .     Let be a partially ordered set with order . Then is a greatest element of if for all . Prove if has a greatest element, , then is unique. Since the problem assumes existence, you just need to do a uniqueness proof. Start by assuming has two greatest elements.   "
},
{
  "id": "D_RSTprop2",
  "level": "2",
  "url": "orders.html#D_RSTprop2",
  "type": "Definition",
  "number": "5.5.1",
  "title": "",
  "body": "Let be a relation on . Then  is reflexive reflexive if for all , . In ordered pair notation, .  is symmetric symmetric if for all , if then . In ordered pair notation, if then .  is transitive transitive if for all , if and then . In ordered pair notation, if and then .    "
},
{
  "id": "orders-9",
  "level": "2",
  "url": "orders.html#orders-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "antisymmetric "
},
{
  "id": "D_ASprop",
  "level": "2",
  "url": "orders.html#D_ASprop",
  "type": "Definition",
  "number": "5.5.2",
  "title": "",
  "body": "Let be a relation on . Then is antisymmetric antisymmetric if for all , if and , then . In ordered pair notation, if and , then .  "
},
{
  "id": "E_symantisym",
  "level": "2",
  "url": "orders.html#E_symantisym",
  "type": "Example",
  "number": "5.5.3",
  "title": "Symmetric and Antisymmetric.",
  "body": "Symmetric and Antisymmetric  Let , define the relation on by  is symmetric since if then .  is antisymmetric since if and then . This is straightforward to check since the only ordered pairs in the relation have .  "
},
{
  "id": "orders-14",
  "level": "2",
  "url": "orders.html#orders-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "antisymmetric "
},
{
  "id": "E_antisymmtric",
  "level": "2",
  "url": "orders.html#E_antisymmtric",
  "type": "Example",
  "number": "5.5.4",
  "title": "Another Look at Antisymmetric.",
  "body": "Another Look at Antisymmetric  Let , define the relation on by  is antisymmetric since for each , is not in . Since it is never the case that both and are in , the if part of the definition is always false, meaning, the conditional is always true.  By using the contrapositive form it is easier to check that for each pair with , .  "
},
{
  "id": "A_practiceasymm",
  "level": "2",
  "url": "orders.html#A_practiceasymm",
  "type": "Activity",
  "number": "5.5.1",
  "title": "Practice with Antisymmetric.",
  "body": "Practice with Antisymmetric For each of the following relations, determine if it is antisymmetric.  Let and .  Let and .  "
},
{
  "id": "E_provingAS",
  "level": "2",
  "url": "orders.html#E_provingAS",
  "type": "Example",
  "number": "5.5.5",
  "title": "Proving Antisymmetric.",
  "body": "Proving Antisymmetric  Let be the relation on given by . Prove is antisymmtric.  Assume and . Then and . This implies for some and for some . Thus, , and then . But since , . Hence, .  We leave it as an exercise to show is reflexive and transitive, but not symmetric.  "
},
{
  "id": "A_proveleqAS",
  "level": "2",
  "url": "orders.html#A_proveleqAS",
  "type": "Activity",
  "number": "5.5.2",
  "title": "The Less Than or Equal Relation.",
  "body": "The Less Than or Equal Relation Define the relation on by . Prove or disprove is antisymmetric.  "
},
{
  "id": "D_poset",
  "level": "2",
  "url": "orders.html#D_poset",
  "type": "Definition",
  "number": "5.5.6",
  "title": "",
  "body": "poset partially ordered set partial order A relation on a set is a partial order if it is reflexive, antisymmetric, and transitive. We will generally use the notation instead of : if and only if .  Furthermore, we call the set with partial order a partially ordered set , or poset . "
},
{
  "id": "E_subsetorder",
  "level": "2",
  "url": "orders.html#E_subsetorder",
  "type": "Example",
  "number": "5.5.7",
  "title": "Subset Order.",
  "body": "Subset Order Let be a set and be the set of all subsets of . Let be the relation given by if and only if . Then is a partial order.  Reflexive: For every subset , .  Antisymmetric: If and then , by defintion of set equality.  Transitive: If and then , which is an exercise, .  "
},
{
  "id": "A_realgeq",
  "level": "2",
  "url": "orders.html#A_realgeq",
  "type": "Activity",
  "number": "5.5.3",
  "title": "Greater Than or Equal.",
  "body": "Greater Than or Equal  Show that the relation given by if and only if is a partial order on . "
},
{
  "id": "D_totalorder",
  "level": "2",
  "url": "orders.html#D_totalorder",
  "type": "Definition",
  "number": "5.5.8",
  "title": "",
  "body": "total order totally ordered set A partially ordered set, , with order is a totally ordered set if for all , either or .  We say that is a total order on . "
},
{
  "id": "E_totalorder",
  "level": "2",
  "url": "orders.html#E_totalorder",
  "type": "Example",
  "number": "5.5.9",
  "title": "Total Order on the Reals.",
  "body": "Total Order on the Reals The less than or equal to order from is a total order on . Given any two real numbers, , either or . This property is what allows us to form the real number line. "
},
{
  "id": "E_nottotalorder",
  "level": "2",
  "url": "orders.html#E_nottotalorder",
  "type": "Example",
  "number": "5.5.10",
  "title": "Subset is Not a Total Order.",
  "body": "Subset is Not a Total Order The subset order from is generally not a total order on . For example, let . Then for the sets and , and . Thus neither nor is smaller than the other and they cannot be ordered relative to each other with the subset order. Similarly, if , and . Once again, we cannot order these sets by . "
},
{
  "id": "T_totalorder",
  "level": "2",
  "url": "orders.html#T_totalorder",
  "type": "Theorem",
  "number": "5.5.11",
  "title": "",
  "body": "A set with order is a totally ordered set totally ordered set if and only if exactly one of the following is true:  ,  ,  .    "
},
{
  "id": "E_againnottotalorder",
  "level": "2",
  "url": "orders.html#E_againnottotalorder",
  "type": "Example",
  "number": "5.5.12",
  "title": "Again Subset is Not a Total Order.",
  "body": "Again Subset is Not a Total Order If we check the conditions of , we can see again that the subset order from is generally not a total order on . Let . Then for the sets and , , , and . Similarly, if , , and . "
},
{
  "id": "orders-33-1",
  "level": "2",
  "url": "orders.html#orders-33-1",
  "type": "Exercise",
  "number": "5.5.1",
  "title": "",
  "body": " Let Define if .    Prove or disprove is a partial order on .    Prove or disprove is a total order on .    "
},
{
  "id": "orders-33-2",
  "level": "2",
  "url": "orders.html#orders-33-2",
  "type": "Exercise",
  "number": "5.5.2",
  "title": "",
  "body": " Define if and .    Prove or disprove is a partial order on .    Prove or disprove is a total order on .    "
},
{
  "id": "orders-33-3",
  "level": "2",
  "url": "orders.html#orders-33-3",
  "type": "Exercise",
  "number": "5.5.3",
  "title": "",
  "body": " Define if and if then .    Prove or disprove is a partial order on .    Prove or disprove is a total order on .    Note, this is often called the lexicographic or dictionary order.  "
},
{
  "id": "orders-33-4",
  "level": "2",
  "url": "orders.html#orders-33-4",
  "type": "Exercise",
  "number": "5.5.4",
  "title": "",
  "body": " Define if .    Prove or disprove is a partial order on .    Prove or disprove is a total order on .    "
},
{
  "id": "orders-33-5",
  "level": "2",
  "url": "orders.html#orders-33-5",
  "type": "Exercise",
  "number": "5.5.5",
  "title": "",
  "body": "Let be a partially ordered set with order . Then is a greatest element of if for all . Prove if has a greatest element, , then is unique. Since the problem assumes existence, you just need to do a uniqueness proof. Start by assuming has two greatest elements. "
},
{
  "id": "binomial9",
  "level": "1",
  "url": "binomial9.html",
  "type": "Section",
  "number": "6.1",
  "title": "Binomial Theorem",
  "body": " Binomial Theorem Binomial Theorem  The Binomial Theorem has applications in many areas of mathematics, from calculus, to number theory, to probability. In this section we look at the connection between Pascal's triangle and binomial coefficients. We ultimately prove the Binomial Theorem using induction.  Let be nonnegative integers with . An -combination combination of a set of elements is the number of subsets of size that can be chosen from a set of elements. We will use the notation . choose ; binomial coefficient  Other common notations are or .  For reasons we will see later in this section, are also called binomial coefficients binomial coefficient .  We can calculate combinations or binomial coefficients using the formula .  Using the definition that , we can see that and .  Calculating a Combination  Calculate , the number of subsets of size 4 chosen from a set of 5 elements.  Using the formula,   This means there are 5 different subsets with 4 elements of any set with 5 elements.   Calculating Binomial Coefficients Calculate the following binomial coefficients.  Calculate .  Calculate .  Calculate .  Calculate .   Let be nonnegative integers with . Then  The proof of is left as an exercise.  Pascal's Formula Pascal's Formula Let be nonnegative integers with . Then  Proof of Pascal's Formula Give an algebraic proof for Pascal's Formula: Start with the right-hand side. Use the definition of choose, then find a common denominator. Note, you will save yourself a lot of work if you find the least common denominator.  There is a connection between binomial coefficients and Pascal's triangle.  You may have seen Pascal's triangle before, the start of which is  1  1 1  1 2 1  1 3 3 1   We get the numbers in each row by adding the two numbers above. If there is only one number, you just get 1. For example, the fourth row is 1, 3, 3, 1, since . The next row would be 1, 4, 6, 4, 1.  If we think about the first row as actually being the 0th row, we can make a triangle with the binomial coefficients:       If you calculate the binomial coefficients, you will see that you get the same values as Pascal's triangle. Furthermore, Pascal's formula, , is just the rule we use to get the triangle: add the and terms from the row to get the term in the row.  Why do we call a binomial coefficient? First, a binomial binomial is an expression of the form . We will see that the Binomial Theorem gives a formula for calculating . The coefficients in this formula are the binomial coefficients.  A Counting Argument for  Suppose we want to expand (or multiply) . We can think of the multiplication in this way:  there is 1 way to get : choose 0 's from the three factors.  there are 3 ways to get : choose 1 from the three factors.  there are 3 ways to get : choose 2 's' from the three factors.  there is 1 way to get : choose 3 's from the three factors.  This give us    can be generalized to in the Binomial Theorem.  Binomial Theorem Binomial Theorem Let be a nonnegative integer, then  We can generalize the counting argument from to prove the Binomial Theorem. This is the type of proof you would encounter in a course which emphasizes counting techniques. However, we can also prove the Binomial Theorem using induction, which is more appropriate for this course.  Prove by induction on .  Base step: Let . Then . Also,  Induction step: Assume .  Show   Now we want to change the index of the second sum. This is just a substitution of variable that allows us to shift how we index the terms. If we were to write out the sum, rather than have it in summation notation, we would not need this step. But it allows us to easily combine like terms in the two summations. So, in the second sum, let , so when ; when , and . We get   Understanding the Binomial Theorem Show the Binomial Theorem holds for and .  Expressing a Sum in Closed Form  Express the sum, , in closed form.  We think of writing out the sum as expanding, so the closed form means the power of a binomial.  For problems such as this, we need to identify and as in the Binomial Theorem.  We can see that . Since there does not appear to be any term for , we can let . Thus, the closed form is .  An Expanded Form Use the Binomial Theorem to find . In this expression, what are ?  Powers of 2 Prove . Use that .     Give an algebraic proof for the formula: for integers and with .      Use Pascal’s triangle to compute the values of and     Use the result of part (a) and Pascal’s Formula to compute , , and .    Complete the row of Pascal’s triangle that corresponds to .      The row of Pascal’s triangle that corresponds to is   What is the row that corresponds to ?    Use the Binomial Theorem to expand .    Use the Binomial Theorem to expand .    Find the coefficient of in .    Find the coefficient of in .    Express in closed form (without the summation symbol and without ellipses,…).    Express in closed form (without the summation symbol and without ellipses,…).    Use Pascal’s Formula to prove by mathematical induction that if is an integer and , then    Use the Binomial Theorem to prove for all integers ,  Use the fact that .   Use the Binomial Theorem to prove for all integers ,     "
},
{
  "id": "D_combination",
  "level": "2",
  "url": "binomial9.html#D_combination",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": "Let be nonnegative integers with . An -combination combination of a set of elements is the number of subsets of size that can be chosen from a set of elements. We will use the notation . choose ; binomial coefficient "
},
{
  "id": "binomial9-6",
  "level": "2",
  "url": "binomial9.html#binomial9-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binomial coefficients "
},
{
  "id": "E_calcbinom",
  "level": "2",
  "url": "binomial9.html#E_calcbinom",
  "type": "Example",
  "number": "6.1.2",
  "title": "Calculating a Combination.",
  "body": "Calculating a Combination  Calculate , the number of subsets of size 4 chosen from a set of 5 elements.  Using the formula,   This means there are 5 different subsets with 4 elements of any set with 5 elements.  "
},
{
  "id": "A_calcbinomial",
  "level": "2",
  "url": "binomial9.html#A_calcbinomial",
  "type": "Activity",
  "number": "6.1.1",
  "title": "Calculating Binomial Coefficients.",
  "body": "Calculating Binomial Coefficients Calculate the following binomial coefficients.  Calculate .  Calculate .  Calculate .  Calculate .  "
},
{
  "id": "T_requalsnminusr",
  "level": "2",
  "url": "binomial9.html#T_requalsnminusr",
  "type": "Theorem",
  "number": "6.1.3",
  "title": "",
  "body": "Let be nonnegative integers with . Then "
},
{
  "id": "T_pascalsformula",
  "level": "2",
  "url": "binomial9.html#T_pascalsformula",
  "type": "Theorem",
  "number": "6.1.4",
  "title": "Pascal’s Formula.",
  "body": "Pascal's Formula Pascal's Formula Let be nonnegative integers with . Then "
},
{
  "id": "A_pascalalg",
  "level": "2",
  "url": "binomial9.html#A_pascalalg",
  "type": "Activity",
  "number": "6.1.2",
  "title": "Proof of Pascal’s Formula.",
  "body": "Proof of Pascal's Formula Give an algebraic proof for Pascal's Formula: Start with the right-hand side. Use the definition of choose, then find a common denominator. Note, you will save yourself a lot of work if you find the least common denominator. "
},
{
  "id": "binomial9-20",
  "level": "2",
  "url": "binomial9.html#binomial9-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binomial "
},
{
  "id": "E_combbinomialthm",
  "level": "2",
  "url": "binomial9.html#E_combbinomialthm",
  "type": "Example",
  "number": "6.1.5",
  "title": "A Counting Argument for <span class=\"process-math\">\\((a+b)^3\\)<\/span>.",
  "body": "A Counting Argument for  Suppose we want to expand (or multiply) . We can think of the multiplication in this way:  there is 1 way to get : choose 0 's from the three factors.  there are 3 ways to get : choose 1 from the three factors.  there are 3 ways to get : choose 2 's' from the three factors.  there is 1 way to get : choose 3 's from the three factors.  This give us   "
},
{
  "id": "T_binomial",
  "level": "2",
  "url": "binomial9.html#T_binomial",
  "type": "Theorem",
  "number": "6.1.6",
  "title": "Binomial Theorem.",
  "body": "Binomial Theorem Binomial Theorem Let be a nonnegative integer, then "
},
{
  "id": "binomial9-25",
  "level": "2",
  "url": "binomial9.html#binomial9-25",
  "type": "Proof",
  "number": "6.1.1",
  "title": "",
  "body": "Prove by induction on .  Base step: Let . Then . Also,  Induction step: Assume .  Show   Now we want to change the index of the second sum. This is just a substitution of variable that allows us to shift how we index the terms. If we were to write out the sum, rather than have it in summation notation, we would not need this step. But it allows us to easily combine like terms in the two summations. So, in the second sum, let , so when ; when , and . We get  "
},
{
  "id": "A_binomthmcalc",
  "level": "2",
  "url": "binomial9.html#A_binomthmcalc",
  "type": "Activity",
  "number": "6.1.3",
  "title": "Understanding the Binomial Theorem.",
  "body": "Understanding the Binomial Theorem Show the Binomial Theorem holds for and . "
},
{
  "id": "E_closedform",
  "level": "2",
  "url": "binomial9.html#E_closedform",
  "type": "Example",
  "number": "6.1.7",
  "title": "Expressing a Sum in Closed Form.",
  "body": "Expressing a Sum in Closed Form  Express the sum, , in closed form.  We think of writing out the sum as expanding, so the closed form means the power of a binomial.  For problems such as this, we need to identify and as in the Binomial Theorem.  We can see that . Since there does not appear to be any term for , we can let . Thus, the closed form is . "
},
{
  "id": "A_closedformbt",
  "level": "2",
  "url": "binomial9.html#A_closedformbt",
  "type": "Activity",
  "number": "6.1.4",
  "title": "An Expanded Form.",
  "body": "An Expanded Form Use the Binomial Theorem to find . In this expression, what are ? "
},
{
  "id": "A_powers2bt",
  "level": "2",
  "url": "binomial9.html#A_powers2bt",
  "type": "Activity",
  "number": "6.1.5",
  "title": "Powers of 2.",
  "body": "Powers of 2 Prove . Use that . "
},
{
  "id": "binomial9-30-1",
  "level": "2",
  "url": "binomial9.html#binomial9-30-1",
  "type": "Exercise",
  "number": "6.1.1",
  "title": "",
  "body": " Give an algebraic proof for the formula: for integers and with .  "
},
{
  "id": "binomial9-30-2",
  "level": "2",
  "url": "binomial9.html#binomial9-30-2",
  "type": "Exercise",
  "number": "6.1.2",
  "title": "",
  "body": "   Use Pascal’s triangle to compute the values of and     Use the result of part (a) and Pascal’s Formula to compute , , and .    Complete the row of Pascal’s triangle that corresponds to .    "
},
{
  "id": "binomial9-30-3",
  "level": "2",
  "url": "binomial9.html#binomial9-30-3",
  "type": "Exercise",
  "number": "6.1.3",
  "title": "",
  "body": " The row of Pascal’s triangle that corresponds to is   What is the row that corresponds to ?  "
},
{
  "id": "binomial9-30-4",
  "level": "2",
  "url": "binomial9.html#binomial9-30-4",
  "type": "Exercise",
  "number": "6.1.4",
  "title": "",
  "body": " Use the Binomial Theorem to expand .  "
},
{
  "id": "binomial9-30-5",
  "level": "2",
  "url": "binomial9.html#binomial9-30-5",
  "type": "Exercise",
  "number": "6.1.5",
  "title": "",
  "body": " Use the Binomial Theorem to expand .  "
},
{
  "id": "binomial9-30-6",
  "level": "2",
  "url": "binomial9.html#binomial9-30-6",
  "type": "Exercise",
  "number": "6.1.6",
  "title": "",
  "body": " Find the coefficient of in .  "
},
{
  "id": "binomial9-30-7",
  "level": "2",
  "url": "binomial9.html#binomial9-30-7",
  "type": "Exercise",
  "number": "6.1.7",
  "title": "",
  "body": " Find the coefficient of in .  "
},
{
  "id": "binomial9-30-8",
  "level": "2",
  "url": "binomial9.html#binomial9-30-8",
  "type": "Exercise",
  "number": "6.1.8",
  "title": "",
  "body": " Express in closed form (without the summation symbol and without ellipses,…).  "
},
{
  "id": "binomial9-30-9",
  "level": "2",
  "url": "binomial9.html#binomial9-30-9",
  "type": "Exercise",
  "number": "6.1.9",
  "title": "",
  "body": " Express in closed form (without the summation symbol and without ellipses,…).  "
},
{
  "id": "binomial9-30-10",
  "level": "2",
  "url": "binomial9.html#binomial9-30-10",
  "type": "Exercise",
  "number": "6.1.10",
  "title": "",
  "body": " Use Pascal’s Formula to prove by mathematical induction that if is an integer and , then   "
},
{
  "id": "binomial9-30-11",
  "level": "2",
  "url": "binomial9.html#binomial9-30-11",
  "type": "Exercise",
  "number": "6.1.11",
  "title": "",
  "body": "Use the Binomial Theorem to prove for all integers ,  Use the fact that . "
},
{
  "id": "binomial9-30-12",
  "level": "2",
  "url": "binomial9.html#binomial9-30-12",
  "type": "Exercise",
  "number": "6.1.12",
  "title": "",
  "body": " Use the Binomial Theorem to prove for all integers ,   "
},
{
  "id": "cardinality",
  "level": "1",
  "url": "cardinality.html",
  "type": "Section",
  "number": "6.2",
  "title": "Cardinality",
  "body": " Cardinality cardinality  In this section we will explore what it means for a set to be infinite and whether infinite sets such as the integers, the rational numbers, and the real numbers have the same size .  First, start with finite sets. The size of a finite set is the number of elements in the set. It may seem simple to determine the size of a set by just counting the elements. But suppose I have a bag of candy and a class of students. I could decide if I have enough candy by just counting the pieces and the students and seeing if I have more candy or students. But suppose I have a lot of candy and a lot of students. It might be faster just to start passing out the candy to the students. If I run out of candy, I have more students; if I run out of students, I have more candy. We will use this idea of matching up objects in two sets to define the size of a set and to decide which set is bigger.  Two sets and have the same cardinality cardinality of a set if there is a one-to-one, onto map from to . We call a one-to-one, onto map a one-to-one correspondence one-to-one correspondence from to .  We will use cardinality of set to denote the cardinality if a set .  Finite Cardinality Let . Then . Let . Then .  Sets of a Given Cardinality Give a set for each of the following cardinalities: 5, 1, 0.  Two finite sets have the same cardinality if they have the same number of elements. But what about infinite sets?  Cardinality of the Even Integers Let be the set of even integers, . Consider the map given by . You can check that is one-to-one and onto . Thus, gives us a one-to-one correspondence between the integers and the even integers. Hence, they have the same cardinality.  Is surprising? On one hand, it may seem surprising since the even integers is a proper subset of the integers, so it may seem like there are more integers then even integers (maybe even twice as many!). On the other hand, both sets have infinitely many elements, so since they both have infinite size, it may seem reasonable that the two sets have the same size. The idea behind the definition of cardinality is that the map gives us a way to match up elements in the two sets. Since they can be matched up exactly, the two sets must have the same size, or cardinality.  A set is countably infinite countable infinite set if it has the same cardinailty as . A set is countable countable set if it is finite or countably infinite. Otherwise, a set is uncountable uncountable set .  For the sake of notational simplicity in this section, we will use for the set of natural numbers, , rather than . Thus, an infinite set is countable if it has the same cardinality as .  The Integers are Countable To show , we need to find a way to match each integer with a natural number. Although we may be able to find an explicit formula, we do not need to. We just need a clear process for demonstrating a way to pair integers with natural numbers so that every integer gets assigned to a natural number, and no integers are assigned to the same natural number. We can see that we can't just assign to , as we would never be able to assign the negative integers to a natural number. So we need to pick our correspondence more carefully. Consider the following listing of integers:  We can now assign each integer to its place in the list:   : 1 2 3 4 5 6 7 ...  : 0 1 -1 2 -2 3 -3 ...   Since there is a one-to-one correspondence between the natural numbers and the integers, , and is countable.   Consider sets , and the relation given by if an only if . In other words, we say two sets are related if they have the same cardinality. Then is an equivalence relation.  We leave it as an exercise to prove the cardinality relation is reflexive, symmetric, and transitive, and hence, and equivalence relation.  is important, as we can now use it directly to show the set of even integers, , is countable. Since , we have . Thus we can say is countable without needing to find a specific correspondence between and .  So what about the set of rational numbers, ? To show it is countable, we need to find a one-to-one correspondence with . As we saw in is that it is enough to find a way to list the rational numbers. However, one of the properties of the rational numbers that makes this challenging is that between any two rational numbers, , there is another rational number. We proved this in by showing the average, is between and . But since the average is also rational, there is another rational number between and , and so on. Thus, in fact, between any two rational numbers there are infinitely many rational numbers. So it would seem the rationals might be larger than .  The Positive Rational Numbers are Countable To show the rational numbers are countable, we need to rely on a clever way to list them. To simplify our proof, we first just show the positive rational numbers are countable. Recall a number is rational if it can be written as with . Since we just want positive rational numbers, we can assume . Now we make a table with columns for and rows for , and the corresponding fraction as entries.   ...  ...  ...  ...  ...  ... ... ... ... ... ...   We can see that the table contains every positive rational number, though many are repeated. For example, , etc. If we start trying to make our list of rational numbers by starting at and just moving along the row, we we never make it to row 2, since there are infinitely many elements in row 1. Similarly, if we start at and move down the column, we will never make it to column 2. So instead we are going to make a serpentine pattern through the table, as follows:  start in the upper left corner with ,  move right to ,  move diagonally down to ,  move down to ,  move diagonally up to , and then ,  repeat the process, moving right one, then diagonally down to the first column,  then move down one and then diagonally up to the first row.    The pattern can be seen in the following figure.   A listing for the positive rational numbers     As you trace through the diagonal pattern, you will see that you will be able to include every element of the table, eventually. Since we don't actually want to count repeated rational numbers, we could just skip any numbers that we have already included.  Since it is possible to list the elements in one-to-one correspondence with , the positive rational numbers are countable and .   Extending to All Rational Numbers Extend the argument used in to include all of the rational numbers. Can you adjust the table to include 0? Can you adjust it to include the negative rational numbers?  We have seen that , so maybe every infinite set really does have the same size. Are there any sets that are uncountable?  The interval of real numbers is uncountable.  Before proving the theorem, we will explore the main idea of the proof in the following activity.  Unlistable Elements To get an understanding of the construction used in the proof of , we will look at a very specific example.  Consider the following list of numbers: Now, construct a new number, , where we change the th digit after the decimal in the th number in the list and use the new number in the th position of . For example, the first digit in is a 1, so make that a new number, like 2. The second digit in is 0, make that a 2. Now . Give an example of by changing the th digit of each number in the list.  We need some better notation for our list and our new number . We will use a double subscript, where represents which number in the list and represents the decimal position. For example, from our above list What digit is ? How about  Now define our new number by if ; otherwise, . Find for the list in (a).  Make your own list of at least 6 decimals between 0 and 1, each with at least 6 decimal places and find the corresponding , using the rule in (c).  Explain why your must be different from every decimal on your list.   The key idea explored in is that if we create a list of decimals, then by changing the digit in the position, we will always get a decimal that is not on our list, as it will differ from each number on the list by at least one digit.  Finding  To clarify the process further, here is an example of finding for a specific list. Given a list of , find , using the rule  Find for the following list.          Note, the blue digits are the ones we are considering for . Since . Since . Since . Continuing in this way, we get . Clearly, differs from each decimal on the list.  One last idea before beginning the proof, make sure you understand that every real number in can be represented by a decimal of the form with infinitely many decimal places. This should be clear if the decimal is repeating or nonterminating, nonrepeating. If the decimal is terminating, we can just add infinitely many 0's. We also note that and (see for how to prove this).  Now that we have a way to write a list of numbers in as decimals, and we have a understanding of a way to construct a new number not on our list, we are ready to prove .   We will prove this by contradiction. Assume is countable. That means there is a one-to-one correspondence between and . We don't need to know what it is, just that it exists. Since there is a one-to-one correspondence, there is a way to list the elements of . First, note that every real number has a decimal representation, and since our elements are less than or equal to one, each real number can be represented by . Thus, we can write our list as    Since we assumed we had a listing of every real number in , every such decimal must be on our list.  Now define where We can see that for every , since it differs in the th decimal place. Thus is not on our list. This is a contradiction since we assumed we were able to include every real number in on our list. Hence, is not countable.   We finally have an infinite set that has a different cardinality from . Since is a subset of , that means is uncountable, too.   Prove the set of perfect squares, , has the same cardinaility as by finding a one-to-one correspondence from to .  Prove , that the cardinality relation is an equivalence relation.  Show that the intervals and have the same cardinality by finding a one-to-one correspondence between the sets. Can you find a line segment whose inputs are and outputs are ? Then show your line is one-to-one and onto.  Assume with and . Show that the intervals and have the same cardinality by finding a one-to-one correspondence between the sets. Can you find a line segment whose inputs are and outputs are ? Then show your line is one-to-one and onto.  Let and be countable sets. Prove is countable.  Determine if the following are true or false. Justify your answer.   A finite union of countable sets, , is countable.  A countable union of countable sets, , is countable.  The union of a countable set and an uncountable set in uncountable.  The set of irrational numbers is countable.  The set of prime numbers is countable.     "
},
{
  "id": "D_cardinality",
  "level": "2",
  "url": "cardinality.html#D_cardinality",
  "type": "Definition",
  "number": "6.2.1",
  "title": "",
  "body": "Two sets and have the same cardinality cardinality of a set if there is a one-to-one, onto map from to . We call a one-to-one, onto map a one-to-one correspondence one-to-one correspondence from to . "
},
{
  "id": "E_finitecard",
  "level": "2",
  "url": "cardinality.html#E_finitecard",
  "type": "Example",
  "number": "6.2.2",
  "title": "Finite Cardinality.",
  "body": "Finite Cardinality Let . Then . Let . Then . "
},
{
  "id": "A_setforcard",
  "level": "2",
  "url": "cardinality.html#A_setforcard",
  "type": "Activity",
  "number": "6.2.1",
  "title": "Sets of a Given Cardinality.",
  "body": "Sets of a Given Cardinality Give a set for each of the following cardinalities: 5, 1, 0. "
},
{
  "id": "E_intandevencard",
  "level": "2",
  "url": "cardinality.html#E_intandevencard",
  "type": "Example",
  "number": "6.2.3",
  "title": "Cardinality of the Even Integers.",
  "body": "Cardinality of the Even Integers Let be the set of even integers, . Consider the map given by . You can check that is one-to-one and onto . Thus, gives us a one-to-one correspondence between the integers and the even integers. Hence, they have the same cardinality. "
},
{
  "id": "D_countable",
  "level": "2",
  "url": "cardinality.html#D_countable",
  "type": "Definition",
  "number": "6.2.4",
  "title": "",
  "body": "A set is countably infinite countable infinite set if it has the same cardinailty as . A set is countable countable set if it is finite or countably infinite. Otherwise, a set is uncountable uncountable set . "
},
{
  "id": "E_Zcountable",
  "level": "2",
  "url": "cardinality.html#E_Zcountable",
  "type": "Example",
  "number": "6.2.5",
  "title": "The Integers are Countable.",
  "body": "The Integers are Countable To show , we need to find a way to match each integer with a natural number. Although we may be able to find an explicit formula, we do not need to. We just need a clear process for demonstrating a way to pair integers with natural numbers so that every integer gets assigned to a natural number, and no integers are assigned to the same natural number. We can see that we can't just assign to , as we would never be able to assign the negative integers to a natural number. So we need to pick our correspondence more carefully. Consider the following listing of integers:  We can now assign each integer to its place in the list:   : 1 2 3 4 5 6 7 ...  : 0 1 -1 2 -2 3 -3 ...   Since there is a one-to-one correspondence between the natural numbers and the integers, , and is countable.  "
},
{
  "id": "T_cardequivrel",
  "level": "2",
  "url": "cardinality.html#T_cardequivrel",
  "type": "Theorem",
  "number": "6.2.6",
  "title": "",
  "body": "Consider sets , and the relation given by if an only if . In other words, we say two sets are related if they have the same cardinality. Then is an equivalence relation. "
},
{
  "id": "E_Qcountable",
  "level": "2",
  "url": "cardinality.html#E_Qcountable",
  "type": "Example",
  "number": "6.2.7",
  "title": "The Positive Rational Numbers are Countable.",
  "body": "The Positive Rational Numbers are Countable To show the rational numbers are countable, we need to rely on a clever way to list them. To simplify our proof, we first just show the positive rational numbers are countable. Recall a number is rational if it can be written as with . Since we just want positive rational numbers, we can assume . Now we make a table with columns for and rows for , and the corresponding fraction as entries.   ...  ...  ...  ...  ...  ... ... ... ... ... ...   We can see that the table contains every positive rational number, though many are repeated. For example, , etc. If we start trying to make our list of rational numbers by starting at and just moving along the row, we we never make it to row 2, since there are infinitely many elements in row 1. Similarly, if we start at and move down the column, we will never make it to column 2. So instead we are going to make a serpentine pattern through the table, as follows:  start in the upper left corner with ,  move right to ,  move diagonally down to ,  move down to ,  move diagonally up to , and then ,  repeat the process, moving right one, then diagonally down to the first column,  then move down one and then diagonally up to the first row.    The pattern can be seen in the following figure.   A listing for the positive rational numbers     As you trace through the diagonal pattern, you will see that you will be able to include every element of the table, eventually. Since we don't actually want to count repeated rational numbers, we could just skip any numbers that we have already included.  Since it is possible to list the elements in one-to-one correspondence with , the positive rational numbers are countable and .  "
},
{
  "id": "A_allQcountable",
  "level": "2",
  "url": "cardinality.html#A_allQcountable",
  "type": "Activity",
  "number": "6.2.2",
  "title": "Extending to All Rational Numbers.",
  "body": "Extending to All Rational Numbers Extend the argument used in to include all of the rational numbers. Can you adjust the table to include 0? Can you adjust it to include the negative rational numbers? "
},
{
  "id": "T_realintervaluncount",
  "level": "2",
  "url": "cardinality.html#T_realintervaluncount",
  "type": "Theorem",
  "number": "6.2.9",
  "title": "",
  "body": "The interval of real numbers is uncountable. "
},
{
  "id": "A_unlistable",
  "level": "2",
  "url": "cardinality.html#A_unlistable",
  "type": "Activity",
  "number": "6.2.3",
  "title": "Unlistable Elements.",
  "body": "Unlistable Elements To get an understanding of the construction used in the proof of , we will look at a very specific example.  Consider the following list of numbers: Now, construct a new number, , where we change the th digit after the decimal in the th number in the list and use the new number in the th position of . For example, the first digit in is a 1, so make that a new number, like 2. The second digit in is 0, make that a 2. Now . Give an example of by changing the th digit of each number in the list.  We need some better notation for our list and our new number . We will use a double subscript, where represents which number in the list and represents the decimal position. For example, from our above list What digit is ? How about  Now define our new number by if ; otherwise, . Find for the list in (a).  Make your own list of at least 6 decimals between 0 and 1, each with at least 6 decimal places and find the corresponding , using the rule in (c).  Explain why your must be different from every decimal on your list.  "
},
{
  "id": "E_creatingd",
  "level": "2",
  "url": "cardinality.html#E_creatingd",
  "type": "Example",
  "number": "6.2.10",
  "title": "Finding <span class=\"process-math\">\\(d\\)<\/span>.",
  "body": "Finding  To clarify the process further, here is an example of finding for a specific list. Given a list of , find , using the rule  Find for the following list.          Note, the blue digits are the ones we are considering for . Since . Since . Since . Continuing in this way, we get . Clearly, differs from each decimal on the list. "
},
{
  "id": "cardinality-29",
  "level": "2",
  "url": "cardinality.html#cardinality-29",
  "type": "Proof",
  "number": "6.2.1",
  "title": "",
  "body": " We will prove this by contradiction. Assume is countable. That means there is a one-to-one correspondence between and . We don't need to know what it is, just that it exists. Since there is a one-to-one correspondence, there is a way to list the elements of . First, note that every real number has a decimal representation, and since our elements are less than or equal to one, each real number can be represented by . Thus, we can write our list as    Since we assumed we had a listing of every real number in , every such decimal must be on our list.  Now define where We can see that for every , since it differs in the th decimal place. Thus is not on our list. This is a contradiction since we assumed we were able to include every real number in on our list. Hence, is not countable.  "
},
{
  "id": "cardinality-31-1",
  "level": "2",
  "url": "cardinality.html#cardinality-31-1",
  "type": "Exercise",
  "number": "6.2.1",
  "title": "",
  "body": "Prove the set of perfect squares, , has the same cardinaility as by finding a one-to-one correspondence from to . "
},
{
  "id": "cardinality-31-2",
  "level": "2",
  "url": "cardinality.html#cardinality-31-2",
  "type": "Exercise",
  "number": "6.2.2",
  "title": "",
  "body": "Prove , that the cardinality relation is an equivalence relation. "
},
{
  "id": "cardinality-31-3",
  "level": "2",
  "url": "cardinality.html#cardinality-31-3",
  "type": "Exercise",
  "number": "6.2.3",
  "title": "",
  "body": "Show that the intervals and have the same cardinality by finding a one-to-one correspondence between the sets. Can you find a line segment whose inputs are and outputs are ? Then show your line is one-to-one and onto. "
},
{
  "id": "cardinality-31-4",
  "level": "2",
  "url": "cardinality.html#cardinality-31-4",
  "type": "Exercise",
  "number": "6.2.4",
  "title": "",
  "body": "Assume with and . Show that the intervals and have the same cardinality by finding a one-to-one correspondence between the sets. Can you find a line segment whose inputs are and outputs are ? Then show your line is one-to-one and onto. "
},
{
  "id": "cardinality-31-5",
  "level": "2",
  "url": "cardinality.html#cardinality-31-5",
  "type": "Exercise",
  "number": "6.2.5",
  "title": "",
  "body": "Let and be countable sets. Prove is countable. "
},
{
  "id": "cardinality-31-6",
  "level": "2",
  "url": "cardinality.html#cardinality-31-6",
  "type": "Exercise",
  "number": "6.2.6",
  "title": "",
  "body": "Determine if the following are true or false. Justify your answer.   A finite union of countable sets, , is countable.  A countable union of countable sets, , is countable.  The union of a countable set and an uncountable set in uncountable.  The set of irrational numbers is countable.  The set of prime numbers is countable.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": "Notation   "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
