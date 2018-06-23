const here = document.querySelector("#here");
const col1 = document.querySelector(".col1");
const col2 = document.querySelector(".col2");
const col3 = document.querySelector(".col3");
const col4 = document.querySelector(".col4");
const col5 = document.querySelector(".col5");
const col6 = document.querySelector(".col6");
const col7 = document.querySelector(".col7");
const col8 = document.querySelector(".col8");
const col9 = document.querySelector(".col9");
const col = document.querySelectorAll(".col");
const contentMovies = document.querySelector(".content__movies");

const DATANEW = [{
        name: "Siêu Thú Cuồng Nộ",
        rate: "6.5 / 10 (6837)",
        link: "https://api.banhtv.com/getfb/play.php?q=U2FsdGVkX1%2FdhxfI1oKqSKqaJgpB2a6X%2B3FiOkuhs7Yca3fe17BbvSFzra7fQ5entfGrZk338Z3vxwSmi1ECDXTjNNgG9d%2F3IWlCaZoMQLFK%2Be0iE4nU%2Bco8LefE2j0E",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180416/tt2231461_216_320.jpg",
        season: "1",
        eps: "1",
        content: "Rampage - Siêu Thú Cuồng Nộ nói về nhà sinh vật học Davis Okoye (Dwayne Johnson) đã kết bạn với George, một con khỉ đột thông minh, người đã được chăm sóc từ khi sinh ra. Tuy nhiên, một thí nghiệm di truyền giả mạo đã biến đổi con khỉ nhuyễn thành một con quái vật. Khi các con quái vật mới được tạo ra này tràn ngập khắp Bắc Mỹ, phá hủy mọi thứ trên con đường của họ, Okoye đã làm việc với một kỹ sư di truyền bị để tìm ra thuốc giải độc, chiến đấu để vượt qua một chiến trường luôn thay đổi, không chỉ để ngăn chặn một thảm hoạ toàn cầu mà còn cứu được sinh vật đã từng là bạn của mình. ",
        actor: "Dwayne Johnson, Jeffrey Dean Morgan, Malin Akerman, Joe Manganiello",
        director: "Brad Peyton",
        category: "Phim Viễn Tưởng, Phim Phiêu Lưu, Phim Hành Động",
        country: "Mỹ",
        tag: "Phim Hot",
    },
    {
        name: "Biệt Đội Siêu Anh Hùng 3: Cuộc Chiến Vô Cực",
        rate: "8.9 / 10 (301401)",
        link: "https://video.fhan5-3.fna.fbcdn.net/v/t42.9040-2/10000000_107191213478417_7480688158854610944_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=781&oh=efa25e3888d3e3ec8042ffc67f036b83&oe=5B2E8FB0",
        img: "http://image.phimmoi.net/film/3244/poster.medium.jpg",
        season: "1",
        eps: "1",
        content: "Sau chuyến hành trình độc nhất vô nhị không ngừng mở rộng và phát triển vụ trũ điện ảnh Marvel, bộ phim Avengers: Cuộc Chiến Vô Cực sẽ mang đến màn ảnh trận chiến cuối cùng khốc liệt nhất mọi thời đại. Biệt đội Avengers và các đồng minh siêu anh hùng của họ phải chấp nhận hy sinh tất cả để có thể chống lại kẻ thù hùng mạnh Thanos trước tham vọng hủy diệt toàn bộ vũ trụ của hắn.",
        actor: "Tessa Thompson, Chris Hemsworth, Tom Hiddleston, Scarlett Johansson",
        director: "Anthony Russo, Joe Russo",
        category: "Phim Phiêu Lưu, Phim Thần Thoại, Phim Hành Động",
        country: "Mỹ",
        tag: "Phim Hot",
    },
    {
        name: "Quái Nhân 2",
        rate: "8.1 / 10 (132) ",
        link: "https:video.xx.fbcdn.net/v/t42.9040-2/10000000_1026051590893078_3837080471796187136_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=716&oh=6a5ec91dc6010298fae09b1e594ff770&oe=5B2F3E0F",
        img: "http://image.phimmoi.net/film/5001/poster.medium.jpg",
        season: "1",
        eps: "1",
        content: "Phim Quái Nhân 2 - Deadpool 2: Sau khi sống sót khỏi pha tấn công chí mạng của bò tót, một đầu bếp dị dạng (Wade Wilson) chật vật để hoàn thành ước mơ trở thành người pha chế nóng bỏng nhất của Mayberry trong khi phải quen với việc mất đi vị giác. Trong hành trình tìm lại niềm vui cuộc sống và công tắc du hành thời gian, Wade phải chiến đấu với đám ninja, Yakuza và bầy chó quyến rũ. Hắn chu du vòng quanh thế giới để khám phá tầm quan trọng của gia đình, tình bạn và mùi vị - trải nghiệm chuyến phiêu lưu mới và giành danh hiệu hằng mơ ước bấy lâu - Người Tình Tuyệt Nhất Thế GIới.",
        actor: "Morena Baccarin, Ryan Reynolds, Josh Brolin, T.J. Miller",
        director: "David Leitch",
        category: "Phim Phiêu Lưu, Phim Hài Hước, Phim Hành Động",
        country: "Mỹ",
        tag: "Phim Hot",
    },
    {
        name: "Tomb Raider: Huyền Thoại Bắt Đầu",
        rate: "6.8 / 10 (36672) ",
        link: "https://api.phimbathu.com/getfb/play.php?q=U2FsdGVkX181Tfvfsrnb28LzPGDSPqzp1DoybbRJ5YWNwIHXGyh6jSA3dgWL3EAfBRx%2FyXZwY%2FCWKurxmNCJaQu1pgkVwUo5YYTXI2l1s3Y3mm6CJ1QNYEVEfF4s5AMR",
        img: "http://image.phimmoi.net/film/6605/poster.medium.jpg",
        season: "1",
        eps: "1",
        content: "Tomb Raider: Huyền Thoại Bắt Đầu 2018 là cuộc hành trình trở thành huyền thoại của Lara Croft - con gái của nhà khảo cổ học & doanh nhân Richard Croft. Trước khi mất tích, Richard đã để lại lời nhắn cho con gái mình về hòn đảo bí ấn & tổ chức Trinity với kế hoạch hủy diệt thế giới. Hãy cùng Lara Croft vén bức màn bí mật & cứu thế giới. ",
        actor: "Alicia Vikander, Dominic West, Walton Goggins, Daniel Wu",
        director: "Roar Uthaug",
        category: "Phim Phiêu Lưu, Phim Hành Động",
        country: "Mỹ",
        tag: "Phim Hot",
    },
    {
        name: "Đặc Nhiệm Siêu Anh Hùng Phần 5 ",
        rate: "7.5 / 10 (60)",
        link: "https://api.bilutv.com/getfb/play.php?q=U2FsdGVkX18N%2BoJXGLWbXwk0nesTv6gVRsaNmeTUJms4KFfXclcebOe1qeWK%2FwzZSED2EhxsYd6rfXWVyLiSo0NUzaTWGKTaYNC8Q0rvh7gMAhA%2FtGLtR5jjnyCKH%2FiD",
        img: "http://s.aphim.co/uploads/film/images/modsz/20171203/17c48fa5a7d0b7b753c5cb27ada1956e_218_320.jpg",
        season: "1",
        eps: "1",
        content: "Phim Đặc Vụ S.H.I.E.L.D - Đặc Nhiệm Siêu Anh Hùng Phần 5 (2017): Lần này, Phil Coulson và nhóm của anh tỉnh dậy trên một chiếc phi thuyền đang bay ở ngoài vũ trụ. Chuyện gì đã xảy ra với họ? ",
        actor: "Clark Gregg, Chloe Bennet, Ming-Na Wen, Jason O'Mara",
        director: "Sharla Oliver",
        category: "Phim Hành Động, Phim Phiêu Lưu",
        country: "Mỹ",
        tag: "Phim Hot",
    },
    {
        name: "Siêu Đại Chiến Thái Bình Dương 2: Cuộc Nổi Dậy ",
        rate: "8.3 / 10 (50) ",
        link: "https://api.phimbathu.com/getfb/play.php?q=U2FsdGVkX189JJyKIbROiUd28vx6HcDEfFLHhl5MrTvWEKpO8pwBQc4Y2FdXFQJRtb5J3%2B2GOKYcbaT1P61dW%2F247L9eABiomyDjFcceSYtcXZ7rj%2FVjub3Mz%2BGCnBuN",
        img: "http://s.aphim.co/uploads/film/images/modsz/20171011/10358fbebd4ffffb827f30074ce0a221_202_320.jpg",
        season: "1",
        eps: "1",
        content: "Bối cảnh phim Siêu Đại Chiến Thái Bình Dương phần 2: Đã 10 năm kể từ trận chiến ở Breach nhưng các trận chiến trên đại dương vẫn không ngừng. Được chứng minh bằng chiến thắng tại Breach, chương tình Jaeger đã phát triển thành lực lượng phòng thủ toàn cầu mạnh nhất trong lịch sử nhân loại. PPDC hiện đang kêu gọi những người lính giỏi nhất và thông minh nhất để vươn lên trở thành thế hệ anh hùng kế tiếp. Khi mối đe dọa của Kaiju trở lại, chúng tôi sẽ sẵn sàng. ",
        actor: "Scott Eastwood, Burn Gorman, Adria Arjona, Tian Jing",
        director: " Steven S. DeKnight",
        category: "Phim Hành Động, Phim Phiêu Lưu, Phim Viễn Tưởng",
        country: "Mỹ",
        tag: "Phim Hot",
    },
    {
        name: "Đấu Trường Ảo",
        rate: "9 / 10 (900) ",
        link: "https://api.phimbathu.com/getfb/play.php?q=U2FsdGVkX1%2F5sdtYjXdC4AwMJKU6hdyyKDbfCMIxIr3UPRCINF7d0jKWfMriTrM%2FXiJASythdFFBcjTgk%2BO7I29Ez3PvtgejuJW0dbU8GEbEU2%2BPvwEJH1ZtbgcSguNq",
        img: "http://s.aphim.co/uploads/film/images/modsz/20171223/tt1677720_216_320.jpg",
        season: "1",
        eps: "1",
        content: "Ready Player One - Đấu Trường Ảo được dựng thành phim dựa trên tiểu thuyết cùng tên của tác giả Ernest Cline. Bộ phim lấy bối cảnh năm 2044, khi người sáng lập ra Oasis - một tựa game online, mất mạng. Khi đó, ông thách thức tất cả những người chơi Oasis đi tìm Easter Eggs - Trứng phục sinh. Phần thưởng dành cho người chiến thắng là những tài sản vô cùng quý báu mà ông để lại. Một chàng trai mang tên Wade Watts đã tìm ra được những gợi ý đầu tiên trong cuộc tìm kiếm và bắt đầu hành trình của mình. ",
        actor: "Olivia Cooke, Hannah John-Kamen, T.J. Miller, Ben Mendelsohn",
        director: "Steven Spielberg",
        category: "Phim Viễn Tưởng, Phim Phiêu Lưu, Phim Hành Động",
        country: "Mỹ",
        tag: "Phim Hot",
    },
    {
        name: "Cuộc Di Tản",
        rate: "8.3 / 10 (259800) ",
        link: "https://video.fhan5-6.fna.fbcdn.net/v/t42.9040-2/10000000_212444919522402_4490990990663876608_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1NDYsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1546&vabr=1031&oh=a65a1a1b5dc70406fbd74b471c2e323e&oe=5B2FF7B3",
        img: "http://image.phimmoi.net/film/4851/poster.medium.jpg",
        season: "1",
        eps: "1",
        content: "Bối cảnh trong phim Cuộc Di Tản nói về trận chiến Dunkirk diễn ra từ ngày 26/5 - 4/6/1940 ở thành phố Dunkirk (hoặc Dunkerque) của nước Pháp, là một trong những trận chiến ác liệt nhất thời điểm này, giữa quân Đồng Minh và Đức Quốc Xã, do đó đây còn gọi là Trận Chiến nước Pháp. Ở trận này, quân Đức đã chiếm đóng nước Pháp và vây hãm liên quân của Bỉ, Canada, Anh và Pháp, đánh cho quân Đồng Minh thua tơi tả và phải mở đường máu theo phía eo biển để rút về nước Anh. ",
        actor: "Tom Hardy, Cillian Murphy, Mark Rylance, Kenneth Branagh",
        director: "Christopher Nolan",
        category: "Phim Hành Động, Phim Kịch Tính, Phim Kinh Dị",
        country: "Mỹ",
        tag: "Phim Hot",
    },
    {
        name: "Ba Biển Quảng Cáo Ngoài Trời ở Missouri ",
        rate: " 8.3 / 10 (62375) ",
        link: "https://video.fsgn5-5.fna.fbcdn.net/v/t42.9040-2/10000000_164344240948609_8360042262708617216_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=517&oh=8800df340b871ea59871f16df9992ae3&oe=5B2EC603",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180126/tt5027774_216_320.jpg",
        season: "1",
        eps: "1",
        content: "Three Billboards Outside Ebbing, Missouri là tác phẩm thuộc thể loại hình sự pha hài do Martin McDonagh đạo diễn, kể về hành trình của một người mẹ đòi lại công lý sau khi cảnh sát không tìm được nghi phạm trong vụ sát hại con cô. Cô thuê ba tấm bảng quảng cáo trên đường để ghi nội dung bày tỏ sự phẫn uất với chính quyền. Phim nhận 93% đánh giá tích cực trên Rotten Tomatoes với điểm trung bình 8,6. ",
        actor: "Frances McDormand, Caleb Landry Jones, Kerry Condon, Sam Rockwell",
        director: "Martin McDonagh",
        category: "Phim Kịch Tính, Phim Tội Phạm - Hình Sự",
        country: "Mỹ",
        tag: "Phim Hot",

    },
    {
        name: "Law Of the Jungle (Luật Rừng)",
        rate: "8.4 / 10 (7239)",
        link: "https://i.rmbl.ws/s8/2/d/o/V/z/doVza.caa.1.mp4",
        img: "http://s.aphim.co/uploads/film/images/modsz/20160130/c8cabbdee92d3fb29ee0798373ec960e_252_320.jpg",
        season: "2",
        eps: "3",
        content: "Law of the Jungle hay Luật Rừng là một chương trình tài liệu thực tế của diễn viên hài Kim Byung-man cùng bộ tộc của mình. Họ sẽ đến những vùng đất lẻo lánh trong tự nhiên để khám phá và cố gắng sống sót. Khách mời là những ca sĩ, diễn viên nhóm nhạc nổi tiếng như Mino, Lee Taegon, HAHA, Seo Hyorim, EXO Chanyeol...",
        actor: " Kim Byung Man, Ryu Dam, Noh Woo Jin, Kim Seung Soo",
        director: " Byun Jin Seon, Park Mi yeon",
        category: "Phim Giải Trí-Sự Kiện, Phim Hàn Quốc",
        country: "Hàn Quốc",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "2 Ngày 1 Đêm Mùa 3",
        rate: "8 / 10 (80)",
        link: "https://vredir.nixcdn.com/SongClip23/2Days1NightSeason3Ep1Vietsub-V.A-2991834.mp4?st=q-zXwVygGCY_0aIOyGqyBg&e=1529767036&t=1529680597776",
        img: "http://s.aphim.co/uploads/film/images/modsz/20160108/8db26632ad8e59671b1a7a72cf4d0220_218_320.jpg",
        season: "1",
        eps: "1",
        content: "Truyền hình thực tế của đài KBS2: 2 Ngày 1 Đêm Mùa 3, trong đó các thành viên cùng nhau du lịch về vùng làng quê và cố gắng để sống sót qua chuyến đi. Trong suốt chương trình, các thành viên sẽ chơi các trò chơi nhỏ để quyết định ai sẽ được ăn bữa tối, ai sẽ phải lao động “khổ sai” trong suốt chuyến đi, và ai sẽ may mắn giành được chỗ ngủ thoải mái.",
        actor: "Kim Jong Min, Cha Tae Hyun, Kim Joo Hyuk, Kim Jun Ho, Defconn, Jung Joon Young",
        director: "KBS2",
        category: "Phim Giải Trí-Sự Kiện, Phim Hàn Quốc",
        country: "Hàn Quốc",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "Running man",
        rate: " 7 / 10 (70)",
        link: "https://api.phimbathu.com/getfb/play.php?q=U2FsdGVkX18K0KIX1cvINkqCuZ4hnFQLmq8i6HQC5dB5rgE4cpRaeUsnZIZTAZmdCGQykf5xCF3S4OLlMy81x0JHx4sgz34bBDGayXxlhYWMHTGhqqZKoC0iBML3%2FOB5",
        img: "http://s.aphim.co/uploads/film/images/modsz/20150526/28e4270d6505d8bad35e7c91c4130ab4_224_320.jpg",
        season: "1",
        eps: "1",
        content: "Nếu bạn là fan của các show truyền hình Hàn Quốc, bạn không thể bỏ qua tv show Running Man đầy thú vị này. Không những vậy, qua Running Man, bạn có thể gặp rất nhiều các khách mời đặc biệt và các ngôi sao nổi tiếng. Tất cả là Running Man- đừng đi mà hãy chạy...",
        actor: " Jae-Suk Yoo, Jong-Kook Kim, Suk-Jin Ji, Dong-hoon Ha",
        director: "N/A",
        category: "Phim Giải Trí-Sự Kiện, Phim Hành Động, Phim Thể Thao",
        country: "Hàn Quốc",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "Happy Together",
        rate: "7 / 10 (70)",
        link: "https://vredir.nixcdn.com/SongClip24/HappyTogetherSeason3Tap295Phan1Vietsub-V.A-3129529.mp4?st=w91z1cdimZeWFvifoiTjag&e=1529769671&t=1529683272392",
        img: "http://s.aphim.co/uploads/film/images/modsz/20160423/3a45b339f824e3837fa0fc2d3b5d3fb7_226_320.jpg",
        season: "1",
        eps: "1",
        content: "Happy Together bắt đầu phát sóng trên kênh KBS từ tháng 5/2007. Hiện tại, Happy Together được dẫn dắt bởi MC quốc dân nổi tiếng - Yoo Jae Suk cùng với Park Mi Sun, Park Myung Soo, sau đó có thêm Jo Se Ho và Kim Shin Yong tham gia kể từ tháng 8/2014. Đây là một trong những chương trình nổi tiếng của Hàn Quốc trong nhiều năm, có bối cảnh trường quay là một phòng tắm hơi. Happy Together đơn giản là cuộc trò chuyện với các khách mời, ngoài ra còn có thêm một số trò chơi nhỏ.",
        actor: " Yoo Jae Suk, Park Myung Soo, Shin Bong Seon, Park Mi Sun",
        director: " N/A",
        category: "Phim Giải Trí-Sự Kiện",
        country: "Hàn Quốc",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "Sự Trở Lại Của Siêu Nhân",
        rate: " 6 / 10 (60)",
        link: "https://archive.org/download/1000000025575589978027246930553073584570368Nsieunhan237/10000000_2557558997802724_6930553073584570368_nsieunhan237.mp4",
        img: "http://s.aphim.co/uploads/film/images/modsz/20160108/34bd5381f1b4ad70c62733c21a1e9282_268_320.jpg",
        season: "1",
        eps: "1",
        content: "Series Sự Trở Lại Của Siêu Nhân nói về những người cha luôn dành hết thời gian cho công việc, nay họ đã trở về nhà. Chương trình The Return of Superman kể về những ông bố dành hết yêu thương chăm sóc cho con cái của mình. Trong 48h không có mẹ bên cạnh, trải qua nhiều rắc rối cùng với những đứa con thân yêu. Các ông bố sẽ ra sao đây với những tình huống dở khóc dở cười. Đối với chung ta mẹ là người thân yêu và gần gũi nhất, mẹ có đủ bao dung để tha thứ mọi lổi lầm cho con cái. Còn bố thì có bờ vai vững chất, dù bạn có vấp ngả bao nhiêu thì bố luôn sẳn sàng đón nhận bạn, giúp đở bạn và luôn yêu quý bạn đến suốt cuộc đời. Tình thương của bố giống như biển trời bao la. Không có người cha nào hoàn hảo, nhưng tình thương người cha dành cho con cái luôn hoàn hảo và duy nhất.Chúc các bạn xem phim vui vẻ!",
        actor: "Lee Hwi Jae, Choo Sung Hoon, Song Il Kook, Uhm Tae Woong",
        director: "KBS, Kang Bong Gyu",
        category: "Phim Giải Trí-Sự Kiện, Phim Hàn Quốc",
        country: "Hàn Quốc",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "Quản Gia",
        rate: "8 / 10 (80)",
        link: "https://api.banhtv.com/getfb/play.php?q=U2FsdGVkX1%2B6tWD%2Fm9ZwADimqVAiRTd9Q9lp5NbHwTViBacFS6jl178LOws8Wn7Hrko360L%2BQ512tz%2Bxb8i8nwO9Q3xIMmPFhavGGgjBLC%2BA0NE3D8Ml6C8R7HXlwYqf",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180116/e216e4b51dffcf36b3501f7d38b143bf_213_320.jpg",
        season: "1",
        eps: "1",
        content: "Quản Gia mùa 1 Hàn Quốc là một chương trình truyền hình thực tế của đài SBS. Trong đó: Lee Seung Gi, Lee Sang Yoon, Yang Se Hyung, Yook Sung Jae tìm đến nhà những người thầy và học hỏi",
        actor: "Lee Seung Gi, Lee Sang Yoon, Yang Se Hyung, Yook Sung Jae",
        director: "Lee Se-young, Kim Jung Wook",
        category: "Phim Giải Trí-Sự Kiện",
        country: "Hàn Quốc",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "Knowing Brothers",
        rate: "6.8 / 10 (1043)",
        link: "https://www3584.playercdn.net/185/0/_bonKkuHMBW5H7kHUiWWfA/1529706878/180603/bwdlNzyjO50rHVl.mp4",
        img: "http://s.aphim.co/uploads/film/images/modsz/20170118/49539a3d02b619c4753e4085cd4ab163_229_320.jpg",
        season: "1",
        eps: "1",
        content: "Sau gần ba năm phát sóng, Knowing Brothers đã trở thành một trong những chương trình tạp kỹ nổi tiếng nhất Hàn Quốc.",
        actor: "Kang Ho Dong, Seo Jang Hoon, Kim Young Chul, Lee Soo Geun, Min Kyung Hoon, Kim Hee Chul, Lee Sang Min",
        director: "Yeo Un Hyeong",
        category: "Phim Giải Trí-Sự Kiện, Phim Hàn Quốc",
        country: "Hàn Quốc",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "I Can See Your Voice 5",
        rate: "5 / 10 (50)",
        link: "https://video.fhan3-3.fna.fbcdn.net/v/t42.9040-2/10000000_132199404291612_315424292298817536_n.mp4?_nc_cat=0&efg=eyJybHIiOjIwODUsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&_nc_eui2=AeG8NGknaKL-VarNP-xDIYexWFWfNJTqxELye8NNg9V7RrR7EA4HRr4oAx_laUxUPuV9jGSXBleLwR_Olm434NMg6mp2fUQnLK5t2LcYHord3Q&rl=2085&vabr=1390&oh=21e77482cc502d352dbae502eb40ef1d&oe=5B2DB91D",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180130/b11ba14d4d62060178e84e103d859a57_220_320.jpg",
        season: "1",
        eps: "1",
        content: "Mùa thứ 5 của I Can See Your Voice: Một Music Show mang tới các giọng hát tài năng có cơ hội để thực hiện ước mơ của họ trở thành ngôi sao thành hiện thực. I Can See Your Voice mùa thứ 5 sẽ tiếp tục lên sóng với sự dẫn dắt của 3 MC chính: Leeteuk, Yoo Se-yoon, Kim Jong-kook.",
        actor: "Leeteuk, Yoo Se Yoon, Kim Jong Kook",
        director: " Mnet",
        category: "Phim Âm Nhạc, Phim Giải Trí-Sự Kiện",
        country: "Hàn Quốc",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "Dunia: Thế Giới Ảo",
        rate: "5 / 10 (50)",
        link: "https://r2---sn-i3b7kn7s.c.drive.google.com/videoplayback?id=1350225b5dc43c4b&itag=59&source=webdrive&requiressl=yes&mm=30&mn=sn-i3b7kn7s&ms=nxu&mv=m&pl=20&ttl=transient&ei=hCYtW8S9EoHYugW6l6LQCQ&susc=dr&driveid=1fr50taq5aIEDQSq9u5VkYeCXm3G88YqL&app=explorer&mime=video/mp4&lmt=1529274479659749&mt=1529685563&ip=117.0.5.25&ipbits=0&expire=1529689236&cp=QVNHQUdfWFJRR1hOOkFmN0FXZldDMHRK&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,ttl,ei,susc,driveid,app,mime,lmt,cp&signature=A9E17429C8A8B0CB894DF1E2A584AC389E98E682.2EDCBF4321505C9D7D20D0EB3986049C5E9913D3&key=ck2&cpn=uMt7lGmRwZsv88Qv&c=WEB_EMBEDDED_PLAYER&cver=20180621",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180614/f31ac54980bdf940cc74ff8f45cba841_223_320.jpg",
        season: "1",
        eps: "1",
        content: "TV show mới của đài MBC, những nhân vật nổi tiếng sẽ phải tìm cách sinh tồn trong rừng sâu",
        actor: "Yunho (TVXQ), Jung Hye Sung, Kwon Hyun Bin, Koo Ja Sung, Luda (WJSN), Sam Okyere, DinDin, Don Spike, Hansel, Austin Kang",
        director: "Park Jin Kyung, Lee Jae Suk",
        category: "Phim Giải Trí-Sự Kiện",
        country: "Hàn Quốc",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "Oppa Thinking",
        rate: "7 / 10 (70)",
        link: "https://i.rmbl.ws/s8/2/x/M/v/z/xMvza.caa.2.mp4",
        img: "http://s.aphim.co/uploads/film/images/modsz/20170620/2e9f8a4e2b1913c3b3082bc1e8f5e65a_220_320.jpg",
        season: "1",
        eps: "1",
        content: "Tv show mới của đài MBC.",
        actor: "Yang Se Hyung, Tak Jae Hoon, Yoo Se Yoon, Solbi, Kang Nam, Heo Kyung Hwan, Lee Sang Min, Lee Hyu Han",
        director: "Oh Mi Kyung",
        category: "Phim Giải Trí-Sự Kiện, Phim Hàn Quốc",
        country: "Hàn Quốc",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "Nhịp Đập Trái Tim 2",
        rate: "90 / 10 (90)",
        link: "https://api.banhtv.com/getfb/play.php?q=U2FsdGVkX1%2FEx%2FaEGLKoTTwOM1bclygNWUYyq40l%2FYLQpK1lX43%2BeaXzXhggfQGINT1vtprnDMfHsXcyEcRAOnF7E%2FRaME2YsE%2BhCPtHwIm%2FUwrEhTi6M0Efzrms0mfq",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180327/45a3e1b2ec86e95b012620ff876974af_226_320.jpg",
        season: "1",
        eps: "1",
        content: "Tv show Heart Signal Season 2 Nhịp Đập Trái Tim của đài Chanel A mùa 2: Cuộc sống chung của những người đàn ông trung niên và đàn ông trẻ tuổi bắt đầu tại Signal House, nơi đầy những kỳ vọng về tình yêu và sự lãng mạn. Người tiên đoán với kinh nghiệm phong phú trong việc hẹn hò và yêu đương sẽ phát hiện ra những cặp tiềm năng trong Signal House.",
        actor: "Yoon Jong-shin, Lee Sang-min, Kim Eana, Yang Jae-woong, Soyu, ONE",
        director: "N/A",
        category: "Phim Giải Trí-Sự Kiện",
        country: "Hàn Quốc",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "Nhịp Đập Trái Tim",
        rate: "8 / 10 (80)",
        link: "https://api.banhtv.com/getfb/play.php?q=U2FsdGVkX1%2BSoGNkd0tfHspE2befdWDhNwStZrwcGyBfdMu%2Fl2ERn3Nc1BjpzVCwGbN9XtWMklmq1j0w%2B6PGhfDZ9XD0toHu21Vxy2udnGhmZyZ613n1DireK0YU7S87",
        img: "http://s.aphim.co/uploads/film/images/modsz/20170718/b9da010024bd572cae4c06c07797b977_220_320.jpg",
        season: "1",
        eps: "1",
        content: "Nhịp Đập Trái Tim nói về cuộc sống chung của những người đàn ông trung niên và đàn ông trẻ tuổi bắt đầu tại Signal House, nơi đầy những kỳ vọng về tình yêu và sự lãng mạn. Người tiên đoán với kinh nghiệm phong phú trong việc hẹn hò và yêu đương sẽ phát hiện ra những cặp tiềm năng trong Signal House. Trò chơi tình cảm phấn khích bắt đầu ngay bây giờ..",
        actor: "Yoon Jong Shin, Lee Sang Min, Shindong, Kim Eana, Shim So Young, Yang Jae Woong",
        director: "Chanel A",
        category: "Phim Giải Trí-Sự Kiện",
        country: "Hàn Quốc",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "12 Kỵ Binh Quả Cảm",
        rate: "9 / 10 (845) ",
        img: "http://s.aphim.co/uploads/film/images/modsz/20171229/tt1413492_216_320.jpg",
        actor: "Chris Hemsworth, Elsa Pataky, Taylor Sheridan, Michael Shannon",
        director: "Nicolai Fuglsig",
        category: "Phim Hành Động, Phim Kịch Tính, Phim Cổ Trang",
        country: "Mỹ",
        content: "12 Strong - 12 Kỵ Binh Quả Cảm kể về câu chuyện của đội quân đặc biệt đầu tiên được triển khai tới Afghanistan sau ngày 9 tháng 11 dưới sự lãnh đạo của một đội trưởng mới... ",
        link: "https://video.fsgn5-3.fna.fbcdn.net/v/t42.9040-2/10000000_598766563809252_7461713117894934528_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=840&oh=3e61eed1a0eba4ee954d8f1fdb62d5bb&oe=5B2E3CE3",
        season: "1",
        eps: "1",
        tag: "Phim Hot",
    },
    {
        name: "Điều Kỳ Diệu Của Tiệm Tạp Hóa Namiya",
        rate: "7 / 10 (420)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180322/tt6298600_226_320.jpg",
        actor: "Masato Hagiwara, Kento Hayashi, Mugi Kadowaki, Nijirô Murakami",
        director: "Ryuichi Hiroki",
        category: "Phim Kịch Tính",
        country: "Nhật Bản",
        content: "Một tác phẩm với tình tiết hấp dẫn, cách kể chuyện khéo léo và đầy tính nhân văn. Mọi lời nhận xét trước khi xem đều không thể diễn tả được, vì vậy, mời mọi người thưởng thức. ",
        link: "https://video.fsgn5-5.fna.fbcdn.net/v/t42.9040-2/10000000_2062722103994581_6339212492983500800_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=542&oh=a497ac66cf8f2dbaba48d85dfac95f03&oe=5B2F1942",
        season: "1",
        eps: "1",
        tag: "Phim Hot",
    },
    {
        name: "Bí Mật Lầu Năm Góc",
        rate: "7.5 / 10 (15608)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180126/tt6294822_216_320.jpg",
        actor: "Meryl Streep, Tom Hanks, Sarah Paulson, Bob Odenkirk",
        director: "Steven Spielberg",
        category: "Phim Tiểu Sử, Phim Kịch Tính, Phim Cổ Trang",
        country: "Mỹ",
        content: "Việc che giấu bốn vị Tổng thống Hoa Kỳ đã thúc đẩy nhà xuất bản báo nữ đầu tiên của nước này và một biên tập viên lái xe khó khăn tham gia một cuộc chiến chưa từng có giữa báo chí và chính phủ. ",
        link: "https://video.fsgn5-5.fna.fbcdn.net/v/t42.9040-2/10000000_236486633593845_3512075151137046528_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=821&oh=191bf499cdd6db4d1358f7ce6828b2f3&oe=5B2F70DA",
        season: "1",
        eps: "1",
        tag: "Phim Hot",
    },
    {
        name: "50 Sắc Thái 3: Tự Do",
        rate: "4.4 / 10 (19437)",
        img: "http://image.phimmoi.net/film/6367/poster.medium.jpg",
        actor: "Dakota Johnson, Jamie Dornan, Eric Johnson, Eloise Mumford",
        director: "James Foley",
        category: "Phim Kịch Tính, Phim Tình Cảm",
        country: "Mỹ",
        content: "Phim 50 Sắc Thái Tự Do phần 3 nói về Anastasia đã trở thành bà Grey, lấy được anh chồng Christian đẹp trai và sống trong ngôi nhà mới nguy nga tráng lệ. Thế nhưng, những bóng ma quá khứ vẫn ám ảnh gia đình hạnh phúc của họ. Người đàn bà đã dẫn Christian Grey vào con đường đen tối và gã sếp cũ Jack Hyde liên tục tìm cách quấy phá đôi vợ chồng trẻ. Họ phải làm thế nào để giữ được hạnh phúc vừa được tạo dựng.",
        link: "https://api.banhtv.com/getfb/play.php?q=U2FsdGVkX1%2B33L9NI89NoTXR1kUU2VUgPyqvy1R0ft0QOXa3tGGGs14uu8opWn%2FWNiaX4%2BgEY1XKf6Tj0hNr%2B4DNuKeNYDkrnO1wZ7cr0VIctk3xKJ2aeNZtvSvVfaBH",
        season: "1",
        eps: "1",
        tag: "Phim Hot",
    },
    {
        name: "Trò Chơi Vương Quyền ",
        rate: "9.5 / 10 (1151164) ",
        img: "http://s.aphim.co/uploads/film/images/modsz/20170717/758a6aef3f712cfaec88d534f716146c_231_320.jpg",
        actor: "Lena Headey, Peter Dinklage, Kit Harington, Emilia Clarke",
        director: "N/A",
        category: "Phim Kịch Tính, Phim Phiêu Lưu, Phim Thần Thoại",
        country: "Anh, Mỹ",
        content: "Game of Throne - Trò Chơi Vương Quyền (phần 8 sẽ được chiếu năm 2019) kể về bảy gia tộc chiến đấu để làm chủ vùng đất thần thoại Westeros. Những gia tộc thống trị là Houses Stark, Lannister, và Baratheon. Vị vua của Westeros, Robert Baratheon, yêu cầu người bạn cũ của ông là Eddard – lãnh chúa Stark giữ chức vụ cao, Eddard miễn cưỡng chấp nhận mệnh lệnh để tìm ra sự thật đằng sau. Trong lúc ấy, gia tộc của Nữ hoàng, Lannisters, có lẽ đang dự tính mưu đồ để tước đoạt quyền lực. Ở phía bên kia biển khơi, những thành viên cuối cùng của dòng tộc trước đây đã bị truất phế quyền thống trị ,Targaryens, cũng đang sắp đặt kế hoạch giành lại ngai vàng. Còn ở phía cực Bắc, Bóng Trắng – loài quỷ vốn chìm trong giấc ngủ rất dài, nay đã thức giấc,… ",
        link: "https://video.fsgn5-7.fna.fbcdn.net/v/t42.9040-2/10000000_555879464795128_3083731968148373504_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=590&oh=edfe69f87aff48e339367c748dd395a1&oe=5B2FED5D",
        season: "1",
        eps: "1",
        tag: "Phim Hot",
    },
    {
        name: "Xác Sống ",
        rate: "8.5 / 10 (692366)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20171023/ce585bdf103f10ad28cc288ab08eb306_240_320.jpg",
        actor: "Andrew Lincoln, Steven Yeun, Chandler Riggs, Norman Reedus",
        director: " N/A",
        category: "Phim Kịch Tính, Phim Rùng Rợn",
        country: "Mỹ",
        content: 'The Walking Dead - Xác Sống nói về cuộc sống sau thảm họa dịch bệnh thây ma, về một nhóm nhỏ những người sống sót sau sự bùng nổ của đại dịch. Phần lớn câu chuyện diễn ra ở trung tâm Atlanta, những người sống sót cố sức tìm một nơi trú thân mới, chạy trốn những thây ma ăn thịt sống (trong phim còn gọi là những "walker"). Cốt truyện tập trung chủ yếu vào tính nhân văn sau tận thế và cách con người tranh đấu để sống còn. Nhóm người này được dẫn đầu bởi Rick Grimes - cựu phó quận trưởng cảnh sát ở một thị trấn nhỏ tại Georgia. Khi tình hình ngày càng trở nên hiểm nghèo, sự tuyệt vọng của nhóm người này đã đẩy họ đến bờ vực của sự mất trí. Dù đi đến đâu, họ cũng phải đối mặt với nỗi kinh hãi từ những thây ma, sự mất đoàn kết, cũng như sự đối địch của số nhỏ những người còn sống rải rác ở nơi khác chỉ quan tâm đến sự sống còn của riêng mình, khi mà trật tự xã hội trên toàn cầu đã sụp đổ...',
        link: "https://video.fsgn5-5.fna.fbcdn.net/v/t42.9040-2/10000000_163555074354856_4584371860375863296_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MTUsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1515&vabr=1010&oh=149446b0a41b56049e2c92c337b1d9ce&oe=5B301092",
        season: "1",
        eps: "1",
        tag: "Phim Hot",
    },
    {
        name: "Giải Mã Mê Cung 3: Lối Thoát Tử Thần",
        rate: "6.8 / 10 (26500) ",
        img: "http://s.aphim.co/uploads/film/images/modsz/20170926/feee6cbf6a87d01de956167f26c13f13_203_320.jpg",
        actor: "Kaya Scodelario, Dylan O'Brien, Nathalie Emmanuel, Katherine McNamara",
        director: "Wes Ball",
        category: "Phim Hành Động, Phim Viễn Tưởng, Phim Kinh Dị",
        country: "Mỹ",
        content: "Phim Giải Mã Mê Cung 3: Lối Thoát Tử Thần tiếp tục câu chuyện Thomas biết rằng Wicked không thể tin tưởng, nhưng họ nói rằng thời gian cho những lời nói dối đã qua, họ đã thu thập tất cả họ có thể từ các thử nghiệm và bây giờ phải dựa vào Gladers, với những kỷ niệm đầy đủ phục hồi, để giúp họ với cuối cùng của họ nhiệm vụ. Nó thuộc vào các Gladers để hoàn thành các kế hoạch chi tiết cho việc chữa bệnh cho Flare với một xét nghiệm tự nguyện thức.Có gì Wicked không biết là cái gì đó đã xảy ra mà không dùng thử hoặc biến có thể đoán trước. Thomas đã nhớ nhiều hơn so với họ nghĩ. Và ông biết rằng ông không thể tin rằng một lời gì Wicked nói. Thời gian dối là hơn. Nhưng sự thật là nguy hiểm hơn Thomas bao giờ có thể tưởng tượng. ai sẽ sống sót Cure Death? Mời các bạn đón xem diễn biến của tập phim sẽ diễn ra như thế nào nhé! Chúc các bạn một ngày vui vẻ ^^!",
        link: "https://video.fhan5-1.fna.fbcdn.net/v/t42.9040-2/10000000_584753688545856_3342548144809312256_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=893&oh=a611a1246a5c88fbd1b75b3b2eb20f36&oe=5B2F5167",
        season: "1",
        eps: "1",
        tag: "Phim Hot",
    },
    {
        name: "Bác Sĩ Thiên Tài",
        rate: "8.5 / 10 (1361)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20170928/tt6470478_216_320.jpg",
        actor: "Freddie Highmore, Richard Schiff, Hill Harper, Nicholas Gonzalez",
        director: "N/A",
        category: "Phim Kịch Tính",
        country: "Mỹ",
        content: "Trong phim Bác Sĩ Thiên Tài nói về một bác sĩ trẻ mắc hội chứng bác học được nhận vào khoa phẫu thuật tim của một bệnh viện danh tiếng. Liệu một người bị tự kỷ có thể cứu người? Mời các bạn xem ngay phim Bác Sỹ Thiên Tài - The Good Doctor nhé.",
        link: "https://video.fhan5-6.fna.fbcdn.net/v/t42.9040-2/10000000_185324868936014_6645350322959024128_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=925&oh=9808d74e64a95de5e24b2d71307a874a&oe=5B30BC96",
        season: "1",
        eps: "1",
        tag: "Phim Hot",
    },
    {
        name: "Vụ Bắt Cóc Triệu Đô",
        rate: "7 / 10 (18454)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180326/tt5294550_216_320.jpg",
        actor: "Michelle Williams, Christopher Plummer, Mark Wahlberg, Romain Duris",
        director: "Ridley Scott",
        category: "Phim Tiểu Sử, Phim Kịch Tính, Phim Tội Phạm - Hình Sự",
        country: "Mỹ",
        content: "Bối cảnh phim Vụ Bắt Cóc Triệu Đô vào mùa hè năm 1973, cháu trai của ông trùm dầu hoả J.P. Getty bị bắt cóc ở Rome bởi một băng đảng mafia Ý. Những kẻ bắt cóc đòi số tiền chuộc lên đến 17 triệu đô la, thế nhưng Getty keo kiệt từ chối trả khoản tiền chuộc. Khi ấy một bức thư cảnh báo đã được gửi đến: Đó là chiếc tai bị cắt lìa của cậu cháu trai. Với khao khát tột cùng muốn cứu lấy cậu con trai trước khi cậu bé chết không toàn thây. Người mẹ không đồng xu dính túi nhưng giàu lòng yêu thương cầu cứu sự giúp đỡ từ một cựu nhân viên đàm phán của CIA. Từ đó bà ấy bắt đầu một cuộc đua gấp gáp để cứu lấy con trai mình.",
        link: "https://video.fsgn5-6.fna.fbcdn.net/v/t42.9040-2/10000000_199651757505656_1312300486761644032_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=626&oh=5050728adb02f4d2c410b3ec6380bdec&oe=5B300454",
        season: "1",
        eps: "1",
        tag: "Phim Hot",
    },
    {
        name: "Bậc Thầy Của Những Ước Mơ",
        rate: "8 / 10 (74496)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180305/tt1485796_216_320.jpg",
        actor: "Hugh Jackman, Michelle Williams, Zac Efron, Zendaya",
        director: "Michael Gracey",
        category: "Phim Tiểu Sử, Phim Kịch Tính",
        country: "Mỹ",
        content: "The Greatest Showman là tác phẩm nhạc kịch thứ 2 mà Hugh Jackman tham gia. Cách đây 5 năm, anh từng thủ vai chính trong bộ phim nhạc kịch Les Misérables (2012) và nhận được một đề cử Oscar danh giá ở hạng mục Nam diễn viên chính xuất sắc.",
        link: "https://video.fhan5-7.fna.fbcdn.net/v/t42.9040-2/10000000_164548120880286_937402313436299264_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=683&oh=0e2eac357fec42c35cdbb21ad5ea0089&oe=5B2F05F2",
        season: "1",
        eps: "1",
        tag: "Phim Hot",
    },
    {
        name: "Yêu Miêu Truyện",
        rate: "6.5 / 10 (259)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180112/1ef5de25a728d5da9ecf9e0cb5cfab58_213_320.jpg",
        actor: "Shôta Sometani, Xuan Huang, Yuqi Zhang, Hao Qin",
        director: "Kaige Chen",
        category: "Phim Tiểu Sử, Phim Kịch Tính, Phim Cổ Trang",
        country: "Trung Quốc",
        content: "Mùa hè ở Thành Trường An, phu nhân của tể tướng Trần Vân Tiều, Xuân Cầm bị ám bởi một con yêu miêu. Xuân Cầm bị kiểm soát hoàn toàn bởi con yêu quái và hành động càng ngày càng kỳ lạ. Cùng thời điểm đó, Hoàng đế Đường Huyền Tông đang hấp hối trong cung điện. Nhà sư Không Hải người Nhật được mời đến để trục xuất yêu ma khỏi nhà vua. Ông cảm nhận được sự hiện diện của yêu miêu và cái chết của nhà vua có liên quan đến nó",
        link: "https://video.fsgn5-1.fna.fbcdn.net/v/t42.9040-2/10000000_1966486753680774_1092954587104542720_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=571&oh=02f8f0214cb56c8a6202e919c87308d3&oe=5B2E454C",
        season: "1",
        eps: "1",
        tag: "Phim Hot",
    },
    {
        name: "Chiến Tranh Giữa Các Vì Sao 8: Jedi Cuối Cùng",
        rate: "7.6 / 10 (261586)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180105/tt2527336_216_320.jpg",
        actor: "Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley",
        director: "Rian Johnson",
        category: "Phim Hành Động, Phim Phiêu Lưu, Phim Thần Thoại",
        country: "Mỹ",
        content: "Phim Chiến Tranh Giữa Các Vì Sao 8: Jedi Cuối Cùng - Star Wars: The Last Jedi là một bộ phim sử thi không gian sắp tới của Mỹ viết kịch bản và đạo diễn bởi Rian Johnson. Nó sẽ là bộ phim thứ 2 trong bộ ba phần sequel tiếp sau Star Wars: The Force Awakens.",
        link: "http://ok2.cdn.phimmoi.net/72607cc052a211937d1dbebeed82ff701529748000/PhimMoi.Net--[@6737226c][360p][T1524140119]Star.Wars.The.Last.Jedi.2017.1080p.BluRay.x264-Vietsub.mp4",
        season: "1",
        eps: "1",
        tag: "Phim Hot",
    },
    {
        name: "My Daughter's Men 3",
        rate: "0 / 10 (0)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180423/c3a1d23daea32f25e50cec81f85436b8_220_320.jpg",
        actor: "Shin Hyun Joon, Lee Soo Geun, Kim Hee Chul (Super Junior), Sojin (Girl's Day), Jang Gwang, Lee Kwang Gi, Hong Seo Beom",
        director: "N/A",
        category: "Phim Giải Trí-Sự Kiện",
        country: "Hàn Quốc",
        content: "Mùa 3 của My Daughter's Men: Bốn người cha nổi tiếng theo dõi cuộc hẹn hò con gái của họ với bạn trai. Những người cha sẽ nói gì, và họ sẽ phản ứng thế nào khi họ quan sát.",
        link: "https://video.xx.fbcdn.net/v/t42.9040-2/10000000_1720079284695779_7116332893290364928_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ==&rl=1500&vabr=858&oh=23d42724772afb5e64a7f2fc002cb9ec&oe=5B2EA1E2",
        season: "1",
        eps: "1",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "Nhà Trọ Của Hyori 2",
        rate: "0 / 10 (0)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180208/689eea4748cb81e247050df398bedd15_220_320.jpg",
        actor: "Park Bo Gum, SNSD YoonA, Lee Sang Soon, Lee Hyori",
        director: "JTBC",
        category: "Phim Giải Trí-Sự Kiện",
        country: "Hàn Quốc",
        content: 'Nhà Trọ Của Hyori mùa thứ 2 - 2018 là show kể về cặp vợ chồng ca sỹ nổi tiếng Lee Hyori và chồng Lee Sang Hoon mở Bed& Breakfast tại đảo Jeju Nhà Trọ của Hyori là chương trình thực tế về cuộc sống hôn nhân của Gia đinh Hyori với sự tham gia giúp sức của cô nàng IU.',
        link: "https://archive.org/download/100000007823974786368325587835190345990144Nnhatro16/10000000_782397478636832_5587835190345990144_nnhatro16.mp4",
        season: "1",
        eps: "1",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "1% Tình Bạn",
        rate: "0 / 10 (0)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180403/14b05cc29eb679e9dee57100565cc283_220_320.jpg",
        actor: "Kim Hee Chul, Jeong Hyung Don, Bae Chul Soo",
        director: "N/A",
        category: "Phim Giải Trí-Sự Kiện",
        country: "Hàn Quốc",
        content: '1% Tình Bạn là 1 show thực tế nơi mà 2 người có tính cách đối lập nhau, dành thời gian cho nhau để xây dựng một tình bạn',
        link: "https://api.banhtv.com/getfb/play.php?q=U2FsdGVkX19ihKo%2BMfNDB5hRbVsVjNgf%2BwhWMsWgm6fpGPL%2BxNcwVyGMy1M49ctPU2xCtmdl6eSF6I4lf0W%2BspUSHIT3NGaixEaUU440sj1U%2FZM5fC8reyKYR6DeKJmv",
        season: "1",
        eps: "1",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "My Daughter's Men 2",
        rate: "0 / 10 (0)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180124/5d353508c70e1a419beed94e07c6c7ef_220_320.jpg",
        actor: "Lee Su Geun, Kim Hee Chul, So Jin, Kim Tae Won, Jang Gwang, Park Jeong Hak, Bae Dong Sung",
        director: "JTBC",
        category: "Phim Giải Trí-Sự Kiện",
        country: "Hàn Quốc",
        content: "Mùa 2 của My Daughter's Men: Bốn người cha nổi tiếng theo dõi cuộc hẹn hò con gái của họ với bạn trai. Những người cha sẽ nói gì, và họ sẽ phản ứng thế nào khi họ quan sát.",
        link: "https://video.fsgn5-7.fna.fbcdn.net/v/t42.9040-2/10000000_159048204797151_7230674109644931072_n.mp4?_nc_cat=0&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9oZCJ9&oh=51b6a57c0f8fe3c26669dc9fee665af4&oe=5B2E022D",
        season: "1",
        eps: "1",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "Youn's Kitchen 2",
        rate: "0 / 10 (0)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180124/2f4687f9af3783b346c4c3a71aed24f8_220_320.jpg",
        actor: "N/A",
        director: "N/A",
        category: "Phim Giải Trí-Sự Kiện",
        country: "Hàn Quốc",
        content: 'Show về ẩm thực',
        link: "https://video.fsgn5-7.fna.fbcdn.net/v/t42.9040-2/10000000_2077326242551194_8094336803886071808_n.mp4?_nc_cat=0&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9oZCJ9&oh=8e9d0391b641f756317fa9822d73b190&oe=5B2E0604",
        season: "1",
        eps: "1",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "Thử Thách Cực Đại",
        rate: "4.9 / 10 (1398)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20150526/7a23c6e539dd761a41fb3ab067a377bc_224_320.png",
        actor: "ark Myeong Su, Jeong Jun Ha, Noh Hong Chul",
        director: "N/A",
        category: "Phim Âm Nhạc, Phim Kịch Tính, Phim Giải Trí-Sự Kiện   ",
        country: "Hàn Quốc",
        content: 'Thử Thách Cực Đại (Hàn Quốc) lấy chủ đề là thử thách bất kì công việc gì, bất kì lúc nào, bất kể thời tiết và tình huống, Infinity Challenge giới thiệu đến khán giả yêu thích chương trình thực tế nhiều tình huống vui nhộn và luôn mang lại tiếng cười trong suốt chương trình. Đặc biệt thú vị hơn với sự đồng hành của nhiều nghệ sĩ nổi tiếng của Hàn Quốc.',
        link: "http://cloud3.cdngooqle.stream/videos/yr9t6hf797b9zyk7ad5qbygube.mp4",
        season: "1",
        eps: "1",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "Thực Tập Sinh Thần Tượng",
        rate: "0 / 10 (0)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180125/77726c85368e2a6de0f6f015c0c379a6_213_320.jpg",
        actor: "Trương Nghệ Hưng, Vương Gia Nhĩ, Lý Vinh Hạo",
        director: "N/A",
        category: "Phim Âm Nhạc, Phim Giải Trí-Sự Kiện",
        country: "Trung Quốc",
        content: 'Produce 101 Bản Trung. Thực Tập Sinh Thần Tượng là một chương trình thực tế được phát song trên iQiyi. Đây là một chương trình mà khán giả sẽ lựa chọn ra 9 trong số 100 thực tập sinh đến từ các công ty giải trí khắp Trung Quốc, để tạo ra một nhóm nhạc thần tượng nam hoàn toàn mới.',
        link: "https://r3---sn-i3beln7d.c.drive.google.com/videoplayback?id=e1396f211c7d75a2&itag=59&source=webdrive&requiressl=yes&mm=30&mn=sn-i3beln7d&ms=nxu&mv=m&pl=20&ttl=transient&ei=yRcuW9__Lsu1ugWI7ZvgCA&susc=dr&driveid=1cp64ABo2NNxGPoeNvCe3VkHilnWps32a&app=explorer&mime=video/mp4&lmt=1517929324625743&mt=1529747301&ip=117.0.3.19&ipbits=0&expire=1529751001&cp=QVNHQUhfUFBOQlhOOkhuZmV4VGtNbzI1&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,ttl,ei,susc,driveid,app,mime,lmt,cp&signature=85B93AFD2E567E2441B39F25885C484BA9539607.7C5E8A3D504E8A00B9A5FE1DD13EF1C5E4842C89&key=ck2&cpn=QdFuJksKf3g2YNdQ&c=WEB_EMBEDDED_PLAYER&cver=20180621",
        season: "1",
        eps: "1",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "We Got Married Lee Jong Hyun & Seung Yeon",
        rate: "0 / 10 (0)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20150526/4a1b6b2159bf30feca4b8509e6f153f4_240_320.png",
        actor: "So-eun Kim, Jae-rim Song, Jin-Young Hong, Jong-Hyun Hong",
        director: "N/A",
        category: "Phim Âm Nhạc, Phim Kịch Tính, Phim Giải Trí-Sự Kiện",
        country: "Hàn Quốc",
        content: 'We Got Married là một chương trình giải trí Hàn Quốc, bắt đầu lên sóng từ 2008. Chương trình sẽ xếp cặp cho các nghệ sĩ Hàn để họ có thể trải nghiệm cuộc sống sau kết hôn. Mỗi tuần sẽ có 1 nhiệm vụ dành cho các cặp, xen vào đó là phần phóng vấn suy nghĩ và cảm xúc của họ về nhau. Jong Hyun của nhóm nhạc Rock CNBLUE đóng vai người chồng còn Gong Seung Yeon (nữ diên viên trẻ) sẽ là người vợ.',
        link: "https://videos.files.wordpress.com/kvL9Du1i/02-we-got-married-284_hd.mp4",
        season: "1",
        eps: "1",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "The Unit",
        rate: "0 / 10 (0)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20171120/1e008bf78baded4c2b95e37eaae97b86_220_320.jpg",
        actor: "SHINee Taemin, Urban Zakapa Jo Hyun Ah, San E, HyunA, Hwang Chi Yeol, Rain",
        director: "KBS2",
        category: "Phim Âm Nhạc, Phim Giải Trí-Sự Kiện",
        country: "Hàn Quốc",
        content: 'The Unit là một chương trình truyền hình thực tế sống còn của Hàn Quốc sắp được phát sóng bắt đầu từ ngày 28 tháng 10 năm 2017 trên kênh KBS2. Chương trình tạo cơ hội cho những thần tượng đã ra mắt nhưng không nhận được sự chú ý của công chúng tỏa sáng một lần nữa.',
        link: "https://vredir.nixcdn.com/SongClip33/TheUnitTap1Vietsub-VA-5261104.mp4?st=i9cnBXlnmYCLDsjCio1_gA&e=1529816430&t=1529730030839",
        season: "1",
        eps: "1",
        tag: "Game Show Truyền Hình",
    },
    {
        name: "Siêu Thú Cuồng Nộ",
        rate: "6.5 / 10 (6837)",
        link: "https://api.banhtv.com/getfb/play.php?q=U2FsdGVkX1%2FdhxfI1oKqSKqaJgpB2a6X%2B3FiOkuhs7Yca3fe17BbvSFzra7fQ5entfGrZk338Z3vxwSmi1ECDXTjNNgG9d%2F3IWlCaZoMQLFK%2Be0iE4nU%2Bco8LefE2j0E",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180416/tt2231461_216_320.jpg",
        season: "1",
        eps: "1",
        content: "Rampage - Siêu Thú Cuồng Nộ nói về nhà sinh vật học Davis Okoye (Dwayne Johnson) đã kết bạn với George, một con khỉ đột thông minh, người đã được chăm sóc từ khi sinh ra. Tuy nhiên, một thí nghiệm di truyền giả mạo đã biến đổi con khỉ nhuyễn thành một con quái vật. Khi các con quái vật mới được tạo ra này tràn ngập khắp Bắc Mỹ, phá hủy mọi thứ trên con đường của họ, Okoye đã làm việc với một kỹ sư di truyền bị để tìm ra thuốc giải độc, chiến đấu để vượt qua một chiến trường luôn thay đổi, không chỉ để ngăn chặn một thảm hoạ toàn cầu mà còn cứu được sinh vật đã từng là bạn của mình. ",
        actor: "Dwayne Johnson, Jeffrey Dean Morgan, Malin Akerman, Joe Manganiello",
        director: "Brad Peyton",
        category: "Phim Viễn Tưởng, Phim Phiêu Lưu, Phim Hành Động",
        country: "Mỹ",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Đấu Trường Ảo",
        rate: "9 / 10 (900) ",
        link: "https://api.phimbathu.com/getfb/play.php?q=U2FsdGVkX1%2F5sdtYjXdC4AwMJKU6hdyyKDbfCMIxIr3UPRCINF7d0jKWfMriTrM%2FXiJASythdFFBcjTgk%2BO7I29Ez3PvtgejuJW0dbU8GEbEU2%2BPvwEJH1ZtbgcSguNq",
        img: "http://s.aphim.co/uploads/film/images/modsz/20171223/tt1677720_216_320.jpg",
        season: "1",
        eps: "1",
        content: "Ready Player One - Đấu Trường Ảo được dựng thành phim dựa trên tiểu thuyết cùng tên của tác giả Ernest Cline. Bộ phim lấy bối cảnh năm 2044, khi người sáng lập ra Oasis - một tựa game online, mất mạng. Khi đó, ông thách thức tất cả những người chơi Oasis đi tìm Easter Eggs - Trứng phục sinh. Phần thưởng dành cho người chiến thắng là những tài sản vô cùng quý báu mà ông để lại. Một chàng trai mang tên Wade Watts đã tìm ra được những gợi ý đầu tiên trong cuộc tìm kiếm và bắt đầu hành trình của mình. ",
        actor: "Olivia Cooke, Hannah John-Kamen, T.J. Miller, Ben Mendelsohn",
        director: "Steven Spielberg",
        category: "Phim Viễn Tưởng, Phim Phiêu Lưu, Phim Hành Động",
        country: "Mỹ",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Điệp Vụ Chim Sẻ Đỏ",
        rate: "7 / 10 (60421) ",
        img: "http://image.phimmoi.net/film/6789/poster.medium.jpg",
        actor: "Jennifer Lawrence, Ciarán Hinds, Mary-Louise Parker, Jeremy Irons",
        director: "Francis Lawrence",
        category: "Phim Kinh Dị",
        country: "Mỹ",
        content: "Phim Điệp Vụ Chim Sẻ Đỏ nói về Dominika Egorova (Jennifer Lawrence) bất đắc dĩ được chọn để đào tạo thành một chim sẻ, môt điệp viên có sức quyến rũ chết người của Tổng cục an ninh Nga. Dominika phải học cách sử dụng cơ thể như một loại vũ khí, tuy nhiên cô vẫn luôn đấu tranh để duy trì ý thức về bản thân trong suốt quá trình huấn luyện làm vô nhân hóa. Được phát hiện ra tài năng trong một hệ thống tiêu cực, cô nổi lên là một trong những người giỏi nhất của chương trình đào tạo. Mục tiêu đầu tiên của cô là Nate Nash (Joe Edgerton), một nhân viên của CIA, đảm trách nhiệm vụ nằm vùng nhạy cảm nhất của cơ quan tình báo Nga. Hai con người trẻ tuổi rơi vào vòng xoáy luẩn quẩn giữa lôi cuốn và lừa dối, đe dọa đến sự nghiệp của họ, lòng trung thành và an ninh của cả hai quốc gia.",
        link: "https://video.fhan5-2.fna.fbcdn.net/v/t42.9040-2/10000000_1878270458890496_4446532882239848448_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=446&oh=1bd43a0e93a639d528c7c2be92b53846&oe=5B2EF501",
        season: "1",
        eps: "1",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Tài Khoản Ma",
        rate: "4.2 / 10 (90)",
        img: "http://image.phimmoi.net/film/6891/poster.medium.jpg",
        actor: "Kachai Pich, Fahkuelon Ratsameekhae, Klai-Udom Sarantorn",
        director: "Weeratham Preedee",
        category: "Phim Rùng Rợn, Phim Kinh Dị",
        country: "Thái Lan",
        content: "Phim Tài Khoản Ma: Một trong những cái tên đó, Malisa (Mean-SARUNTHORN KLAIUDOM), chủ thương hiệu make-up nổi tiếng, bắt đầu gặp phải những sự cố kỳ lạ. Những người bị tag vào video bắt đầu chết từng người một, làm Jak (PITT KARCHAI), bạn trai của Malisa, quyết tâm tìm hiểu sự thật đằng sau những gì đã xảy ra. Jak cần chính mình phải điều tra sự việc. Liệu Malisa có thể thoát ra an toàn? Làm thế nào Jak có thể giúp bạn gái của mình? Nhanh lên và chuẩn bị ngạc nhiên bởi những điều kinh hoàng vượt ra ngoài trí tưởng tượng hoang dã của bạn !!!",
        link: "https://video.fhan5-3.fna.fbcdn.net/v/t42.9040-2/10000000_976752005814681_1188472881651122176_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=477&oh=7ddad1caa61f52a40bdeaf80696e7f33&oe=5B2EE6ED",
        season: "1",
        eps: "1",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Thám Tử Siêu Quậy",
        rate: "4.8 / 10 (2743)",
        img: "http://image.phimmoi.net/film/6873/poster.medium.jpg",
        actor: "Kelly Asbury, Mary J. Blige, Emily Blunt, Julio Bonet",
        director: "John Stevenson",
        category: "Phim Hoạt Hình, Phim Phiêu Lưu, Phim Hài Hước",
        country: "Mỹ, Anh",
        content: "Trở lại từ khu vườn nơi mà Gnomeo và Juliet sinh sống, những chú lùn lần này sẽ có cuộc hành trình mới đầy hứa hẹn tại thành phố London. Khi Gnomeo và Juliet lần đầu đặt chân đến thành phố này cùng bạn bè và gia đình, họ đã nhận ra rằng khu vườn mới của họ đang bước sang mùa xuân",
        link: "https://video.fsgn5-5.fna.fbcdn.net/v/t42.9040-2/10000000_380459562447685_1666216005384273920_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=776&oh=335d79e30796d1af4817f1593d0ec470&oe=5B30A9FD",
        season: "1",
        eps: "1",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Quái Nhân 2",
        rate: "8.1 / 10 (132) ",
        link: "https:video.xx.fbcdn.net/v/t42.9040-2/10000000_1026051590893078_3837080471796187136_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=716&oh=6a5ec91dc6010298fae09b1e594ff770&oe=5B2F3E0F",
        img: "http://image.phimmoi.net/film/5001/poster.medium.jpg",
        season: "1",
        eps: "1",
        content: "Phim Quái Nhân 2 - Deadpool 2: Sau khi sống sót khỏi pha tấn công chí mạng của bò tót, một đầu bếp dị dạng (Wade Wilson) chật vật để hoàn thành ước mơ trở thành người pha chế nóng bỏng nhất của Mayberry trong khi phải quen với việc mất đi vị giác. Trong hành trình tìm lại niềm vui cuộc sống và công tắc du hành thời gian, Wade phải chiến đấu với đám ninja, Yakuza và bầy chó quyến rũ. Hắn chu du vòng quanh thế giới để khám phá tầm quan trọng của gia đình, tình bạn và mùi vị - trải nghiệm chuyến phiêu lưu mới và giành danh hiệu hằng mơ ước bấy lâu - Người Tình Tuyệt Nhất Thế GIới.",
        actor: "Morena Baccarin, Ryan Reynolds, Josh Brolin, T.J. Miller",
        director: "David Leitch",
        category: "Phim Phiêu Lưu, Phim Hài Hước, Phim Hành Động",
        country: "Mỹ",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Biệt Đội Siêu Anh Hùng 3: Cuộc Chiến Vô Cực",
        rate: "8.9 / 10 (301401)",
        link: "https://video.fhan5-3.fna.fbcdn.net/v/t42.9040-2/10000000_107191213478417_7480688158854610944_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=781&oh=efa25e3888d3e3ec8042ffc67f036b83&oe=5B2E8FB0",
        img: "http://image.phimmoi.net/film/3244/poster.medium.jpg",
        season: "1",
        eps: "1",
        content: "Sau chuyến hành trình độc nhất vô nhị không ngừng mở rộng và phát triển vụ trũ điện ảnh Marvel, bộ phim Avengers: Cuộc Chiến Vô Cực sẽ mang đến màn ảnh trận chiến cuối cùng khốc liệt nhất mọi thời đại. Biệt đội Avengers và các đồng minh siêu anh hùng của họ phải chấp nhận hy sinh tất cả để có thể chống lại kẻ thù hùng mạnh Thanos trước tham vọng hủy diệt toàn bộ vũ trụ của hắn.",
        actor: "Tessa Thompson, Chris Hemsworth, Tom Hiddleston, Scarlett Johansson",
        director: "Anthony Russo, Joe Russo",
        category: "Phim Phiêu Lưu, Phim Thần Thoại, Phim Hành Động",
        country: "Mỹ",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Cuộc Chiến Ngầm",
        rate: "6.8 / 10 (667)",
        img: "http://image.phimmoi.net/film/5638/poster.medium.jpg",
        actor: "Kyung-gu Sol, Si-wan Im, Kyoung-Young Lee, Hye-jin Jeon",
        director: "Sung-hyun Byun",
        category: "Phim Kịch Tính, Phim Tội Phạm - Hình Sự, Phim Hành Động",
        country: "Hàn Quốc",
        content: "Câu chuyện xoay quanh mối quan hệ giữa một tên tội phạm ôm khát vọng trở thành ông trùm (Sul Kyung-gu đóng) và gã bạn tù trẻ tuổi liều lĩnh (Yim Si-wan đóng). Giữa họ là đầy rẫy những toan tính và bí mật có thể xoay chuyển lòng tin và vị thế con người.",
        link: "https://video.fsgn5-3.fna.fbcdn.net/v/t42.9040-2/10000000_215671392552705_5000929915097317376_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=575&oh=eacc89639aa92d2ac22a9a21a52fdc6a&oe=5B30CC9A",
        season: "1",
        eps: "1",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Thương Mến Simon",
        rate: "8.1 / 10 (7090)",
        img: "http://image.phimmoi.net/film/6856/poster.medium.jpg",
        actor: " Nick Robinson, Jennifer Garner, Josh Duhamel, Katherine Langford",
        director: "Greg Berlanti",
        category: "Phim Kịch Tính, Phim Tình Cảm, Phim Hài Hước",
        country: "Mỹ",
        content: "Yêu anh, Simon - Love, Simon (2018) là một bộ phim về chủ đề LGBT, nội dung phim xoay quanh anh chàng Simon, trong khi những người khác, ai cũng xứng đáng có được một câu chuyện tình yêu tuyệt vời, thì với cậu, mọi chuyện có vẻ phức tạp hơn thế. Không ai biết rằng cậu là gay, và cậu không biết người bạn online mà cậu phải lòng, là ai trong số những người bạn cùng lớp với cậu.Simon cố gắng để giải quyết cả hai vấn đề đó, và điều ấy dẫn đến những tình huống dở khóc dở cười, nhưng đủ sức thay đổi cả cuộc sống của cậu. Phim Yêu anh, Simon - Love, Simon (2018) được cầm trịch bởi đạo diễn Greg Berlanti với sự tham gia của các diễn viên trẻ Katherine Langford, Nick Robinson, Jennifer Gaer,... hứa hẹn sẽ là bộ phim tình cảm hài hước được ra rạp vào tháng 3 năm nay.",
        link: "https://video.fhan5-5.fna.fbcdn.net/v/t42.9040-2/10000000_347521992438719_1578564338577309696_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=688&oh=18c9f46a48ad7e7fa7b3d7af40b56ba1&oe=5B2F9EFF",
        season: "1",
        eps: "1",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Vụ Cướp Trong Tâm Bão",
        rate: "4.9 / 10 (2244)",
        img: "http://image.phimmoi.net/film/6606/poster.medium.jpg",
        actor: "Toby Kebbell, Maggie Grace, Ryan Kwanten, Ralph Ineson",
        director: "Rob Cohen ",
        category: "Phim Hành Động, Phim Phiêu Lưu, Phim Kinh Dị",
        country: "Mỹ",
        content: "Vụ Cướp Trong Tâm Bão lấy bối cảnh ở một thị trấn nhỏ ven biển nước Mỹ đang bị một cơn bão thế kỷ nhăm nhe tấn công. Trong cơn hoảng loạn của tất cả người dân cũng như chính quyền nơi đây thì lại có một âm mưu khác đã được lên kế hoạch. Một băng nhóm phản động thuộc chính phủ đang lợi dụng sự rối ren này để thừa cơ hội chiếm đoạt khoản tiền khổng lồ 600 USD từ Kho bạc Mỹ. Khi tất cả mọi người dân đã di dời tránh bão để lại một thị trấn hoang vắng cũng chính là lúc bọn tội phạm tiến hành vụ cướp của mình, tại đây chỉ còn lại một nhân viên Kho bạc cố gắng ngăn chặn âm mưu này. Anh em Will và Breeze là những người còn lại trên thị trấn cũng bất đắc dĩ cuốn theo cuộc chạy đua với tử thần để ngăn chặn vụ cướp.",
        link: "https://video.fsgn5-6.fna.fbcdn.net/v/t42.9040-2/10000000_238880780200858_813239679401852928_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=701&oh=8e5a88191a63e7ae069b262a45e23e8a&oe=5B301314",
        season: "1",
        eps: "1",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Tomb Raider: Huyền Thoại Bắt Đầu",
        rate: "6.8 / 10 (36672) ",
        link: "https://api.phimbathu.com/getfb/play.php?q=U2FsdGVkX181Tfvfsrnb28LzPGDSPqzp1DoybbRJ5YWNwIHXGyh6jSA3dgWL3EAfBRx%2FyXZwY%2FCWKurxmNCJaQu1pgkVwUo5YYTXI2l1s3Y3mm6CJ1QNYEVEfF4s5AMR",
        img: "http://image.phimmoi.net/film/6605/poster.medium.jpg",
        season: "1",
        eps: "1",
        content: "Tomb Raider: Huyền Thoại Bắt Đầu 2018 là cuộc hành trình trở thành huyền thoại của Lara Croft - con gái của nhà khảo cổ học & doanh nhân Richard Croft. Trước khi mất tích, Richard đã để lại lời nhắn cho con gái mình về hòn đảo bí ấn & tổ chức Trinity với kế hoạch hủy diệt thế giới. Hãy cùng Lara Croft vén bức màn bí mật & cứu thế giới. ",
        actor: "Alicia Vikander, Dominic West, Walton Goggins, Daniel Wu",
        director: "Roar Uthaug",
        category: "Phim Phiêu Lưu, Phim Hành Động",
        country: "Mỹ",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Nếp Gấp Thời Gian",
        rate: "4.2 / 10 (13000)",
        img: "http://image.phimmoi.net/film/6369/poster.medium.jpg",
        actor: "Oprah Winfrey, Chris Pine, Reese Witherspoon, Mindy Kaling, Michael",
        director: "Ava DuVernay",
        category: "Phim Viễn Tưởng, Phim Phiêu Lưu, Phim Hành Động",
        country: "Mỹ",
        content: "Bộ phim Nếp Gấp Thời Gian - A Wrinkle In Time dẫn dắt khán giả đến một cuộc phiêu lưu kỳ thú phá vỡ những định luật bất biến để xuyên qua không gian và thời gian đồng thời khám phá bản chất của bóng tối và ánh sáng. ",
        link: "https://video.fsgn5-6.fna.fbcdn.net/v/t42.9040-2/10000000_626814424326911_6735540989747789824_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=676&oh=a082167e04753af2ebe0457fdd3366c0&oe=5B300455",
        season: "1",
        eps: "1",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Nhọ Gặp Hên",
        rate: "6 / 10 (3777)",
        img: "http://image.phimmoi.net/film/6857/poster.medium.jpg",
        actor: "Joel Edgerton, Charlize Theron, David Oyelowo, Thandie Newton",
        director: "Nash Edgerton",
        category: "Phim Tội Phạm - Hình Sự, Phim Hài Hước, Phim Hành Động",
        country: "Mỹ",
        content: "Phim Nhọ Gặp Hên: là sự kết hợp giữa yếu tố hài hước và những mưu đồ kịch tính khi Gringo (một kiều dân Mỹ) vượt biên từ Mỹ sang Mexico. Vượt qua ranh giới từ một công dân lương thiện trở thành kẻ tội phạm, Harold rơi vào vòng xoáy của các đối tác kinh doanh láng giềng đầy mưu mô, các trùm ma tuý Mexico xảo quyệt và cả lính đánh thuê quốc tế,… Harold sẽ phải vượt qua và sống sót ra sao ở nơi được xem là nguy hiểm nhất hành tinh này?",
        link: "https://video.fhan5-7.fna.fbcdn.net/v/t42.9040-2/10000000_1020803964733670_149320576769458176_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=495&oh=f09361c0d9a9dc998621fb49663def01&oe=5B2F3305",
        season: "1",
        eps: "1",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Sát Nhân Giấu Mặt: Đêm Đẫm Máu",
        rate: "5.5 / 10 (7590)",
        img: "http://image.phimmoi.net/film/6854/poster.medium.jpg",
        actor: "Christina Hendricks, Bailee Madison, Martin Henderson, Emma Bellomy",
        director: "Johannes Roberts",
        category: "Phim Rùng Rợn",
        country: "Mỹ",
        content: "Phim Sát Nhân Giấu Mặt: Đêm Đẫm Máu: xoay quanh chuyến đi dã ngoại của một gia đình. Theo kế hoạch họ sẽ đến một căn nhà lưu động ở vùng quê để họp mặt với họ hàng. Thế nhưng khi đến nơi thì họ hàng không thấy mà dân cư xung quanh lại hoang vắng một cách kì lạ. Khi màn đêm buông xuống, bỗng xuất hiện 3 tên tâm thần đeo mặt nạ đến “ghé thăm”, cả gia đình như trở thành các con thú bị những kẻ biến thái săn lùng. Họ có thoát khỏi nỗi sợ kinh hoàng này hay lại biến mất bí ẩn như cư dân nơi đây?",
        link: "https://video.fsgn5-7.fna.fbcdn.net/v/t42.9040-2/10000000_179331766233599_1461512529707532288_n.mp4?_nc_cat=0&efg=eyJ2ZW5jb2RlX3RhZyI6ImxlZ2FjeV9oZCJ9&oh=be7c5f9190daffeb6ea703dbf815a627&oe=5B2F95FA",
        season: "1",
        eps: "1",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Thần chết",
        rate: "6.5 / 10 (9232)",
        img: "http://image.phimmoi.net/film/6836/poster.medium.jpg",
        actor: "Bruce Willis, Vincent D'Onofrio, Elisabeth Shue, Camila Morrone",
        director: "Eli Roth",
        category: "Phim Kịch Tính, Phim Tội Phạm - Hình Sự, Phim Hành Động",
        country: "Mỹ",
        content: "Death Wish là thương hiệu hành động giật gân ra đời từ năm 1974, với vai chính Paul Kersey gắn liền với Charles Bronson. Đây là một bác sĩ không thể làm ngơ trước những bất công trong xã hội, và quyết định tự mình ra tay hành hiệp, thực thi công lý. ",
        link: "https://video.fhan5-5.fna.fbcdn.net/v/t42.9040-2/10000000_1999056276831172_3499109426554470400_n.mp4?_nc_cat=0&efg=eyJybHIiOjMwMCwicmxhIjo0MDk2LCJ2ZW5jb2RlX3RhZyI6ImxlZ2FjeV9zZCJ9&rl=300&vabr=135&oh=c0988f3b5edd2c30498a85b56826843b&oe=5B2EE483",
        season: "1",
        eps: "1",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Đột Kích Hồ Giấu Vàng",
        rate: "5.7 / 10 (147)",
        img: "http://image.phimmoi.net/film/5936/poster.medium.jpg",
        actor: "Sylvia Hoeks, J.K. Simmons, Sullivan Stapleton, Ewen Bremner",
        director: "Steven Quale",
        category: "Phim Hành Động, Phim Kinh Dị",
        country: "Mỹ",
        content: "Nội dung chính của bộ phim được tiết lộ sẽ kể về câu chuyện hấp dẫn xung quanh cuộc hành trình đầy khó khăn của một đội Hải quân SEALs trong thời gian họ khám phá một kho báu khổng lồ ẩn trong hồ Bosnia. Để có thể đi đến gần hơn với kho báu bí ẩn này họ đã phải hi sinh rất nhiều thứ. Liệu cuối cùng đội quân này có thể tiếp cận đến với kho báu không? Kho báu đó chứa những gì?",
        link: "https://video.fsgn5-3.fna.fbcdn.net/v/t42.9040-2/10000000_198606464252156_3046924180026032128_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=668&oh=01383940487fd5a2ad973f999cab9076&oe=5B2F8F1D",
        season: "1",
        eps: "1",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Bậc Thầy Của Những Ước Mơ",
        rate: "8 / 10 (74496)",
        img: "http://image.phimmoi.net/film/6430/poster.medium.jpg",
        actor: "Hugh Jackman, Michelle Williams, Zac Efron, Zendaya",
        director: "Michael Gracey",
        category: "Phim Tiểu Sử, Phim Kịch Tính",
        country: "Mỹ",
        content: "The Greatest Showman là tác phẩm nhạc kịch thứ 2 mà Hugh Jackman tham gia. Cách đây 5 năm, anh từng thủ vai chính trong bộ phim nhạc kịch Les Misérables (2012) và nhận được một đề cử Oscar danh giá ở hạng mục Nam diễn viên chính xuất sắc. ",
        link: "https://video.fsgn5-5.fna.fbcdn.net/v/t42.9040-2/10000000_164548120880286_937402313436299264_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=683&oh=3e2fa8a9e6e1e7aead0d01281d21f5e5&oe=5B2FAEB2",
        season: "1",
        eps: "1",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Giấc Mộng Kinh Hoàng",
        rate: "4.7 / 10 (1910)",
        img: "http://image.phimmoi.net/film/6363/poster.medium.jpg",
        actor: "Maggie Q, Sam Troughton, Will Kemp, Sylvester McCoy",
        director: "Jonathan Hopkins",
        category: "Phim Rùng Rợn",
        country: "Mỹ",
        content: "Alice (Maggie Q) một vị bác sĩ tài năng trong lĩnh vực khoa học giấc ngủ, người bị buộc phải từ bỏ những lý luận khoa học của mình khi phải giúp đỡ một gia đình nọ. Những thành viên trong nhà đều bị một con quỷ đeo bám, hành hạ họ mỗi đêm trong những cơn ác mộng không lối thoát. Bản thân Alice cũng trở thành một trong các nạn nhân và phải chịu đựng những cơn đè trong đêm. Liệu cơn Ác mộng kinh hoàng có chấm dứt? Liệu Alice bằng cách nào có thể hóa giải được con quỷ tà ác…?",
        link: "https://video.fhan5-1.fna.fbcdn.net/v/t42.9040-2/10000000_179356306098746_6044670293023129600_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=481&oh=f0498368ae4df2bdc649c7cd3eae368f&oe=5B2FCCDA",
        season: "1",
        eps: "1",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Vùng Đất Câm Lặng",
        rate: "7.8 / 10 (456)",
        img: "http://image.phimmoi.net/film/6607/poster.medium.jpg",
        actor: "Emily Blunt, John Krasinski, Noah Jupe, Millicent Simmonds",
        director: "John Krasinski",
        category: "Phim Kịch Tính, Phim Rùng Rợn, Phim Kinh Dị",
        country: "Mỹ",
        content: "A Quiet Place - Vùng Đất Câm Lặng đánh dấu lần đầu tiên cặp đôi vợ chồng Blunt và Krasinski đóng phim cùng nhau (trước đây họ từng cùng tham gia lồng tiếng cho phim hoạt hình Animal Crackers). A Quiet Place ban đầu được biên kịch bởi Scott Beck và Bryan Woods trước khi họ rút lui khỏi dự án. Krasinski tham gia viết lại kịch bản phim cũng như đồng thời bước lên ghế chỉ đạo. Michael Bay là nhà sản xuất cho phim.",
        link: "https://video.fsgn5-5.fna.fbcdn.net/v/t42.9040-2/10000000_195265191287776_943786438724419584_n.mp4?_nc_cat=0&efg=eyJybHIiOjMwMCwicmxhIjo0MDk2LCJ2ZW5jb2RlX3RhZyI6InNkIn0%3D&rl=300&vabr=141&oh=4ff0c05659dace4568791a08ae07e51b&oe=5B3028D3",
        season: "1",
        eps: "1",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Siêu Đại Chiến Thái Bình Dương 2: Cuộc Nổi Dậy",
        rate: "8 / 10 (4577) ",
        img: "http://image.phimmoi.net/film/6129/poster.medium.jpg",
        actor: "Scott Eastwood, Burn Gorman, Adria Arjona, Tian Jing",
        director: "Steven S. DeKnight",
        category: "Phim Hành Động, Phim Phiêu Lưu, Phim Viễn Tưởng",
        country: "Mỹ",
        content: "Bối cảnh phim Siêu Đại Chiến Thái Bình Dương phần 2: Đã 10 năm kể từ trận chiến ở Breach nhưng các trận chiến trên đại dương vẫn không ngừng. Được chứng minh bằng chiến thắng tại Breach, chương tình Jaeger đã phát triển thành lực lượng phòng thủ toàn cầu mạnh nhất trong lịch sử nhân loại. PPDC hiện đang kêu gọi những người lính giỏi nhất và thông minh nhất để vươn lên trở thành thế hệ anh hùng kế tiếp. Khi mối đe dọa của Kaiju trở lại, chúng tôi sẽ sẵn sàng.",
        link: "https://video.fsgn5-4.fna.fbcdn.net/v/t42.9040-2/10000000_310077149526454_1754592508051980288_n.mp4?_nc_cat=0&efg=eyJybHIiOjE2MjksInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1629&vabr=1086&oh=624d51564227b66dff788235fb82558e&oe=5B2F2709",
        season: "1",
        eps: "1",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Ngôi Làng Tiền Sử",
        rate: "6.2 / 10 (5181)",
        img: "http://image.phimmoi.net/film/6373/poster.medium.jpg",
        actor: "Tom Hiddleston, Eddie Redmayne, Maisie Williams, Richard Ayoade",
        director: "Nick Park",
        category: "Phim Hoạt Hình, Phim Phiêu Lưu, Phim Hài Hước",
        country: "Mỹ",
        content: "Ngôi Làng Tiền Sử sẽ đưa khán giả về thời kỳ sơ khai của nhân loại khi thế giới là một nơi đáng sợ ngoại trừ thung lũng Thời Tiền Sử (Stone Age) từ bộ tộc của anh chàng Dug. Một ngày nọ, thung lũng bị xâm chiếm bởi Thời Kỳ Đồ Đồng (Bronze Age). Và thế là Dug cùng bộ tộc của mình phải vượt qua mọi thử thách để bảo vệ thung lũng.",
        link: "https://video.fhan5-2.fna.fbcdn.net/v/t42.9040-2/10000000_219930328602314_7388930464657965056_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=993&oh=1796d4535d5f51be65faf5fc6859a58a&oe=5B2F3916",
        season: "1",
        eps: "1",
        tag: "Phim Chiếu Rạp",
    },
    {
        name: "Comic Girls",
        rate: "0 / 10 (0)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180407/172dc16f0b4358b7205fa7c31ab353f9_226_320.jpg",
        actor: "N/A",
        director: "N/A",
        category: "Phim Hoạt Hình, Phim Hài Hước",
        country: "Nhật Bản",
        content: "Moeta Kaoruko là một học sinh trung học 15 tuổi và là tác giả manga, với bút danh là Chaos. Sau khi bị tụt xuống bét bảng trong cuộc khảo sát người đọc, Biên tập của Kaoruko khuyên cô vào một trường nữ sinh dành cho tác giả manga. Bạn cùng phòng của Kaoruko là tác giả manga shoujo Koizuka Koyume, tác giả manga lãng mạn Irokawa Ruki, và tác giả manga shounen Katsuki Tsubasa. Các cô gái hỗ trợ lẫn nhau để họ đều có thể trở thành những tác giả giỏi hơn nữa.",
        link: "https://video.fsgn5-2.fna.fbcdn.net/v/t42.9040-2/10000000_1221752097928002_857675419636203520_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=561&oh=242ff0c82d09b26b7ca89605340d7327&oe=5B2F22DD",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    },
    {
        name: "Kiratto Pri-chan",
        rate: "0 / 10 (0)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180622/8c33d788fd846431fd12014a9d79b5e9_226_320.jpg",
        actor: " N/A",
        director: " N/A",
        category: "Phim Âm Nhạc, Phim Hoạt Hình, Phim Thần Thoại, Học Đường",
        country: "Nhật Bản",
        content: "Cô gái trung học năm nhất Mirai Momoyama và Emo Moegi là hai thần tượng đầy tham vọng, người quyết định sử dụng, một hệ thống được sử dụng bởi những người nổi tiếng và các công ty để phát sóng nội dung. Giống như nhiều cô gái bắt đầu các kênh của riêng mình và tải lên nội dung, cặp đôi quyết định trở thành nhà sản xuất của riêng mình, bắt đầu kênh riêng của họ trong nỗ lực trở thành thần tượng của Pri ☆ Chan.",
        link: "https://video-sin6-1.xx.fbcdn.net/v/t42.9040-2/10000000_176470716399603_4402421626784710656_n.mp4?_nc_cat=0&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9oZCJ9&oh=f10d90b84f4d11587ae3063919d590f2&oe=5B2E39DA&expire=1529745617",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    },
    {
        name: "Megalo Box",
        rate: " 0 / 10 (0)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180406/1a10ab731952d268ef6fcfb3c852cf8c_232_320.jpg",
        actor: "N/A",
        director: "N/A",
        category: "Phim Hành Động, Phim Hoạt Hình, Phim Kịch Tính, Phim Thể Thao",
        country: "Nhật Bản",
        content: "Phim Anime Megalo Box nói về Ashita no Joe 50 năm dự án kỷ niệm. JD (Junk Dog) tham gia vào các trận đấu quyền anh cố định trong một chiếc nhẫn dưới đất để sống. Hôm nay, anh lại vào vòng một lần nữa, nhưng anh gặp một người nào đó. JD muốn thử thách mọi rủi ro.",
        link: "https://video.xx.fbcdn.net/v/t42.9040-2/10000000_536880880041183_1632087241767518208_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=564&oh=39380e5b0bc8cabc2f9cb17441004692&oe=5B2FF160",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    },
    {
        name: "Dragon Ball Heroes ",
        rate: " 0 / 10 (0)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180622/79e5d59d139324f70028c850dabd5ca3_236_320.jpg",
        actor: "N/A",
        director: "N/A",
        category: "Phim Hoạt Hình, Phim Viễn Tưởng, Phim Hài Hước, Phim Hành Động",
        country: "Nhật Bản",
        content: "Dragon Ball Heroes là bộ phim để quảng bá game cùng tên, ko liên quan đến cốt truyện chính, ko phải phần tiếp Dragon Ball Super, chỉ là bản đặc biệt để quảng bá game",
        link: "https://video.fsgn5-7.fna.fbcdn.net/v/t42.9040-2/10000000_247487399153154_5588145355704238080_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=835&oh=ccd9393983c69783f56b4cdb1e66ba83&oe=5B2F91E9",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    },
    {
        name: "Alice or Alice: Siscon Niisan to Futago no Imouto",
        rate: "6.6 / 10 (106)",
        img: "http://image.phimmoi.net/film/6678/poster.medium.jpg",
        actor: "N/A",
        director: "Christoph Lauenstein, Wolfgang Lauenstein",
        category: "Phim Hoạt Hình",
        country: "Nhật Bản",
        content: "Câu chuyện này đưa ra một cái nhìn cuộc sống hàng ngày của một đôi hoặc cặp song sinh Alice và anh trai của họ, những người có một phức hợp chị em. Họ ăn các bữa ăn, tham chiến, chơi đùa với bạn bè ... Bạn có muốn nhìn vào cuộc sống hằng ngày của Alices dễ thương không?",
        link: "https://scontent.xx.fbcdn.net/v/t58.16132-6/10000000_175454763089091_7869480044782815201_n.mp4?_nc_cat=0&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&oh=115d6d47d354d738ec87e6f160e155ea&oe=5B2FE9E3",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    },
    {
        name: "Tada-kun wa Koi wo Shinai",
        rate: "0 / 10 (0)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180406/07c74cb4ebec85fcfdd8ab8d4399b1e1_278_320.jpg",
        actor: "N/A",
        director: "N/A",
        category: "Phim Hoạt Hình, Phim Kịch Tính, Phim Tình Cảm, Phim Hài Hước",
        country: "Nhật Bản",
        content: "Anh chàng Tada Mitsuyoshi chưa có một mảnh tình vắt vai trong một lần mải mê chụp ảnh hoa anh đào đã tình cờ gặp gỡ cô nàng Teresa Wagner - một du học sinh đến từ Luxembourg đang bị lạc khỏi đoàn du lịch cùng thăm thú Nhật Bản. Mitsuyosh đã giúp đỡ Teresa và mang cô đến quán cà phê của ông cậu và câu chuyện về tình yêu giữa họ cũng bắt đầu được viết lên từ đấy.",
        link: "https://video.fsgn5-2.fna.fbcdn.net/v/t42.9040-2/10000000_356227754882464_6116314840056201216_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=487&oh=c60aa2f63bdce582844a53a393869be9&oe=5B309DE2",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    },
    {
        name: "Captain Tsubasa",
        rate: "0 / 10 (0)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180405/99c556e23d6f391e38375fd91aa3eb89_226_320.jpg",
        actor: "N/A",
        director: "N/A",
        category: "Phim Hành Động, Phim Hoạt Hình, Phim Thể Thao",
        country: "Nhật Bản",
        content: "Thuyền trưởng Tsubasa là câu chuyện đam mê của một học sinh trường tiểu học có những suy nghĩ và ước mơ xoay quanh hầu hết tình yêu bóng đá. Tsubasa Oozora 11 tuổi bắt đầu chơi bóng ở độ tuổi rất trẻ, và trong khi đó nó chỉ là một môn thể thao giải trí cho bạn bè của mình, đối với anh, nó đã phát triển thành một cái gì đó ám ảnh. Để theo đuổi ước mơ của mình với khả năng tốt nhất của trường tiểu học, Tsubasa đã cùng mẹ mình đến thành phố Nankatsu, nơi nổi tiếng với các đội bóng đá trường tiểu học xuất sắc. Nhưng mặc dù anh ấy dễ dàng trở thành người tốt nhất ở thị trấn cũ của mình, Nankatsu cũng có nhiều cạnh tranh hơn, và anh ấy sẽ cần tất cả kỹ năng và tài năng của mình để đứng ra ngoài đám đông mới này. Anh ấy gặp gỡ không chỉ đối thủ, mà còn những người bạn mới như Sanae Nakazawa và thủ môn tài năng, Genzo Wakabayashi, người có chung niềm đam mê với Tsubasa, và sẽ trở thành một người bạn yêu quý của anh ta trong việc giúp anh ta thúc đẩy giấc mơ của mình. Đại diện cho Nhật Bản trong FIFA World Cup là giấc mơ cuối cùng của Tsubasa, nhưng nó sẽ mất nhiều hơn tài năng để đạt được nó.",
        link: "https://video.fsgn5-5.fna.fbcdn.net/v/t42.9040-2/10000000_770749403119727_127000795668283392_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=869&oh=9b41f59e3994af268ba6040eb8a6b4b8&oe=5B2E392C",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    },
    {
        name: "Huyền Thoại Sân Cỏ GGO 2",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6843/poster.medium.jpg",
        actor: "N/A",
        director: "N/A",
        category: "Phim Hoạt Hình, Phim Thể Thao",
        country: "Nhật Bản",
        content: "Phim Huyền Thoại Sân Cỏ GGO Phần 2 là phần tiếp theo được chờ đợi sau 8 năm dài dăng dẳng từ thành công của phần 1, là bộ phim nói về bộ môn thể thao vua – Bóng Đá lấy bối cảnh tại thế kỷ 21 khi mà công nghệ phát triển với tốc độ nhanh chóng và chúng được áp dụng vào trong bóng đá, chúng còn được gọi là AI – Trí Tuệ Nhân Tạo, AI được áp dụng vào trong những trận đấu các cầu thủ bóng đá nhằm nâng cao chất lượng của các trận cầu đỉnh cao khiến cho người xem luôn phải ngóng chờ.",
        link: "https://video.fhan5-1.fna.fbcdn.net/v/t42.9040-2/10000000_1710605065686426_633728798256267264_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=823&oh=a20ee0131a77778af63791df4dd673b0&oe=5B2EF4D9",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    },
    {
        name: "Photo Kano",
        rate: "6.1 / 10 (53)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180621/53550719904e124bb0535f1d52f1d7c2_213_320.jpg",
        actor: "Patrick Mölleken",
        director: "N/A",
        category: "Phim Hoạt Hình, Phim Tình Cảm, Học Đường, Phim Ecchi",
        country: "Nhật Bản",
        content: "Dựa trên một game PSD nổi tiếng, câu chuyện nói về một chàng trai thích chụp ảnh và phát triển dàn Harem của cậu dựa trên nó.",
        link: "https://3.bp.blogspot.com/AUAmdU0a3-x7X2j5NazPBMYkE-HRzud9YxVHctQSnEzW7eySZ14dTK7wJR3C6ktjXhTd6HyVF1K5zNAdJ9JoNH7REnNWrk5zCQ=m18",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    },
    {
        name: "3D Kanojo: Real Girl",
        rate: "0 / 10 (0)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180406/e295fb520c1071c6c14ef7493e167231_208_320.jpg",
        actor: "Ayami Nakajô, Hayato Sano",
        director: "Tsutomu Hanabusa",
        category: "Phim Hoạt Hình, Phim Hài Hước, Học Đường",
        country: "Nhật Bản",
        content: "Xoay quanh anh chàng học sinh cao trung Hikari Tsutsui - một otaku chính hiệu, chỉ yêu thích những cô gái trong thế giới ảo trong anime và game thôi. Cậu không có nhiều bạn bè, và vẫn còn là trai tân. Một ngày nọ, vì đi học muộn, Hikari bị bắt phải lau bể bơi chung với Iroha - một hot girl thứ thiệt trong thế giới 3D. Và sau một đống rắc rối xảy ra, Iroha đã ngỏ lời hẹn hò với anh chàng cù lần ấy. Câu chuyện tình yêu này sẽ ra sao đây?",
        link: "https://video.fsgn5-7.fna.fbcdn.net/v/t42.9040-2/10000000_202039033730871_6460813282105098240_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=453&oh=a940678b3dede998e5a7257c74e5e192&oe=5B308D90",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    },
    {
        name: "Kakuriyo no Yadomeshi",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6709/poster.medium.jpg",
        actor: "N/A",
        director: "N/A",
        category: "Phim Phiêu Lưu, Phim Hoạt Hình, Phim Hài Hước, Phim Thần Thoại, Phim Tình Cảm",
        country: "Nhật Bản",
        content: "Câu chuyện trong phim Kakuriyo no Yadomeshi xoay quanh học sinh đại học Aoi, người có khả năng nhìn thấy các linh hồn được truyền lại bởi ông của cô. Aoi rất tự hào về khả năng nấu nướng của cô, và một ngày cô đang đang cho các linh hồn cây cỏ ăn thì cô bất ngờ được một vị thần và chủ của (Nhà Nghỉ Thiên Giới) bắt đi. Anh ta nói rằng do món nợ của ông cô ấy, cô ấy giờ phải trở thành vợ của anh ta. Aoi không thích thế và tuyên bố rằng mình sẽ trả hết món nợ của ông bằng cách làm việc tại Tenshinya.",
        link: "https://video.fsgn5-2.fna.fbcdn.net/v/t42.9040-2/10000000_1054430218038904_4016402760927805440_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=446&oh=6c4ecfb441c8d02aefb6440580f521c3&oe=5B302795",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    },
    {
        name: "Magi: Mê Cung Huyền Bí Phần 2",
        rate: "8 / 10 (1518)",
        img: "http://image.phimmoi.net/film/4583/poster.medium.jpg",
        actor: "Kaori Ishihara, Yuki Kaji, Haruka Tomatsu, Erik Scott Kimerer",
        director: "N/A",
        category: "Phim Hoạt Hình, Phim Phiêu Lưu, Phim Thần Thoại, Phim Hành Động",
        country: "Nhật Bản",
        content: "Magi: The Kingdom of Magic là phần 2 của Magi: The Labyrinth of Magic (Mê Cung Thần Thoại) kể về Aladdin, Alibaba và Morgiana tiếp tục cuộc phiêu lưu ở vương quốc phép thuật Magnostadt. Một đất nước bị cai trị bởi các pháp sư và đế chế Reim hùng mạnh.",
        link: "https://video.fsgn5-6.fna.fbcdn.net/v/t42.9040-2/10000000_569126683452284_4432507752434106368_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=794&oh=77c0130e7873eca25be0ff1b84e95788&oe=5B3078A7",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    },
    {
        name: "High School DxD",
        rate: "7.8 / 10 (3353)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20160507/74f71a0f237c7133e128eb080f77a6bd_237_320.jpg",
        actor: "Yuki Kaji, Jamie Marchi, Azumi Asakura, Yôko Hikasa",
        director: "N/A",
        category: "Phim Hành Động, Phim Hoạt Hình, Phim Hài Hước, Phim Ecchi",
        country: "Nhật Bản",
        content: "Trong phim anime High School DxD - Trường Trung Học Rồng, Hyoudou Issei là một thằng ngu phóng đãng, một thằng main dâm dê đại non nhưng vẫn chưa có bạn gái. Đã bị bạn gái giết ngay lần gặp mặt đầu tiên. Cô ta là Amano Yuuma có nhiệm vụ giết các vũ khí của chúa, nhưng may thay cậu ta lại được 1 cô gái lớp trên tên RIA Gremory cứu và cậu ta theo RIA Gremory chống lại các thiên thần sa ngã. (Ghi chú thêm muốn cứu cậu ta thì phải “nude” ). Mùa 4 trở lại với tên High School DxD Hero",
        link: "https://video.xx.fbcdn.net/v/t42.9040-2/10000000_483269772101720_5882596206005190656_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=781&oh=05387b710102d3cd67a11ec223181a6b&oe=5B2F8832",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    },
    {
        name: "Nil Admirari no Tenbin: Teito Genwaku Kitan",
        rate: "0 / 10 (0)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180410/e2000b7c1a37aa292c6a52428e3fe869_228_320.jpg",
        actor: "N/A",
        director: "N/A",
        category: "Phim Hoạt Hình, Phim Gia Đình, Phim Tình Cảm, Phim Cổ Trang",
        country: "Nhật Bản",
        content: "Thời đại Taishou không kết thúc sau 15 năm, mà tiếp tục thêm 25 năm nữa.Để bảo vệ gia đình của mình, một cô gái phải cưới một người đàn ông mà cô còn không biết tên. Tuy nhiên, ngay khi đám cưới bắt đầu, em trai của cô gái đã bí mật tự tử bằng cách tự thiêu chính mình, và xác cậu ta cầm một quyển sách cũ Xuất hiện trước cô là, hay còn được biết đến là  Theo như những người này, có tồn tại nhữ  những quyển sách có khả năng ảnh hưởng đến người đọc. Trên hết, kể từ khi cái chết của em trai cô, cô dần có khả năng nhín được (những tình cảm của Maremono dưới dạng ánh sáng và thường không thể thấy được). Tưởng như là do số phận đang cố kéo cô vào nó. Và rồi, dù sợ, cô gái quyết định sẽ tự thoát khỏi lồng chim chứa mình. Lòng ghen, sự căm hận, khinh miệt, đam mê và tình yêu. Điều đang đợi cô là bóng tối của sự phản bội đã ngấm ngầm trong thủ đô của đế quốc. Bị bóng tối đó chơi đùa, liệu cô có thể tìm ra sự thật không, hay là...?",
        link: "https://video.fhan3-3.fna.fbcdn.net/v/t42.9040-2/10000000_584207731957654_6401520601453821952_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=587&oh=b55637d242657c08e4b8e62fcdfbfa48&oe=5B2E42A7",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    }, {
        name: "Uma Musume: Pretty Derby",
        rate: "0 / 10 (0)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180403/205fdaaaa00e7aee40a039bda82cb26d_226_320.jpg",
        actor: "N/A",
        director: "N/A",
        category: "Phim Hoạt Hình, Phim Hài Hước, Phim Thể Thao",
        country: "Nhật Bản",
        content: "Những Cô Gái Ngựa: Cuộc Đua Dễ Thương",
        link: "https://lh3.googleusercontent.com/lHGGb3aB3pOWPy1IZ5AXYj3eJUsnLVQHRlQYw5Q6xziuyR2-MimKOO2ga3ZWVGh_hWu6Rp5uKKrXY6gcLeo_Jbfwp7Wc00qkU0bTdTkgD2I-CfptyIliC9_EAudkx6-aqHXzm4jDjA=m22",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    }, {
        name: "Ngạ Quỷ Vùng Tokyo",
        rate: "8.1 / 10 (15022)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20160223/tt3741634_226_320.jpg",
        actor: "Natsuki Hanae, Michelle Rojas, Sora Amamiya, Mamoru Miyano",
        director: "N/A",
        category: "Phim Hoạt Hình, Phim Kịch Tính, Phim Rùng Rợn, Phim Bí Ẩn, Phim Hành Động",
        country: "Nhật Bản",
        content: 'Tokyo Ghoul SS3 - Ngạ Quỷ Vùng Tokyo phần 3 là một câu chuyện mang bầu sắc u tối của thành phố Tokyo, nơi xảy ra hàng loạt các vụ án mạng được gây ra bởi các con quỷ đội lốt con người. Main chính nhà ta là sinh viên đại học tên Kaneki gặp gỡ được em Rize, do 2 người có cùng sở thích nên đã phải lòng nhau. Vào buổi tối hôm hẹn hò, em và ảnh cùng nhau đi vào một con phố hẻo rồi cuộc đời anh main thay đổi ngay trong đêm hôm đó.Season 3 trở lại với tên Tokyo Ghoul:RE, bối cảnh của truyện vẫn tập trung vào thành phố Tokyo, nơi những hiểm họa vẫn ngày đêm rập rình. Nơi đây, những sinh vật ăn thịt người bí ẩn, ghoul, đang hoành hành khắp thành phố. Sự tồn tại của những con ghoul vẫn mãi là một bí ẩn, gieo rắc kinh hoàng cho dân chúng Tokyo.Tại CCG, cơ quan duy nhất điều tra và giải quyết các trường hợp liên quan tới lũ ghoul, Haise Sasaki đã được giao cho một nhiệm vụ. Trong khi phải xử lý bốn đứa trẻ ngang bướng "Quinx", liệu chuỗi ngày kinh khủng của Haise đã bắt đầu?',
        link: "https://video.fsgn5-1.fna.fbcdn.net/v/t42.9040-2/10000000_432629033853963_3029593368511381504_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=601&oh=2d831dca79d97db20deb3f894c362b5d&oe=5B2F9B12",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    }, {
        name: "Siêu Nhân Build - Kamen Rider Build",
        rate: "9.2 / 10 (5)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20170905/9f977c69d5ff4abd2c1754aaae3278e1_228_320.jpg",
        actor: "Atsuhiro Inukai, Eiji Akaso, Kaho Takada, Yuki Ochi",
        director: "N/A",
        category: "Phim Hành Động, Phim Hoạt Hình, Phim Thần Thoại",
        country: "Nhật Bản",
        content: "Phim nói về 1 chiếc hộp bí ẩn gọi là “Pandora” được tìm thấy trên sao Hỏa, khi mở nó ra, thình lình trên bầu trời xuất hiện bức tường gọi là “SkyWall” và chia cắt Nhật Bản thành 3 khu vực : Touto, Hokuto, và Saito (Đông Đô, Bắc Đô và Tây Đô). Cùng lúc đó, ở các khu vực xuất hiện quái vật tên là “smash” quấy phá người dân. Một ngày nọ con người mở chiếc hộp bí ẩn gọi là Pandora tìm thấy trên sao Hỏa. Trên bầu trời xuất hiện Sky Wall chia Nhật Bản thành 3 vùng Touto, Hokuto, và Saito (Đông Đô, Bắc Đô và Tây Đô). Tại Totou xuất hiện những sinh vật bí ẩn gọi là Smash gây kinh hoàng cho con người. Kiryuu Sento, một thiên tài vật lý học, người trong quá khứ đã bị tai nạn bí ẩn dẫn tới mất trí nhớ và được ông chủ quán cafe Nascita cưu mang. Tại đây Sento đã sống nghiên cứu khoa học và sau này đã henshin thành Kamen Rider Build chống lại Smash. Chính quyền Touto yêu cầu anh giúp đỡ giải mã bí ẩn phía sau hộp Pandora hiện đặt tại Viện Nghiên Cứu Vật Chất Tiên Tiến Touto cũng như lũ Smash. Tuy nhiên còn một bí ẩn khác mà Sento không giải được đó là quá khứ của mình suốt hơn 20 năm qua. Manh mối mà cậu có được là tên quái nhân tên là Nitrogue trong quá khứ. Có một người nắm trong tay chìa khóa dẫn tới kí ức của Sento, đó là Banjo Ryuga một cựu võ sĩ, người vốn bi gài bẫy bắt giam vì tội giết người. Đồng hành với Sento là cô nàng Isurugi Misora, người có năng lực đặc biệt có thể thay tẩy các thành phần độc hại cấu thành nên Smash. Funfact: Sento âm hán là Chiến Thổ (thỏ chiến), còn Ryuga là Long Ngã (chất rồng).",
        link: "https://video.fhan5-3.fna.fbcdn.net/v/t42.9040-2/10000000_197428987701136_8893541509417140224_n.mp4?_nc_cat=0&efg=eyJybHIiOjE4MzQsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1834&vabr=1223&oh=75e453a26f87cfed9ab2c07f1ebdd8f5&oe=5B2EF79E",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    }, {
        name: "Ranh Giới Quỷ-Devils Line",
        rate: "6.9 / 10 (763)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180409/a1375c5f68ff0106b2ec4b62a192fda0_229_320.jpg",
        actor: "N/A",
        director: "N/A",
        category: "Phim Hoạt Hình, Phim Kịch Tính, Phim Viễn Tưởng, Phim Tình Cảm, Phim Kinh Dị, Phim Hành Động",
        country: "Nhật Bản",
        content: "Trong Devils Line nói về Anzai, một nửa ma cà rồng, và Tsukasa, một cô gái bình thường. Trong Ranh Giới Quỷ, Ma cà rồng dường như đang sống giữa con người. Tất nhiên, chính phủ không biết về sự tồn tại của họ, bởi vì sự xuất hiện của họ không khác gì con người. Họ cũng không cần phải uống máu, nhưng khi họ có được một ham muốn hoặc tức giận, họ có thể trở thành quái vật không kiểm soát.",
        link: "https://video.xx.fbcdn.net/v/t42.9040-2/10000000_1452105811556280_5438403627326636032_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=603&oh=c79fdb08734f1af8d7e12b5ec25aea6b&oe=5B3057ED",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    }, {
        name: "Darling in the FranXX",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6841/poster.medium.jpg",
        actor: "N/A",
        director: "N/A",
        category: "Phim Hoạt Hình, Phim Thần Thoại, Phim Viễn Tưởng",
        country: "Nhật Bản",
        content: "Câu chuyện xảy ra trong tương lai xa. Đất đai bị hủy hoại, và nhân loại thành lập thành phố pháo đài di động tên Plantation. Các phi công sản xuất trong Plantation sống ở Mistilteinn, cũng được biết đến như. Trẻ em sống ở đó không biết gì về thế giới bên ngoài và sự tự do của bầu trời. Cuộc sống của họ chỉ là chiến đấu để thực hiện nhiệm vụ. Kẻ thù của họ là những sinh vật khổng lồ bí ẩn có tên gọi là Kyōryū, và các con robot được gọi là Franxx để đối mặt với họ. Đối với trẻ em, cưỡi Franxx để chứng minh sự tồn tại của chúng. Một cậu bé tên là Hiro có Mã số: 016, và cậu đã từng được biết đến như một thần đồng. Tuy nhiên, cậu ta đã bị bỏ lại phía sau, và sự tồn tại của cậu ta dường như không cần thiết. Không lái thử một chiếc Franxx cũng giống như việc ngừng tồn tại. Một ngày kia, một cô gái bí ẩn được gọi là xuất hiện trước mặt cậu ta. và cô gái mọc sừng bắt đầu câu chuyện mời bạn đón xem.",
        link: "https://video.fsgn5-5.fna.fbcdn.net/v/t42.9040-2/10000000_105104993683850_936544986424410112_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=622&oh=edcef8e0ebfca8a5bb9d5b403550ba2c&oe=5B301621",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    }, {
        name: "Inazuma Eleven: Ares no Tenbin",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/5090/poster.medium.jpg",
        actor: "N/A",
        director: "N/A",
        category: "Phim Hoạt Hình, Phim Thể Thao",
        country: "Nhật Bản",
        content: "Phim được đặt trong một thế giới song song, diễn ra sau các sự kiện của trò chơi đầu tiên, và phát triển câu chuyện theo sự kiện của ba nhân vật chính - Ryouhei Haizaki, Asuto Inamori, và Yuuma Nosaka.",
        link: "https://video.fsgn5-4.fna.fbcdn.net/v/t42.9040-2/10000000_820061461516847_6218978156297060352_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=663&oh=6c6a46247ad69b2713eaca4c607c65f4&oe=5B30D3DB",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    }, {
        name: "Đao Kiếm Thần Vực",
        rate: "7.9 / 10 (21207)",
        img: "http://image.phimmoi.net/film/4552/poster.medium.jpg",
        actor: "Yoshitsugu Matsuoka, Haruka Tomatsu, Bryce Papenbrook, Kanae Itô",
        director: "N/A",
        category: "Phim Hành Động, Phim Phiêu Lưu, Phim Hoạt Hình, Phim Tình Cảm ",
        country: "Nhật Bản",
        content: "Nội dung phim Sword Art Online - Đao Kiếm Thần Vực: Năm 2022, thế hệ game chạy trên NERvGear tiếp theo đã được công bố, người dùng có thể kết nối với thế giới ảo thông qua chức năng FullDive. SAO (Sword Art Online) - dòng game VRMMORPG chính thống đầu tiên trên nền NERvGear đã gây xôn xao trên toàn thế giới. Một trong số rất nhiều người chơi, Kirito, quyết tâm chinh phục trò chơi này. Thế nhưng, người sáng tạo ra SAO, Akihiko Kayaba lại thông báo rằng: Một khi đã tham gia thì không người chơi nào có thể thoát ra ngoài cho đến khi phá đảo. Game Over tương đương với cái chết thực sự ngoài đời.Nội dung season 2: Một năm sau khi phá đảo Sword Art Online (SAO), Kirito đã được Kikuoka mời khám phá thử Gun Gale Online, mà cụ thể là Death Gun, một vũ khí dường như là liên kết những cái chết trong thế giới thực tế ảo và thế giới thật. Khi vào game, Kirito gặp Sinon, người hướng dẫn cậu cách chơi (cày cuốc, sắm đồ, PK này nọ). Dần dần Kirito phát hiện ra những cái chết bí ẩn đều có liên quan đến một Guild có tên là Laughing Coffin trong SAO ngày xưa (nguồn SAO Wikia)",
        link: "https://video.fsgn5-7.fna.fbcdn.net/v/t42.9040-2/10000000_471241989945839_4264582489734905856_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=638&oh=71690fb34944fc8c5c8f1ea258404efc&oe=5B2F08A6",
        season: "1",
        eps: "1",
        tag: "Phim Hoạt Hình - Animal",
    },
    {
        name: "Chàng Giàu Nàng Nghèo",
        rate: "6 / 10 (77)",
        img: "http://image.phimmoi.net/film/6831/poster.medium.jpg",
        actor: "Suho, Ha Yeon Soo",
        director: "N/A",
        category: "Phim Tình Cảm",
        country: "Hàn Quốc",
        content: 'Trong phim Chàng Giàu Nàng Nghèo, Lee Yoo Chan (Suho) là giám đốc điều hành của công ty IT Next In. Cậu đã thành lập ra công ty và hiện tại nó trở thành nơi làm việc hấp dẫn nhất đối với các chuyên gia trẻ nhưng Yoo Chan lại có điểm yếu là kiêu ngạo và không tin tưởng đa số mọi người xung quanh đồng thời cậu bị mất khả năng nhận diện ra khuôn mặt.',
        link: "https://video.fsgn5-1.fna.fbcdn.net/v/t42.9040-2/10000000_1834707629926148_8372747123862536192_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=554&oh=ff7a228b3bcc90a1691c17af10e54402&oe=5B30C236",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Jung Eum Và Chàng Đẹp Trai",
        rate: "8 / 10 (455)",
        img: "http://image.phimmoi.net/film/6826/poster.medium.jpg",
        actor: "Nam Goong Min, Hwang Jung Eum",
        director: "N/A",
        category: "Phim Tình Cảm",
        country: "Hàn Quốc",
        content: 'Phim Jung Eum Và Chàng Đẹp Trai nói về Hoon Nam (Nam Goong Min) là một anh chàng đẹp trai, cuốn hút, một chuyên gia về tình yêu nhưng chỉ trên lí thuyết, còn bản thân anh thì chẳng quan tâm mấy tới tình yêu. Một ngày nọ, Hoon Nam gặp Jung Eum (Hwang Jung Eum), một cựu vận động viên điền kinh. Vì quá nhiều lần thất bại trong tình yêu, Jung Eum đã quyết định từ bỏ việc hẹn hò và trở thành một người chuyên đưa ra lời khuyên cho các cặp đôi. Bộ phim là quá trình hai con người học hỏi lẫn nhau cách cân bằng giữa lí thuyết và thực tế.',
        link: "https://video.fsgn5-3.fna.fbcdn.net/v/t42.9040-2/10000000_264389354132010_6917597605383897088_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=965&oh=22dbcc7baf5440483dd0acdad290419f&oe=5B2FE219",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Thư Ký Kim Sao Thế",
        rate: "7 / 10 (45)",
        img: "http://image.phimmoi.net/film/6866/poster.medium.jpg",
        actor: "Park Seo Joon, Kang Ki Young, Park Min Young, Lee Tae Hwan, Kim Hye Ok",
        director: "Park Joon Hwa",
        category: "Phim Tình Cảm",
        country: "Hàn Quốc",
        content: 'Phim Thư Ký Kim Sao Thế là bộ phim được chuyển thể từ webtoon nổi tiếng cùng tên, xoay quanh câu chuyện tình lãng mạn của Lee Young Joon, một tài phiệt đời hai hoàn hảo nhưng quá yêu bản thân, và người trợ lí của anh ta, Kim Mi So, người được gọi là "huyền thoại của giới thư ký". Trong phim, Park Min Young thủ vai Kim Mi So trong khi Park Seo Joon lần nữa hóa thân thành chàng trai giàu có giống như thời She Was Pretty.',
        link: "https://video.fhan5-6.fna.fbcdn.net/v/t42.9040-2/10000000_2222327407998440_5675994135740284928_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=775&oh=70420cda9db436a720f8922235bc3c55&oe=5B2FC691",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Thiêu Đốt",
        rate: "7.9 / 10 (533)",
        img: "http://image.phimmoi.net/film/6894/poster.medium.jpg",
        actor: "Ah-in Yoo, Jong-seo Jeon, Steven Yeun",
        director: "Chang-dong Lee",
        category: "Phim Kịch Tính, Phim Tình Cảm, Phim Bí Ẩn",
        country: "Hàn Quốc",
        content: 'Burning được xây dựng dựa trên truyện ngắn của nhà văn Nhật Bản Haruki Murakami "Barn Burning" và được thay đổi bối cảnh từ Nhật Bản thành Hàn Quốc. Jong Soo (Yoo Ah In) là một người giao thức ăn nhanh. Một ngày nọ, anh tình cờ va phải Haemi (Jeon Jong Seo), một cô gái anh quen hồi nhỏ, và nhanh chóng bị cái tính thất thường nhưng bí ẩn của cô gái ấy mê hoặc. Sau đó cô gửi anh chăm sóc con mèo của mình để đi đến Nam Phi. Khi trở về, cô dẫn theo một người đàn ông tên là Ben (Steven Yeun) - người mà cô giới thiệu là bạn trai của mình với Jong Soo. Ben là một tài phiệt giàu có. Một ngày Haemi cùng Ben đến nhà Jong Soo, và tại đây Ben đã tiết lộ cho Jong Soo sở thích kì quái của mình là đốt những cái nhà kính. Burning tập trung khắc hoạ thế giới của những người trẻ tuổi không quyền lực, không hy vọng vào tương lai, ôm trong mình nỗi phẫn nộ không tên và cách họ phẫn nộ lên thế giới bí ẩn này. Đây là câu chuyện mang hơi thở thời đại, dành cho những người trẻ. Toàn bộ mạch phim được kể và dẫn dắt theo dòng cảm xúc thay đổi phức tạp của nhân vật chính trung tâm Jong Soo do Yoo Ah In thể hiện.',
        link: "https://video.fhan5-3.fna.fbcdn.net/v/t42.9040-2/10000000_1414570885355611_1629788356227366912_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=599&oh=2ef9f4b54d62fb423e59b161df000460&oe=5B2F8BE3",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Quý Cô Hammurabi",
        rate: "7 / 10 (788)",
        img: "http://image.phimmoi.net/film/6849/poster.medium.jpg",
        actor: "Go Ara, L (Infinite)",
        director: "N/A",
        category: "Phim Tình Cảm",
        country: "Hàn Quốc",
        content: 'Miss Hammurabi là một bộ phim có đề tài pháp luật, dựa trên cuốn tiểu thuyết cùng tên của nhà văn Moon Yoo Suk, xoay quanh những câu chuyện xảy ra ở tòa án của ba thẩm phán với tính cách và quan điểm hoàn toàn trái ngược nhau: một cô nàng tân binh Park Cha Oh Reum có lý tưởng và đam mê, một anh chàng thẩm phán Im Ba Reun nguyên tắc và vị giám đốc trường phái siêu thực Han Sae Sang.',
        link: "https://video.fhan5-7.fna.fbcdn.net/v/t42.9040-2/10000000_1821389141255586_4809707199301419008_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=671&oh=c65f444361355d50318e2cddaa6e8e25&oe=5B30C9D0",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Đã Đến Lúc",
        rate: "8 / 10 (4545) ",
        img: "http://image.phimmoi.net/film/6850/poster.medium.jpg",
        actor: "Lee Sung Kyung",
        director: "Kim Hyung Shik",
        category: "Phim Tình Cảm",
        country: "Hàn Quốc",
        content: 'Phim Đã Đến Lúc - About Time là câu chuyện về một phụ nữ có khả năng nhìn thấy một người đã sống bao lâu và người đàn ông mà cô ấy gặp bằng cách nào đó có khả năng ngăn chặn đồng hồ cá nhân của cô ấy. Tình yêu của họ sẽ quyết định số phận của cô ấy.Choi Michaela (Lee Sung Kyung) là một nữ diễn viên âm nhạc có khả năng đặc biệt để xem tuổi thọ của một người. Cô gặp một người đàn ông, Lee Do Ha (Lee Sang Yoon), người có khả năng ngăn chặn đồng hồ thời gian của mình, và cả hai rơi vào tình yêu với nhau.',
        link: "https://video.fhan5-2.fna.fbcdn.net/v/t42.9040-2/10000000_986382294871782_2117014016130809856_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=683&oh=78e863a31f42e1f53cab79651a233aa7&oe=5B2FB5CC",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Gia Tộc Họ Wang",
        rate: "8 / 10 (4045)",
        img: "http://image.phimmoi.net/film/6892/poster.medium.jpg",
        actor: "Lee Yoon Ji, Oh Man Seok",
        director: "Jin Hyung Wook",
        category: "Phim Kịch Tính, Phim Giải Trí-Sự Kiện, Phim Hàn Quốc",
        country: "Hàn Quốc",
        content: 'Gia đình nhà họ Wang đang phải đối mặt với rất nhiều vấn đề. Con gái đầu tiên được gả cho một gia đình khá giả nhưng sau khi bị phá sản, cô và gia đình chồng đã phải chuyển về nhà bố mẹ đẻ. Con gái thứ hai cũng đang gặp khó khăn về tài chính khi người chồng thất nghiệp. Và cô con gái thứ ba đột nhiên quyết định từ bỏ công việc giáo viên của mình. Liệu gia đình họ sẽ giải quyết những vấn đề này như thế nào? Những tình huống dở khóc dở cười nào sẽ xảy ra?',
        link: "https://video.fhan5-7.fna.fbcdn.net/v/t42.9040-2/10000000_613260445708224_1952720822590242816_n.mp4?_nc_cat=0&efg=eyJybHIiOjE5NjksInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1969&vabr=1313&oh=03870788010ae7fe693e5ef05370bbfb&oe=5B2F9230",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Anh Cũng Là Con Người",
        rate: "8.3 / 10 (489)",
        img: "http://image.phimmoi.net/film/6867/poster.medium.jpg",
        actor: "Seo Kang Joon, Gong Seung Yun",
        director: "Cha Young Hoon",
        category: "Phim Tình Cảm",
        country: "Hàn Quốc",
        content: 'Trong Are You Human Too - Anh Cũng Là Con Người, Seo Kang Joon sẽ vào vai Nam Shin, một tài phiệt bị hôn mê sâu vì gặp phải tai nạn bất ngờ. Mẹ Nam Shin sẽ do Kim Sung Ryung đóng, là chuyên gia về trí tuệ nhân tạo, đã tạo ra một robot giống hệt con trai mình tên Nam Shin-III. Seo Kang Joon sẽ đóng cả hai vai Nam Shin và robot cùng tên. Trong khi đó, Gong Seung Yeon sẽ vào vai Kang So, vệ sĩ của Nam Shin III và có một trái tim ấm áp. Kang So là một cựu võ sĩ tổng hợp có bề ngoài lạnh lùng cứng rắn, nhưng bên trong lại tràn đầy ấm áp và vô cùng dễ thương. Nam diễn viên Yoo Oh Sung cũng đang cân nhắc vai diễn đối thủ của Nam Shin – giám đốc cấp cao của tập đoàn lớn luôn muốn gạt Nam Shin ra khỏi chiếc ghế chủ tịch. Phim có nhiều tình tiết ly kì và hấp dẫn, mời các bạn đón xem.',
        link: "https://video.fsgn5-5.fna.fbcdn.net/v/t42.9040-2/10000000_237828670323009_435047601167925248_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=751&oh=2846c6c0c56ef6da2ef3d54588496723&oe=5B2FDF55",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Quý Tử Nhà Giàu",
        rate: "6 / 10 (66) ",
        img: "http://image.phimmoi.net/film/6677/poster.medium.jpg",
        actor: "Hong Soo Hyun, Kim Ji Hoon, Kim Ju Hyeon",
        director: "Choi Chang Wook",
        category: "Phim Tình Cảm",
        country: "Hàn Quốc",
        content: 'Phim Quý Tử Nhà Giàu - Rich Family Son kể về Lee Kwang Jae (Kim Ji Hoon) là con trai của một gia đình giàu có nhưng tính cách chưa trưởng thành. Bố của anh qua đời, để lại một món nợ khổng lồ. Vì bố, Lee Kwang Jae còng lưng ra đi trả nợ. Kim Young Ha (Kim Joo Hyun), một cô gái lạc quan, vui vẻ, đã đứng ra giúp đỡ Lee Kwang Jae.',
        link: "https://video.fsgn5-3.fna.fbcdn.net/v/t42.9040-2/10000000_1800883020220827_2485588648976711680_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=791&oh=c08a4be9dcfb9910aa7771473f7bc8f3&oe=5B2FD183",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Làm Vợ Anh Nhé",
        rate: "6 / 10 (25) ",
        img: "http://image.phimmoi.net/film/6601/poster.medium.jpg",
        actor: "Park Sun Young, Han Ji Hye, Jang Mi-Hee, Yoo Dong Geun",
        director: "Yoon Chang-Beom",
        category: "Phim Tình Cảm",
        country: "Hàn Quốc",
        content: 'Phim Marry Me Now (Làm vợ anh nhé 2018) kể về nữ sinh viên y khoa Park Yoo Ha hiện đã hoàn thành khóa thực tập của mình. Cô nỗ lực trở thành bác sĩ vì cha mình. Ông đã tự nuội bốn đứa con, bỗng một ngày ông quyết định kết hôn với một người giàu có, bà chủ của một tòa nhà... ',
        link: "https://video.fhan5-3.fna.fbcdn.net/v/t42.9040-2/10000000_1929752800668108_7631567177392324608_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=818&oh=a8a76f29ebee31d82554cb3b964bcdc9&oe=5B2FBBF2",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Luật Sư Bá Đạo",
        rate: "8 / 10 (807)",
        img: "http://image.phimmoi.net/film/6830/poster.medium.jpg",
        actor: "Seo Ye Ji, Lee Jun Ki",
        director: "N/A",
        category: "Phim Tình Cảm",
        country: "Hàn Quốc",
        content: 'Luật Sư Bá Đạo phim là câu chuyện về luật sư Bong Sang Pil (Lee Jun Ki), thay vì nhờ vào luật pháp thì anh chàng này lại dùng nắm đấm để giải quyết mọi vấn đề, qua đó trưởng thành là một luật sư thực sự. Được biết, nhân vật Ha Jae Yi của Seo Ye Ji là một luật sư cứng rắn và luôn tự tin trong mọi quyết định của mình. Tuy nhiên, niềm tin của cô bị lung lay hoàn toàn khi gặp Bong Sang Pil. Chia sẻ về sự tham gia của Seo Ye Ji trong phim, phía nhà sản xuất cho hay: "Ye Ji là một nữ diễn viên tài năng, cô ấy có thể thể hiện trọn vẹn hình ảnh một luật sư chuyên gây rối. Xin hãy trông chờ vào sự thể hiện của cô ấy trong Lawless Lawyer". Lawless Lawyer được lên kế hoạch phát sóng vào tháng 5 sau khi phát sóng "Live" kết thúc. ',
        link: "https://video.fsgn5-1.fna.fbcdn.net/v/t42.9040-2/10000000_355578848296835_5943845562087374848_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=800&oh=2402b5554e132d3dfdbbfafffaab35f4&oe=5B301742",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Phác Họa",
        rate: "8 / 10 (807)",
        img: "http://image.phimmoi.net/film/6827/poster.medium.jpg",
        actor: "Bi Rain, Lee Dong Gun",
        director: "Im Tae-Woo",
        category: "Phim hành động",
        country: "Hàn Quốc",
        content: 'Sketch là một bộ phim hành động điều tra về cuộc sống của những người chiến đấu để thay đổi tương lai đã được định trước. Câu chuyện sẽ xoay quanh một thám tử tài năng và một thám tử nữ, người có thể phác họa tương lai khi họ cố bắt một kẻ giết người hàng loạt.',
        link: "https://video.fhan5-3.fna.fbcdn.net/v/t42.9040-2/10000000_198038787491105_6214090281650749440_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=720&oh=13f1ac922edbabad0bbc92fe2cc890ab&oe=5B302F6E",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Đấu Trí",
        rate: "6 / 10 (6) ",
        img: "http://image.phimmoi.net/film/6669/poster.medium.jpg",
        actor: "Park Hyung Sik, Jang Dong Gun",
        director: "N/A",
        category: "Phim Tình Cảm",
        country: "Hàn Quốc",
        content: 'Không chỉ xoay quanh những chuyện tình ngọt ngào, lãng mạn, thời gian gần đây, nhiều bộ phim Hàn đặt nhân vật vào bối cảnh mới lạ, khai thác đa dạng, phong phú về đề tài như y khoa, nấu ăn, điều tra phá án hay luật pháp,… Mới đây, người hâm mộ thể hiện sự mong chờ, thích thú trước thông tin series phim đình đám Suits được nhà sản xuất Hàn Quốc làm lại. ',
        link: "https://video.fsgn5-2.fna.fbcdn.net/v/t42.9040-2/10000000_238923283343284_3409091932847079424_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=751&oh=8da9d03398ce3e49f9ffd00917490e77&oe=5B2FD5D2",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Chảo Lửa Tình Yêu",
        rate: "4 / 10 (8) ",
        img: "http://image.phimmoi.net/film/6851/poster.medium.jpg",
        actor: "Junho, Jang Hyuk, Jung Ryeo Won",
        director: "N/A",
        category: "Phim Tình Cảm",
        country: "Hàn Quốc",
        content: 'Phim Chảo Lửa Tình Yêu xoay quanh tình yêu và cuộc chiến sinh tồn của một đầu bếp nổi tiếng. Từ vị trí bếp trưởng nhà hàng Trung Quốc nổi tiếng nhất Hàn Quốc, anh ta bị đẩy xuống làm đầu bếp của một nhà hàng địa phương.​',
        link: "https://video.fhan5-2.fna.fbcdn.net/v/t42.9040-2/10000000_205487150249693_3064378287166849024_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJwcmVtdXRlX3N2ZV9oZCJ9&rl=1500&vabr=857&oh=98d531a1aa0789e21f7bdeb591025ec9&oe=5B2F253C",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Người Mẹ Bí Mật",
        rate: "4 / 10 (4) ",
        img: "http://image.phimmoi.net/film/6834/poster.medium.jpg",
        actor: "Song Yoon Ah, Kim So Yeon",
        director: "N/A",
        category: "Phim Tình Cảm",
        country: "Hàn Quốc",
        content: 'Phim Người Mẹ Bí Mật là một bộ phim kinh dị bí ẩn mô tả câu chuyện về một người mẹ thay thế đáng ngờ bước vào nhà của một người phụ nữ cầm bí mật đằng sau cái chết của đứa trẻ. Kim Yoon Jin (Song Yoon-A) là cựu bác sĩ tâm thần. Để làm điều tốt nhất cho chồng và con trai, cô ấy bỏ việc. Kim Yoon-Jin đã có một con gái, nhưng con gái của cô đã chết và cô mang một cảm giác tội lỗi về cái chết của con gái mình. Cô ấy muốn điều tốt nhất cho con trai mình sắp bước vào một trường đại học. Kim Yoon-Jin quyết định thuê một chuyên gia để giúp con trai mình bước vào một ngôi trường tốt. Chuyên gia là bí ẩn, Đó là một bộ phim kinh dị đáng sợ, nơi một người mẹ hổ Gangnam hoàn toàn dành cả cuộc đời mình cho giáo dục của con trai mình thuê một nữ cố vấn sống trong lớp học của con trai. Hai người phụ nữ bất ngờ đối mặt với tình bạn bí mật và những khoảnh khắc quan trọng như bạn bè, đôi khi kẻ thù. ',
        link: "https://video.fhan5-2.fna.fbcdn.net/v/t42.9040-2/10000000_301499157052708_7347842711560388608_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=676&oh=0b911e9159ff16c96e893cb6393e8a15&oe=5B2EF8AC",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Từ Biệt Để Chia Xa",
        rate: "0 / 10 (0) ",
        img: "http://image.phimmoi.net/film/6855/poster.medium.jpg",
        actor: "Chae Shi Ra, Lee Sung Jae",
        director: "Kim Min-Sik ",
        category: "Phim Tình Cảm",
        country: "Hàn Quốc",
        content: 'Young Hee (Chae Shi Ra) sống một mình trong một căn hộ. Cô và chồng, Sang Jin (Lee Sung Jae), đã li thân vì anh ta ngoại tình. Trong khi đó, Jung Hyo (Jo Bo Ah) đang mang bầu, nhưng bạn trai cô muốn cô phá thai. Jung Hyo đến căn hộ của Young Hee và nói rằng cô sẽ ở lại đây cho đến khi sinh con. Young Hee là mẹ của bạn trai Jung Hyo. Sống cùng nhau, Young Hee và Jung Hyo không tránh khỏi cãi vã, thế nhưng họ cũng dần trở nên hiểu và cảm thông cho nhau. ',
        link: "https://video.fhan5-7.fna.fbcdn.net/v/t42.9040-2/10000000_231436340955184_6933309819818344448_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=711&oh=859da5a8d6669a742137facb4f3f4e5c&oe=5B2F0D07",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Hãy Nhớ Tên Tôi",
        rate: "5.7 / 10 (17)",
        img: "http://image.phimmoi.net/film/6885/poster.medium.jpg",
        actor: "Hee-won Kim, Hak-joo Lee, You-young Lee",
        director: "Han-Wook Lee",
        category: "Phim Kinh Dị, Phim Tội Phạm - Hình Sự, Phim Bí Ẩn",
        country: "Hàn Quốc",
        content: 'Phim Hãy Nhớ Tên Tôi kể về Han Seo Rin là một giáo viên tại trường cấp 3, hồi đi học cô đã từng bị hãm hiếp tập thể rồi bị quay clip lại từ đó việc đấy đã để lại cho cô một nỗi ám ảnh tâm lý lớn. Sau này khi đi dạy học, vào một ngày đi làm ca tối, cô ấy uống nước do học sinh tặng rồi rơi vào trạng thái hôn mê và lại bị người khác quay clip và những bức ảnh không hay. Từ đó một nhân vật mang tên Master xuất hiện. Mọi việc được thao túng kiểm soát bởi một tay Master, từ đó những sự ám ảnh, hoảng sợ luôn bám riết lấy cô.',
        link: "https://video.fhan5-2.fna.fbcdn.net/v/t42.9040-2/10000000_176182489735803_9128003748335976448_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=556&oh=e25d2f1d9a6473baab3f806f98ac07af&oe=5B2FAE3E",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Kẻ Bình Phàm",
        rate: "6.6 / 10 (214)",
        img: "http://image.phimmoi.net/film/6864/poster.medium.jpg",
        actor: "Yoon-So Choi, Hee Sun Chung, Hyuk Jang, Man-sik Jeong",
        director: "Kim Bong-han",
        category: "Phim Kịch Tính, Phim Tội Phạm - Hình Sự, Phim Hành Động",
        country: "Hàn Quốc",
        content: 'Phim Người Thường: Sung Jin - một cảnh sát nhiệt huyết phải bán đứng lương tâm, làm việc sai trái vì mái ấm của mình. Trong khi đó, Jae Jin - người bạn phóng viên của anh thì một mực chống lại cái xấu. Liệu bọn họ, những người bình thường, có giành lại được công lý và bảo vệ sự thật khi kẻ xấu đang dùng quyền lực thao túng, che mắt mọi người ?',
        link: "https://video.fsgn5-4.fna.fbcdn.net/v/t42.9040-2/10000000_1788620724527495_2179956216392843264_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=691&oh=e2ffaf3183cfdebc4202f8ba3e769705&oe=5B30B618",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Khi Đàn Ông Muốn",
        rate: "4 / 10 (87)",
        img: "http://image.phimmoi.net/film/6862/poster.medium.jpg",
        actor: "Shin Ha-kyun, Song Ji-hyo, Lee Sung-min, Lee El",
        director: "Lee Byeong-heon",
        category: "Phim Tình Cảm, Phim Hài Hước",
        country: "Hàn Quốc",
        content: 'Khi Đàn Ông Muốn bộ phim hài, lãng mạn xoay quay về đời sống hôn nhân khi vợ chồng Bong Soo rơi vào giai đoạn lạnh nhạt. Mọi rắc rối xảy đến, khi một người phụ nữ sexy bí ẩn tên là Je Ni xuất hiện. Dưới tài quân sư của Seok Geun, cuộc sống của vợ chồng Bong Soo bỗng chốc xoay chuyển 180 độ ngoài vòng kiểm soát mang đến nhiều tình huống hài hước xoay quanh câu chuyện ngoại tình.',
        link: "https://api.banhtv.com/getfb/play.php?q=U2FsdGVkX19ufD4BWPa8whpDcnhgC14tyVq6bw%2B7RHXOa62lt5jO82pA4BpVhjdZl4CTMzJxXcxkjc35u8OstwxuxrsXP%2FysBziy4nq9LcKQkCVmAqEanSNQJtU4KvmC",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Cuộc Chiến Ngầm",
        rate: "6.8 / 10 (667) ",
        img: "http://image.phimmoi.net/film/5638/poster.medium.jpg",
        actor: "Kyung-gu Sol, Si-wan Im, Kyoung-Young Lee, Hye-jin Jeon",
        director: "Sung-hyun Byun",
        category: "Phim Kịch Tính, Phim Tội Phạm - Hình Sự, Phim Hành Động",
        country: "Hàn Quốc",
        content: 'Câu chuyện xoay quanh mối quan hệ giữa một tên tội phạm ôm khát vọng trở thành ông trùm (Sul Kyung-gu đóng) và gã bạn tù trẻ tuổi liều lĩnh (Yim Si-wan đóng). Giữa họ là đầy rẫy những toan tính và bí mật có thể xoay chuyển lòng tin và vị thế con người.',
        link: "https://video.fsgn5-1.fna.fbcdn.net/v/t42.9040-2/10000000_215671392552705_5000929915097317376_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=575&oh=eacc89639aa92d2ac22a9a21a52fdc6a&oe=5B30CC9A",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Phép Màu Đã Cho Ta Gặp Nhau",
        rate: "5 / 10 (45)",
        img: "http://image.phimmoi.net/film/6667/poster.medium.jpg",
        actor: "Kim Myung-Min, Ra Mi Ran, Kim Hyun Joo, Go Chang Suk, Joseph Lee",
        director: "Lee Hyung Min",
        category: "Phim Tình Cảm",
        country: "Hàn Quốc",
        content: 'Phép Màu Đã Cho Ta Gặp Nhau là bộ phim tình cảm pha lẫn yếu tố viễn tưởng do đạo diễn Lee Hyeong Min hợp tác cùng nhà biên kịch Baek Mi Kyeong, phim có nội dung xoay quanh người đàn ông Song Hyun Cheol A, sau một lần bị tai nạn xe trải qua được cơn nguy kịch trở về nhưng không may khi tỉnh dậy thì anh phát hiện thân xác đó chính là mình, nhưng không thể điều khiển được tinh thần, cứ như là có người khác đã xâm chiếm vào cơ thể của mình. Sau khi xuất viện, Song Hyun-Cheol A phải đối mặt với tình huống éo le và bất đắc dĩ là bỗng trở thành người đàn ông của hai gia đình khác nhau và đau đầu khi gặp phải 2 người vợ khiến cho anh phải khó xử rất nhiều trong phim Phép Màu Đã Cho Ta Gặp Nhau - The Miracle We Met (2018).',
        link: "https://video.fhan5-3.fna.fbcdn.net/v/t42.9040-2/10000000_2095227294030068_3366277834824744960_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJoZCJ9&rl=1500&vabr=696&oh=83e546e16c1c8afa98fd20cd9e884e9e&oe=5B2F0756",
        season: "1",
        eps: "1",
        tag: "Phim Hàn Quốc",
    },
    {
        name: "Nhiệt Huyết Cuồng Lam",
        rate: "0 / 10 (0)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180517/4d26768e297316d38fb08cf84a5c88ba_233_320.jpg",
        actor: "Hình Phi, Đồng Mộng Thực, Nhiếp Tử Hạo, Dương Nghiệp Minh, Tào Hy Qua",
        director: "Thành Chí Siêu",
        category: "Phim Tình Cảm",
        country: "Trung Quốc",
        content: "Nhiệt Huyết Cuồng Lam (Basketball Fever): Kể về chủ đề bóng rổ của các bạn trẻ đầy nhiệt huyết học tập tại đại học Hoa Dương. Những ước mơ hoài bảo đam mê của tuổi thanh xuân sẽ được gửi gắm qua phim.",
        link: "https://api.bilutv.com/getfb/play.php?q=U2FsdGVkX1%2FUvaylKeIICBAbJwKf6e5gtPGeTKjv6WXg4GPDlSYZCxje9ifKYXlEcmUTiQmC4vR90hMyBsN6uGssl%2BhOV%2BUXDjR6DFsZhap9Od%2FS5ODEB8vfbBoGiLBW",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    },
    {
        name: "Thế Lực Cạnh Tranh",
        rate: "0 / 10 (0)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180521/298622fdaff632c659af549968620467_228_320.jpg",
        actor: "Ngụy Thiên Tường, Phan Chi Lâm, Vương Diệu Khánh, Ưng Thể Nghi",
        director: "Lý Mộc Qua",
        category: "Phim Tình Cảm",
        country: "Trung Quốc",
        content: "Phim Thế Lực Cạnh Tranh kể câu chuyện về tập đoàn mỹ phẩm Trác Áo. Khi bị lâm vào tình cảnh khốn khó, Tổng giám đốc công ty Thẩm Trí Trạch quyết định tuyển dụng quản lý cấp cao Hứa Nặc với mức lương hấp dẫn để giải quyết các vấn đề trong công ty. Hứa Nặc 'thay máu' toàn bộ công ty, thực hiện một cuộc cải cách lớn, chính điều đó đã gây ảnh hưởng đến lợi ích của các nhân viên lâu năm. Phó Chủ tịch Dư Thu Mỹ âm thầm hợp tác với họ để loại trừ Hứa Nặc. Nhưng với năng lực và bản lĩnh của mình lại được sự ủng hộ của đại đa số nhân viên trong công ty, Hứa Nặc đã xoay chuyển được tình thế bất lợi. Từ mối quan hệ căng thẳng, Hứa Nặc và Thẩm Trí Trạch dần dần nảy sinh tình cảm với nhau. Tình cờ, Hứa Nặc phát hiện đối tượng bố mẹ mai mối cho mình lại là anh bạn đồng nghiệp Lâm Phàm, một con người ấm áp hoàn toàn trái ngược với một Thẩm Trí Trạch lạnh lùng khiến cho Hứa Nặc không biết phải lựa chọn thế nào.",
        link: "https://api.bilutv.com/getfb/play.php?q=U2FsdGVkX18CKGPzWqtztvdOQRiTHgyE%2BJ8EjalpNvYGyYmOHmFOpKRW1%2FcjS1J8gjErEMf3xM%2Fg2cF3TK3%2Bt%2BZqTW6FLW%2FNETdlIzc8TppJ3NajeCeS8gD9hMpIdxto",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    },
    {
        name: "Trấn Hồn",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6888/poster.medium.jpg",
        actor: "Bạch Vũ, Chu Nhất Long, Lý Tử Kỳ, Tần Bằng, Lưu Mẫn Đình, Cao Vũ Nhi",
        director: "Châu Viễn Đan",
        category: "Phim Viễn Tưởng, Phim Phiêu Lưu, Phim Hành Động",
        country: "Trung Quốc",
        content: "Bộ phim Trấn Hồn kể về hành trình truy tìm tứ thánh khí Triệu Vân Lan và Thẩm Ngụy qua nhiều kiếp để miêu tả lại ván cờ giữa nhân gian, quỷ giới, tiên đồ.",
        link: "https://video.fhan5-2.fna.fbcdn.net/v/t42.9040-2/10000000_1783758188383861_7809377844194181120_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=866&oh=7a85a17fc91c2bd585af94d09d95b1b3&oe=5B2F58CE",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    },
    {
        name: "Pháp Y Tần Minh",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6893/poster.medium.jpg",
        actor: "Trương Nhược Quân, Tiêu Tuấn Diễm, Lý Hiện",
        director: "N/A",
        category: "Phim Tội Phạm - Hình Sự",
        country: "Trung Quốc",
        content: "Phim Pháp Y Tần Minh chuyển thể từ tiểu thuyết cùng tên, 'Bàn tay có quỷ vạn kiếp bất phục, nhân gian thái bình tồn tại Phật tâm. Kéo lớp chỉ tơ phân giải tiếng nói của tử thi, nhìn rõ mọi việc rửa sạch oan tình'. Tần Minh là pháp y tuấn tú, cao lãnh, có thâm niên cao trong lĩnh vực giải phẩu tử thi, năng lực logic vô cùng mạnh, tâm tư kín đáo. Thường rất dễ dàng tìm thấy những manh mói bị bỏ quên trên thi thể nạn nhân, điều tra vì vụ án, cung cấp những manh mối mới quan trọng cho việc phá án. 'Câu chuyện của người chết' kết giao với anh, anh chính là 'Qủy thủ Phật tâm'.",
        link: "https://video.fsgn5-2.fna.fbcdn.net/v/t42.9040-2/10000000_267047293857744_1282230046332813312_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=550&oh=a5ff818340292c0e915186a1a2254fae&oe=5B2EFF61",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    },
    {
        name: "Chung Quỳ Tróc Yêu Ký",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6868/poster.medium.jpg",
        actor: "Dương Dung, Lý Tử Phong, Dương Húc Văn, Mạch Địch Na",
        director: "N/A",
        category: "Phim Cổ Trang, Phim Tình Cảm, Phim Phiêu Lưu",
        country: "Trung Quốc",
        content: "Bộ phim Chung Quỳ Tróc Yêu Ký: Trên trời Thần Chung Quỳ là một vị thần cai quản việc phục ma, áp chế yêu quái tác quái trên nhân gian. Trong một lần nóng giận Thần Chung Quỳ đã mạo phạm thiên đình nên đã bị giáng làm dân thường và mất đi toàn bộ ký ức. Và hiện tại anh tên là Mục Thiên Nhiên, với mong muốn tìm là thân thế thật sự của mình anh đã gặp gỡ và kết giao với Lăng Hề (Dương Dung) cùng Dương Nhân Chấp (Lý Tử Phong). Họ nhận diệt yêu trừ ma giúp đỡ người khác, bắt đầu một cuộc hành trình đầy thử thách. Chúc các bạn xem phim vui vẻ.",
        link: "https://video.fhan5-2.fna.fbcdn.net/v/t42.9040-2/10000000_407912339683739_750891924088422400_n.mp4?_nc_cat=0&efg=eyJybHIiOjIwNTksInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=2059&vabr=1373&oh=51f5bbf3457b7b531dea3da3f5937971&oe=5B2EF0FD",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    },
    {
        name: "Nhà Có Con Cái Vừa Trưởng Thành",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6880/poster.medium.jpg",
        actor: "Vương Lâm, Trương Nhất Sơn, Trương Diệp Tử, Cao Á Lân, Châu Tiểu Bân",
        director: "N/A",
        category: "Phim Tình Cảm",
        country: "Trung Quốc",
        content: "Phim Nhà Có Con Cái Vừa Trưởng Thành: 25 tuổi tỷ tỷ Giang Nam cùng 22 tuổi đệ đệ Giang Bắc trưởng thành. Bọn họ cha mẹ lại ly hôn, lầu trên lầu dưới hai hộ chung cư một phân thành hai, Giang Nam đi theo mẫu thân Ngô Quỳnh trụ trên lầu chung cư, Giang Bắc đi theo phụ thân Giang Quốc Lập ở tại dưới lầu chung cư. Người cha Giang Quốc Lập 50 tuổi cưới một người phụ nữ là giáo viên thể hình Đới Linh Linh 35 tuổi, còn mang theo một đứa con trai 8 tuổi Đồng Đồng. Người mẹ Ngô Quỳnh 49 tuổi cũng rơi vào lưới tình và gả cho chàng diễn viên trẻ tuổi Đỗ Vĩ, mà anh chàng cũng có 1 đứa con gái 12 tuổi Dương Dương. Bốn người con không hiểu lòng cha mẹ khiến cho cả bốn cha mẹ đều nhọc lòng. Nhưng trong mắt của những đứa con, cha mẹ cũng quản chế chặt chế, khiến họ gặp nhiều phiền não. Câu chuyện xoay quanh 2 gia đình với những đặc điểm tính cách đặc trưng và khác biệt khiến cho họ nhiều lần mâu thuẫn giữa cha mẹ và con cái, giữa anh chị em, giữa gia đình cũ và gia đình mới và quá trình hòa giải, gắn kết giữa tình thân.",
        link: "https://video.fsgn5-5.fna.fbcdn.net/v/t42.9040-2/10000000_2071214763142104_8021652745918349312_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=970&oh=040a4f5861fe7fa872914781208f2de1&oe=5B2FFB23",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    },
    {
        name: "Mãng Hoang Kỷ",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6794/poster.medium.jpg",
        actor: "Lưu Khải Uy, Vương Âu, Trần Diệc Phi, Trương Tuấn Ninh, Ngưu Tuấn Phong",
        director: "Hoàng Tổ Quyền",
        category: "",
        country: "Trung Quốc",
        content: "Phim Cổ Trang, Phim Tình Cảm, Phim Phiêu Lưu, Phim Hành Động",
        link: "https://video.fsgn5-2.fna.fbcdn.net/v/t42.9040-2/10000000_1836275823339095_6641270134092595200_n.mp4?_nc_cat=0&efg=eyJybHIiOjE3MDIsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1702&vabr=1135&oh=dc5ace557fde7c8acee771d4f487f9ea&oe=5B30D185",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    },
    {
        name: "Bạn Học 200 Triệu Tuổi",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6878/poster.medium.jpg",
        actor: "Lý Canh Hy, Châu Trí Linh ",
        director: "N/A",
        category: "Phim Tình Cảm",
        country: "Trung Quốc",
        content: "Phim Bạn Học 200 Triệu Tuổi: Tuyên Mặc là một nữ sinh trung học bình thường cho tới ngày cơ thể cô bất ngờ bị một nữ soái đến từ một nền văn minh xa lạ chiếm hữu. Những khả năng kì lạ nổi bật của cô khiến cho mọi người xung quanh ấn tượng. Tuy nhiên, nữ soái cực thông minh này lại không biết cách nào để hành xử giống như một người bình thường, và phải học lại tất cả mọi thứ từ đầu. Khi cuộc sống loài người của cô càng ngày càng trở nên vui vẻ và thú vị thì có người đã phát hiện ra bí mật của cô.",
        link: "https://video.fsgn5-7.fna.fbcdn.net/v/t42.9040-2/10000000_238058910295579_6881830346103455744_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDYsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1506&vabr=1004&oh=15fd733c40ba8842e4dbbf40ed7016f9&oe=5B2FDFD9",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    }, {
        name: "Manh Thê Thực Thần",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6795/poster.medium.jpg",
        actor: "Triệu Kiện, Chủng Đan Ni, Từ Chí Hiền, Sài Cách Thể loại: Võ Thuật - Kiếm Hiệp, Cổ Trang - Thần Thoại, Tâm Lý - Tình Cảm, Xuyên Không",
        director: "N/A",
        category: "Phim Cổ Trang, Phim Tình Cảm, Phim Phiêu Lưu",
        country: "Trung Quốc",
        content: "Phim Manh Thê Thực Thần: nói về Hạ Thuần Dư vốn xuất thân từ gia thế quyền quý, được Dụ Vương uỷ thác, thâm nhập vào hắc phong trại làm nội ứng, mục đích là giúp Dụ Vương tìm ra chứng cứ mà hắc phong trại cấu kết với thái tử. Nhưng trong khi tiếp xúc với Bạch Sùng ở hắc phong trại, tình huynh đệ ngày một thêm sâu, đứng trước 2 sự lựa chọn khó khăn là tình nghĩa và quốc gia, người phụ nữ thành thị hiện đại Diệp Gia Dao bất ngờ thông qua thiên thạch thần kỳ xuyên không về Hoài Tống, trở thành Diệp Cẩn Huyên con gái của tri phủ Diệp Bỉnh Hoài, nhưng lại bị bắt cóc lên hắc phong trại, bị Bạch Sùng coi là công cụ để thăm dò điều tra Hạ Thuần Dư, đưa vào động phòng cùng Hạ Thuần Dư. Trong tình thế hiểm ác, Diệp Gia Dao thông qua tài nghệ nấu ăn và tư duy hiện đại của mình , lần lượt biến nguy thành an, còn trở nên có tên tuổi trong giới ẩm thực. Bộ phim thông qua những tình tiết hài hước gây cười và những đấu tranh xung đột mãnh liệt, đã cho thấy tình yêu mãnh liệt đôi lứa và tình nghĩa huynh đệ quý báu.",
        link: "https://video.fsgn5-5.fna.fbcdn.net/v/t42.9040-2/10000000_394039701005604_3790266930292588544_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=935&oh=f2e75c8e1baae15e60b7c82aa82515c6&oe=5B2F6310",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    }, {
        name: "Lang Càn Kiếp",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6869/poster.medium.jpg",
        actor: "Lương Gia Nhân, Uyển Quỳnh Đan, TRƯƠNG TÂY CHÍNH, Mạnh Lộ, Trương Khang",
        director: "Tiêu Dung",
        category: "Phim Cổ Trang, Phim Tình Cảm, Phim Phiêu Lưu, Phim Hành Động",
        country: "Trung Quốc",
        content: "Phim Lang Càn Kiếp: kể về con yêu quái già ngàn tuổi Ứng Càn Thời, chuyên trông nom núi Thiên Lang, đề phòng dịch bệnh Lang Tộc lây lan. Để kiếm tìm nguồn cơn tà ác bị mất tích là Thiên Lang đao, Ứng Càn Thời xuống núi. Cùng lúc đó, Lang Thập Thất mới 5 tuổi lẻn xuống núi, bị số phận dị hóa, nắm giữ sức mạnh thần bí. Ứng Càn Thời cùng nữ đạo tặc giang hồ Lệ Chi đang có ý đồ cướp thanh đao, bắt cóc Tiểu Thập Thất, trải qua vô số màn truy sát của lính thuê và quân đoàn cương thi… làm nên câu chuyện truyền kỳ.",
        link: "https://video.fsgn5-6.fna.fbcdn.net/v/t42.9040-2/10000000_404206856655580_942283805761208320_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=891&oh=367148efd96fec078883335ec775f755&oe=5B30BE04",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    }, {
        name: "Huyền Môn Đại Sư",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6844/poster.medium.jpg",
        actor: "Charlie Hunnam, Đồng Mộng Thực, Vương Mộng Trúc, Vương Tử Thần, Quách Kính",
        director: "Hoàng Tuấn Văn, Lương Thắng Quyền",
        category: "Phim Cổ Trang, Phim Phiêu Lưu, Phim Hài Hước",
        country: "Trung Quốc",
        content: "Trong phim Huyền Môn Đại Sư: 3000 năm trước, Chiến thần Dương Tiễn tiên đoán nhân gian sẽ gặp n nhân gian sẽ gặp đại nạn diệt vong, chỉ có vấn đạo giả mang theo thánh giáp nguyên thủy hợp nhất mới có thể giải cứu nhân gian. Vào thời Đông Hán, Lang tộc lập nên U Linh hoàng triều, khắp vùng trung nguyên rộng lớn phải đối mặt với nhiều nguy cơ đe dọa. Tiên Minh lo sợ Lang tộc gây hại nhân gian, nên đã tổ chức tìm kiếm thánh giáp và tuyển chọn vấn đạo giả để dẹp trừ tai họa",
        link: "https://video.fsgn5-3.fna.fbcdn.net/v/t42.9040-2/10000000_343986662791512_4885371835723546624_n.mp4?_nc_cat=0&efg=eyJybHIiOjE4MDksInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1809&vabr=1206&oh=2ca1ebaf5d6910d99cbaeb33b29c4d00&oe=5B2F6873",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    }, {
        name: "Kết Ái: Mối Tình Đầu Của Thiên Tuế Đại Nhân",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6817/poster.medium.jpg",
        actor: "Từ Khai Sinh, Hoàng Cảnh Du, Tống Thiến",
        director: "Trần Chính Đạo, Hứa Triệu Nhậm",
        category: "Phim Tình Cảm",
        country: "Trung Quốc",
        content: "Bộ phim Kết Ái: Mối Tình Đầu Của Thiên Tuế Đại Nhân xoay quanh mối quan hệ giữa cô phóng viên thực tập Quan Bì Bì và chuyên gia nghiên cứu văn hóa Hạ Lan Tĩnh Đình. Ban đầu, Quan Bì Bì xin được phỏng vấn Hạ Lan Tĩnh Đình, song liên tục bị anh từ chối. Khi bí mật theo dõi anh, Bì Bì vô cùng sốc khi biết: Hạ Lan Tĩnh Đình thường ăn hoa, thích tắm mình trong ánh trăng, ban ngày không nhìn thấy gì nhưng thị lực ban đêm lại cực nhạy bén, nhịp tim duy trì ở mức 3 nhịp/phút. Đồng thời, Hạ Lan Tĩnh Đình còn tiết lộ, anh là người ngoài hành tinh, đến từ một nơi được tạo nên từ carbon.Quan Bì Bì cảm thấy vô cùng khó tin và cho rằng, Hạ Lan Tĩnh Đình đang trêu mình. Thế nhưng sau đó, rất nhiều chuyện xảy đến khiến cô nhận ra, đây không phải câu nói đùa. Vào lúc ấy, bạn trai thanh mai trúc mã của Bì Bì lại phản bội cô, khiến cô cảm thấy mình bị thế giới này ruồng bỏ. Chỉ có Hạ Lan Tĩnh Đình ở bên cạnh và mang đến sự ấm áp cho Bì Bì. Từ đó, Bì Bì đã rơi vào lưới tình với anh, còn bỏ công sức nghiên cứu về hành tinh của anh. Chẳng ngờ rằng, mối quan hệ đầy duyên phận của họ lại phải chịu thêm những thử thách khó lường khác.",
        link: "https://video.fsgn5-7.fna.fbcdn.net/v/t42.9040-2/10000000_476333786116198_7912453099338334208_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=925&oh=993c32f6724c558438bc02b56ec20ff6&oe=5B2EE230",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    }, {
        name: "Thề Ngôn",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6832/poster.medium.jpg",
        actor: "Giả Nãi Lượng, Lý Thạnh, Tần Hạo, Lưu Dịch Quân, Lưu Uy",
        director: "Viên Tuấn Bình, Trương Đồng",
        category: "Phim Phiêu Lưu, Phim Hành Động, Phim Chiến Tranh",
        country: "Trung Quốc",
        content: "Phim Thề Ngôn: là một tác phẩm được đầu tư công phu kỹ lưỡng, có bối cảnh xoay quanh thời kì kháng chiến chống Nhật trường kỳ của Trung Quốc. Nam chính của bộ phim – Ngôn Thiếu Bạch (Giả Nãi Lượng) – vốn là một thiên tài toán học nhưng đã vứt bỏ sự nghiệp tương lai phơi phới để đi theo tiếng gọi của tổ quốc. Anh tình cờ gặp gỡ và kết nghĩa huynh đệ với Tiêu Tư Vũ (Tần Hạo), cả hai cùng nhau vào sinh ra tử trên chiến trường. Tuy nhiên, Tư Vũ chẳng may bị đạn của địch ghim vào đầu. Dù không mất mạng nhưng khả năng suy đoán và chỉ huy của anh đã sụt giảm đáng kể. Lúc ấy, Thiếu Bạch được lựa chọn để trở thành người kế nhiệm của Tư Vũ.",
        link: "https://video.fsgn5-3.fna.fbcdn.net/v/t42.9040-2/10000000_226928221404963_1757854716101918720_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1NjAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1560&vabr=1040&oh=9e2a5e5ed76f1d310a01fdf77cd95f1c&oe=5B2FE24A",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    }, {
        name: "Quy Khứ Lai",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6838/poster.medium.jpg",
        actor: "Đường Yên, La Tấn, Vương Chí Văn, Trương Hy Lâm, Hứa Linh Nguyệt, Vu Tề Vỹ, Mã Trình Trình",
        director: "Lưu Giang",
        category: "Phim Tình Cảm",
        country: "Trung Quốc",
        content: "Phim Quy Khứ Lai, The Way We Were: Thư Triệt, Tiêu Thanh, Mậu Doanh, Ninh Minh, vì gia đình, vì tìm kiếm tri thức, tình yêu, v.v., gặp nhau ở Mỹ, trở thành nhóm du học sinh ưu tú. Thư Triệt và Mậu Doanh ban đầu là một đôi, không ngờ bố của hai người có qua lại với nhau vì “lợi ích ko thể thấy ánh sáng” nên ép hai người chia tay. Tiêu Thanh lại khác, trong 9 người chỉ có 1, chia sẻ quan điểm của bố mình: chỉ được phép hưởng thụ từ công sức mình mà ra. Đối mặt với chất vấn, áp lực từ tai nạn của mẹ, cô tiếp tục kiên trì. Tính cách của cô được lòng mọi người, rồi cùng Thư Triệt nảy sinh tình cảm. Hành vi phạm tội của bố Thư Triệt và Thành Nhiên cuối cùng cũng bị bại lộ, còn Tiêu Thanh lại trở thành người làm chứng. Giữa tình yêu và công lý, là một lựa chọn khó cho Tiêu Thanh. Cuối cùng dưới lời làm chứng đanh thép của Tiêu Thanh, Thư Vọng và Thành Vĩ cũng phải trả giá cho hành vi phạm tội của mình. Những người trẻ thông qua kinh nghiệm đều trưởng thành hơn, thấu hiểu con người và giá trị cuộc sống, quay về quỹ đạo đúng đắn.",
        link: "https://video.fhan5-3.fna.fbcdn.net/v/t42.9040-2/10000000_457495074700581_5038166465509851136_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=987&oh=2c173b1f6231d3b499f64e0f19abca85&oe=5B3001CD",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    }, {
        name: "Liên Minh Game Thủ",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6884/poster.medium.jpg",
        actor: "Zhijie Bai, Zi Ge Fang, Xiaobing Ji, Enjie Lu",
        director: "Wayne Wang",
        category: "Phim Kịch Tính, Phim Hài Hước",
        country: "Trung Quốc",
        content: "Phim Liên Minh Game Thủ Xoay quanh một nhóm gồm những game thủ chuyên nghiệp lẫn nghiệp dư cùng tập hợp lại để tham gia giải đấu game. . Lần đầu tiên đặt chân tới đấu trường lớn, với kĩ năng và kinh nghiệm chiến đấu trong game siêu đẳng, họ sẽ phải đưa ra chiến thuật thế nào để chiến đấu với các đối thủ đáng gờm",
        link: "https://video.fsgn5-6.fna.fbcdn.net/v/t42.9040-2/10000000_172029036812867_6960785666208694272_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=905&oh=d3ef81b1408ce8a4d8bab463a35ba892&oe=5B30AED7",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    }, {
        name: "Nỗi Đau Tuổi 17",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6882/poster.medium.jpg",
        actor: "Thái Trác Nghiên, Từ Kiều, Hồ Hạ",
        director: "Bành Phát",
        category: "Phim Tình Cảm",
        country: "Trung Quốc",
        content: "Phim Nỗi Đau Tuổi 17 biết đau của cô  nữ sinh Hạ Viễn Viễn đam mê truyện tranh và fan cuồng của Vương Lực Hoành. Trong mắt thầy cô và bạn bè, Viễn Viễn là một học sinh cá biệt lười biếng và hư hỏng. Thế nhưng, ít ai biết được nguyên do vì sao và càng không biết cô bé mắc chứng mất đi cảm giác đau.",
        link: "https://video.fhan5-7.fna.fbcdn.net/v/t42.9040-2/10000000_2095091414080760_8341443306265247744_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=732&oh=ba3a040ec70d66cb873427eb6e7042db&oe=5B2F2B72",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    }, {
        name: "Ôi! Hoàng Đế Bệ Hạ Của Ta",
        rate: "2 / 10 (5)",
        img: "http://image.phimmoi.net/film/6790/poster.medium.jpg",
        actor: "Triệu Lộ Tư, Cốc Gia Thành",
        director: "N/A",
        category: "Phim Kịch Tính",
        country: "Trung Quốc",
        content: "Phim Ôi! Hoàng Đế Bệ Hạ Của Ta kể về câu chuyện từ thế kỉ 21, cô gái Lạc Phỉ Phỉ nhân duyên đen đủi, vô tình xuyên không tới một đất nước xa xôi thần bí – Hoàng Đạo quốc. Ở Hoàng Đạo quốc, qua một ngàn năm sẽ thực hiện chế độ thay đổi hoàng đế luân phiên, sắp tới chính là Bắc Đường Dịch, tinh chủ cung Ma Kết kế nhiệm, mà đồng thời trong Bắc Đường gia tộc, Bắc Đường Đường, tinh chủ cung Song Ngư và Bắc Đường Mặc Nhiễm, tinh chủ cung Bảo Bình, đột nhiên danh tiếng nổi bật không ai sánh bằng. Bởi vì Lạc Phỉ Phỉ xuyên đến, thế trận hiện đang cân bằng đột ngột bị phá vỡ, vận mệnh an bài cho Lạc Phỉ Phỉ trở thành nữ chính xuyên không thảm nhất lịch sử, càng thần kì hơn là một người yếu như gà lại trở thành đại boss của phe phản diện. Nàng quỷ Lạc Phỉ Phỉ liên tiếp chung đụng với 12 tinh chủ tính cách khác biệt, chuyện cười chồng chất, trở thành oan gia vui vẻ của hoàng thượng, nghé con mới sinh không sợ hổ, nàng lời nói dõng dạc: Hoàng đế này, ta muốn!",
        link: "https://video.fsgn5-4.fna.fbcdn.net/v/t42.9040-2/10000000_164874760866625_4683520531863961600_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=879&oh=5fb92d31432e9813eb1e96013f2d8d4f&oe=5B30187E",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    }, {
        name: "Mùa Hạ Thoáng Qua",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6842/poster.medium.jpg",
        actor: "Bạch Vũ, Bốc Quan Kim, Lữ Bằng, Trương Thư Duy, Dương Phương, Văn Cường, Hầu Tình Tử Tử, Lưu Lâm, Diệp Chi, Hoa Văn",
        director: "Lã Doanh ",
        category: "Phim Tình Cảm",
        country: "Trung Quốc",
        content: "Phim Mùa Hạ Thoáng Qua nói về thiếu nữ Hà Lạc (Bốc Quan Kim) thông minh nghịch ngợm nhưng thành tích học tập chưa tốt, lại không cẩn thận buông lời khoác lác rằng sẽ thi vào trường danh tiếng. Học sinh giỏi Chương Viễn (Bạch Vũ), trông có vẻ tự cao tự đại nhưng lại là người có chí. Dần dà, anh chàng cảm động trước sự kiên nhẫn của Hà Lạc.",
        link: "https://video.fhan5-1.fna.fbcdn.net/v/t42.9040-2/10000000_226809591429854_4818588491589877760_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=650&oh=8264296732d37835292399fadc2bb34d&oe=5B2FBC40",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    }, {
        name: "Vua Mạo Hiểm Vệ Tư Lý",
        rate: "6 / 10 (89)",
        img: "http://image.phimmoi.net/film/6666/poster.medium.jpg",
        actor: "Charlie Hunnam, Nhậm Đạt Hoa, Lâm Gia Đống, Dư Văn Lạc, Hồ Nhiên",
        director: "Chung Thiếu Hùng",
        category: "Phim Hành Động, Phim Phiêu Lưu, Phim Tình Cảm",
        country: "Trung Quốc",
        content: "Phim Vua Mạo Hiểu Vệ Tư Lý: Được chuyển thể từ tuyển tập Wisely Series của nhà văn Ni Kuang, bộ phim khoa học viễn tưởng xoay quanh một phú nhị đại (thế hệ thứ hai của gia đình giàu có), tham gia vào một cuộc phiêu lưu và kết bạn với người ngoài hành tinh. Bộ phim đặt trong bối cảnh, người ngoài hành tinh đã xuất hiện trên trái đất từ hàng nghìn năm nay. Một thám tử quốc tế đã sử dụng các công nghệ tân tiến để bảo vệ họ và bảo vệ nhân loại. Một bàn tay bị đứt lìa xuất hiện trong nhà của Bạch lão đại (Nhậm Đạt Hoa), một cảnh sát quốc tế. Trong khi điều tra sự xuất hiện thế lực siêu nhiên, Vệ Tư Lý (Dư Văn Lạc) và con gái của Bạch lão đại – Bạch Tố (Hồ Nhiên) gặp một người tên là Đặng Thạch (Lâm Gia Đống), người có thể tách rời cơ thể tùy theo ý chí của mình. Một phát hiện tương tự cũng được phát hiện ở Ai Cập, xác ướp của Pharaoh bị chia thành nhiều mảnh. Điều đó thu hút sự chú ý của mọi người vào ngôi mộ bí ẩn và những bí mật mà nó nắm giữ.",
        link: "https://video.fhan5-5.fna.fbcdn.net/v/t42.9040-2/10000000_1652863398084692_3155787088285138944_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=920&oh=7a152e86e04c355d5b2439fae660228e&oe=5B2FB76A",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    }, {
        name: "Tần Thời Minh Nguyệt",
        rate: "6 / 10 (62)",
        img: "http://image.phimmoi.net/film/3790/poster.medium.jpg",
        actor: "Lục Nghị, Trần Nghiên Hy, Tưởng Kình Phu, Hồ Băng Khanh",
        director: "N/A",
        category: "Phim Kịch Tính, Phim Cổ Trang",
        country: "Trung Quốc",
        content: "Tần thời Minh Nguyệt 2015, tên tiếng Anh là Qin's Moon vốn là một loạt phim hoạt hình CG Trung Hoa dựa trên tiểu thuyết cùng tên của một tác gia người Đài Loan là Ôn Thế Nhân (溫世仁 - Wen Shiren). Đây là một phim hoạt hình võ thuật 3D đầu tiên của đất nước Trung Hoa, được sản xuất bởi công ty khoa kĩ Huyền cơ Hàng Châu (Hangzhou StarQ) ở Hàng Châu, Chiết Giang. Tiêu đề phim mang ý nghĩa là 'Thời Tần Trăng Sán', được trích từ một bài thơ nổi tiếng. Phim đề cập đến tên của hai vị anh hùng: Minh trong Thiên Minh, Nguyệt trong Nguyệt Nhi.Lấy bối cảnh thời cuộc lúc bấy giờ đã định, nhưng loạn thế chưa chấm dứt. Thiên hạ đệ nhất kiếm khách, cận vệ của Thủy Hoàng là Cái Nhiếp dẫn con trai của một cố nhân, lẩn tránh sự truy sát của Tần Vương. Lúc này cậu bé Thiên Minh vẫn hoàn toàn không hay biết gì về thân phận thực sự của mình. Bàn tay số mệnh dần dần cuộn mở bức tranh tươi sáng. Tại biên cảnh Tần quốc, Tàn Nguyệt cốc, Cái Nhiếp một người một kiếm diệt 300 thiết kỵ quân Tần. Doanh Chính phẫn nộ, lệnh cho thừa tướng Lý Tư phải tìm cách diệt trừ tất cả thế lực chống Tần. Lý Tư đề xuất sách lược dĩ độc công độc, dùng giang hồ để diệt giang hồ. Quỷ Cốc truyền nhân - quý tộc nước Hàn là Vệ Trang, 12 năm trước vốn là đồng môn sư đệ với Cái Nhiếp, lúc nào cũng nung nấu ý định đánh bại Cái Nhiếp, đoạt lấy danh hiệu đệ nhất kiếm. Vì vậy y đã bất chấp nhục thân, tu luyện cấm thuật của Quỷ Cốc phái, thực lực cao thâm khôn lường. Lý Tư dùng Cái Nhiếp làm mồi nhử, dụ Vệ Trang xuất kích. Trên đường đào vong, Thiên Minh đã kết giao với hậu nhân tướng quân nước Sở là Thiếu Vũ, cùng các cao thủ của Mặc gia, và thiếu nữ có thân thế bí ẩn Cao Nguyệt. Lúc này thủ hạ của Vệ Trang là Tứ đại thiên vương cũng lần lượt xuất hiện truy sát bọn người Thiên Minh.",
        link: "https://video.fsgn5-4.fna.fbcdn.net/v/t42.9040-2/10000000_2020785014829723_3990230776414208000_n.mp4?_nc_cat=0&efg=eyJybHIiOjIzOTUsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=2395&vabr=1597&oh=98fb6e22e9c2238878e5b4adfe66a753&oe=5B2F9852",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    }, {
        name: "U Lan Hồ Ngự Trù Giá Đáo",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6796/poster.medium.jpg",
        actor: "Lý Mộng Dĩnh, Từ Khả, Từ Hà Viện, Liêu Vọng, Lý Sầm Dịch, Kim Vũ Phong",
        director: "N/A",
        category: "Phim Tình Cảm",
        country: "Trung Quốc",
        content: "Phim U Lan Hồ Ngự Trù Giá Đáo U Lan Hồ, mỗi ngày 15-7 hàng năm sẽ xuất hiện thời không song song, đồng thời vào 12 giờ đêm sẽ có chấp niêm của sinh linh do ngã xuống nước, chết mà sống lại. Tiểu Hạo Tử, xuất thân từ ngự trù thế gia, lúc nhỏ ngoài ý muốn bị tai nạn dẫn tới sinh lý khuyết thiếu, được đưa vào hoàng cung làm thái giám, đồng thời bị gạch khỏi ra phả. Trời sinh đam mê trù nghệ tiểu hạo tử tiến cung về sau được trù sư ngự thiện phòng yêu thích, ngoại lệ thu làm đồ đề, còn truyền cho tài nghệ gia truyền. Đại trù đồ đệ Đại Hồ Tử sinh lòng đố kỵ, biết được tiểu hạo tử thầm mến nghi phi, vì vậy mưu hại nghi phi, không ngờ cả ba cùng rơi xuống hồ. Khi thời không song song xuất hiện, tiểu hạo tử được cứu lên bờ. hắn phát hiện mình xuyên không tới hiện đại, Dùng Đoạn Minh Thiên thân thể, mà ân nhân cứu mạng hắn lại có tướng mạo giống nghi phi - Bạch tân. Một cái thiên phú cực cao ngự trù tiểu thái giám 'Tiểu Hạo Tử', trời xui đất khiến xuyên không thành Con Ông Cháu Cha , từ đó phát sinh nhiều tình tiết dở khóc dở cười",
        link: "https://video.fhan5-5.fna.fbcdn.net/v/t42.9040-2/10000000_2044529775873683_1068533965700202496_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=906&oh=76e22cae751bd9e40bdde5c89301e843&oe=5B2FA31C",
        season: "1",
        eps: "1",
        tag: "Phim Trung Quốc",
    },
    {
        name: "Siêu Thú Cuồng Nộ",
        rate: "6.5 / 10 (6837)",
        link: "https://api.banhtv.com/getfb/play.php?q=U2FsdGVkX1%2FdhxfI1oKqSKqaJgpB2a6X%2B3FiOkuhs7Yca3fe17BbvSFzra7fQ5entfGrZk338Z3vxwSmi1ECDXTjNNgG9d%2F3IWlCaZoMQLFK%2Be0iE4nU%2Bco8LefE2j0E",
        img: "http://s.aphim.co/uploads/film/images/modsz/20180416/tt2231461_216_320.jpg",
        season: "1",
        eps: "1",
        content: "Rampage - Siêu Thú Cuồng Nộ nói về nhà sinh vật học Davis Okoye (Dwayne Johnson) đã kết bạn với George, một con khỉ đột thông minh, người đã được chăm sóc từ khi sinh ra. Tuy nhiên, một thí nghiệm di truyền giả mạo đã biến đổi con khỉ nhuyễn thành một con quái vật. Khi các con quái vật mới được tạo ra này tràn ngập khắp Bắc Mỹ, phá hủy mọi thứ trên con đường của họ, Okoye đã làm việc với một kỹ sư di truyền bị để tìm ra thuốc giải độc, chiến đấu để vượt qua một chiến trường luôn thay đổi, không chỉ để ngăn chặn một thảm hoạ toàn cầu mà còn cứu được sinh vật đã từng là bạn của mình. ",
        actor: "Dwayne Johnson, Jeffrey Dean Morgan, Malin Akerman, Joe Manganiello",
        director: "Brad Peyton",
        category: "Phim Viễn Tưởng, Phim Phiêu Lưu, Phim Hành Động",
        country: "Mỹ",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "Điệp Vụ Chim Sẻ Đỏ",
        rate: "7 / 10 (60421) ",
        img: "http://image.phimmoi.net/film/6789/poster.medium.jpg",
        actor: "Jennifer Lawrence, Ciarán Hinds, Mary-Louise Parker, Jeremy Irons",
        director: "Francis Lawrence",
        category: "Phim Kinh Dị",
        country: "Mỹ",
        content: "Phim Điệp Vụ Chim Sẻ Đỏ nói về Dominika Egorova (Jennifer Lawrence) bất đắc dĩ được chọn để đào tạo thành một chim sẻ, môt điệp viên có sức quyến rũ chết người của Tổng cục an ninh Nga. Dominika phải học cách sử dụng cơ thể như một loại vũ khí, tuy nhiên cô vẫn luôn đấu tranh để duy trì ý thức về bản thân trong suốt quá trình huấn luyện làm vô nhân hóa. Được phát hiện ra tài năng trong một hệ thống tiêu cực, cô nổi lên là một trong những người giỏi nhất của chương trình đào tạo. Mục tiêu đầu tiên của cô là Nate Nash (Joe Edgerton), một nhân viên của CIA, đảm trách nhiệm vụ nằm vùng nhạy cảm nhất của cơ quan tình báo Nga. Hai con người trẻ tuổi rơi vào vòng xoáy luẩn quẩn giữa lôi cuốn và lừa dối, đe dọa đến sự nghiệp của họ, lòng trung thành và an ninh của cả hai quốc gia.",
        link: "https://video.fhan5-2.fna.fbcdn.net/v/t42.9040-2/10000000_1878270458890496_4446532882239848448_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=446&oh=1bd43a0e93a639d528c7c2be92b53846&oe=5B2EF501",
        season: "1",
        eps: "1",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "Thiêu Đốt",
        rate: "7.9 / 10 (533)",
        img: "http://image.phimmoi.net/film/6894/poster.medium.jpg",
        actor: "Ah-in Yoo, Jong-seo Jeon, Steven Yeun",
        director: "Chang-dong Lee",
        category: "Phim Kịch Tính, Phim Tình Cảm, Phim Bí Ẩn",
        country: "Hàn Quốc",
        content: 'Burning được xây dựng dựa trên truyện ngắn của nhà văn Nhật Bản Haruki Murakami "Barn Burning" và được thay đổi bối cảnh từ Nhật Bản thành Hàn Quốc. Jong Soo (Yoo Ah In) là một người giao thức ăn nhanh. Một ngày nọ, anh tình cờ va phải Haemi (Jeon Jong Seo), một cô gái anh quen hồi nhỏ, và nhanh chóng bị cái tính thất thường nhưng bí ẩn của cô gái ấy mê hoặc. Sau đó cô gửi anh chăm sóc con mèo của mình để đi đến Nam Phi. Khi trở về, cô dẫn theo một người đàn ông tên là Ben (Steven Yeun) - người mà cô giới thiệu là bạn trai của mình với Jong Soo. Ben là một tài phiệt giàu có. Một ngày Haemi cùng Ben đến nhà Jong Soo, và tại đây Ben đã tiết lộ cho Jong Soo sở thích kì quái của mình là đốt những cái nhà kính. Burning tập trung khắc hoạ thế giới của những người trẻ tuổi không quyền lực, không hy vọng vào tương lai, ôm trong mình nỗi phẫn nộ không tên và cách họ phẫn nộ lên thế giới bí ẩn này. Đây là câu chuyện mang hơi thở thời đại, dành cho những người trẻ. Toàn bộ mạch phim được kể và dẫn dắt theo dòng cảm xúc thay đổi phức tạp của nhân vật chính trung tâm Jong Soo do Yoo Ah In thể hiện.',
        link: "https://video.fhan5-3.fna.fbcdn.net/v/t42.9040-2/10000000_1414570885355611_1629788356227366912_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=599&oh=2ef9f4b54d62fb423e59b161df000460&oe=5B2F8BE3",
        season: "1",
        eps: "1",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "Gia Đình Siêu Nhân 2",
        rate: "7.5 / 10 (450) ",
        img: "http://image.phimmoi.net/film/6375/poster.medium.jpg",
        actor: "Samuel L. Jackson, Holly Hunter, John Ratzenberger, Craig T. Nelson",
        director: "Brad Bird",
        category: "Phim Hoạt Hình, Phim Phiêu Lưu, Phim Hành Động",
        country: "Mỹ",
        content: 'Incredibles 2 tiếp tục câu chuyện về gia đình siêu nhân gồm Mr. Incredible và vợ Elastic Girl cùng 3 đứa con Violet, Dash và cậu bé Jack-Jack. Trong teaser, Jack-Jack không chỉ bụ bẫm dễ thương mà còn thể hiện hàng loạt năng lực phi thường. Teaser Incredibles 2 lap ky luc nguoi xem cao nhat lich su hoat hinh hinh anh 1Cậu bé Jack-Jack  sở hữu siêu năng lực bắn laze, tạo sét. Cậu bé có khả năng phóng tia laze từ mắt, thiêu trụi mảng tóc của Mr. Incredible khiến ông bố siêu nhân vui mừng khôn xiết. Ở phần 2, gia đình Mr. Incredible sẽ phải đối mặt với một siêu ác nhân mới là The Underminer. Điều đặc biệt là ở phần 2 này, Elastic Girl sẽ đóng vai trò chính, ông bố Mr. Incredible cùng Violet và Dash phải chăm lo công việc nhà. Khi kẻ ác xuất hiện, cả gia đình và người bạn thân thiết Frozone cùng chung sức bảo vệ thế giới.',
        link: "https://video.fhan3-3.fna.fbcdn.net/v/t42.9040-2/10000000_2121225408203727_1914243838377984000_n.mp4?_nc_cat=0&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9oZCJ9&_nc_eui2=AeF_arJF9J9vEc-AQoBNlQP5EMPQit9oYo6M_Kf3vkrCfqHgKo843WscSfdyG2ibCqENbdYzICSnUEEGnYJBCswvDLslt1k7ZHpd8JdA9PK3Hw&oh=9d15e40d8192fce09bf8f713fed0077d&oe=5B2E6F9E",
        season: "1",
        eps: "1",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "Tài Khoản Ma",
        rate: "4.2 / 10 (90)",
        img: "http://image.phimmoi.net/film/6891/poster.medium.jpg",
        actor: "Kachai Pich, Fahkuelon Ratsameekhae, Klai-Udom Sarantorn",
        director: "Weeratham Preedee",
        category: "Phim Rùng Rợn, Phim Kinh Dị",
        country: "Thái Lan",
        content: 'Phim Tài Khoản Ma: Một trong những cái tên đó, Malisa (Mean-SARUNTHORN KLAIUDOM), chủ thương hiệu make-up nổi tiếng, bắt đầu gặp phải những sự cố kỳ lạ. Những người bị tag vào video bắt đầu chết từng người một, làm "Jak" (PITT KARCHAI), bạn trai của Malisa, quyết tâm tìm hiểu sự thật đằng sau những gì đã xảy ra. Jak cần chính mình phải điều tra sự việc. Liệu Malisa có thể thoát ra an toàn? Làm thế nào Jak có thể giúp bạn gái của mình? Nhanh lên và chuẩn bị ngạc nhiên bởi những điều kinh hoàng vượt ra ngoài trí tưởng tượng hoang dã của bạn !!!',
        link: "https://video.fhan5-5.fna.fbcdn.net/v/t42.9040-2/10000000_976752005814681_1188472881651122176_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=477&oh=7ddad1caa61f52a40bdeaf80696e7f33&oe=5B2EE6ED",
        season: "1",
        eps: "1",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "Trong Bóng Tối",
        rate: "5.8 / 10 (1297)",
        img: "http://image.phimmoi.net/film/6861/poster.medium.jpg",
        actor: "Natalie Dormer, Emily Ratajkowski, Ed Skrein, Joely Richardson",
        director: "Anthony Byrne",
        category: "Phim Kinh Dị",
        country: "Mỹ",
        content: 'Phim Trong Bóng Tối Một nhạc sĩ mù nghe thấy một vụ giết người được thực hiện trong căn hộ ở tầng trên của cô, điều đó sẽ đưa cô xuống một con đường tối tăm vào thế giới ngầm tội phạm của London.​',
        link: "https://video.fsgn5-2.fna.fbcdn.net/v/t42.9040-2/10000000_195432667771327_4966206770956468224_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=460&oh=cb4d020b60dbb435ddbd6394be0c5591&oe=5B307BC6",
        season: "1",
        eps: "1",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "Liên Minh Game Thủ",
        rate: "5.2 / 10 (14)",
        img: "http://image.phimmoi.net/film/6884/poster.medium.jpg",
        actor: "Zhijie Bai, Zi Ge Fang, Xiaobing Ji, Enjie Lu",
        director: "Wayne Wang",
        category: "Phim Kịch Tính, Phim Hài Hước",
        country: "Trung Quốc",
        content: 'Phim Liên Minh Game Thủ Xoay quanh một nhóm gồm những game thủ chuyên nghiệp lẫn nghiệp dư cùng tập hợp lại để tham gia giải đấu game. . Lần đầu tiên đặt chân tới đấu trường lớn, với kĩ năng và kinh nghiệm chiến đấu trong game siêu đẳng, họ sẽ phải đưa ra chiến thuật thế nào để chiến đấu với các đối thủ đáng gờm.',
        link: "https://video.fhan5-5.fna.fbcdn.net/v/t42.9040-2/10000000_172029036812867_6960785666208694272_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=905&oh=d3ef81b1408ce8a4d8bab463a35ba892&oe=5B30AED7",
        season: "1",
        eps: "1",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "Chú Ong Maya 2: Cuộc Chiến Ong Mật",
        rate: "5.5 / 10 (105)",
        img: "http://image.phimmoi.net/film/6887/poster.medium.jpg",
        actor: "Coco Jack Gillies, Benson Jack Anthony, Richard Roxburgh, Justine Clarke",
        director: "Noel Cleary, Sergio Delfino, Alexs Stadermann(co-director)",
        category: "Phim Hoạt Hình, Phim Gia Đình, Phim Hài Hước",
        country: "Mỹ",
        content: 'Vô tình làm phật lòng nữ hoàng Buzztropolis, giờ đây chú ong Maya phải cùng những chú bọ tham gia vào trò chơi ong mật, nếu dành chiến thắng mới có cơ hội giải cứu đồng loại của mình. ',
        link: "https://video.fsgn5-7.fna.fbcdn.net/v/t42.9040-2/10000000_144436776419944_9139925065721184256_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=827&oh=e98be0d61f81f07d657765d1656d2e7a&oe=5B30D892",
        season: "1",
        eps: "1",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "Mật Vụ Ngầm ",
        rate: "4.7 / 10 (719)",
        img: "http://image.phimmoi.net/film/6883/poster.medium.jpg",
        actor: "Jean-Claude Van Damme, Dolph Lundgren, Patrick Kilpatrick, John Posey",
        director: "Pasha Patriki",
        category: "Phim Kịch Tính, Phim Hành Động",
        country: "Mỹ",
        content: 'Phim Mật Vụ Ngầm Black Water lấy nhân vật trung tâm là một mật vụ ngầm do Van Damme thể hiện. Người đàn ông bất ngờ bị đánh bất tỉnh rồi thức dậy trên một con tàu ngầm bí ẩn của CIA.',
        link: "https://video.fsgn5-6.fna.fbcdn.net/v/t42.9040-2/10000000_611282105898354_9054104034234859520_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=526&oh=f9a2d99504cb5904bde25e657e71ec97&oe=5B307748",
        season: "1",
        eps: "1",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "Nỗi Đau Tuổi 17",
        rate: "6 / 10 (2)",
        img: "http://image.phimmoi.net/film/6882/poster.medium.jpg",
        actor: "Thái Trác Nghiên, Từ Kiều, Hồ Hạ",
        director: "Bành Phát",
        category: "Phim Tình Cảm",
        country: "Trung Quốc",
        content: 'Phim Nỗi Đau Tuổi 17 biết đau của cô nữ sinh Hạ Viễn Viễn đam mê truyện tranh và fan cuồng của Vương Lực Hoành. Trong mắt thầy cô và bạn bè, Viễn Viễn là một học sinh cá biệt lười biếng và hư hỏng. Thế nhưng, ít ai biết được nguyên do vì sao và càng không biết cô bé mắc chứng mất đi cảm giác đau.',
        link: "https://video.fhan5-5.fna.fbcdn.net/v/t42.9040-2/10000000_2095091414080760_8341443306265247744_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=732&oh=ba3a040ec70d66cb873427eb6e7042db&oe=5B2F2B72",
        season: "1",
        eps: "1",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "Chặng cuối",
        rate: "6.8 (1,231 votes)",
        img: "http://image.phimmoi.net/film/6881/poster.medium.jpg",
        actor: "Asa Butterfield, Paul Bettany, Toby Jones, Sam Claflin, Tom Sturridge",
        director: "Saul Dibb",
        category: "Hình Sự - Chiến Tranh, Tâm Lý - Tình Cảm",
        country: "Anh",
        content: 'Chặng Cuối xoay quanh hành trình cuối cùng của đôi quân chờ đợi số phận của mình đến. ',
        link: "https://video.fsgn5-6.fna.fbcdn.net/v/t42.9040-2/10000000_175922319786997_2952208206845181952_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=547&oh=4e659de47032d1a46bb440b6b2218d9b&oe=5B307107",
        season: "1",
        eps: "1",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "Những kẻ sống sót",
        rate: "6/10",
        img: "http://image.phimmoi.net/film/6872/poster.medium.jpg",
        actor: "Phan Anh",
        director: "Peter Knights",
        category: "Phim tài liệu",
        country: "Việt Nam",
        content: 'Phim ngắn “Những kẻ sống sót” với thời lượng 21 phút được ghi hình và biên tập lại từ chuyến đi của Phan Anh tại Kenya kéo dài từ ngày 3 – 7/10/2016. Xuyên suốt bộ phim là quá trình Phan Anh ghé thăm hai khu bảo tồn Ol Pejeta và OL Jogi tại Kenya, gặp những nhà bảo tồn, kiểm lâm cũng như tận mắt được nhìn thấy những con tê giác đen, tê giác trắng và ba con tê giác miền Bắc Phi cuối cùng trên Trái Đất nhằm tìm hiểu sâu hơn về cuộc khủng hoảng săn trộm tê giác. Ngoài ra, thông qua bộ phim này, anh cũng khiến nhiều khán giả bất ngờ trước hành động cạo đầu của mình trong chuyến đi nhằm thể hiện những cam kết mạnh mẽ của bản thân trong việc đẩy lùi vấn nạn săn trộm tê giác lấy sừng, đồng thời kêu gọi người dân Việt Nam dừng việc mua bán, sử dụng sừng tê giác nhằm cứu lấy loài vật này khỏi bờ vực tuyệt chủng.',
        link: "https://video.fsgn5-4.fna.fbcdn.net/v/t42.9040-2/10000000_1375039832626465_524561973816328192_n.mp4?_nc_cat=0&efg=eyJybHIiOjE4MTUsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1815&vabr=1210&oh=08ddc411ccd41e1822013e199ebf0dc0&oe=5B2F962F",
        season: "1",
        eps: "1",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "Kẻ Bình Phàm",
        rate: "6.6 / 10 (214)",
        img: "http://image.phimmoi.net/film/6864/poster.medium.jpg",
        actor: "Yoon-So Choi, Hee Sun Chung, Hyuk Jang, Man-sik Jeong",
        director: "Kim Bong-han",
        category: "Phim Kịch Tính, Phim Tội Phạm - Hình Sự, Phim Hành Động",
        country: "Hàn Quốc",
        content: 'Phim Người Thường: Sung Jin - một cảnh sát nhiệt huyết phải bán đứng lương tâm, làm việc sai trái vì mái ấm của mình. Trong khi đó, Jae Jin - người bạn phóng viên của anh thì một mực chống lại cái xấu. Liệu bọn họ, những người bình thường, có giành lại được công lý và bảo vệ sự thật khi kẻ xấu đang dùng quyền lực thao túng, che mắt mọi người ?',
        link: "https://video.fsgn5-4.fna.fbcdn.net/v/t42.9040-2/10000000_1788620724527495_2179956216392843264_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=691&oh=e2ffaf3183cfdebc4202f8ba3e769705&oe=5B30B618",
        season: "1",
        eps: "1",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "Nhật Ký Của Sara",
        rate: "6.2 / 10 (366)",
        img: "http://image.phimmoi.net/film/6860/poster.medium.jpg",
        actor: "María Luisa Mayo, Manolo Cardona, Belén Rueda, Marian Álvarez",
        director: "Norberto López Amado",
        category: "Phim Kinh Dị",
        country: "Tây Ban Nha",
        content: 'Laura Alonso là một luật sư người Tây Ban Nha từ Madrid đến Cộng hòa Congo, để tìm kiếm Sara, em gái của cô, sống sau hai năm tại đây, nhưng giờ không còn manh mối về cô em. Tìm kiếm địa chỉ liên lạc, Laura nhận ra rằng Sara đang ở khu vực Goma, một trong những khu vực khó khăn nhất của đất nước do các lãnh chúa bộ tộc cai quản và chiến tranh triền miên vì tranh giành xuất khẩu khoáng sản. Quyết tâm đi đến cuối cùng mặc dù không biết quốc gia cũng như ngôn ngữ, Laura liên lạc với Sergio Rojas, một doanh nhân người Latinh, để tìm cách đến Goma. Laura đã nhờ Sven, người yêu cũ của Sara, để cùng đến Goma. Cả hai cùng nhau bắt đầu một cuộc hành trình từ Kinsasa (thủ đô Congo) đến Goma. Cuộc hành trình của họ là nỗi sợ hãi, súng đạn, máu và sự man rợ... ',
        link: "https://video.fsgn5-3.fna.fbcdn.net/v/t42.9040-2/10000000_254945865073947_7047897455626551296_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=759&oh=f419fb6898ed8b176f50732529b2d170&oe=5B2FBF64",
        season: "1",
        eps: "1",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "Người Lính Thứ 12",
        rate: "7.6 / 10 (2328)",
        img: "http://image.phimmoi.net/film/6859/poster.medium.jpg",
        actor: "Thomas Gullestad, Jonathan Rhys Meyers, Marie Blokhus, Mads Sjøgård Pettersen",
        director: "Harald Zwart",
        category: "Phim Chiến Tranh",
        country: "Mỹ",
        content: 'Phim Người Lính Thứ 12: Họ là 12 người lính Nauy hoạt động ngầm, chuyên đánh phá các cơ sở của Đức Quốc xã. Họ đã vượt biển Bắc đến vịnh Toftefjord cùng 7 tấn thuốc nổ trên một thuyền đánh cá. Nhưng con thuyền của họ đã bị nghi ngờ và bắn chìm ngay trên biển...',
        link: "https://video.fsgn5-2.fna.fbcdn.net/v/t42.9040-2/10000000_224156651509201_2092977742759854080_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=556&oh=5d4c9c8bae3814e652676d556a6cd634&oe=5B3095D3",
        season: "1",
        eps: "1",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "Hên Xui",
        rate: "7.7 / 10 (281386)",
        img: "http://image.phimmoi.net/film/351/poster.medium.jpg",
        actor: "Joseph Gordon-Levitt, Seth Rogen, Anna Kendrick, Bryce Dallas Howard",
        director: "Jonathan Levine",
        category: "Phim Kịch Tính, Phim Hài Hước, Phim Tình Cảm",
        country: "Mỹ",
        content: '50/50 (Hên - Xui) là một câu chuyện vừa cảm động vừa hài hước về một chàng trai trẻ bước vào thế giới của bệnh tật mà không hề có một tí mảy may chuẩn bị nào trong tâm trí.Ở tuổi 27 thanh xuân rực rỡ, Adam Lerner (Joseph Gordon-Levitt) dường như sở hữu mọi thứ trong tay - một sự nghiệp đang trên đà thăng tiến, một cô bạn gái tài năng, xinh xắn và một cuộc sống sành điệu. Adam hài lòng với cuộc sống đến nỗi anh hiếm khi nào phàn nàn, ngay cả khi chứng đau lưng dữ dội bắt đầu hành hạ anh.Chỉ cho đến khi phát hiện ra đó không phải là một cơn nhức mỏi thông thường, mà là dấu hiệu của căn bệnh ung thư quái ác thì Adam mới hoang mang. Với khối u ác tính cỡ lớn đang đè nặng lên cột sống, anh suy sụp hoàn toàn khi cuộc sống vốn màu hồng của anh đã biến mất chỉ trong một cái chớp mắt.Những buổi chiều la cà quán cà phê thế chỗ bằng các buổi trị liệu đau đớn, chẳng còn thời gian đi dự tiệc chiêu đãi thời thượng vì bận lịch tái khám, và những dự định rực rỡ cho tương lai của Adam nay thật xa vời, vì ước ao thực tế nhất lúc này chỉ là sống sót. Anh chống chọi với căn bệnh ung thư quái ác mà không biết trước số phận mình sẽ ra sao.',
        link: "https://video.fsgn5-2.fna.fbcdn.net/v/t42.9040-2/10000000_626277567729688_3497508546214363136_n.mp4?_nc_cat=0&efg=eyJybHIiOjMwMCwicmxhIjo0MDk2LCJ2ZW5jb2RlX3RhZyI6ImxlZ2FjeV9zZCJ9&rl=300&vabr=157&oh=561a2d6ff3b47ceedd7fe8d68bf81f17&oe=5B303F14",
        season: "1",
        eps: "1",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "Sự Tích Hoang Dã",
        rate: "8.1 / 10 (109647)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20150413/tt3011894_216_320.jpg",
        actor: "Darío Grandinetti, María Marull, Mónica Villa, Rita Cortese",
        director: "Damián Szifrón",
        category: "Phim Kịch Tính",
        country: "Mỹ",
        content: 'Một câu chuyện về những sự lừa dối, phản bội trong tình yêu, những gì con người phải chịu đựng trong cuộc sống hàng ngày, giống như một lực ép xuống quả bóng. Rồi sẽ đến ngày, quả bóng ấy không chịu nổi tất cả sức nặng trên vai.',
        link: "https://video.fhan5-3.fna.fbcdn.net/v/t42.9040-2/10000000_1166956836777658_8844749113271517184_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=737&oh=bc8aee0cf3c2cf564085497749cf567b&oe=5B300A26",
        season: "1",
        eps: "1",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "Vụ Cướp Trong Tâm Bão",
        rate: "4.9 / 10 (2244)",
        img: "http://image.phimmoi.net/film/6606/poster.medium.jpg",
        actor: "Toby Kebbell, Maggie Grace, Ryan Kwanten, Ralph Ineson",
        director: "Rob Cohen",
        category: "Phim Hành Động, Phim Phiêu Lưu, Phim Kinh Dị",
        country: "Mỹ",
        content: 'Vụ Cướp Trong Tâm Bão lấy bối cảnh ở một thị trấn nhỏ ven biển nước Mỹ đang bị một cơn bão thế kỷ nhăm nhe tấn công. Trong cơn hoảng loạn của tất cả người dân cũng như chính quyền nơi đây thì lại có một âm mưu khác đã được lên kế hoạch. Một băng nhóm phản động thuộc chính phủ đang lợi dụng sự rối ren này để thừa cơ hội chiếm đoạt khoản tiền khổng lồ 600 USD từ Kho bạc Mỹ. Khi tất cả mọi người dân đã di dời tránh bão để lại một thị trấn hoang vắng cũng chính là lúc bọn tội phạm tiến hành vụ cướp của mình, tại đây chỉ còn lại một nhân viên Kho bạc cố gắng ngăn chặn âm mưu này. Anh em Will và Breeze là những người còn lại trên thị trấn cũng bất đắc dĩ cuốn theo cuộc chạy đua với tử thần để ngăn chặn vụ cướp.',
        link: "https://video.fhan5-3.fna.fbcdn.net/v/t42.9040-2/10000000_238880780200858_813239679401852928_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=701&oh=9d8d6c87cf034da2314f9785cb08dae0&oe=5B30BBD4",
        season: "1",
        eps: "1",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "Sát Nhân Giấu Mặt: Đêm Đẫm Máu",
        rate: "5.5 / 10 (7590)",
        img: "http://image.phimmoi.net/film/6854/poster.medium.jpg",
        actor: "Christina Hendricks, Bailee Madison, Martin Henderson, Emma Bellomy",
        director: "Johannes Roberts",
        category: "Phim Rùng Rợn",
        country: "Mỹ",
        content: 'Phim Sát Nhân Giấu Mặt: Đêm Đẫm Máu: xoay quanh chuyến đi dã ngoại của một gia đình. Theo kế hoạch họ sẽ đến một căn nhà lưu động ở vùng quê để họp mặt với họ hàng. Thế nhưng khi đến nơi thì họ hàng không thấy mà dân cư xung quanh lại hoang vắng một cách kì lạ. Khi màn đêm buông xuống, bỗng xuất hiện 3 tên tâm thần đeo mặt nạ đến “ghé thăm”, cả gia đình như trở thành các con thú bị những kẻ biến thái săn lùng. Họ có thoát khỏi nỗi sợ kinh hoàng này hay lại biến mất bí ẩn như cư dân nơi đây?',
        link: "https://video.fsgn5-3.fna.fbcdn.net/v/t42.9040-2/10000000_179331766233599_1461512529707532288_n.mp4?_nc_cat=0&efg=eyJ2ZW5jb2RlX3RhZyI6ImxlZ2FjeV9oZCJ9&oh=be7c5f9190daffeb6ea703dbf815a627&oe=5B2F95FA",
        season: "1",
        eps: "1",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "Thần chết",
        rate: "6.5 / 10 (9232)",
        img: "http://image.phimmoi.net/film/6836/poster.medium.jpg",
        actor: "Bruce Willis, Vincent D'Onofrio, Elisabeth Shue, Camila Morrone",
        director: "Eli Roth",
        category: "Phim Kịch Tính, Phim Tội Phạm - Hình Sự, Phim Hành Động",
        country: "Mỹ",
        content: "Death Wish là thương hiệu hành động giật gân ra đời từ năm 1974, với vai chính Paul Kersey gắn liền với Charles Bronson. Đây là một bác sĩ không thể làm ngơ trước những bất công trong xã hội, và quyết định tự mình ra tay hành hiệp, thực thi công lý. ",
        link: "https://video.fhan5-5.fna.fbcdn.net/v/t42.9040-2/10000000_1999056276831172_3499109426554470400_n.mp4?_nc_cat=0&efg=eyJybHIiOjMwMCwicmxhIjo0MDk2LCJ2ZW5jb2RlX3RhZyI6ImxlZ2FjeV9zZCJ9&rl=300&vabr=135&oh=c0988f3b5edd2c30498a85b56826843b&oe=5B2EE483",
        season: "1",
        eps: "1",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "Tuần Đám Cưới",
        rate: "5 / 10 (7330)",
        img: "http://image.phimmoi.net/film/6853/poster.medium.jpg",
        actor: "Adam Sandler, Chris Rock, Steve Buscemi, Rachel Dratch",
        director: "Robert Smigel",
        category: "Phim Hài Hước",
        country: "Mỹ",
        content: 'Phim Tuần Đám Cưới:Trong The Week Of, Adam Sandler và Chris Rock vào vai hai người bố sắp sửa chứng kiến giây phút thiêng liêng con gái và con trai họ cưới nhau. Với tư cách là cha của cô dâu, nhân vật của Sandler mong muốn chuẩn bị kỹ càng cho buổi lễ, nhưng với kinh phí ít ỏi và đầu tư chưa tới, những nỗ lực của anh lại biến buổi lễ cưới trở thành thảm họa. Chris Rock thì vào vai cha của chú rể - một bác sĩ phẫu thuật thành đạt, cầu xin cha của cô dâu cho phép anh “nhúng tay” vào và cứu vãn buổi lễ. Nhưng cha của cô dâu vẫn không muốn từ bỏ và quyết tâm tổ chức buổi lễ cưới đáng mơ ước cho cô con gái.',
        link: "https://video.fhan5-7.fna.fbcdn.net/v/t42.9040-2/10000000_2179127488778947_8417827349709455360_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=933&oh=510b7550786d4d5b43e4b412dc08ae10&oe=5B30162A",
        season: "1",
        eps: "1",
        tag: "Phim Lẻ Mới Nhất",
    },
    {
        name: "12 Con Khỉ 4",
        rate: "0.6 / 10 (30000)",
        img: "http://image.phimmoi.net/film/6895/poster.medium.jpg",
        actor: "Amanda Schull, Aaron Stanford, Barbara Sukowa, Todd Stashwick",
        director: "N/A",
        category: "Phim Viễn Tưởng, Phim Phiêu Lưu",
        country: "Mỹ",
        content: "Phim 12 Con Khỉ Phần 4 là một bộ phim khoa học viễn tưởng Mỹ lấy bối cảnh tại tương lai không xa, con người chứng kiến thảm họa kinh hoàng nhất khi gần như toàn bộ dân số trên trái đất tử vong vì bệnh dịch. Chính quyền triệu tập các nhà khoa học tìm cách quay trở lại quá khứ bằng cỗ máy thời gian để tìm nguồn gốc ban đầu của bệnh dịch và tìm kiếm tổ chức đã phát tán loại virus này. Dựa trên phim cùng tên được sản xuất năm 1995 Twelve Monkeys (Brad Pitt, Bruce Willis).",
        link: "https://video.fsgn5-5.fna.fbcdn.net/v/t42.9040-2/10000000_305952856611554_165813959855702016_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=666&oh=eb0126025a44bb988bbf7d7f73fc9f91&oe=5B2F0C76",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "Biệt Đội Số 6 phần 2",
        rate: " 0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6858/poster.medium.jpg",
        actor: "Edwin Hodge, Barry Sloane, Kyle Schmid, Juan Pablo Raba, Brianne Davis",
        director: "N/A",
        category: "Phim Phiêu Lưu, Phim Hành Động, Phim Chiến Tranh",
        country: "Mỹ",
        content: "Trong phim Biệt Đội Số 6 phần 2, đội trưởng của Seal Team Six là Richard RIP Taggart do Walton Goggins thủ vai, đã đưa ra một quyết định khó hiểu trong một nhiệm vụ tại Afghanistan. Hai năm sau đó, RIP bị nhóm khủng bố Boko Haram là bắt làm con tin, và việc giải cứu anh phụ thuộc vào những anh em cựu binh Đặc nhiệm hải quân, dẫn đầu là Joe Graves do Barry Sloane thử vai, cùng với Alex Caulder (Kyle Schmid), và Ricky Buddha Ortiz (Juan Pable Raba). Nhưng họ lại có những phán đoán khác nhau về cách xác định vị và các cách giải cứu khác nhau",
        link: "https://video.fhan5-4.fna.fbcdn.net/v/t42.9040-2/10000000_1950867478265211_4430945960591360000_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=938&oh=c16e25441affd66b25d3b28ba332dc50&oe=5B2F15E5",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "Thế Giới Viễn Tây 2",
        rate: "8.9 / 10 (263000)",
        img: "http://image.phimmoi.net/film/6784/poster.medium.jpg",
        actor: "Ed Harris, Anthony Hopkins, James Marsden, Thandie Newton, Jeffrey Wright, Evan Rachel Wood, Tessa Thompson, Jimmi Simpson",
        director: "N/A",
        category: "Phim Hành Động, Phim Phiêu Lưu",
        country: "Mỹ",
        content: "Phim Thế Giới Viễn Tây phần 2: Ai cũng có tuổi thơ gắn liền với những câu chuyện cổ tích - lịch sử và mộng mơ công chúa nàng tiên hay hiệp sĩ cao bồi... Đâu đó trong cuộc mưu sinh bận rộn lại có lúc chúng ta ngừng lại mơ mộng viễn vông hay gặp cảnh bất bình muốn là người hùng ra tay nghĩa hiệp. Nắm bắt được tâm lý đó cộng với sự trợ giúp đắc lực của công nghệ hiện đại, Giáo sư Robert Ford sáng lập nên một công viên giải trí tương lai tái hiện chân thực nhất về thế giới ngày mà ông cố chúng ta còn chưa chào đời. Công nghệ hiện đại đảm bảo sự an toàn tuyệt đối cho du khách, đảm bảo họ có trải nghiệm không thể thực hơn. Thỏa thuê đâm chém, bắn giết, là trung tâm của những màn ẩu đả mà trước giờ họ chỉ được chiêm ngưỡng trên màn ảnh, máu đổ đầu rơi và cả chuyện 'sung sướng;' cũng hoàn toàn chân thực do... đội ngũ Robot với hình dáng con người đảm nhiệm. Nhưng khi những siêu máy tính được giao nhiệm vụ thiết kế thế hệ Robot tân tiến hoàn thiện hơn thì nó đã âm thầm cài đặt 'ý muốn' của nó vào những đứa con mình, âm thầm chờ ngày nỗi loạn vùng lên, số phận những du khách phải bỏ rất nhiều tiền để được đến công viên ngày mã độc được kích hoạt",
        link: "https://video.fsgn5-6.fna.fbcdn.net/v/t42.9040-2/10000000_1837945183174744_299441615183806464_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=779&oh=f262e2596fd3436754b8d22239b9704e&oe=5B300FB0",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "100 Người Thử Nghiệm 5",
        rate: "7.9 / 10 (150000)",
        img: "http://image.phimmoi.net/film/6799/poster.medium.jpg",
        actor: "Paige Turco, Bob Morley, Eliza Taylor",
        director: "N/A",
        category: "Phim Phiêu Lưu, Phim Hành Động",
        country: "Mỹ",
        content: "Gần 100 năm sau khi một thảm họa hạt nhân giết chết mọi sinh vật tồn tại trên Trái Đất. Một bộ phận loài người thoát nạn và đã sống bên ngoài vũ trụ được 3 thế hệ. Khi nguồn tài nguyên, lương thực, không khí ngày một cạn kiệt, họ quyết định đưa 100 tội phạm thiếu niên xuống Trái Đất để thử nghiệm xem liệu điều kiện và môi trường ở đó có phù hợp cho loài người quay trở lại sinh sống hay chưa. Ở Trái Đất, họ phải đối mặt với những con quái thú, những loài thực vật kỳ lạ do chịu ảnh hưởng của phóng xạ. Chuyện ngày càng rắc rối khi 100 thiếu niên này quyết định nổi loạn và không cam chịu sự theo dõi của những người đứng đầu. Mọi chuyện sẽ diễn biến thế nào khi vận mệnh của loài người đang nằm trên bờ vực nguy hiểm?",
        link: "https://video.fhan5-2.fna.fbcdn.net/v/t42.9040-2/10000000_664460040555922_5461863391532417024_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1NTIsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1552&vabr=1035&oh=f9aa239f60a081f0a4b133504b295f1f&oe=5B307836",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "Xác Sống Đáng Sợ 4",
        rate: "7 / 10 (88000)",
        img: "http://image.phimmoi.net/film/6738/poster.medium.jpg",
        actor: "Kim Dickens, Frank Dillane, Alycia Debnam-Carey, Rubén Blades, Mercedes Mason, Colman Domingo, Danay Garcia, Cliff Curti",
        director: "N/A",
        category: "Phim Viễn Tưởng, Phim Kinh Dị, Phim Hành Động",
        country: "Mỹ",
        content: "Fear the Walking Dead Season 4 2018 là bộ phim lấy cùng thế giới với The Walking Dead nhưng sẽ là vào khoảng thời gian đầu khi đại dịch bùng phát và bối cảnh là thành phố Los Angeles của Mỹ. Fear sẽ KHÔNG tiết lộ nguyên nhân gây ra bệnh dịch. - Một số thành viên trong đoàn làm phim TWD sẽ tham gia vào Fear như Robert Kirkman (cha đẻ của thế giới TWD), Greg Nicotero (chịu trách nhiệm hiệu ứng và hóa trang xác sống), Gale Anne Hurd & David Alpert (các chỉ đạo sản xuất)",
        link: "https://video.fhan5-1.fna.fbcdn.net/v/t42.9040-2/10000000_402547926885357_7901371070102372352_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=732&oh=e274aa8648e568cb0c1e67e674b000bc&oe=5B3016B1",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "Hội Thủ Thư 4",
        rate: "7.3 / 10 (15000)",
        img: "http://image.phimmoi.net/film/6492/poster.medium.jpg",
        actor: "Rebecca Romijn, Christian Kane, Noah Wyle, Lindy Booth, John Harlan Kim",
        director: "N/A",
        category: "Phim Hành Động, Phim Phiêu Lưu, Phim Hài Hước",
        country: "Mỹ",
        content: "Phim Hội Thủ Thư 4 nói về một tổ chức bí mật chuyên thu thập những cổ vật chứa đựng quyền năng siêu nhiên trên khắp thế giới trước khi vào tay kẻ xấu. Đội ngũ này bao gồm một cô gái xinh đẹp có biệt danh Brain (bộ não) với khả năng tính toán siêu phàm, một anh chàng Châu Á với biệt tài ăn trộm nhanh như chớp, có thể vượt qua mọi cánh cửa, một nhà sử học nghệ thuật với vốn hiểu biết sâu sắc về khảo cổ và cô nàng Cơ bắp có thể đánh bật mọi quái vật.",
        link: "https://video.fsgn5-2.fna.fbcdn.net/v/t42.9040-2/10000000_251038332107550_3651624024473075712_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=644&oh=9f47e7073698099af0f2ca2d641bc130&oe=5B3028FE",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "Du Hành Thời Gian 2",
        rate: "8 / 10 (18000)",
        img: "http://image.phimmoi.net/film/6442/poster.medium.jpg",
        actor: "Patrick Gilmore, Nesta Cooper, Eric McCormack, Reilly Dolman, Leah Cairns",
        director: "N/A",
        category: "Phim Viễn Tưởng",
        country: "Mỹ",
        content: "Phim Du Hành Thời Gian: Trong tương lai cách đây hàng trăm năm, những con người sống sót đã tìm ra cách đưa tiềm thức ngược thời gian vào những con người ở thế kỷ 21. Những người du hành này chiếm lấy cuộc sống của những người khác trong khi cố gắng giúp loài người tránh tương lai khủng khiếp.",
        link: "https://video.fhan5-6.fna.fbcdn.net/v/t42.9040-2/10000000_241927766540454_7253976532018790400_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=511&oh=1f368d9befb0726be0785b3ada72fe3d&oe=5B2F1BCF",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "Nữ Siêu Nhân",
        rate: "7.2 / 10 (3376)",
        img: "http://image.phimmoi.net/film/6135/poster.medium.jpg",
        actor: "Melissa Benoist, Ben Begley, Laura Benanti, Mehcad Brooks",
        director: "Glen Winter",
        category: "Phim Hành Động, Phim Phiêu Lưu, Phim Viễn Tưởng",
        country: "Mỹ",
        content: "Phim kể về cô gái 24 tuổi Kara Zor - El, cô em họ của Superman. Cô nàng đã trốn thoát khỏi Krypton sau vụ nổ và trú ngụ tại trái đất dưới lốt một cô gái bình thường tên Kara Devengers. Nhưng sau đó ở tuổi 24, Kara quyết định sử dụng khả năng siêu nhiên của mình để trở thành siêu anh hùng.",
        link: "https://video.fhan5-1.fna.fbcdn.net/v/t42.9040-2/10000000_2080856195529782_1584661328121823232_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=926&oh=77b92f3d3ffb7b55e9ea79ce8ac222a8&oe=5B309C18",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "Tuổi Thơ Bá Đạo Của Sheldon",
        rate: "6.2 / 10 (1215)",
        img: "http://image.phimmoi.net/film/6060/poster.medium.jpg",
        actor: "Doc Farrow, Wyatt McClure, Danielle Pinnock",
        director: "Chuck Lorre, Steven Molaro",
        category: "Phim Hài Hước",
        country: "Mỹ",
        content: "Phim Young Sheldon là phần spinoff của series phim hài đình đám The Big Bang Theory tiết lộ những chi tiết vừa hài hước lại giải thích được rất nhiều điều về nhân vật chính của show là Sheldon Cooper. Trường trung học luôn là một quãng thời gian khó khăn với hầu hết tất cả mọi người và tất nhiên Sheldon vậy bởi dủ trí tuệ thông minh hơn người và Sheldon sẽ dễ dàng học xong lớp 9 nhưng về mặt xã hội thì cậu bé hoàn toàn chả biết gì. Với tính cách luôn làm theo những quy tắc, định luật mà mình học được lại tự biết mình thông minh hơn những người khác và luôn nói những gì mình suy nghĩ trong đầu đã khiến cho Sheldon gặp rắc rối ngay từ ngày đầu đi học vì không tôn trọng giáo viên dạy mình. Cậu chàng thậm chí còn dám chất vấn bằng cấp chuyên môn của giáo viên. Gia đình của Sheldon cũng không hẳn phức tạp bởi cậu bé có một người mẹ hết mực yêu thương, lo lắng và bảo vệ mình. Mặc dù bố cậu xem cậu như kiểu người ngoài hành tinh nhưng đôi lúc ông cũng lo lắng cho cậu. Sheldon luôn bất đồng ý kiến với anh trai George Jr. (Montana Jordan) và em gái sinh đôi Missy (Raegan Revord) của mình nhất là khi bây giờ khi cậu bé nhảy lớp và học cùng lớp 9 với George.",
        link: "https://video.fsgn5-3.fna.fbcdn.net/v/t42.9040-2/10000000_427589627685629_8995862624138690560_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=861&oh=53eaa8fe6f956a79f3013be8e0281cbb&oe=5B2F9EA3",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "Gia Đình Siêu Nhân",
        rate: "8 / 10 (507936)",
        img: "http://image.phimmoi.net/film/471/poster.medium.jpg",
        actor: "Craig T. Nelson, Holly Hunter, Samuel L. Jackson, Jason Lee",
        director: "Brad Bird",
        category: "Phim Hành Động, Phim Phiêu Lưu, Phim Hoạt Hình",
        country: "Mỹ",
        content: "Siêu nhân – Mr. Incredible đã phải từ bỏ sự nghiệp cứu giúp mọi người khỏi cái xấu, cái ác để làm một nhân viên bảo hiểm bình thường. Nhưng rồi cuộc sống của một siêu nhân một lần nữa làm xáo trộn cả gia đình siêu nhân của anh. Bob Parr (Craig T. Nelson) có sức mạnh phi thường, có thể nhấc bổng một chiếc xe tải bằng một ngón tay. Bằng sức mạnh và sự nghĩa hiệp của mình, Bob đứng ra bảo vệ mọi người chống lại lũ trộm cướp. Bộ phim 3D này là một trong những bộ phim hoạt hình có sức hấp dẫn nhất đối với khán giả nhỏ tuổi. Từng có doanh thu khổng lồ 257 triệu USD sau 3 tháng phát hành.",
        link: "https://video.fhan5-2.fna.fbcdn.net/v/t42.9040-2/10000000_199471907318462_8704382276298866688_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=761&oh=ba8a874efacc9f0a28540739d5625791&oe=5B30805F",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "Vùng Tử Địa 3",
        rate: "8.1 / 10 (27000)",
        img: "http://image.phimmoi.net/film/6778/poster.medium.jpg",
        actor: "Orla Brady, Emily Beecham, Sarah Bolger, Aramis Knight",
        director: "Alfred Gough, Miles Millar",
        category: "Phim Hành Động",
        country: "Mỹ",
        content: "Trong phim Vùng Tử Địa Phần 3, vào vùng Badlands trông giống như không có gì khác trên truyền hình, một hành động có dây cao su thu hút các fan hâm mộ nhiệt tình và tận tâm của hàng triệu người. Nhờ những người sáng tạo và người dẫn chương trình hàng loạt Al Gough và Miles Millar, dàn diễn viên tuyệt vời, dẫn dắt bởi Daniel Wu, đội võ thuật tuyệt vời được dẫn dắt bởi Master Dee Dee và chiến đấu với các đạo diễn Stephen Fung và Andy Cheng và tất cả những người khác đi xe đến người hâm mộ",
        link: "https://video.fsgn5-5.fna.fbcdn.net/v/t42.9040-2/10000000_1572206266210219_6989131187641909248_n.mp4?_nc_cat=0&efg=eyJybHIiOjE2MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1600&vabr=1067&oh=a96aa2d9e808b3f104c1362fd849508f&oe=5B2FCCEE",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "Người Máy Voltron: Dũng Sĩ Hesman 2",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6890/poster.medium.jpg",
        actor: "N/A",
        director: "N/A",
        category: "Phim Hoạt Hình, Phim Phiêu Lưu, Phim Thần Thoại",
        country: "Mỹ",
        content: "Phần 2 tiếp tục với Năm thanh niên Trái Đất được chọn làm phi công của các Mãnh Sư, khi tập hợp lại sẽ xếp hình thành người máy khổng lồ Voltron, vũ khí cuối cùng để chống lại đội quân xâm lược của Hoàng Đế Zarkon. Đây là bản remake hoàn toàn từ một bộ anime thập niên 80, nhưng người Việt Nam biết đến Voltron qua bộ truyện tranh Dũng Sĩ Hesman của bác Hùng Lân.",
        link: "https://video.fsgn5-3.fna.fbcdn.net/v/t42.9040-2/10000000_180633649267610_1419393344508788736_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=955&oh=49aa9028aafb41198e240d5b9851fa1e&oe=5B300608",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "Thế Giới Song Hành 2",
        rate: "7.3 / 10 (5000)",
        img: "http://image.phimmoi.net/film/6599/poster.medium.jpg",
        actor: "Burkely Duffield, Jonathan Whitesell, Michael McGrady",
        director: "Adam Nussdorf",
        category: "Phim Phiêu Lưu, Phim Kịch Tính",
        country: "Mỹ",
        content: "Holden - một chàng trai tỉnh dậy sau 12 năm hôn mê một cách bí ẩn. Ngay lập tức, một nhóm người lạ mặt liên tục truy lùng anh. Cùng lúc đó anh phát hiện ra rằng mình đang sở hữu những năng lực đặc biệt. Đồng thời xuất hiện một cô gái bí ẩn có vẻ như đang nắm giữ mọi câu trả lời mà anh đang tìm kiếm",
        link: "https://video.fhan5-7.fna.fbcdn.net/v/t42.9040-2/10000000_393734471125093_4288342936011145216_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=538&oh=efbbcc7544617a549e3bccb738b8abcc&oe=5B30B4C2",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "Biệt Kích Ngầm",
        rate: "4.5 / 10 (2450)",
        img: "http://s.aphim.co/uploads/film/images/modsz/20160325/tt2992552_224_320.jpg",
        actor: "Tom Sizemore, Lex Shrapnel, Anthony Oseyemi, Michael Everson",
        director: "Roel Reiné",
        category: "Phim Kịch Tính, Phim Hành Động, Phim Chiến Tranh",
        country: "Mỹ",
        content: "Seal Team Eight: Behind Enemy Lines là một bộ phim chiến tranh năm 2014 của đạo diễn Roel Reine với diễn viên Tom Sizemore. Đây là phần thứ tư trong serial này, cũng như phần tiếp theo của Behind Enemy Lines, Behind Enemy Lines II Axis of Evil và Behind Enemy Lines: Colombia. Một nhóm lính tinh nhuệ của Hải quân Hoa Kỳ SEAL được gửi đến một căn cứ của bọn thổ phỉ ở Congo, với nhiệm vụ bí mật tìm kiếm và ngăn chặn các hoạt động khai thác vũ khí uranium rơi vào tay bọn khủng bố.",
        link: "https://video-sjc3-1.xx.fbcdn.net/v/t42.9040-2/10000000_596253597388112_3619730336067354624_n.mp4?_nc_cat=0&efg=eyJybHIiOjIyMTEsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ==&rl=2211&vabr=1474&oh=1c2778dcc1c5d6166a6d85a9b5f991d8&oe=5B2E829E",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "Cưỡng Đoạt 2",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6508/poster.medium.jpg",
        actor: "Clive Standen, Jennifer Beals, Gaius Charles, Brooklyn Sudano, Monique Gabriela Curnen, Michael Irby",
        director: "N/A",
        category: "Phim Hành Động, Phim Phiêu Lưu, Phim Tội Phạm - Hình Sự",
        country: "Mỹ",
        content: "Bạn vẫn nhớ loạt phim Taken siêu đình đám của thánh Liam Neeson và câu thoại thần thánh được chế thành meme khắp nơi chứ? Phiên bản reboot này của Taken kể về quá trình làm việc cho CIA và gầy dựng 'những kĩ năng cần thiết' của Bryan Mills (để đặng sau này còn đi cứu con gái). Với sự góp mặt của trai đẹp Clive Standen, phiên bản reboot này hứa hẹn những pha hành động hoành tráng và cả những vụ giải cứu con nhà người khác hấp dẫn không kém loạt phim gốc.",
        link: "https://video.fhan5-2.fna.fbcdn.net/v/t42.9040-2/10000000_2071909683098326_776245373734748160_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=878&oh=a1e2f817479b45b74e87213b19a3aa7e&oe=5B30D86B",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "Dị Nhân Legion 2",
        rate: "8.4 / 10 (57000)",
        img: "http://image.phimmoi.net/film/6685/poster.medium.jpg",
        actor: "Aubrey Plaza, Dan Stevens, Jean Smart, Rachel Keller",
        director: "Noah Hawley",
        category: "Phim Hành Động, Phim Phiêu Lưu, Phim Kinh Dị",
        country: "Mỹ",
        content: "Phim Dị Nhân Legion Phần 2 là phần tiếp theo của bom tấn phim truyền hình Mỹ thể loại siêu anh hùng, hành động, live-ation Dị Nhân Legion (Legion) được hợp tác giữa đài FX và Marvel Television dưới sự chỉ đạo của Noah Hawley (Fargo). Phần 2 này vẫn tiếp tục xoay quanh anh chàng dị nhân đa nhân cách David Haller aka Legion (Dan Stevens) - con trai của giáo sư Charles Xavier - và sự xuất hiện của nhân vật phản diện Amahl Farouk aka Shadow King (Navid Negahban) trong công cuộc tìm kiếm cơ thể nguyên thủy của mình sau khi bị buộc phải rời khỏi đầu của Haller ở cuối phần trước",
        link: "https://video.fhan5-6.fna.fbcdn.net/v/t42.9040-2/10000000_190520078342257_4293106926620770304_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJoZCJ9&rl=1500&vabr=581&oh=e2519a81151b431297b0fcc4c696f4f4&oe=5B2EDF49",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "Dị Nhân",
        rate: "8.6 / 10 (37676)",
        img: "http://image.phimmoi.net/film/4641/poster.medium.jpg",
        actor: "Dan Stevens, Mackenzie Gray, Scott Lawrence, Katie Aselton",
        director: "N/A",
        category: "Phim Kịch Tính, Phim Viễn Tưởng, Phim Hành Động",
        country: "Mỹ",
        content: "Legion tên thật là David Haller, con trai của giáo sư X - Charles Xavier. David bị đa nhân cách nặng và cứ mỗi nhân cách lại có một sức mạnh khác nhau.Bom tấn truyền hình của Marvel này có sự tham gia của tài tử Dan Stevens và nằm dưới sự chỉ đạo của Noah Hawley - người đã đoạt giải Emmy với siêu phẩm Fargo.",
        link: "https://video.fsgn5-7.fna.fbcdn.net/v/t42.9040-2/10000000_199899197454618_1016049564127330304_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJwcmVtdXRlX3N2ZV9oZCJ9&rl=1500&vabr=700&oh=48181d2e97e8b885511a11d64bacde1f&oe=5B2F6DED",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "Thám Tử Siêu Quậy",
        rate: "4.8 / 10 (2743)",
        img: "http://image.phimmoi.net/film/6873/poster.medium.jpg",
        actor: "Kelly Asbury, Mary J. Blige, Emily Blunt, Julio Bonet",
        director: "John Stevenson",
        category: "Phim Hoạt Hình, Phim Phiêu Lưu, Phim Hài Hước",
        country: "Mỹ",
        content: "Trở lại từ khu vườn nơi mà Gnomeo và Juliet sinh sống, những chú lùn lần này sẽ có cuộc hành trình mới đầy hứa hẹn tại thành phố London. Khi Gnomeo và Juliet lần đầu đặt chân đến thành phố này cùng bạn bè và gia đình, họ đã nhận ra rằng khu vườn mới của họ đang bước sang mùa xuân",
        link: "https://video.fsgn5-1.fna.fbcdn.net/v/t42.9040-2/10000000_380459562447685_1666216005384273920_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=776&oh=335d79e30796d1af4817f1593d0ec470&oe=5B30A9FD",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "13 Lý Do Tại Sao",
        rate: "8.7 / 10 (86552)",
        img: "http://image.phimmoi.net/film/6840/poster.medium.jpg",
        actor: "Katherine Langford, Christian Navarro, Michael Sadler, Justin Prentice",
        director: "N/A",
        category: "Phim Kịch Tính, Phim Bí Ẩn ",
        country: "Mỹ",
        content: "Phim dựa theo tiểu thuyết cùng tên, tập trung vào câu chuyện nam sinh trung học California nhút nhát có tên là Clay Jensen, trở về từ trường học để tìm một chiếc hộp được gửi đến trước cửa nhà mình. Trong chiếc hộp là 7 băng cassette do Hanna Baker (Selena Gomez) ghi âm. Hanna Baker là bạn cùng lớp và là người mà Clay phải lòng. Trước khi tự tử, Hanna đã gửi những cuốn băng trên đến 13 người (trong đó có Clay) mà cô cho rằng có liên quan đến quyết định tự sát của mình, trong đó là 13 lý do giải thích tại sao Hanna chấm dứt cuộc đời mình.",
        link: "https://video.fhan5-6.fna.fbcdn.net/v/t42.9040-2/10000000_783052745222284_1848293614820524032_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJoZCJ9&rl=1500&vabr=692&oh=dc3dbfb33f46e05a1eec204d9b69be0e&oe=5B2EE4AD",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "Ăn Não 4",
        rate: "8 / 10 (46000)",
        img: "http://image.phimmoi.net/film/6593/poster.medium.jpg",
        actor: "Rose McIver, Malcolm Goodwin, Robert Buckley, Rahul Kohli, David Anders, Aly Michalka",
        director: "N/A",
        category: "Phim Tình Cảm, Phim Kinh Dị ",
        country: "Mỹ",
        content: "Liv - một cô sinh viên ngành y bị biến thành zombie. Cô làm việc tại một văn phòng điều tra của cảnh sát khu vực. Điều đó cho phép cô có thể ăn não xác chết để duy trì nhân tính của mình. Và điều đặc biệt là với mỗi một bộ não mà cô hấp thụ, cô sẽ biết được những ký ức thuộc về chủ nhân của nó. Với sự giúp đỡ của cấp trên và lực lượng trinh sát, cô sẽ giải quyết các vụ án mạng để xóa bỏ giọng nói của những nạn nhân trong đầu mình.",
        link: "https://video.fhan5-4.fna.fbcdn.net/v/t42.9040-2/10000000_207690529961249_6567365871621111808_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=811&oh=21fbf42995bcf21537ba867f18b44220&oe=5B30ADA2",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "Chúa Tể Địa Ngục",
        rate: "8.3 / 10 (76474)",
        img: "http://image.phimmoi.net/film/6124/poster.medium.jpg",
        actor: "Kevin Alejandro",
        director: "N/A",
        category: "Phim Thần Thoại",
        country: "Mỹ",
        content: "Lucifer, chúa tể địa ngục, hay còn gọi là Satan, đã quá chán với công việc hiện tại của mình. Bỏ ngai vàng, bỏ cả vương quốc, hắn tiến đến Los Angeles xinh đẹp và trú ngụ nơi đây, giúp lực lượng cảnh sát nơi đây bài trừ tội phạm. Nhưng liệu đó có phải là mục đích thật sự của chúa quỷ hay không?",
        link: "https://video.fhan5-5.fna.fbcdn.net/v/t42.9040-2/10000000_427866697673744_3017649566972379136_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=815&oh=6a5e5fc87a10b67b2e6c4c4b9db8e8f8&oe=5B305294",
        season: "1",
        eps: "1",
        tag: "Phim Âu Mỹ",
    },
    {
        name: "Phác Họa",
        rate: "8 / 10 (807)",
        img: "http://image.phimmoi.net/film/6827/poster.medium.jpg",
        actor: "Bi Rain, Lee Dong Gun",
        director: "Im Tae-Woo",
        category: "Phim hành động",
        country: "Hàn Quốc",
        content: 'Sketch là một bộ phim hành động điều tra về cuộc sống của những người chiến đấu để thay đổi tương lai đã được định trước. Câu chuyện sẽ xoay quanh một thám tử tài năng và một thám tử nữ, người có thể phác họa tương lai khi họ cố bắt một kẻ giết người hàng loạt.',
        link: "https://video.fhan5-3.fna.fbcdn.net/v/t42.9040-2/10000000_198038787491105_6214090281650749440_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=720&oh=13f1ac922edbabad0bbc92fe2cc890ab&oe=5B302F6E",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },
    {
        name: "Học Viện Anh Hùng (Boku no Hero Academia 3)",
        rate: "0 / 10 (0)",
        img: "http://image.phimmoi.net/film/6722/poster.medium.jpg",
        actor: "N/A",
        director: "N/A",
        category: "Phim Hoạt Hình, Phim Viễn Tưởng, Phim Hài Hước, Phim Hành Động, Học Đường",
        country: "Nhật Bản",
        content: 'Mùa thứ 3 Của Series Boku no Hero Academia: Học viện anh hùng là manga siêu anh hùng Nhật Bản được viết và minh họa bởi Kōhei Horikoshi. Nó được đăng lên Weekly Shōnen Jump từ tháng 7 năm 2014, và 13 cuốn được sưu tầm trong loại Tankōbon.',
        link: "https://video.fhan5-2.fna.fbcdn.net/v/t42.9040-2/10000000_275012546372057_139201616640212992_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=942&oh=97603f6eb8ba4cce8c1949df2aabd058&oe=5B2FCBF6",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },
    {
        name: "Mahou Shoujo Site",
        rate: "5 / 10 (55)",
        img: "http://image.phimmoi.net/film/6711/poster.medium.jpg",
        actor: "N/A",
        director: "N/A",
        category: "Phim Hành Động, Phim Hoạt Hình, Phim Kịch Tính, Phim Rùng Rợn, Phim Viễn Tưởng",
        country: "Nhật Bản",
        content: 'Asagiri Aya, là một cô gái bị bắt nạt cả ở trường lẫn nhà. Một ngày, một website ghê sợ, trang web Mahou Shoujo, hiện lên trên màn hình và đón mời cô vào thế giới Mahou Shoujo.',
        link: "https://video.fsgn5-6.fna.fbcdn.net/v/t42.9040-2/10000000_157219771620324_2103561499954905088_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=504&oh=4068b323613712e32c09f8094714b82c&oe=5B2EF8D7",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },
    {
        name: "Trấn Hồn",
        rate: "4/10",
        img: "http://image.phimmoi.net/film/6888/poster.medium.jpg",
        actor: "N/A",
        director: "Châu Viễn Đan",
        category: "Phim hành động, Phim Bí ẩn-Siêu nhiên, Phim bộ Trung Quốc",
        country: "Trung Quốc",
        content: 'Bộ phim kể về hành trình truy tìm tứ thánh khí Triệu Vân Lan và Thẩm Ngụy qua nhiều kiếp để miêu tả lại ván cờ giữa nhân gian, quỷ giới, tiên đồ.',
        link: "https://video.fhan5-6.fna.fbcdn.net/v/t42.9040-2/10000000_1783758188383861_7809377844194181120_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=866&oh=7a85a17fc91c2bd585af94d09d95b1b3&oe=5B2F58CE",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },
    {
        name: "Pháp Y Tần Minh 1",
        rate: "4 / 10 (0)",
        img: "http://image.phimmoi.net/film/6893/poster.medium.jpg",
        actor: "Trương Nhược Quân, Tiêu Tuấn Diễm, Lý Hiện",
        director: "N/A",
        category: "Phim Tội Phạm - Hình Sự",
        country: "Trung Quốc",
        content: "Phim Pháp Y Tần Minh chuyển thể từ tiểu thuyết cùng tên, 'Bàn tay có quỷ vạn kiếp bất phục, nhân gian thái bình tồn tại Phật tâm. Kéo lớp chỉ tơ phân giải tiếng nói của tử thi, nhìn rõ mọi việc rửa sạch oan tình'. Tần Minh là pháp y tuấn tú, cao lãnh, có thâm niên cao trong lĩnh vực giải phẩu tử thi, năng lực logic vô cùng mạnh, tâm tư kín đáo. Thường rất dễ dàng tìm thấy những manh mói bị bỏ quên trên thi thể nạn nhân, điều tra vì vụ án, cung cấp những manh mối mới quan trọng cho việc phá án. 'Câu chuyện của người chết' kết giao với anh, anh chính là 'Qủy thủ Phật tâm'.",
        link: "https://video.fsgn5-2.fna.fbcdn.net/v/t42.9040-2/10000000_267047293857744_1282230046332813312_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=550&oh=a5ff818340292c0e915186a1a2254fae&oe=5B2EFF61",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },
    {
        name: "Pháp Y Tần Minh 2",
        rate: "3 / 10 (0)",
        img: "http://image.phimmoi.net/film/6893/poster.medium.jpg",
        actor: "Trương Nhược Quân, Tiêu Tuấn Diễm, Lý Hiện",
        director: "N/A",
        category: "Phim Tội Phạm - Hình Sự",
        country: "Trung Quốc",
        content: "Phim Pháp Y Tần Minh chuyển thể từ tiểu thuyết cùng tên, 'Bàn tay có quỷ vạn kiếp bất phục, nhân gian thái bình tồn tại Phật tâm. Kéo lớp chỉ tơ phân giải tiếng nói của tử thi, nhìn rõ mọi việc rửa sạch oan tình'. Tần Minh là pháp y tuấn tú, cao lãnh, có thâm niên cao trong lĩnh vực giải phẩu tử thi, năng lực logic vô cùng mạnh, tâm tư kín đáo. Thường rất dễ dàng tìm thấy những manh mói bị bỏ quên trên thi thể nạn nhân, điều tra vì vụ án, cung cấp những manh mối mới quan trọng cho việc phá án. 'Câu chuyện của người chết' kết giao với anh, anh chính là 'Qủy thủ Phật tâm'.",
        link: "https://video.fhan5-7.fna.fbcdn.net/v/t42.9040-2/10000000_267047293857744_1282230046332813312_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=550&oh=dce3299c2ae54c544cf0baf7417eec83&oe=5B3050E1",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },
    {
        name: "Biệt Đội Số 6 phần 2",
        rate: "6 / 10 (404) ",
        img: "http://image.phimmoi.net/film/6858/poster.medium.jpg",
        actor: "Edwin Hodge, Barry Sloane, Kyle Schmid, Juan Pablo Raba, Brianne Davis",
        director: "N/A",
        category: "Phim Phiêu Lưu, Phim Hành Động, Phim Chiến Tranh",
        country: "Mỹ",
        content: 'Trong phim Biệt Đội Số 6 phần 2, đội trưởng của Seal Team Six là Richard RIP Taggart do Walton Goggins thủ vai, đã đưa ra một quyết định khó hiểu trong một nhiệm vụ tại Afghanistan. Hai năm sau đó, RIP bị nhóm khủng bố Boko Haram là bắt làm con tin, và việc giải cứu anh phụ thuộc vào những anh em cựu binh Đặc nhiệm hải quân, dẫn đầu là Joe Graves do Barry Sloane thử vai, cùng với Alex Caulder (Kyle Schmid), và Ricky Buddha Ortiz (Juan Pable Raba). Nhưng họ lại có những phán đoán khác nhau về cách xác định vị và các cách giải cứu khác nhau...',
        link: "https://video.fsgn5-5.fna.fbcdn.net/v/t42.9040-2/10000000_1950867478265211_4430945960591360000_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=938&oh=c16e25441affd66b25d3b28ba332dc50&oe=5B2F15E5",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },
    {
        name: "Thế Giới Viễn Tây 2",
        rate: "8.9 / 10 (263000)",
        img: "http://image.phimmoi.net/film/6784/poster.medium.jpg",
        actor: "Ed Harris, Anthony Hopkins, James Marsden, Thandie Newton, Jeffrey Wright, Evan Rachel Wood, Tessa Thompson, Jimmi Simpson",
        director: "N/A",
        category: "Phim Hành Động, Phim Phiêu Lưu",
        country: "Mỹ",
        content: 'Phim Thế Giới Viễn Tây phần 2: Ai cũng có tuổi thơ gắn liền với những câu chuyện cổ tích - lịch sử và mộng mơ công chúa nàng tiên hay hiệp sĩ cao bồi... Đâu đó trong cuộc mưu sinh bận rộn lại có lúc chúng ta ngừng lại mơ mộng viễn vông hay gặp cảnh bất bình muốn là người hùng ra tay nghĩa hiệp. Nắm bắt được tâm lý đó cộng với sự trợ giúp đắc lực của công nghệ hiện đại, Giáo sư Robert Ford sáng lập nên một công viên giải trí tương lai tái hiện chân thực nhất về thế giới ngày mà ông cố chúng ta còn chưa chào đời. Công nghệ hiện đại đảm bảo sự an toàn tuyệt đối cho du khách, đảm bảo họ có trải nghiệm không thể thực hơn. Thỏa thuê đâm chém, bắn giết, là trung tâm của những màn ẩu đả mà trước giờ họ chỉ được chiêm ngưỡng trên màn ảnh, máu đổ đầu rơi và cả chuyện "sung sướng" cũng hoàn toàn chân thực do... đội ngũ Robot với hình dáng con người đảm nhiệm. Nhưng khi những siêu máy tính được giao nhiệm vụ thiết kế thế hệ Robot tân tiến hoàn thiện hơn thì nó đã âm thầm cài đặt "ý muốn" của nó vào những đứa con mình, âm thầm chờ ngày nỗi loạn vùng lên, số phận những du khách phải bỏ rất nhiều tiền để được đến công viên ngày mã độc được kích hoạt...',
        link: "https://video.fhan5-6.fna.fbcdn.net/v/t42.9040-2/10000000_1837945183174744_299441615183806464_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=779&oh=f262e2596fd3436754b8d22239b9704e&oe=5B300FB0",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },
    {
        name: "Thế Giới Viễn Tây 1",
        rate: "8.9 / 10 (263000)",
        img: "http://image.phimmoi.net/film/4232/poster.medium.jpg",
        actor: "Ed Harris, Anthony Hopkins, James Marsden, Thandie Newton, Jeffrey Wright, Evan Rachel Wood, Tessa Thompson, Jimmi Simpson",
        director: "N/A",
        category: "Phim Hành Động, Phim Phiêu Lưu",
        country: "Mỹ",
        content: 'Phim Thế Giới Viễn Tây phần 2: Ai cũng có tuổi thơ gắn liền với những câu chuyện cổ tích - lịch sử và mộng mơ công chúa nàng tiên hay hiệp sĩ cao bồi... Đâu đó trong cuộc mưu sinh bận rộn lại có lúc chúng ta ngừng lại mơ mộng viễn vông hay gặp cảnh bất bình muốn là người hùng ra tay nghĩa hiệp. Nắm bắt được tâm lý đó cộng với sự trợ giúp đắc lực của công nghệ hiện đại, Giáo sư Robert Ford sáng lập nên một công viên giải trí tương lai tái hiện chân thực nhất về thế giới ngày mà ông cố chúng ta còn chưa chào đời. Công nghệ hiện đại đảm bảo sự an toàn tuyệt đối cho du khách, đảm bảo họ có trải nghiệm không thể thực hơn. Thỏa thuê đâm chém, bắn giết, là trung tâm của những màn ẩu đả mà trước giờ họ chỉ được chiêm ngưỡng trên màn ảnh, máu đổ đầu rơi và cả chuyện "sung sướng" cũng hoàn toàn chân thực do... đội ngũ Robot với hình dáng con người đảm nhiệm. Nhưng khi những siêu máy tính được giao nhiệm vụ thiết kế thế hệ Robot tân tiến hoàn thiện hơn thì nó đã âm thầm cài đặt "ý muốn" của nó vào những đứa con mình, âm thầm chờ ngày nỗi loạn vùng lên, số phận những du khách phải bỏ rất nhiều tiền để được đến công viên ngày mã độc được kích hoạt...',
        link: "https://video.fsgn5-3.fna.fbcdn.net/v/t42.9040-2/10000000_198110260980804_8794073120563527680_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=730&oh=93066b3ffae35e33c44a746d8749b9e6&oe=5B2FF980",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },
    {
        name: "100 Người Thử Nghiệm 5",
        rate: "7.9 / 10 (150000) ",
        img: "http://image.phimmoi.net/film/6799/poster.medium.jpg",
        actor: "Paige Turco, Bob Morley, Eliza Taylor",
        director: "N/A",
        category: "Phim Phiêu Lưu, Phim Hành Động",
        country: "Mỹ",
        content: 'Gần 100 năm sau khi một thảm họa hạt nhân giết chết mọi sinh vật tồn tại trên Trái Đất. Một bộ phận loài người thoát nạn và đã sống bên ngoài vũ trụ được 3 thế hệ. Khi nguồn tài nguyên, lương thực, không khí ngày một cạn kiệt, họ quyết định đưa 100 tội phạm thiếu niên xuống Trái Đất để thử nghiệm xem liệu điều kiện và môi trường ở đó có phù hợp cho loài người quay trở lại sinh sống hay chưa. Ở Trái Đất, họ phải đối mặt với những con quái thú, những loài thực vật kỳ lạ do chịu ảnh hưởng của phóng xạ. Chuyện ngày càng rắc rối khi 100 thiếu niên này quyết định nổi loạn và không cam chịu sự theo dõi của những người đứng đầu. Mọi chuyện sẽ diễn biến thế nào khi vận mệnh của loài người đang nằm trên bờ vực nguy hiểm? ',
        link: "https://video.fhan5-4.fna.fbcdn.net/v/t42.9040-2/10000000_664460040555922_5461863391532417024_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1NTIsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1552&vabr=1035&oh=f9aa239f60a081f0a4b133504b295f1f&oe=5B307836",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },
    {
        name: "100 Người Thử Nghiệm 1",
        rate: "7.9 / 10 (150000) ",
        img: "http://image.phimmoi.net/film/914/poster.medium.jpg",
        actor: "Paige Turco, Bob Morley, Eliza Taylor",
        director: "N/A",
        category: "Phim Phiêu Lưu, Phim Hành Động",
        country: "Mỹ",
        content: 'Gần 100 năm sau khi một thảm họa hạt nhân giết chết mọi sinh vật tồn tại trên Trái Đất. Một bộ phận loài người thoát nạn và đã sống bên ngoài vũ trụ được 3 thế hệ. Khi nguồn tài nguyên, lương thực, không khí ngày một cạn kiệt, họ quyết định đưa 100 tội phạm thiếu niên xuống Trái Đất để thử nghiệm xem liệu điều kiện và môi trường ở đó có phù hợp cho loài người quay trở lại sinh sống hay chưa. Ở Trái Đất, họ phải đối mặt với những con quái thú, những loài thực vật kỳ lạ do chịu ảnh hưởng của phóng xạ. Chuyện ngày càng rắc rối khi 100 thiếu niên này quyết định nổi loạn và không cam chịu sự theo dõi của những người đứng đầu. Mọi chuyện sẽ diễn biến thế nào khi vận mệnh của loài người đang nằm trên bờ vực nguy hiểm? ',
        link: "https://video.fsgn5-4.fna.fbcdn.net/v/t42.9040-2/10000000_225043288049412_423045130375659520_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=964&oh=1fe63208a208fa6edf6513694b447b3f&oe=5B30A51E",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },
    {
        name: "100 Người Thử Nghiệm 2",
        rate: "7.9 / 10 (150000) ",
        img: "http://image.phimmoi.net/film/1683/poster.medium.jpg",
        actor: "Paige Turco, Bob Morley, Eliza Taylor",
        director: "N/A",
        category: "Phim Phiêu Lưu, Phim Hành Động",
        country: "Mỹ",
        content: 'Gần 100 năm sau khi một thảm họa hạt nhân giết chết mọi sinh vật tồn tại trên Trái Đất. Một bộ phận loài người thoát nạn và đã sống bên ngoài vũ trụ được 3 thế hệ. Khi nguồn tài nguyên, lương thực, không khí ngày một cạn kiệt, họ quyết định đưa 100 tội phạm thiếu niên xuống Trái Đất để thử nghiệm xem liệu điều kiện và môi trường ở đó có phù hợp cho loài người quay trở lại sinh sống hay chưa. Ở Trái Đất, họ phải đối mặt với những con quái thú, những loài thực vật kỳ lạ do chịu ảnh hưởng của phóng xạ. Chuyện ngày càng rắc rối khi 100 thiếu niên này quyết định nổi loạn và không cam chịu sự theo dõi của những người đứng đầu. Mọi chuyện sẽ diễn biến thế nào khi vận mệnh của loài người đang nằm trên bờ vực nguy hiểm? ',
        link: "http://ok2.cdn.phimmoi.net/6210b0d60a650f12b6c297bd8e3271d61529780400/PhimMoi.Net--[@3e84192f][360p][T1523054643]The.100.S02E01.720p.HDTV.x264-KILLERS.mp4",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },
    {
        name: "100 Người Thử Nghiệm 3",
        rate: "7.9 / 10 (150000) ",
        img: "http://image.phimmoi.net/film/3482/poster.medium.jpg",
        actor: "Paige Turco, Bob Morley, Eliza Taylor",
        director: "N/A",
        category: "Phim Phiêu Lưu, Phim Hành Động",
        country: "Mỹ",
        content: 'Gần 100 năm sau khi một thảm họa hạt nhân giết chết mọi sinh vật tồn tại trên Trái Đất. Một bộ phận loài người thoát nạn và đã sống bên ngoài vũ trụ được 3 thế hệ. Khi nguồn tài nguyên, lương thực, không khí ngày một cạn kiệt, họ quyết định đưa 100 tội phạm thiếu niên xuống Trái Đất để thử nghiệm xem liệu điều kiện và môi trường ở đó có phù hợp cho loài người quay trở lại sinh sống hay chưa. Ở Trái Đất, họ phải đối mặt với những con quái thú, những loài thực vật kỳ lạ do chịu ảnh hưởng của phóng xạ. Chuyện ngày càng rắc rối khi 100 thiếu niên này quyết định nổi loạn và không cam chịu sự theo dõi của những người đứng đầu. Mọi chuyện sẽ diễn biến thế nào khi vận mệnh của loài người đang nằm trên bờ vực nguy hiểm? ',
        link: "https://video.fsgn5-6.fna.fbcdn.net/v/t42.9040-2/10000000_155165905347726_4975390854144327680_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=930&oh=95718bc46b527ecd800abb22d562c362&oe=5B301A7B",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },
    {
        name: "100 Người Thử Nghiệm 4",
        rate: "7.9 / 10 (150000) ",
        img: "http://image.phimmoi.net/film/4759/poster.medium.jpg",
        actor: "Paige Turco, Bob Morley, Eliza Taylor",
        director: "N/A",
        category: "Phim Phiêu Lưu, Phim Hành Động",
        country: "Mỹ",
        content: 'Gần 100 năm sau khi một thảm họa hạt nhân giết chết mọi sinh vật tồn tại trên Trái Đất. Một bộ phận loài người thoát nạn và đã sống bên ngoài vũ trụ được 3 thế hệ. Khi nguồn tài nguyên, lương thực, không khí ngày một cạn kiệt, họ quyết định đưa 100 tội phạm thiếu niên xuống Trái Đất để thử nghiệm xem liệu điều kiện và môi trường ở đó có phù hợp cho loài người quay trở lại sinh sống hay chưa. Ở Trái Đất, họ phải đối mặt với những con quái thú, những loài thực vật kỳ lạ do chịu ảnh hưởng của phóng xạ. Chuyện ngày càng rắc rối khi 100 thiếu niên này quyết định nổi loạn và không cam chịu sự theo dõi của những người đứng đầu. Mọi chuyện sẽ diễn biến thế nào khi vận mệnh của loài người đang nằm trên bờ vực nguy hiểm? ',
        link: "https://video.fsgn5-5.fna.fbcdn.net/v/t42.9040-2/10000000_604439763275208_1463240459475222528_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=920&oh=803119c2b139b191a025f0812f297ede&oe=5B306C2E",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },
    {
        name: "Mãng Hoang Kỷ",
        rate: "5 / 10 (12)",
        img: "http://image.phimmoi.net/film/6794/poster.medium.jpg",
        actor: "Lưu Khải Uy, Vương Âu, Trần Diệc Phi, Trương Tuấn Ninh, Ngưu Tuấn Phong",
        director: "Hoàng Tổ Quyền",
        category: "",
        country: "Trung Quốc",
        content: "Phim Cổ Trang, Phim Tình Cảm, Phim Phiêu Lưu, Phim Hành Động",
        link: "https://video.fsgn5-2.fna.fbcdn.net/v/t42.9040-2/10000000_1836275823339095_6641270134092595200_n.mp4?_nc_cat=0&efg=eyJybHIiOjE3MDIsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1702&vabr=1135&oh=dc5ace557fde7c8acee771d4f487f9ea&oe=5B30D185",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },
    {
        name: "Xác Sống Đáng Sợ 4",
        rate: "7 / 10 (88000)",
        img: "http://image.phimmoi.net/film/6738/poster.medium.jpg",
        actor: "Kim Dickens, Frank Dillane, Alycia Debnam-Carey, Rubén Blades, Mercedes Mason, Colman Domingo, Danay Garcia, Cliff Curti",
        director: "N/A",
        category: "Phim Viễn Tưởng, Phim Kinh Dị, Phim Hành Động",
        country: "Mỹ",
        content: 'Fear the Walking Dead Season 4 2018 là bộ phim lấy cùng thế giới với The Walking Dead nhưng sẽ là vào khoảng thời gian đầu khi đại dịch bùng phát và bối cảnh là thành phố Los Angeles của Mỹ. Fear sẽ KHÔNG tiết lộ nguyên nhân gây ra bệnh dịch. - Một số thành viên trong đoàn làm phim TWD sẽ tham gia vào Fear như Robert Kirkman (cha đẻ của thế giới TWD), Greg Nicotero (chịu trách nhiệm hiệu ứng và hóa trang xác sống), Gale Anne Hurd & David Alpert (các chỉ đạo sản xuất)... ',
        link: "https://video.fhan5-3.fna.fbcdn.net/v/t42.9040-2/10000000_402547926885357_7901371070102372352_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=732&oh=e274aa8648e568cb0c1e67e674b000bc&oe=5B3016B1",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },
    {
        name: "Xác Sống Đáng Sợ 1",
        rate: "7 / 10 (88000)",
        img: "http://image.phimmoi.net/film/3018/poster.medium.jpg",
        actor: "Kim Dickens, Frank Dillane, Alycia Debnam-Carey, Rubén Blades, Mercedes Mason, Colman Domingo, Danay Garcia, Cliff Curti",
        director: "N/A",
        category: "Phim Viễn Tưởng, Phim Kinh Dị, Phim Hành Động",
        country: "Mỹ",
        content: 'Fear the Walking Dead Season 4 2018 là bộ phim lấy cùng thế giới với The Walking Dead nhưng sẽ là vào khoảng thời gian đầu khi đại dịch bùng phát và bối cảnh là thành phố Los Angeles của Mỹ. Fear sẽ KHÔNG tiết lộ nguyên nhân gây ra bệnh dịch. - Một số thành viên trong đoàn làm phim TWD sẽ tham gia vào Fear như Robert Kirkman (cha đẻ của thế giới TWD), Greg Nicotero (chịu trách nhiệm hiệu ứng và hóa trang xác sống), Gale Anne Hurd & David Alpert (các chỉ đạo sản xuất)... ',
        link: "https://video.fsgn5-5.fna.fbcdn.net/v/t42.9040-2/10000000_167336277420777_8334182526612406272_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=851&oh=43d4bcc9c39fa364151f79ddcd9701e7&oe=5B3075D5",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },
    {
        name: "Xác Sống Đáng Sợ 2",
        rate: "7 / 10 (88000)",
        img: "http://image.phimmoi.net/film/3786/poster.medium.jpg",
        actor: "Kim Dickens, Frank Dillane, Alycia Debnam-Carey, Rubén Blades, Mercedes Mason, Colman Domingo, Danay Garcia, Cliff Curti",
        director: "N/A",
        category: "Phim Viễn Tưởng, Phim Kinh Dị, Phim Hành Động",
        country: "Mỹ",
        content: 'Fear the Walking Dead Season 4 2018 là bộ phim lấy cùng thế giới với The Walking Dead nhưng sẽ là vào khoảng thời gian đầu khi đại dịch bùng phát và bối cảnh là thành phố Los Angeles của Mỹ. Fear sẽ KHÔNG tiết lộ nguyên nhân gây ra bệnh dịch. - Một số thành viên trong đoàn làm phim TWD sẽ tham gia vào Fear như Robert Kirkman (cha đẻ của thế giới TWD), Greg Nicotero (chịu trách nhiệm hiệu ứng và hóa trang xác sống), Gale Anne Hurd & David Alpert (các chỉ đạo sản xuất)... ',
        link: "https://video.fhan5-3.fna.fbcdn.net/v/t42.9040-2/10000000_184308165548991_4013903317594800128_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=968&oh=a460ddf05cf4098d2bed74293cd6d0d7&oe=5B300FD7",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },
    {
        name: "Xác Sống Đáng Sợ 3",
        rate: "7 / 10 (88000)",
        img: "http://image.phimmoi.net/film/5475/poster.medium.jpg",
        actor: "Kim Dickens, Frank Dillane, Alycia Debnam-Carey, Rubén Blades, Mercedes Mason, Colman Domingo, Danay Garcia, Cliff Curti",
        director: "N/A",
        category: "Phim Viễn Tưởng, Phim Kinh Dị, Phim Hành Động",
        country: "Mỹ",
        content: 'Fear the Walking Dead Season 4 2018 là bộ phim lấy cùng thế giới với The Walking Dead nhưng sẽ là vào khoảng thời gian đầu khi đại dịch bùng phát và bối cảnh là thành phố Los Angeles của Mỹ. Fear sẽ KHÔNG tiết lộ nguyên nhân gây ra bệnh dịch. - Một số thành viên trong đoàn làm phim TWD sẽ tham gia vào Fear như Robert Kirkman (cha đẻ của thế giới TWD), Greg Nicotero (chịu trách nhiệm hiệu ứng và hóa trang xác sống), Gale Anne Hurd & David Alpert (các chỉ đạo sản xuất)... ',
        link: "http://ok2.cdn.phimmoi.net/ec128723d6a02616b0912d8bccabe4fb1529780400/PhimMoi.Net--[@db6b2eb1][360p][T1522736949]Fear.the.Walking.Dead.S03E01.720p.HDTV.x264-AVS.mp4",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },
    {
        name: "Xác Sống 3",
        rate: "8.5 / 10 (692366)",
        img: "http://image.phimmoi.net/film/234/poster.medium.jpg",
        actor: "Andrew Lincoln, Steven Yeun, Chandler Riggs, Norman Reedus",
        director: " N/A",
        category: "Phim Kịch Tính, Phim Rùng Rợn",
        country: "Mỹ",
        content: 'The Walking Dead - Xác Sống nói về cuộc sống sau thảm họa dịch bệnh thây ma, về một nhóm nhỏ những người sống sót sau sự bùng nổ của đại dịch. Phần lớn câu chuyện diễn ra ở trung tâm Atlanta, những người sống sót cố sức tìm một nơi trú thân mới, chạy trốn những thây ma ăn thịt sống (trong phim còn gọi là những "walker"). Cốt truyện tập trung chủ yếu vào tính nhân văn sau tận thế và cách con người tranh đấu để sống còn. Nhóm người này được dẫn đầu bởi Rick Grimes - cựu phó quận trưởng cảnh sát ở một thị trấn nhỏ tại Georgia. Khi tình hình ngày càng trở nên hiểm nghèo, sự tuyệt vọng của nhóm người này đã đẩy họ đến bờ vực của sự mất trí. Dù đi đến đâu, họ cũng phải đối mặt với nỗi kinh hãi từ những thây ma, sự mất đoàn kết, cũng như sự đối địch của số nhỏ những người còn sống rải rác ở nơi khác chỉ quan tâm đến sự sống còn của riêng mình, khi mà trật tự xã hội trên toàn cầu đã sụp đổ...',
        link: "https://video.fsgn5-7.fna.fbcdn.net/v/t42.9040-2/10000000_193124524747641_5869398050677456896_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=959&oh=37cc7327d7147ee6fb29e0f7bc5608c1&oe=5B2F1400",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },
    {
        name: "Xác Sống 4",
        rate: "8.5 / 10 (692366)",
        img: "http://image.phimmoi.net/film/232/poster.medium.jpg",
        actor: "Andrew Lincoln, Steven Yeun, Chandler Riggs, Norman Reedus",
        director: " N/A",
        category: "Phim Kịch Tính, Phim Rùng Rợn",
        country: "Mỹ",
        content: 'The Walking Dead - Xác Sống nói về cuộc sống sau thảm họa dịch bệnh thây ma, về một nhóm nhỏ những người sống sót sau sự bùng nổ của đại dịch. Phần lớn câu chuyện diễn ra ở trung tâm Atlanta, những người sống sót cố sức tìm một nơi trú thân mới, chạy trốn những thây ma ăn thịt sống (trong phim còn gọi là những "walker"). Cốt truyện tập trung chủ yếu vào tính nhân văn sau tận thế và cách con người tranh đấu để sống còn. Nhóm người này được dẫn đầu bởi Rick Grimes - cựu phó quận trưởng cảnh sát ở một thị trấn nhỏ tại Georgia. Khi tình hình ngày càng trở nên hiểm nghèo, sự tuyệt vọng của nhóm người này đã đẩy họ đến bờ vực của sự mất trí. Dù đi đến đâu, họ cũng phải đối mặt với nỗi kinh hãi từ những thây ma, sự mất đoàn kết, cũng như sự đối địch của số nhỏ những người còn sống rải rác ở nơi khác chỉ quan tâm đến sự sống còn của riêng mình, khi mà trật tự xã hội trên toàn cầu đã sụp đổ...',
        link: "https://video.fhan5-6.fna.fbcdn.net/v/t42.9040-2/10000000_233946557346394_453589937057431552_n.mp4?_nc_cat=0&efg=eyJybHIiOjE3NDYsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1746&vabr=1164&oh=6d46553829c163541eeb4c8709b111d4&oe=5B2FA8EA",
        season: "1",
        eps: "1",
        tag: "Phim Bộ Mới Nhất",
    },

]
let data = DATANEW.sort(function () {
    return .5 - Math.random();
});

