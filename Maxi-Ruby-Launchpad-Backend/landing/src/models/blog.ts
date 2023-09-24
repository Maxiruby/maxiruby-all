import mongoose from "mongoose";

interface BlogAttrs {
  title: string;
  image: string;
  text: string;
  tags: {
    id: string;
    text: string;
  }[];
}

interface BlogModel extends mongoose.Model<BlogDoc> {
  build(attrs: BlogAttrs): BlogDoc;
}

interface BlogDoc extends mongoose.Document {
  title: string;
  image: string;
  text: string;
  tags: {
    id: string;
    text: string;
  }[];
}

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  tags: [
    {
      id: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  ],
});

blogSchema.statics.build = (attrs: BlogAttrs) => {
  return new Blog(attrs);
};

const Blog = mongoose.model<BlogDoc, BlogModel>("Blog", blogSchema);

export { Blog };
