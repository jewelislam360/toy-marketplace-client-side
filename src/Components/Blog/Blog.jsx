import React from 'react';

const Blog = () => {
    return (
        <div className='mx-auto'>
            <div className='border rounded-xl shadow-md my-8 p-5'>
                <h1 className='font-bold text-xl my-8'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p>When a user logins in, the authorization server issues an access token, which is an artifact that client applications can use to make secure calls to an API server. When a client application needs to access protected resources on a server on behalf of a user, the access token lets the client signal to the server that it has received authorization by the user to perform certain tasks or access certain resources.

                    OAuth 2.0 doesn't define a format for access tokens. At Auth0, for example, access tokens issued for the Management API and access tokens issued for any custom API that you have registered with Auth0 follow the JSON Web Token (JWT) standard. Their basic structure conforms to the typical JWT structure, and they contain standard JWT claims asserted about the token itself.<br></br>

                    The client application can get a new access token as long as the refresh token is valid and unexpired. Consequently, a refresh token that has a very long lifespan could theoretically give infinite power to the token bearer to get a new access token to access protected resources anytime. The bearer of the refresh token could be a legitimate user or a malicious user. As such, security companies, such as Auth0, create mechanisms to ensure that this powerful token is mainly held and used continuously by the intended parties.</p>
            </div>
            <div className='border rounded-xl shadow-md my-8 p-5'>
                <h1 className='font-bold text-xl my-8'>2. Compare SQL and NoSQL databases?</h1>
                <p>SQL is a domain-specific language used to query and manage data. It works by allowing users to query, insert, delete, and update records in relational databases. SQL also allows for complex logic to be applied through the use of transactions and embedded procedures such as stored functions or views.</p>
                <p>NoSQL stands for Not only SQL. It is a type of database that uses non-relational data structures, such as documents, graph databases, and key-value stores to store and retrieve data. NoSQL systems are designed to be more flexible than traditional relational databases and can scale up or down easily to accommodate changes in usage or load. This makes them ideal for use in applications</p>
            </div >
            <div className='border rounded-xl shadow-md my-8 p-5'>
                <h1 className='font-bold text-xl my-8'>3. What is express js? What is Nest JS?</h1>
                <p>Express is a minimal and flexible Node.js framework that provides a robust set of features for building web and mobile applications. It is a lightweight and unopinionated framework that allows developers to create applications with their preferred tools and libraries. Express is popular among developers due to its simplicity and ease of use.</p>
                <p>NestJS is a progressive Node.js framework for building efficient, scalable, and reliable server-side applications. It is built on top of Express.js and provides a more structured way of building applications with TypeScript. NestJS uses a modular architecture, making it easy to maintain and scale applications as they grow.</p>
            </div>
            <div className='border rounded-xl shadow-md my-8 p-5'>
                <h1 className='font-bold text-xl my-8'>4. What is MongoDB aggregate and how does it work?</h1>
                <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.

                    One of the most common use cases of Aggregation is to calculate aggregate values for groups of documents. This is similar to the basic aggregation available in SQL with the GROUP BY clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes further though and can also perform relational-like joins, reshape documents, create new and update existing collections, and so on.

                    While there are other methods of obtaining aggregate data in MongoDB, the aggregation framework is the recommended approach for most work.

                    There are what are called single purpose methods like estimatedDocumentCount(),  count(), and distinct() which are appended to a find() query making them quick to use but limited in scope.

                    The map-reduce framework on MongoDB is a predecessor of the aggregation framework and much more complex to use. MongoDB have deprecated.</p>
            </div>
        </div>
    );
};

export default Blog;