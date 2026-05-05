class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mySet = new Set()
        for(let x of nums){
            if(!mySet.has(x)){
                mySet.add(x)
            }else{
                return true
            }
        }
        return false
    }
}
