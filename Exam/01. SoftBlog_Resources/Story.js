class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comment = [];
        this._likes = [];
    }

    get likes() {
        let result;
        if (this._likes.length == 0) {
            result = `${this.title} has 0 likes`;
        } else if (this._likes.length == 1) {
            result = `${this._likes[0]} likes this story!`;
        } else {
            result = `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }

        return result;
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`)
        } else if (this.creator == username) {
            throw new Error(`You can't like your own story!`)
        }
        this._likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error(`You can't dislike this story!`);
        }

        this._likes = this._likes.filter(l => l !== username);

        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        let result;
        if (id === undefined || (id - 1) < 0 || (id - 1) >= this._comment.length) {
            let currentComent = {
                Id: this._comment.length + 1,
                Username: username,
                Content: content,
                Replies: [],
            }
            this._comment.push(currentComent);
            result = `${username} commented on ${this.title}`
        } else {
            let temp = this._comment[id - 1].Replies.length + 1;
            let currentReply = {
                Id: Number(`${id}.${temp}`),
                Username: username,
                Content: content,
            }
            this._comment[id - 1].Replies.push(currentReply);

            result = 'You replied successfully';
        }

        return result;
    }

    toString(sortingType) {
        let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`

        if (sortingType === 'asc') {
            this._comment.sort((a, b) => {return b.Id - a.Id});
            for (let i = 0; i < array.length; i++) {
                result += `-- ${this._comment[i].Id}. ${this._comment[i].Username}: ${this._comment[i].Content}\n`;
                if(this._comment[i].Replies.length > 0) {
                    this._comment[i].Replies.sort((a, b) => {return b.Id - a.Id});
                    for (let y = 0; y < this._comment[i].Replies.length; y++) {
                        result += `--- ${this._comment[i].Replies[y].Id}. ${this._comment[i].Replies[y].Username}: ${rthis._comment[i].Replies[y].Content}\n`;
                    }
                }
            }
        } else if (sortingType === 'desc') {
            this._comment.sort((a, b) => {return a.Id - b.Id});
            for (let i = this._comment.length - 1; i >= 0; i--) {
                result += `-- ${this._comment[i].Id}. ${this._comment[i].Username}: ${this._comment[i].Content}\n`;
                if(this._comment[i].Replies.length > 0) {
                    this._comment[i].Replies.sort((a, b) => {return a.Id - b.Id});
                    for (let y = this._comment[i].Replies.length - 1; y >= 0; y--) {
                        result += `--- ${this._comment[i].Replies[y].Id}. ${this._comment[i].Replies[y].Username}: ${this._comment[i].Replies[y].Content}\n`;
                    }
                }
            }

        } else if (sortingType === 'username') {
            this._comment.sort((a, b) => a.Username.localeCompare(b.Username));
            for (const com of this._comment) {
                result += `-- ${com.Id}. ${com.Username}: ${com.Content}\n`;
                if (com.Replies.length > 0) {
                    com.Replies.sort((a, b) => a.Username.localeCompare(b.Username));
                    for (const rep of com.Replies) {
                        result += `--- ${rep.Id}. ${rep.Username}: ${rep.Content}\n`;
                    }
                }
            }

        }
        return result.trim();
    }


}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
