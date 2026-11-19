class Solution:
    def isPalindrome(self, s: str) -> bool:
        clean_text = ""
        for x in s:
            if x.isalnum():
                clean_text = clean_text + x
        return clean_text.lower() == clean_text[::-1].lower() 