using server.Enums;

namespace server.Models.Entities
{
    public class Product
    {
        public int ProductId { get; set; }
        public required string ProductName { get; set; }
        public required string ProductDescription { get; set; }
        public required ProductCategory ProductCategory { get; set; }
        public required decimal ProductPrice { get; set; }
        public required int ProductQuantity { get; set; }
    }
}
