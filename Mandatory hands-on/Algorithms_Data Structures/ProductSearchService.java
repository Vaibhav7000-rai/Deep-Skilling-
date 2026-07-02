import java.util.*;

public class ProductSearchService {
    private final Map<String, List<Product>> keywordIndex = new HashMap<>();

    public void addProduct(Product product) {
        String[] keywords = normalizeKeywords(product.getName() + " " + product.getCategory());

        for (String keyword : keywords) {
            keywordIndex.computeIfAbsent(keyword, k -> new ArrayList<>()).add(product);
        }
    }

    public List<Product> search(String query) {
        if (query == null || query.trim().isEmpty()) {
            return new ArrayList<>();
        }

        String[] keywords = normalizeKeywords(query);
        if (keywords.length == 0) {
            return new ArrayList<>();
        }

        Set<Product> results = new LinkedHashSet<>();
        for (String keyword : keywords) {
            List<Product> matches = keywordIndex.getOrDefault(keyword, Collections.emptyList());
            if (results.isEmpty()) {
                results.addAll(matches);
            } else {
                results.retainAll(matches);
            }
        }

        return new ArrayList<>(results);
    }

    private String[] normalizeKeywords(String text) {
        return text.toLowerCase(Locale.ROOT)
                .replaceAll("[^a-z0-9\s]", "")
                .split("\\s+");
    }
}
