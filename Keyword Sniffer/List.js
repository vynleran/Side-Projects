
class List
{
    // We don't actually have to set a max size with linked lists
    // But it is a good idea.
    // Just picture an infinite loop adding to the list! :O
    // Yes, you may change this when you do your word count program.
    static MAX_SIZE = 500;

    head;
    tail;
    curr;
    num_items;

    // constructor
    // remember that an empty list has a "size" of -1 and its "position" is at -1
    constructor()
    {
        head = new Node();
        tail = new Node();
        curr = new Node();
        num_items = 0;
    }

    // copy constructor
    // clones the list l and sets the last element as the current
    // (notice we're not just copying the whole list at once?)
    constructor(l)
    {
        n = l.head.getLink();      // n is the head of the 1 object

        head = new Node();
        tail = new Node();
        curr = new Node();
        this.num_items = 0;

        while (n != null)
        {
            this.InsertAfter(n.getData());
            n = n.getLink();
        }
    }

    // setLink() = designates a link to the node you give it
    // getLink() = you get the link of the node you are giving it 
    // setData() = sets the data based on the parameter you give it
    // getData() = gets the data stored in that node

    // navigates to the beginning of the list
    First()
    {
        curr.setLink(head.getLink());
    }

    // navigates to the end of the list
    // the end of the list is at the last valid item in the list
    Last()
    {
        curr.setLink(tail.getLink());
    }

    // navigates to the specified element (0-index)
    // this should not be possible for an empty list
    // this should not be possible for invalid positions
    SetPos(pos)
    {
        if(!IsEmpty() && pos==0) {
            curr.setLink(head.getLink());
        }
        else {
            First();
            while(pos>0 && pos<GetSize()) {
                Next();
                pos--;
            }
        }
    }

    // navigates to the previous element
    // this should not be possible for an empty list
    // there should be no wrap-around
    Prev()
    {
        if(!IsEmpty()) {
            if(curr.getLink() == head.getLink()) {

            } else {
                pos = GetPos();
                SetPos(pos-1);
            }
        }
    }
    
    // navigates to the next element
    // this should not be possible for an empty list
    // there should be no wrap-around
    Next()
    {
        if(!IsEmpty() && curr.getLink() != tail.getLink()) {
            curr.setLink(curr.getLink().getLink());
        }
        else if(curr.getLink()==tail.getLink()){
            curr.setLink(tail.getLink());
        }
    }

    // returns the location of the current element (or -1)
    GetPos()
    {
        if(num_items < 1){
            return -1;
        }
        else {
            pos = -1;
            n = head.getLink();
            while(n != curr.getLink()) {
                n = n.getLink();
                pos++;
            }
            pos++;
            return pos++;
        }
    }

    // returns the value of the current element (or -1)
    GetValue()
    {
        if(!IsEmpty()){
            return(curr.getLink().getData());
        }
        return(null);
    }

    // returns the size of the list
    // size does not imply capacity
    GetSize()
    {
        return(num_items);
    }

    // inserts an item before the current element
    // the new element becomes the current
    // this should not be possible for a full list
    InsertBefore(data)
    {
        if(this.head.getLink() == null) {
            newNode = new Node();
            newNode.setData(data);
            newNode.setLink(head.getLink());
            head.setLink(newNode);
            curr.setLink(newNode);
            num_items++;
        } else {
            Prev();
            InsertAfter(data);
        }
    }

    // inserts an item after the current element
    // the new element becomes the current
    // this should not be possible for a full list
    InsertAfter(data)
    {
        if(IsEmpty()) {
            newNode = new Node();
            newNode.setData(data);
            head.setLink(newNode);
            tail.setLink(newNode);
            curr.setLink(newNode);
            num_items++;
        }    
        else if(!IsFull()) {
            newNode = new Node();
            newNode.setData(data);
            newNode.setLink(curr.getLink().getLink());      // setting up a link from the newNode to the node after the previous current node
            curr.getLink().setLink(newNode);        // connecting the current node to the new Node
            if (curr.getLink() == tail.getLink()){
                tail.setLink(newNode);
            }
            curr.setLink(curr.getLink().getLink()); // moving current pointer to the new node
            num_items++;
        }
    }

    // removes the current element 
    // this should not be possible for an empty list
    Remove()
    {
        if(!IsEmpty()) {
            if(curr.getLink() == head.getLink()) {
                head.setLink(head.getLink().getLink());
                curr.setLink(head.getLink());
                num_items--;
            }
            else if(curr.getLink() == tail.getLink()) {
                Prev();
                curr.getLink().setLink(null);
                tail.setLink(curr.getLink());
                num_items--;
            } 
            else {
                Prev();
                curr.getLink().setLink(curr.getLink().getLink().getLink());
                num_items--;
            }
        }
    
    }

    // replaces the value of the current element with the specified value
    // this should not be possible for an empty list
    Replace(data)
    {
        if(!IsEmpty()) {
            curr.setData(data);
        }
    }

    // returns if the list is empty
    IsEmpty()
    {
        if(num_items == 0) {
            return true;
        }
        return false;
    }

    // returns if the list is full
    IsFull()
    {
        if(num_items >= MAX_SIZE) {
            return true;
        }
        return false;
    }

    // // returns if two lists are equal (by value)
    Equals(l)
    {
        headNodeA = this.head.getLink();     // the head node for the list
        headNodeB = l.head.getLink();        // the head node for the parameter list
        i =0;
        if(this.GetSize() != l.GetSize()) {     // if not the same size
            return false;
        }
        else if(this.GetSize() == l.GetSize() && i == GetSize()){   // if the same size and i is equal to getSize
            for(;i < GetSize();) {
                if(headNodeA.getData() == headNodeB.getData()) {    // checking to see if the datas are equal
                    i++;
                    headNodeA = headNodeA.getLink();    // moving on to the next node
                    headNodeB = headNodeB.getLink();    // moving on to the next node 
                }
            }
        }
        return true;
    }

    // returns the concatenation of two lists
    // l should not be modified
    // l should be concatenated to the end of *this
    // the returned list should not exceed MAX_SIZE elements
    // the last element of the new list is the current
    Add(l)
    {
        // copy the first list
		t = new List();
		n = l.head.getLink();

		// iterate through the second list and copy each element to the new list
		while (n != null && !t.IsFull())
		{
			t.InsertAfter(n.getData());
			n = n.getLink();
		}
		return t;

    }

    // returns a string representation of the entire list (e.g., 1 2 3 4 5)
    // the string "NULL" should be returned for an empty list
    // got this method from Alayna
    toString()
    {
        if(this.head.getLink() == null){
            return "NULL";
        } else {
            s = "";
            temp = this.head.getLink();
            while(temp != null){
               s += temp.getData() + " ";
               temp = temp.getLink();
            }
            return s;
        }
    }
}