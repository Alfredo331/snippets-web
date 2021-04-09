// This snippet file was generated by processing the source file:
// ./firestore-next/test.solution-counters.js
//
// To make edits to the snippets in this file, please edit the source

// [START increment_counter_modular]
function incrementCounter(db, ref, num_shards) {
    import { collection, doc, updateDoc, increment, FirebaseFirestore } from "@firebase/firestore";

    // Select a shard of the counter at random
    const shardId = Math.floor(Math.random() * num_shards).toString();
    const shardRef = doc(ref, 'shards', shardId);

    // Update count
    return updateDoc(shardRef, "count", increment(1));
}
// [END increment_counter_modular]