function homePage(arguments) {
    sessionStorage.clear();
    data.forEach(e => {
        if (e.tag == "Phim Hot") {
            col1.innerHTML +=
                `<div class="list__card" onclick="movies(this)"  data-name="${e.name}">
    <div class="card__pic">
        <a onclick="movies(this)" data-name="${e.name}">
            <img src="${e.img}" alt=" ${e.name}">
        </a>
        <div class="transparent">
        <p>${e.name}</p>
        </div>
        <div class="iconPlay">
            <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                <!-- Hello My Name is Nam. -->
                <desc>Created by Nam.</desc>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                        <stop stop-color="#FAD961" offset="0%"></stop>
                        <stop stop-color="#F76B1C" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                    <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                        <g id="detail" transform="translate(165.000000, 111.000000)">
                            <g id="play" transform="translate(508.000000, 223.000000)">
                                <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                    points="52.5 28 77 67 28 67"></polygon>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    </div>
    <div class="card__name">
        <a  onclick="movies(this)" data-name="${e.name}">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        } else if (e.tag == "Phim Chiếu Rạp") {
            col2.innerHTML +=
                `<div class="list__card" onclick="movies(this)" data-name="${e.name}">
    <div class="card__pic">
        <a onclick="movies(this)" data-name="${e.name}">
            <img src="${e.img}" alt=" ${e.name}">
        </a>
        <div class="transparent">
        <p>${e.name}</p>
        </div>
        <div class="iconPlay">
            <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                <!-- Hello My Name is Nam. -->
                <desc>Created by Nam.</desc>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                        <stop stop-color="#FAD961" offset="0%"></stop>
                        <stop stop-color="#F76B1C" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                    <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                        <g id="detail" transform="translate(165.000000, 111.000000)">
                            <g id="play" transform="translate(508.000000, 223.000000)">
                                <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                    points="52.5 28 77 67 28 67"></polygon>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    </div>
    <div class="card__name">
        <a onclick="movies(this)" data-name="${e.name}">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        } else if (e.tag == "Phim Lẻ Mới Nhất") {
            col3.innerHTML +=
                `<div class="list__card" onclick="movies(this)" data-name="${e.name}">
    <div class="card__pic">
        <a onclick="movies(this)" data-name="${e.name}">
            <img src="${e.img}" alt=" ${e.name}">
        </a>
        <div class="transparent">
        <p>${e.name}</p>
        </div>
        <div class="iconPlay">
            <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                <!-- Hello My Name is Nam. -->
                <desc>Created by Nam.</desc>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                        <stop stop-color="#FAD961" offset="0%"></stop>
                        <stop stop-color="#F76B1C" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                    <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                        <g id="detail" transform="translate(165.000000, 111.000000)">
                            <g id="play" transform="translate(508.000000, 223.000000)">
                                <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                    points="52.5 28 77 67 28 67"></polygon>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    </div>
    <div class="card__name">
        <a onclick="movies(this)" data-name="${e.name}">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        } else if (e.tag == "Phim Bộ Mới Nhất") {
            col4.innerHTML +=
                `<div class="list__card" onclick="movies(this)" data-name="${e.name}">
            <div class="card__pic">
                <a onclick="movies(this)" data-name="${e.name}">
                    <img src="${e.img}" alt=" ${e.name}">
                </a>
                <div class="transparent">
                <p>${e.name}</p>
                </div>
                <div class="iconPlay">
                    <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                        <!-- Hello My Name is Nam. -->
                        <desc>Created by Nam.</desc>
                        <defs>
                            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                                <stop stop-color="#FAD961" offset="0%"></stop>
                                <stop stop-color="#F76B1C" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                            <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                                <g id="detail" transform="translate(165.000000, 111.000000)">
                                    <g id="play" transform="translate(508.000000, 223.000000)">
                                        <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                        <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                            points="52.5 28 77 67 28 67"></polygon>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="card__name">
                <a onclick="movies(this)" data-name="${e.name}">
                    <p>
                        ${e.name}
                    </p>
                </a>
            </div>
        </div>`
        } else if (e.tag == "Phim Âu Mỹ") {
            col5.innerHTML +=
                `<div class="list__card" onclick="movies(this)" data-name="${e.name}">
    <div class="card__pic">
        <a onclick="movies(this)" data-name="${e.name}">
            <img src="${e.img}" alt=" ${e.name}">
        </a>
        <div class="transparent">
        <p>${e.name}</p>
        </div>
        <div class="iconPlay">
            <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                <!-- Hello My Name is Nam. -->
                <desc>Created by Nam.</desc>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                        <stop stop-color="#FAD961" offset="0%"></stop>
                        <stop stop-color="#F76B1C" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                    <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                        <g id="detail" transform="translate(165.000000, 111.000000)">
                            <g id="play" transform="translate(508.000000, 223.000000)">
                                <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                    points="52.5 28 77 67 28 67"></polygon>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    </div>
    <div class="card__name">
        <a onclick="movies(this)" data-name="${e.name}">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        } else if (e.tag == "Phim Hàn Quốc") {
            col6.innerHTML +=
                `<div class="list__card" onclick="movies(this)" data-name="${e.name}">
    <div class="card__pic">
        <a onclick="movies(this)" data-name="${e.name}">
            <img src="${e.img}" alt=" ${e.name}">
        </a>
        <div class="transparent">
        <p>${e.name}</p>
        </div>
        <div class="iconPlay">
            <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                <!-- Hello My Name is Nam. -->
                <desc>Created by Nam.</desc>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                        <stop stop-color="#FAD961" offset="0%"></stop>
                        <stop stop-color="#F76B1C" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                    <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                        <g id="detail" transform="translate(165.000000, 111.000000)">
                            <g id="play" transform="translate(508.000000, 223.000000)">
                                <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                    points="52.5 28 77 67 28 67"></polygon>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    </div>
    <div class="card__name">
        <a onclick="movies(this)" data-name="${e.name}">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        } else if (e.tag == "Phim Trung Quốc") {
            col7.innerHTML +=
                `<div class="list__card" onclick="movies(this)" data-name="${e.name}">
            <div class="card__pic">
                <a onclick="movies(this)" data-name="${e.name}">
                    <img src="${e.img}" alt=" ${e.name}">
                </a>
                <div class="transparent">
                <p>${e.name}</p>
                </div>
                <div class="iconPlay">
                    <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                        <!-- Hello My Name is Nam. -->
                        <desc>Created by Nam.</desc>
                        <defs>
                            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                                <stop stop-color="#FAD961" offset="0%"></stop>
                                <stop stop-color="#F76B1C" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                            <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                                <g id="detail" transform="translate(165.000000, 111.000000)">
                                    <g id="play" transform="translate(508.000000, 223.000000)">
                                        <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                        <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                            points="52.5 28 77 67 28 67"></polygon>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="card__name">
                <a onclick="movies(this)" data-name="${e.name}">
                    <p>
                        ${e.name}
                    </p>
                </a>
            </div>
        </div>`
        } else if (e.tag == "Phim Hoạt Hình - Animal") {
            col8.innerHTML +=
                `<div class="list__card" onclick="movies(this)" data-name="${e.name}">
    <div class="card__pic">
        <a onclick="movies(this)" data-name="${e.name}">
            <img src="${e.img}" alt=" ${e.name}">
        </a>
        <div class="transparent">
         <p>${e.name}</p>
        </div>
        <div class="iconPlay">
            <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                <!-- Hello My Name is Nam. -->
                <desc>Created by Nam.</desc>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                        <stop stop-color="#FAD961" offset="0%"></stop>
                        <stop stop-color="#F76B1C" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                    <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                        <g id="detail" transform="translate(165.000000, 111.000000)">
                            <g id="play" transform="translate(508.000000, 223.000000)">
                                <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                    points="52.5 28 77 67 28 67"></polygon>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    </div>
    <div class="card__name">
        <a onclick="movies(this)" data-name="${e.name}">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        } else if (e.tag == "Game Show Truyền Hình") {
            col9.innerHTML +=
                `<div class="list__card" onclick="movies(this)"  data-name="${e.name}">
    <div class="card__pic">
        <a onclick="movies(this)" data-name="${e.name}">
            <img src="${e.img}" alt=" ${e.name}">
        </a>
        <div class="transparent">
        <p>${e.name}</p>
        </div>
        <div class="iconPlay">
            <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                <!-- Hello My Name is Nam. -->
                <desc>Created by Nam.</desc>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                        <stop stop-color="#FAD961" offset="0%"></stop>
                        <stop stop-color="#F76B1C" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                    <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                        <g id="detail" transform="translate(165.000000, 111.000000)">
                            <g id="play" transform="translate(508.000000, 223.000000)">
                                <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                    points="52.5 28 77 67 28 67"></polygon>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    </div>
    <div class="card__name">
        <a  onclick="movies(this)" data-name="${e.name}">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        }
    })
    let nameMovies = document.querySelectorAll('.card__name a p');
    [...nameMovies].filter(e => (e.innerText.length > 18)).map(a => {
        a.innerText = a.innerText.slice(0, 18) + "..."
    })

}

function detail(arguments) {
    data.forEach(e => {
        if (e.tag == "Phim Hot") {
            col1.innerHTML +=
                `<div class="list__card" onclick="movies(this)" data-name="${e.name}">
    <div class="card__pic">
        <a onclick="movies(this)" data-name="${e.name}">
            <img src="${e.img}" alt=" ${e.name}">
        </a>
        <div class="transparent">
        <p>${e.name}</p>
        </div>
        <div class="iconPlay">
            <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                <!-- Hello My Name is Nam. -->
                <desc>Created by Nam.</desc>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                        <stop stop-color="#FAD961" offset="0%"></stop>
                        <stop stop-color="#F76B1C" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                    <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                        <g id="detail" transform="translate(165.000000, 111.000000)">
                            <g id="play" transform="translate(508.000000, 223.000000)">
                                <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                    points="52.5 28 77 67 28 67"></polygon>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    </div>
    <div class="card__name">
        <a onclick="movies(this)" data-name="${e.name}">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        } else if (e.tag == "Phim Chiếu Rạp") {
            col2.innerHTML +=
                `<div class="list__card" onclick="movies(this)" data-name="${e.name}">
    <div class="card__pic">
        <a onclick="movies(this)" data-name="${e.name}">
            <img src="${e.img}" alt=" ${e.name}">
        </a>
        <div class="transparent">
        <p>${e.name}</p>
        </div>
        <div class="iconPlay">
            <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                <!-- Hello My Name is Nam. -->
                <desc>Created by Nam.</desc>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                        <stop stop-color="#FAD961" offset="0%"></stop>
                        <stop stop-color="#F76B1C" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                    <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                        <g id="detail" transform="translate(165.000000, 111.000000)">
                            <g id="play" transform="translate(508.000000, 223.000000)">
                                <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                    points="52.5 28 77 67 28 67"></polygon>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    </div>
    <div class="card__name">
        <a onclick="movies(this)" data-name="${e.name}">
            <p>
                ${e.name}
            </p>
        </a>
    </div>
</div>`
        }
    })
    let nameMovies = document.querySelectorAll('.card__name a p');
    [...nameMovies].filter(e => (e.innerText.length > 18)).map(a => {
        a.innerText = a.innerText.slice(0, 18) + "..."
    })
}

