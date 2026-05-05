class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj = {}
        for(let i = 0; i < nums.length; i++){
            let sub = target - nums[i]
            if(obj[sub] >= 0){
                return [obj[sub], i]
            }
            obj[nums[i]] =  i
        }
    }
}
