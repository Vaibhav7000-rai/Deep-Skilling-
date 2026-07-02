public class Main {
    public static void main(String[] args) {
        
        Logger logger1 = Logger.getInstance();
        logger1.log("Application started.");

        Logger logger2 = Logger.getInstance();
        logger2.log("Performing some operations...");

        System.out.println("\n--- Verification ---");
        System.out.println("Hashcode of logger1: " + logger1.hashCode());
        System.out.println("Hashcode of logger2: " + logger2.hashCode());

        if (logger1 == logger2) {
            System.out.println("SUCCESS: Both logger1 and logger2 point to the same instance. Singleton pattern verified!");
        } else {
            System.out.println("FAILURE: Multiple instances exist!");
        }
    }
}