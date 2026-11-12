class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numObj = {}
        for x in range(len(nums)):
            y = target - nums[x]
            if(numObj.get(y) is None):
                numObj[nums[x]] = x
            else:
                print(numObj[y], x)
                return [numObj[y], x]