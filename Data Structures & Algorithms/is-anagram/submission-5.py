class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if( len(s) != len(t)):
            return False
        else:
            sortedS = "".join(sorted(s))
            sortedT = "".join(sorted(t))
            for index,x in enumerate(sortedS):
                if(x != sortedT[index]):
                    return False
            return True
        