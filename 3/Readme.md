# Schema

- Mongoose schemas support a timestamps option. If you set timestamps: true, Mongoose will add two properties of type Date to your schema:
- createdAt: a date representing when this document was created
- updatedAt: a date representing when this document was last updated

# Mongoose.Schema.Types.ObjectId

- Linking Documents: In MongoDB, each document (like a record in a table) has a unique ID called an ObjectId. We use mongoose.Schema.Types.ObjectId to create a link between different documents, much like how a reference or pointer works.

- Fetching Related Data: When you link documents using ObjectId, you can easily fetch related information from different collections (similar to tables in SQL).
