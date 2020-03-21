//map example
const question=new Map();
question.set('question','what is the official name of the latest major java script');
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES2015');
question.set(4,'ES7');
question.set('correct',3);
question.set(true,'correct answer:D');
question.set(false,'wrong,please try again');
console.log(question.get('question'));
console.log(question.size);