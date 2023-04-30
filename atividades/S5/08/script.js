function verticalText(word) {

    for (let i = 0; i < word.length; i++) {
        console.log(word[i]);
    }
}

// verticalText("Frontend");

function incrementText(word) {
    let result = "";
    for (let i = 0; i < word.length; i++) {
        result += word[i];
        console.log(result);
    }
}

// incrementText("Backend");

function incrementTextBackwards(word) {
    let result = "";
    for (let i = word.length - 1; i >= 0; i--) {
        result = word[i] + result;
        console.log(result);
    }
}

// incrementTextBackwards("Fullstack");

function padEnd(text, numRepeat, textRepeat) {
    let result = text;

    for (let i = 0; i < numRepeat; i++) {
        result += textRepeat;
    }

    return result;
}

//   console.log(padEnd("Julian", 6, "k"));

function subString(text, startPosition, endPosition) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        if (i > startPosition && i < endPosition) {
            result += text[i];
        }
    }

    return result;
}

// console.log(subString("Chrome", 3, 5));
// console.log(subString("Mozilla", 0, 4));

function stringRepeater(string, num) {
    let result = "";

    for (let i = 0; i < num; i++) {
        result += string;
    }
    console.log(result)
}

// stringRepeater("Julian, não desista. ", 3);

function stringCentralizer(text, num, textRep) {
    let result = text;

    for (let i = 0; i < num; i++) {
        result = textRep + result + textRep;
    }
    console.log(result)
}

stringCentralizer("Julian", 10, "+");

