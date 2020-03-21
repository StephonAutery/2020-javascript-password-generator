# 03-javascript-password generator

## UCBerkeley Bootcamp Assignment No.3 

For this assignment, css, and javascript are used to manipulate the DOM and genrate a random string.

## Site Picture
![Site](/images/2020-ucb-03-password-generator-snip.PNG)

## Technologies Used
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [javaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [GitLab](https://gitlab.com/) - version control system to track changes to source code
- [GitHub](https://github.com/) - hosts repository that can be deployed to GitHub Pages

## Summary 
This application generates a random password based on the user's specifications.

## Code Snippet
where the work gets done.

```javaScript

// build the password
function getPassword(){
    varIterate = rangeFind.value;
    varLower = charDiv.lower.checked;
    varUpper = charDiv.upper.checked;
    varSpecial = charDiv.special.checked;
    varNum = charDiv.nums.checked;
    while (varCount < varIterate){
        if (varSpecial === true && i < varIterate){
            varTmpChar = getSpecial();
            varPassWord = varPassWord.concat(varTmpChar);
            i++     
        }
        if(varNum === true && i < varIterate){
            varTmpChar = getNum();
            varPassWord = varPassWord.concat(varTmpChar);
            i++
        }
        if(varLower === true && i < varIterate){
            varTmpChar = getLower();
            varPassWord = varPassWord.concat(varTmpChar);
            i++                   
        }
        if(varUpper === true && i < varIterate) {
            varTmpChar = getUpper();
            varPassWord = varPassWord.concat(varTmpChar);
            i++                  
        }
    varCount++;
    }   
    // write the password to the screen
    password.value = varPassWord;
}

```

## Deployed Link

* [see live site](https://stephonautery.github.io/2020-ucb-03-javascript-password-generator/)
* [github repository](https://github.com/StephonAutery/2020-ucb-03-javascript-password-generator)

## Authors

* **Stephon Autery** 

- [link to portfolio Site](https://github.com/StephonAutery)
- [link to LinkedIn](https://www.linkedin.com/in/stephon-a-1bb575198/)

## License

This project is in the public domain.

images: copyright Stephon Autery

## Acknowledgments

* UCBerkeley Coding Bootcamp is still Awesome!
