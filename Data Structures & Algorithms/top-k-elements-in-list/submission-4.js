class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {};
        for(let num of nums){
            obj[num] = (obj[num] | 0) + 1 
        }
        const sortArray = Object.entries(obj).sort((a,b) => b[1] - a[1])
        return sortArray.slice(0,k).map(item => item[0])
    }
}
