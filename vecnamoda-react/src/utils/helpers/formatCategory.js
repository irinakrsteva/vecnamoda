export default function formatCategory(categoryName) {
    return categoryName.replace("w_", "women's ").replace("m_", "men's ").replace("c_","children's ");
}