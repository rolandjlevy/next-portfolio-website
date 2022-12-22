import { Schema, model, models } from 'mongoose';

const projectsSchema = new Schema({
  id: { type: String, required: true },
  sortOrder: { type: Number, required: true },
  active: { type: Number, required: true },
  image: { type: String, required: true },
  heading: { type: String, required: true },
  details: { type: String, required: true },
  category: { type: String, required: true },
  languages: { type: Array, required: true },
  infoButtons: { type: Object, required: true },
  date_added: { type : Date, default: Date.now, required: true },
},
{ timestamps: true }
);

const Projects = models.Projects || model('Projects', projectsSchema);

export default Projects;