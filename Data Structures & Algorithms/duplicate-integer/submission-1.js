class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     * [1,2,3,1,2,3]
     */
    hasDuplicate(nums) { 
        const set = new Set()
        for(const num of nums){
            if(set.has(num)){
                return true
            }
            set.add(num)
        }
        return false
    }
}
