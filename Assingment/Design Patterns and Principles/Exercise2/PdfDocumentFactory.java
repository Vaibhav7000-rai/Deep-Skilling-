public class PdfDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        System.out.println("Created PDF document");
        return new PdfDocument();
    }
}
