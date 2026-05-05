class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countNums = {}
        for(let n of nums){
            countNums[n] = (countNums[n] | 0) + 1
        }

        const arr = Object.entries(countNums).map(([num,freq])=>(
            [parseInt(num),
            freq]
        ))
        arr.sort((a,b)=> b[1] - a[1])

        return arr.slice(0,k).map((pair)=> pair[0])
    }
}
