export const quizes = [
  {
    qustionId: "1",
    qustion: "What are you looking for?",
    answers: [
      {
        name: "Women's styles",
        saveIn: { gender: "female" },
        image: "images/quiz/choosegenderwomen.avif",
        answerId: "1-1",
      },
      {
        name: "Men's styles",
        saveIn: { gender: "male" },
        image: "images/quiz/choosegenderman.avif",
        answerId: "1-2",
      },
    ],
  },
  {
    qustionId: "2",
    qustion: "Want sunglasses recommendations too?",
    answers: [
      {
        name: "Sunglasses",
        saveIn: { type: "sunglasses" },
        image: "images/quiz/choosesunglasses.avif",
        answerId: "2-1",
      },
      {
        name: "Eyeglasses",
        saveIn: { type: "eyeglasses" },
        image: "images/quiz/chooseeyeglasses.avif",
        answerId: "2-2",
      },
    ],
  },
  {
    qustionId: "3",
    qustion: "What's your face width?",
    answers: [
      {
        name: "Narrow",
        saveIn: { size: "Narrow" },
        image: "images/quiz/choosewidth-narrow.avif",
        answerId: "3-1",
      },
      {
        name: "Medium",
        saveIn: { size: "Medium" },
        image: "images/quiz/choosewidth-medium.avif",
        answerId: "3-2",
      },
      {
        name: "Wide",
        saveIn: { size: "Wide" },
        image: "images/quiz/choosewidth-wide.avif",
        answerId: "3-3",
      },
    ],
  },
  {
    qustionId: "4",
    qustion: "Which shapes do you like?",
    answers: [
      {
        name: "Round",
        saveIn: { shape: "round" },
        image: "images/quiz/chooseshaperround.avif",
        answerId: "4-1",
      },
      {
        name: "Rectangle",
        saveIn: { shape: "rectangle" },
        image: "images/quiz/chooseshaperrectangle.avif",
        answerId: "4-2",
      },
      {
        name: "Square",
        saveIn: { shape: "square" },
        image: "images/quiz/choose-shape-square.avif",
        answerId: "4-3",
      },
      {
        name: "Cat-eye",
        saveIn: { shape: "cat-eye" },
        image: "images/quiz/chooseshapercat-eye.avif",
        answerId: "4-4",
      },
      {
        name: "Aviator",
        saveIn: { shape: "aviator" },
        image: "images/quiz/choose-shape-aviator.avif",
        answerId: "4-5",
      },
    ],
  },
  {
    qustionId: "5",
    qustion: "Which colors do you like",
    answers: [
      {
        name: "Black",
        saveIn: { color: "black" },
        image: "#",
        answerId: "5-1",
      },
      {
        name: "Red",
        saveIn: { color: "red" },
        image: "#",
        answerId: "5-2",
      },
      {
        name: "Goldenrod",
        saveIn: { color: "gold" },
        image: "#",
        answerId: "5-3",
      },
      {
        name: "Silver",
        saveIn: { color: "silver" },
        image: "#",
        answerId: "5-4",
      },
      {
        name: "Blue",
        saveIn: { color: "blue" },
        image: "#",
        answerId: "5-5",
      },
    ],
  },
  {
    qustionId: "6",
    qustion: "Which materials do you like",
    answers: [
      {
        name: "Acetate",
        saveIn: { material: "acetate" },
        image: "images/quiz/choosematerialacetate.avif",
        answerId: "6-1",
      },
      {
        name: "Metal",
        saveIn: { material: "metal" },
        image: "images/quiz/choosematerialametal.avif",
        answerId: "6-2",
      },
      {
        name: "Mixed",
        saveIn: { material: "mixed" },
        image: "images/quiz/choosematerialamixed.avif",
        answerId: "6-3",
      },
    ],
  },
];
let answerList = [];
let storageProductDescribtion = [];
export function addAnswer(answerId) {
  quizes.forEach((quiz) => {
    quiz.answers.forEach((answer) => {
      if (answer.answerId == answerId) {
        answerList.push(answer);
        if (answerList.length == 6) {
          answerList.forEach((localAnswer) => {
            storageProductDescribtion.push(localAnswer.saveIn);
          });
          if (storageProductDescribtion.length != 0) {
            localStorage.setItem(
              "storageProductDescribtion",
              JSON.stringify(storageProductDescribtion)
            );
            window.location.href = "quizProduct.html";
          }
        }
      }
    });
  });
}
export function removeAnswer(unanswerId) {
  quizes.forEach((quiz) => {
    quiz.answers.forEach((answer) => {
      if (answer.answerId == unanswerId) {
        answerList.pop();
        console.log(answerList);
      }
    });
  });
}
