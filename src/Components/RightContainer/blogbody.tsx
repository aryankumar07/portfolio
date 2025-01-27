import { motion } from "motion/react";


const BlogBody = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-28">
        Working on it.....
      </div>
    </motion.div>
  )
}

export default BlogBody;