function movies(e) {
    sessionStorage.clear();
    let nameFilm = e.dataset.name;
    data.filter(a => (a.name == nameFilm)).map(b => sessionStorage.setItem("data", JSON.stringify(b)))
    window.open("detail.html", "_self");
}

function showMovies(arguments) {
    const dataStorage = JSON.parse(sessionStorage.data)
    contentMovies.innerHTML +=
        `<div class="movies__media">
    <div class="media__icon">
    </div>
    <div class="media__video">

        <video width="100%" height="100%" controls>
            <source src="${dataStorage.link}"
                type="video/mp4">
        </video>
    </div>
</div>
<div class="movies__title">
    <div class="title__text">
        <div class="text__top">
            <h2>
                ${dataStorage.name}
            </h2>
        </div>
        <div class="text__bot">
            <button class="bot__report">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Báo lỗi</p>
            </button>
            <button class="bot__block-ads">
                <i class="fas fa-power-off"></i>
                <p>Tắt quảng cáo</p>
            </button>
            <div class="bot__add-list">
                <i class="fas fa-plus-circle"></i>
                <p>Thêm vào danh sách</p>
            </div>
        </div>
    </div>
    <div class="title__icon">

        <svg width="61px" height="58px" viewBox="0 0 61 58" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Hello my name is Nam-->
            <desc>Created by Nam.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="list_movies-copy" transform="translate(-1198.000000, -685.000000)">
                    <g id="detail" transform="translate(165.000000, 111.000000)">
                        <g id="title" transform="translate(0.000000, 541.000000)">
                            <g id="quality" transform="translate(1033.288136, 33.000000)">
                                <ellipse id="Oval-2" fill="#606060" cx="30.3107345" cy="29" rx="30.3107345" ry="29"></ellipse>
                                <text id="HD-720" font-family="AvenirNext-Medium, Avenir Next" font-size="16" font-weight="400" letter-spacing="-0.529999971">
                                    <tspan x="19.4433333" y="26" fill="#F6B03D">HD</tspan>
                                    <tspan x="42.2233334" y="26" font-family="AvenirNext-Regular, Avenir Next" font-weight="normal" fill="#F6B03D"></tspan>
                                    <tspan x="17.4433333" y="48.2" font-family="AvenirNext-Regular, Avenir Next" font-weight="normal" fill="#F9F9F9">72</tspan>
                                    <tspan x="34.9433334" y="48.2" font-family="AvenirNext-Regular, Avenir Next" font-weight="normal" fill="#F9F9F9">0</tspan>
                                </text>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    </div>
</div>
<div class="movies__info">
    <div class="info__left">
        <div class="movies-season">
            <h1>Các season</h1>
            <button>Season 1</button>
        </div>
        <div class="movies-data">
            <h1>
                Nội dung phim
            </h1>
            <h2>
            ${dataStorage.content}
            </h2>
        </div>
        <div class="movies-reviews">
            <div class="reviews__left">
                <div class="actor-film">
                    <h1>
                        Diễn viên
                    </h1>
                    <h2>
                    ${dataStorage.actor}
                    </h2>
                </div>
                <div class="kind-film">
                    <h1>
                        Thể loại
                    </h1>
                    <h2>
                    ${dataStorage.category}
                    </h2>

                </div>
                <div class="rate-film">
                    <h1>
                        Đánh giá của Cinema
                    </h1>
                    <div class="rate__star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
                <div class="tag-film">
                    <span>Tags:</span>
                    <p>${dataStorage.tag}</p>
                </div>
            </div>
            <div class="revies__right">
                <div class="imdb-film">
                    <h1>Đánh giá</h1>
                    <h2>${dataStorage.rate}</h2>
                </div>
                <div class="directors-film">
                    <h1>Đạo diễn</h1>
                    <h2>${dataStorage.director}</h2>
                </div>
                <div class="country-film">
                    <h1>Quốc gia</h1>
                    <h2>${dataStorage.country}</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="info__right">
        <div class="episode">
            <h1>Các tập tiếp theo</h1>
            <div class="episode__icon">

                    <p>1</p>

            </div>
        </div>
        <div class="comment">
            <!-- comment facebook -->
            <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-numposts="4"
                data-width='100%'></div>
            <!-- main -->
        </div>
    </div>`

    let nameMovies = document.querySelectorAll('.card__name a p');
    [...nameMovies].filter(e => (e.innerText.length > 18)).map(a => {
        a.innerText = a.innerText.slice(0, 18) + "..."
    })
}

