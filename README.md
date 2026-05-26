# 📸 Image Post App — Full Stack

A full-stack image posting application where users can upload images with captions and view them in a feed. Built with **React**, **Express.js**, **MongoDB**, and **ImageKit**.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

- 📤 **Image Upload** — Upload images using Multer with in-memory storage
- ☁️ **Cloud Storage** — Images stored on ImageKit CDN for fast delivery
- 📝 **Captions** — Add captions to every post
- 📰 **Feed** — View all posts in a responsive feed
- 🔗 **REST API** — Clean RESTful endpoints

## 🏗️ Project Structure

```
├── Backend/
│   ├── server.js                         # Entry point
│   └── src/
│       ├── app.js                        # Express app, routes & middleware
│       ├── db/db.js                      # MongoDB connection
│       ├── models/post.model.js          # Mongoose schema
│       └── services/storage.service.js   # ImageKit upload service
├── Frontend/
│   └── vite-project/
│       └── src/
│           ├── App.jsx                   # React Router setup
│           └── pages/
│               ├── Createpost.jsx        # Post creation form
│               └── Feed.jsx             # Posts feed display
```

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| Frontend | React 19, Vite 8, React Router 7, Axios |
| Backend | Express.js 5, Multer 2 |
| Database | MongoDB Atlas + Mongoose 9 |
| Image CDN | ImageKit |

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB Atlas account
- ImageKit account

### Backend Setup

```bash
cd Backend
npm install
# Create .env file (see .env.example)
npm start
```

### Frontend Setup

```bash
cd Frontend/vite-project
npm install
npm run dev
```

### Environment Variables

Create a `.env` file in the `Backend/` directory:

```env
IMAGEKIT_PRIVATE_KEY=your_key_here
MONGO_URL=your_mongodb_url_here
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/create-post` | Create a new post (multipart/form-data: `image` + `caption`) |
| `GET` | `/posts` | Fetch all posts |

## 📸 How It Works

1. User uploads an image + caption via the React frontend
2. Multer processes the file in memory
3. Image is uploaded to ImageKit CDN
4. Post metadata (image URL + caption) is saved to MongoDB
5. Feed page fetches and displays all posts

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

## 📄 License

[MIT](LICENSE)
