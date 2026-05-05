class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodeStr = ""
        for(let s of strs){
            let encodeS = `${s.length}#${s}`
            encodeStr += encodeS
        }
        return encodeStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedArr = []
        let i = 0;
        while (i < str.length){
            let j = i;
            while (str[j] !== "#"){
                j =  j + 1
            }
            let length = parseInt(str.slice(i,j))
            let word = str.slice(j + 1, j + 1 + length)
            decodedArr.push(word)
            i = j + 1 + length 
        }
        return decodedArr
    }
}