function categoryMovies(e) {
    sessionStorage.clear();
    let categoryFilm = e.dataset.name;
    let storageCategory = [];
    for (let value of data) {
        value.tag == categoryFilm ? storageCategory.push(value) : 0
    }
    sessionStorage.setItem("dataCategory", JSON.stringify(storageCategory));
    window.open("category.html", "_self");
}

function showMoviesCategory(arguments) {
    const dataStorage = JSON.parse(sessionStorage.dataCategory);
    dataStorage.forEach(e => {
        here.innerHTML +=
            `<div class="list--wrap col">
        <div class="list__card" onclick="movies(this)" data-name="${e.name}">
            <div class="card__pic">
                <a onclick="movies(this)" data-name="${e.name}">
                    <img src="${e.img}" alt=" ${e.name}">
                </a>
                <div class="transparent">
                    <p>${e.name}</p>
                </div>
                <div class="iconPlay">
                    <svg width="60px" height="60px" viewBox="0 0 95 95" version="1.1">
                        <!-- Hello My Name is Nam. -->
                        <desc>Created by Nam.</desc>
                        <defs>
                            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                                <stop stop-color="#FAD961" offset="0%"></stop>
                                <stop stop-color="#F76B1C" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.896875">
                            <g id="list_movies-copy" transform="translate(-673.000000, -334.000000)">
                                <g id="detail" transform="translate(165.000000, 111.000000)">
                                    <g id="play" transform="translate(508.000000, 223.000000)">
                                        <circle id="Oval-3" fill="#373737" cx="47.5" cy="47.5" r="47.5"></circle>
                                        <polygon id="Triangle-2" fill="url(#linearGradient-1)" transform="translate(52.500000, 47.500000) rotate(-270.000000) translate(-52.500000, -47.500000) "
                                            points="52.5 28 77 67 28 67"></polygon>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="card__name">
                <a onclick="movies(this)" data-name="${e.name}">
                    <p>
                        ${e.name}
                    </p>
                </a>
            </div>
        </div>
    </div>`
    })
    let nameMovies = document.querySelectorAll('.card__name a p');
    [...nameMovies].filter(e => (e.innerText.length > 18)).map(a => {
        a.innerText = a.innerText.slice(0, 18) + "..."
    })
}

window.onload = () => {
    if (window.location.pathname.split("/").pop() == "index.html" || window.location.pathname.split("/").pop() == "") {
        homePage();
        hideCard();
    } else if (window.location.pathname.split("/").pop() == "category.html") {
        showMoviesCategory();
    } else if (window.location.pathname.split("/").pop() == "detail.html") {
        showMovies();
        detail();
        hideCard();
    }


}