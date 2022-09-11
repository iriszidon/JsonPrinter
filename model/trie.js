class TrieNode {
    constructor(data = []) {
        this.children = {}; // Dictionary, <character, TrieNode>
        this.data = data; // Non-null when this node represents the end of a valid word
    }

    addWord(word, data) {
        let node = this; // the root of the tree
        for (let ch of word) {
            if (!(ch in node.children)) {
                node.children[ch] = new TrieNode();
            }
            node = node.children[ch]; // Walk down the tree
        }       
        node.data.push(data);
    }

    *getAllData() { // This method returns an iterator over all data in this subtree
        if (this.data != null) yield this.data;
        // Recursively yield all data in the children's subtrees
        for (const child in this.children) yield* this.children[child].getAllData();
    }

    *find(prefix) { // This method returns an iterator over matches
        console.log(`finding prefix ${prefix}`);
        let node = this;
        // Find the node where this prefix ends:
        for (let ch of prefix) {
            if (!(ch in node.children)) return; // No matches
            node = node.children[ch];
        }
        // Yield all data in this subtree
        yield* node.getAllData();
    }
}

module.exports = { TrieNode };