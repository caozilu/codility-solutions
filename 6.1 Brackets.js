// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)

    let stack = [];
    if (S.length === 0) return 1;

    for (let i = 0; i < S.length; i++) {
        let char = S[i];
        switch (char) {
            case '(':
                stack.push(char);
                break;
            case '[':
                stack.push(char);
                break;
            case '{':
                stack.push(char);
                break;
            case ')':
                if (stack.pop(char) !== '(') return 0;
                break;
            case ']':
                if (stack.pop(char) !== '[') return 0;
                break;
            case '}':
                if (stack.pop(char) !== '{') return 0;
                break;
            default:
                break;
        }
    }
    return !stack.length ? 1 : 0
}
