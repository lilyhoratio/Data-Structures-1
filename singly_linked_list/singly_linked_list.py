class ListNode:
    def __init__(self, val, next=None):
        self.val = val
        self.next = next
    
    def __str__(self):
        return str(self.__dict__)
    
start = ListNode("hi")
start.next = ListNode("there")

print(start.next)