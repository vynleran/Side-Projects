class Node
{
	data;
	link;

	// constructor
	constructor() {
		this.data = null;
		this.link = null;
	}

	// accessor and mutator for the data component
	getData() {
		return this.data;
	}

	setData(data) {
		this.data = data;
	}

	// accessor and mutator for the link component
	getLink() {
		return this.link;
	}

    setLink(link) {
		this.link = link;
	}
}