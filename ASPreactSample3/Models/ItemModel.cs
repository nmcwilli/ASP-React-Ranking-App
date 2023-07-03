namespace ASPreactSample3.Models
{
    /* 
     * Server-side Model for Items
     * model used to define an Id, Title string, ImageID, Ranking and ItemType 
    */

    public class ItemModel
    {

        public int Id { get; set; }

        public string Title { get; set; }

        public int ImageId { get; set; }

        public int Ranking { get; set; }

        public int ItemType { get; set; } 
    }
}
