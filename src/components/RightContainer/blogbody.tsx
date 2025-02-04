import { motion } from "motion/react";


const BlogBody = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-[90rem] text-foreground font-outfit">
        Working on it.....
      </div>
    </motion.div>
  )
}

export default BlogBody;
