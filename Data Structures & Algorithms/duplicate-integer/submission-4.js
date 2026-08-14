class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let setNum = new Set()
        for(let i = 0; i < nums.length; i++){
            if(!setNum.has(nums[i])){
                setNum.add(nums[i])
            }else{
                return true
            }
        }
        return false
    }
}
