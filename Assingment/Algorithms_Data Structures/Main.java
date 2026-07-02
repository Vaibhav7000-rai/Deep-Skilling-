public class Main {
    public static void main(String[] args) {
        ProductSearchService searchService = new ProductSearchService();

        searchService.addProduct(new Product(1, "Wireless Headphones", "Electronics"));
        searchService.addProduct(new Product(2, "Gaming Mouse", "Electronics"));
        searchService.addProduct(new Product(3, "Running Shoes", "Sports"));
        searchService.addProduct(new Product(4, "Bluetooth Speaker", "Electronics"));
        searchService.addProduct(new Product(5, "Leather Wallet", "Fashion"));

        System.out.println("Search results for 'electronics':");
        for (Product product : searchService.search("electronics")) {
            System.out.println(product);
        }

        System.out.println("\nSearch results for 'wireless':");
        for (Product product : searchService.search("wireless")) {
            System.out.println(product);
        }
    }
}
