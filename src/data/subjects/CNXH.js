// Lưu ý: câu 'Chọn 2/3/nhiều đáp án' có `answer` là mảng index (vd [0, 3]); câu 1 đáp án là số nguyên.
// Câu Đúng/Sai và điền khuyết được chuyển thành drag_drop (Đúng/Sai: right = "Đúng" | "Sai").
const CNXH = [
  {
    id: 1,
    title: "Bài 1: Sứ mệnh lịch sử của giai cấp công nhân",
    questions: [
      {
        id: "b1_c1",
        type: "multiple_choice",
        question:
          "Những nhà tư tưởng tiêu biểu của chủ nghĩa xã hội không tưởng phê phán đầu thế kỷ XIX là ai?",
        options: [
          "A. Grắccơ Babớp, Xanh Ximông, Sáclơ Phuriê",
          "B. Xanh Ximông, Sáclơ Phuriê, Rôbớt Ôoen",
          "C. Xanh Ximông, Giăng Mêliê, Rôbớt Ôoen",
          "D. Xanh Ximông, Sáclơ Phuriê, G. Mably",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Xanh Ximông, Sáclơ Phuriê, Rôbớt Ôoen",
      },
      {
        id: "b1_c2",
        type: "multiple_choice",
        question:
          "Tác phẩm nào đánh dấu sự ra đời của chủ nghĩa xã hội khoa học?",
        options: [
          "A. Góp phần phê phán triết học pháp quyền của Hêghen -- Lời nói đầu.",
          "B. Bộ Tư bản.",
          "C. Tình cảnh giai cấp công nhân ở Anh.",
          "D. Tuyên ngôn của Đảng Cộng sản.",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Tuyên ngôn của Đảng Cộng sản.",
      },
      {
        id: "b1_c3",
        type: "multiple_choice",
        question: "Đối tượng nghiên cứu của chủ nghĩa xã hội khoa học là gì?",
        options: [
          "A. Là những quy luật và tính quy luật chính trị -- xã hội của quá trình phát sinh, hình thành và phát triển của hình thái kinh tế -- xã hội cộng sản chủ nghĩa.",
          "B. Là những quy luật hình thành, phát triển và hoàn thiện của các hình thái kinh tế -- xã hội.",
          "C. Là những quy luật kinh tế.",
          "D. Là những quy luật văn hoá -- xã hội.",
        ],
        answer: 0,
        explanation:
          "Đáp án đúng: A. Là những quy luật và tính quy luật chính trị -- xã hội của quá trình phát sinh, hình thành và phát triển của hình thái kinh tế -- xã hội cộng sản chủ nghĩa.",
      },
      {
        id: "b1_c4",
        type: "multiple_choice",
        question:
          "Phát kiến nào của C. Mác và Ph. Ăngghen chỉ ra sự diệt vong về kinh tế của chủ nghĩa tư bản?",
        options: [
          "A. Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân.",
          "B. Học thuyết về giá trị thặng dư.",
          "C. Chủ nghĩa duy vật lịch sử.",
          "D. Chủ nghĩa duy vật biện chứng.",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Học thuyết về giá trị thặng dư.",
      },
      {
        id: "b1_c5",
        type: "multiple_choice",
        question:
          'Ph. Ăngghen đã đánh giá: "Hai phát hiện vĩ đại này đã đưa chủ nghĩa xã hội trở thành một khoa học". Hai phát kiến đó là gì?',
        options: [
          "A. Sứ mệnh lịch sử của giai cấp công nhân -- Chủ nghĩa duy vật lịch sử.",
          "B. Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử.",
          "C. Học thuyết giá trị thặng dư -- Chủ nghĩa duy vật lịch sử.",
          "D. Sứ mệnh lịch sử của giai cấp công nhân -- Học thuyết giá trị thặng dư.",
        ],
        answer: 2,
        explanation:
          "Đáp án đúng: C. Học thuyết giá trị thặng dư -- Chủ nghĩa duy vật lịch sử.",
      },
      {
        id: "b1_c6",
        type: "multiple_choice",
        question:
          "Đâu là nhân tố chủ quan quan trọng nhất để giai cấp công nhân thực hiện thắng lợi sứ mệnh lịch sử của mình?",
        options: [
          "A. Liên minh giai cấp công nhân với giai cấp nông dân.",
          "B. Sự phát triển của giai cấp công nhân về số lượng.",
          "C. Sự phát triển của giai cấp công nhân về chất lượng.",
          "D. Đảng Cộng sản.",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Đảng Cộng sản.",
      },
      {
        id: "b1_c7",
        type: "multiple_choice",
        question:
          "Xét trong quan hệ sản xuất tư bản chủ nghĩa, giai cấp công nhân là:",
        options: [
          "A. Giai cấp nghèo khổ nhất.",
          "B. Giai cấp không có tư liệu sản xuất, đi làm thuê cho nhà tư bản, bị nhà tư bản bóc lột giá trị thặng dư.",
          "C. Giai cấp tạo ra của cải cho xã hội.",
          "D. Giai cấp có số lượng đông trong dân cư.",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Giai cấp không có tư liệu sản xuất, đi làm thuê cho nhà tư bản, bị nhà tư bản bóc lột giá trị thặng dư.",
      },
      {
        id: "b1_c8",
        type: "multiple_choice",
        question:
          'Điền từ còn thiếu vào chỗ trống: "Giai cấp công nhân và nhân dân lao động là cơ sở ..., cơ sở ... của Đảng Cộng sản, là nguồn bổ sung lực lượng phong phú cho Đảng."',
        options: [
          "A. Văn hoá -- xã hội.",
          "B. Chính trị -- xã hội.",
          "C. Kinh tế -- xã hội.",
          "D. Giai cấp -- xã hội.",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Chính trị -- xã hội.",
      },
      {
        id: "b1_c9",
        type: "multiple_choice",
        question: "Giai cấp công nhân Việt Nam ra đời vào thời gian nào?",
        options: [
          "A. Trong cuộc khai thác thuộc địa lần thứ hai của thực dân Pháp.",
          "B. Trước khi thực dân Pháp xâm lược Việt Nam.",
          "C. Trong cuộc khai thác thuộc địa lần thứ nhất của thực dân Pháp.",
          "D. Những năm đầu thế kỷ 19.",
        ],
        answer: 2,
        explanation:
          "Đáp án đúng: C. Trong cuộc khai thác thuộc địa lần thứ nhất của thực dân Pháp.",
      },
      {
        id: "b1_c10",
        type: "multiple_choice",
        question:
          "Trong các nội dung sau đây, nội dung nào thuộc về giải pháp xây dựng giai cấp công nhân Việt Nam hiện nay?",
        options: [
          "A. Thực hiện tốt chính sách và pháp luật đối với công nhân và người lao động.",
          "B. Coi trọng và giữ vững bản chất giai cấp công nhân và nguyên tắc sinh hoạt Đảng.",
          "C. Xây dựng giai cấp công nhân lớn mạnh, có giác ngộ giai cấp và chính trị vững vàng.",
          "D. Thực hiện chiến lược xây dựng giai cấp công nhân lớn mạnh, gắn kết chặt chẽ với chiến lược phát triển kinh tế -- xã hội, công nghiệp hóa, hiện đại hóa đất nước và hội nhập quốc tế.",
        ],
        answer: 3,
        explanation:
          "Đáp án đúng: D. Thực hiện chiến lược xây dựng giai cấp công nhân lớn mạnh, gắn kết chặt chẽ với chiến lược phát triển kinh tế -- xã hội, công nghiệp hóa, hiện đại hóa đất nước và hội nhập quốc tế.",
      },
      {
        id: "b1_c11",
        type: "multiple_choice",
        question:
          "Trong các nội dung sau đây, nội dung nào thuộc về giải pháp xây dựng giai cấp công nhân Việt Nam hiện nay?",
        options: [
          "A. Xây dựng giai cấp công nhân lớn mạnh, có giác ngộ giai cấp và chính trị vững vàng.",
          "B. Nâng cao nhận thức, kiên định quan điểm giai cấp công nhân là giai cấp lãnh đạo cách mạng thông qua đội tiền phong là Đảng Cộng sản Việt Nam.",
          "C. Xây dựng giai cấp công nhân tăng về số lượng và chất lượng.",
          "D. Coi trọng và giữ vững bản chất giai cấp công nhân và nguyên tắc sinh hoạt Đảng.",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Nâng cao nhận thức, kiên định quan điểm giai cấp công nhân là giai cấp lãnh đạo cách mạng thông qua đội tiền phong là Đảng Cộng sản Việt Nam.",
      },
      {
        id: "b1_c12",
        type: "multiple_choice",
        question:
          "Điểm then chốt để giúp giai cấp công nhân Việt Nam hiện nay thực hiện thành công sứ mệnh lịch sử của mình là:",
        options: [
          "A. Coi trọng công tác xây dựng, chỉnh đốn Đảng.",
          "B. Trí thức hóa giai cấp công nhân.",
          "C. Phát triển giai cấp công nhân cả về số lượng và chất lượng.",
          "D. Xây dựng khối liên minh công -- nông.",
        ],
        answer: 0,
        explanation:
          "Đáp án đúng: A. Coi trọng công tác xây dựng, chỉnh đốn Đảng.",
      },
      {
        id: "b1_c13",
        type: "multiple_choice",
        question:
          "Xét về phương thức lao động, phương thức sản xuất, giai cấp công nhân mang thuộc tính cơ bản nào?",
        options: [
          "A. Giai cấp có tư liệu sản xuất nhiều nhất.",
          "B. Có số lượng đông nhất trong dân cư.",
          "C. Là giai cấp trực tiếp hay gián tiếp vận hành máy móc có tính chất công nghiệp ngày càng hiện đại.",
          "D. Là giai cấp tạo ra của cải vật chất làm giàu cho xã hội.",
        ],
        answer: 2,
        explanation:
          "Đáp án đúng: C. Là giai cấp trực tiếp hay gián tiếp vận hành máy móc có tính chất công nghiệp ngày càng hiện đại.",
      },
      {
        id: "b1_c14",
        type: "multiple_choice",
        question:
          "Đặc điểm nào sau đây thể hiện đúng bản chất của giai cấp công nhân? (Chọn 2 đáp án đúng)",
        options: [
          "A. Có tính tổ chức và kỷ luật cao trong lao động sản xuất.",
          "B. Có trình độ học vấn thấp, chủ yếu làm việc tay chân.",
          "C. Luôn gắn bó với giai cấp địa chủ và tiểu thương.",
          "D. Không sở hữu tư liệu sản xuất, sống bằng lao động làm thuê.",
        ],
        answer: [0, 3],
        explanation:
          "Các đáp án đúng: A. Có tính tổ chức và kỷ luật cao trong lao động sản xuất.; D. Không sở hữu tư liệu sản xuất, sống bằng lao động làm thuê.",
      },
      {
        id: "b1_c15",
        type: "multiple_choice",
        question:
          "Trong thời kỳ thuộc địa, giai cấp công nhân Việt Nam chủ yếu làm việc trong: (Chọn 2 đáp án đúng)",
        options: [
          "A. Hợp tác xã nông nghiệp.",
          "B. Xí nghiệp thủ công truyền thống.",
          "C. Nhà máy, hầm mỏ do thực dân Pháp xây dựng.",
          "D. Đồn điền cao su.",
        ],
        answer: [2, 3],
        explanation:
          "Các đáp án đúng: C. Nhà máy, hầm mỏ do thực dân Pháp xây dựng.; D. Đồn điền cao su.",
      },
      {
        id: "b1_c16",
        type: "multiple_choice",
        question:
          "Phát kiến nào của C. Mác và Ph. Ăngghen chỉ ra những hạn chế có tính lịch sử của chủ nghĩa xã hội không tưởng?",
        options: [
          "A. Chủ nghĩa duy vật lịch sử.",
          "B. Chủ nghĩa duy vật biện chứng.",
          "C. Học thuyết về giá trị thặng dư.",
          "D. Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân.",
        ],
        answer: 3,
        explanation:
          "Đáp án đúng: D. Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân.",
      },
      {
        id: "b1_c17",
        type: "multiple_choice",
        question:
          "Phạm trù nào được coi là cơ bản nhất và là xuất phát điểm của chủ nghĩa xã hội khoa học?",
        options: [
          "A. Sứ mệnh lịch sử của giai cấp công nhân.",
          "B. Cách mạng xã hội chủ nghĩa.",
          "C. Giai cấp công nhân.",
          "D. Chuyên chính vô sản.",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Sứ mệnh lịch sử của giai cấp công nhân.",
      },
      {
        id: "b1_c18",
        type: "multiple_choice",
        question:
          'Tìm ý đúng để hoàn thiện luận điểm sau: "Cùng với sự phát triển của khoa học và công nghệ ngày càng hiện đại, giai cấp công nhân:"',
        options: [
          "A. Tăng về số lượng và nâng cao về chất lượng.",
          "B. Giảm về số lượng và có trình độ sản xuất ngày càng cao.",
          "C. Giảm về số lượng và nâng cao về chất lượng.",
          "D. Tăng về số lượng và giảm về chất lượng.",
        ],
        answer: 0,
        explanation:
          "Đáp án đúng: A. Tăng về số lượng và nâng cao về chất lượng.",
      },
      {
        id: "b1_c19",
        type: "multiple_choice",
        question:
          'Điền từ còn thiếu vào chỗ trống: "Giai cấp công nhân Việt Nam thực hiện lãnh đạo cách mạng thông qua đội tiên phong của nó là (...)."',
        options: [
          "A. Đảng Cộng sản Việt Nam.",
          "B. Tổng Liên đoàn Lao động Việt Nam.",
          "C. Mặt trận Tổ quốc Việt Nam.",
          "D. Tổ chức Công đoàn.",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Đảng Cộng sản Việt Nam.",
      },
      {
        id: "b1_c20",
        type: "multiple_choice",
        question:
          "Nội dung trực tiếp về văn hóa -- tư tưởng thể hiện sứ mệnh lịch sử của giai cấp công nhân Việt Nam là:",
        options: [
          "A. Xây dựng con người mới xã hội chủ nghĩa.",
          "B. Xây dựng nền giáo dục hiện đại.",
          "C. Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.",
          "D. Xây dựng hệ giá trị và con người Việt Nam.",
        ],
        answer: 2,
        explanation:
          "Đáp án đúng: C. Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.",
      },
      {
        id: "b1_c21",
        type: "multiple_choice",
        question:
          "Điều kiện chủ quan để giai cấp công nhân thực hiện được sứ mệnh lịch sử của mình là: (Chọn 2 đáp án đúng)",
        options: [
          "A. Sở hữu toàn bộ tư liệu sản xuất trong xã hội.",
          "B. Đảng Cộng sản.",
          "C. Không cần liên minh với các giai cấp, tầng lớp khác.",
          "D. Sự phát triển của bản thân giai cấp công nhân cả về số lượng và chất lượng.",
        ],
        answer: [1, 3],
        explanation:
          "Các đáp án đúng: B. Đảng Cộng sản.; D. Sự phát triển của bản thân giai cấp công nhân cả về số lượng và chất lượng.",
      },
      {
        id: "b1_c22",
        type: "multiple_choice",
        question: "Đặc điểm sứ mệnh lịch sử của giai cấp công nhân là:",
        options: [
          "A. Thay thế chế độ chiếm hữu nô lệ bằng chế độ xã hội chủ nghĩa.",
          "B. Thay thế chế độ công hữu này bằng một chế độ công hữu khác.",
          "C. Thay thế chế độ sở hữu tư nhân này bằng một chế độ sở hữu tư nhân khác.",
          "D. Xóa bỏ triệt để chế độ tư hữu về tư liệu sản xuất.",
        ],
        answer: 3,
        explanation:
          "Đáp án đúng: D. Xóa bỏ triệt để chế độ tư hữu về tư liệu sản xuất.",
      },
      {
        id: "b1_c23",
        type: "multiple_choice",
        question:
          "Theo C. Mác và Ph. Ăngghen thì đặc điểm nổi bật của giai cấp công nhân là: (Chọn 2 đáp án đúng)",
        options: [
          "A. Làm việc trong nông nghiệp, sử dụng công cụ thủ công.",
          "B. Có quyền sở hữu toàn bộ tư liệu sản xuất.",
          "C. Giai cấp cách mạng và có tinh thần cách mạng triệt để.",
          "D. Lao động bằng phương thức công nghiệp.",
        ],
        answer: [2, 3],
        explanation:
          "Các đáp án đúng: C. Giai cấp cách mạng và có tinh thần cách mạng triệt để.; D. Lao động bằng phương thức công nghiệp.",
      },
      {
        id: "b1_c24",
        type: "multiple_choice",
        question:
          "Giai cấp công nhân Việt Nam chủ yếu xuất thân từ tầng lớp nào? (Chọn 2 đáp án đúng)",
        options: [
          "A. Tầng lớp địa chủ phong kiến",
          "B. Giai cấp nông dân bị tước đoạt hết ruộng đất",
          "C. Thợ thủ công bị phá sản",
          "D. Tầng lớp tư sản dân tộc",
        ],
        answer: [1, 2],
        explanation:
          "Các đáp án đúng: B. Giai cấp nông dân bị tước đoạt hết ruộng đất; C. Thợ thủ công bị phá sản",
      },
      {
        id: "b1_c25",
        type: "multiple_choice",
        question:
          "Hạn chế cơ bản lớn nhất mà giai cấp công nhân Việt Nam hiện nay cần khắc phục là gì?",
        options: [
          "A. Trình độ khoa học kỹ thuật chưa cao.",
          "B. Hiệu quả lao động thấp.",
          "C. Số lượng còn ít.",
          "D. Tâm lý tiểu nông.",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Trình độ khoa học kỹ thuật chưa cao.",
      },
      {
        id: "b1_c26",
        type: "multiple_choice",
        question:
          "Trong các nội dung sau đây thì nội dung nào thuộc về giải pháp xây dựng giai cấp công nhân Việt Nam hiện nay?",
        options: [
          "A. Thực hiện tốt chính sách và pháp luật đối với công nhân và người lao động.",
          "B. Coi trọng và giữ vững bản chất giai cấp công nhân và nguyên tắc sinh hoạt Đảng.",
          "C. Thực hiện chiến lược xây dựng giai cấp công nhân lớn mạnh, gắn kết chặt chẽ với chiến lược phát triển kinh tế -- xã hội, công nghiệp hóa, hiện đại hóa đất nước, hội nhập quốc tế.",
          "D. Xây dựng giai cấp công nhân lớn mạnh, có giác ngộ giai cấp và chính trị vững vàng.",
        ],
        answer: 2,
        explanation:
          "Đáp án đúng: C. Thực hiện chiến lược xây dựng giai cấp công nhân lớn mạnh, gắn kết chặt chẽ với chiến lược phát triển kinh tế -- xã hội, công nghiệp hóa, hiện đại hóa đất nước, hội nhập quốc tế.",
      },
      {
        id: "b1_c27",
        type: "multiple_choice",
        question:
          "Vấn đề nổi bật đối với việc thực hiện sứ mệnh lịch sử của giai cấp công nhân Việt Nam hiện nay là gì?",
        options: [
          "A. Tham gia xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa.",
          "B. Nắm vững khoa học và công nghệ.",
          "C. Phát huy vai trò và trách nhiệm của lực lượng đi đầu trong sự nghiệp đẩy mạnh công nghệ hóa, hiện đại hóa đất nước",
          "D. Lực lượng chủ đạo trong lao động",
        ],
        answer: 2,
        explanation:
          "Đáp án đúng: C. Phát huy vai trò và trách nhiệm của lực lượng đi đầu trong sự nghiệp đẩy mạnh công nghệ hóa, hiện đại hóa đất nước",
      },
      {
        id: "b1_c28",
        type: "multiple_choice",
        question:
          'Theo Ph. Ăngghen: "Thực hiện nhiệm vụ giải phóng thế giới ấy, đó là sứ mệnh lịch sử của...". Hãy chọn đáp án đúng điền nào chỗ trống?',
        options: [
          "A. Giai cấp vô sản.",
          "B. Giai cấp nông dân.",
          "C. Giai cấp tiểu tư sản.",
          "D. Giai cấp tư sản.",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Giai cấp vô sản.",
      },
      {
        id: "b1_c29",
        type: "multiple_choice",
        question:
          "Dấu hiệu đánh dấu sự trưởng thành vượt bậc của giai cấp công nhân với tư cách là giai cấp cách mạng là:",
        options: [
          "A. Sự trưởng thành về trình độ nhận thức",
          "B. Sự ra đời của Đảng Cộng Sản",
          "C. Sự trưởng thành về trình độ kỹ thuật",
          "D. Sự trưởng thành về ý thức chính trị",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Sự ra đời của Đảng Cộng Sản",
      },
      {
        id: "b1_c30",
        type: "multiple_choice",
        question:
          "Giai cấp công nhân Việt Nam có đặc điểm gì khác với giai cấp công nhân ở các nước tư bản? (Chọn 2 đáp án đúng)",
        options: [
          "A. Xuất thân từ nông dân là chủ yếu",
          "B. Không có sự gắn kết với các giai cấp, tầng lớp khác",
          "C. Sỡ hữu tư liệu sản xuất trong xã hội",
          "D. Chịu sự bóc lột của thực dân và phong kiến",
        ],
        answer: [0, 3],
        explanation:
          "Các đáp án đúng: A. Xuất thân từ nông dân là chủ yếu; D. Chịu sự bóc lột của thực dân và phong kiến",
      },
      {
        id: "b1_c31",
        type: "multiple_choice",
        question:
          'Câu nói sau đây được viết trong tác phẩm nào: "Giai cấp tư sản, trong quá trình thống trị giai cấp chưa đầy một thế kỷ, đã tạo ra những lực lượng sản xuất nhiều hơn và đồ sộ hơn lực lượng sản xuất của tất cả các thế hệ trước gộp lại."',
        options: [
          "A. Bộ Tư bản",
          "B. Chống Đuyrinh",
          "C. Ba nguồn gốc và ba bộ phận cấu thành của chủ nghĩa Mác",
          "D. Tuyên ngôn của Đảng Cộng sản",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Tuyên ngôn của Đảng Cộng sản",
      },
      {
        id: "b1_c32",
        type: "drag_drop",
        question:
          "Kéo thả các đáp án khớp với các phát biểu từ 1--3 về trái dưới đây.",
        pairs: [
          {
            left: "Thực hiện sự nghiệp giải phóng thế giới ấy, đó là sứ mệnh lịch sử của ______ hiện đại.",
            right: "giai cấp công nhân",
          },
          {
            left: "Sứ mệnh lịch sử của giai cấp công nhân là ______ khỏi áp bức, bất công, bóc lột.",
            right: "giải phóng con người",
          },
          {
            left: "Giai cấp công nhân là ______ và có tinh thần cách mạng triệt để.",
            right: "giai cấp cách mạng",
          },
        ],
        explanation:
          "Đáp án đúng: Thực hiện sự nghiệp giải phóng thế giới ấy, đó là sứ mệnh lịch sử của ______ hiện đại. → giai cấp công nhân; Sứ mệnh lịch sử của giai cấp công nhân là ______ khỏi áp bức, bất công, bóc lột. → giải phóng con người; Giai cấp công nhân là ______ và có tinh thần cách mạng triệt để. → giai cấp cách mạng",
      },
      {
        id: "b1_c33",
        type: "drag_drop",
        question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau.",
        pairs: [
          {
            left: "Giai cấp công nhân là giai cấp cách mạng và có tinh thần cách mạng triệt để.",
            right: "Đúng",
          },
          {
            left: "Giai cấp công nhân là chủ thể của quá trình sản xuất vật chất hiện đại.",
            right: "Đúng",
          },
          {
            left: "Đặc điểm nổi bật của giai cấp công nhân là lao động bằng phương thức nông nghiệp.",
            right: "Sai",
          },
          {
            left: "Giai cấp công nhân là những người lao động trực tiếp hay gián tiếp vận hành các công cụ sản xuất có tính chất công nghiệp ngày càng hiện đại và xã hội hóa cao.",
            right: "Đúng",
          },
        ],
        explanation: "Đáp án đúng: 1. Đúng; 2. Đúng; 3. Sai; 4. Đúng",
      },
      {
        id: "b1_c34",
        type: "drag_drop",
        question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau.",
        pairs: [
          {
            left: "Giai cấp công nhân Việt Nam hiện nay đã tăng nhanh về số lượng và giảm về chất lượng.",
            right: "Sai",
          },
          {
            left: "Giai cấp công nhân Việt Nam là lực lượng nòng cốt của Đảng Cộng sản Việt Nam.",
            right: "Đúng",
          },
          {
            left: "Giai cấp công nhân phát huy vai trò và trách nhiệm của lực lượng đi đầu trong sự nghiệp đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước.",
            right: "Đúng",
          },
          {
            left: "Giai cấp công nhân Việt Nam gắn bó mật thiết với các tầng lớp nhân dân trong xã hội.",
            right: "Đúng",
          },
        ],
        explanation: "Đáp án đúng: 1. Sai; 2. Đúng; 3. Đúng; 4. Đúng",
      },
      {
        id: "b1_c35",
        type: "drag_drop",
        question:
          "Kéo thả các đáp án khớp với các phát biểu từ 1--3 về trái dưới đây.",
        pairs: [
          {
            left: "Giai cấp công nhân Việt Nam là lực lượng nòng cốt của ______ Việt Nam.",
            right: "Đảng Cộng sản",
          },
          {
            left: "Giai cấp công nhân Việt Nam gắn bó mật thiết với các ______ trong xã hội.",
            right: "tầng lớp nhân dân",
          },
          {
            left: "Giai cấp công nhân Việt Nam có mối quan hệ mật thiết với giai cấp nông dân và ______ trong xã hội.",
            right: "tầng lớp trí thức",
          },
        ],
        explanation:
          "Đáp án đúng: Giai cấp công nhân Việt Nam là lực lượng nòng cốt của ______ Việt Nam. → Đảng Cộng sản; Giai cấp công nhân Việt Nam gắn bó mật thiết với các ______ trong xã hội. → tầng lớp nhân dân; Giai cấp công nhân Việt Nam có mối quan hệ mật thiết với giai cấp nông dân và ______ trong xã hội. → tầng lớp trí thức",
      },
      {
        id: "b1_c36",
        type: "multiple_choice",
        question:
          "Nội dung sứ mệnh lịch sử của giai cấp công nhân Việt Nam hiện nay bao gồm: (Chọn 3 đáp án đúng)",
        options: [
          "A. Nội dung kinh tế",
          "B. Nội dung văn hóa, tư tưởng",
          "C. Nội dung chính trị - xã hội",
          "D. Nội dung lý luận",
        ],
        answer: [0, 1, 2],
        explanation:
          "Các đáp án đúng: A. Nội dung kinh tế; B. Nội dung văn hóa, tư tưởng; C. Nội dung chính trị - xã hội",
      },
      {
        id: "b1_c37",
        type: "multiple_choice",
        question:
          "Chủ nghĩa xã hội khoa học ra đời dựa trên cơ sở của những tiền đề nào? (Chọn nhiều đáp án)",
        options: [
          "A. Tiền đề tư tưởng lý luận",
          "B. Tiền đề khoa học lịch sử",
          "C. Tiền đề khoa học tự nhiên",
          "D. Tiền đề khoa học xã hội",
        ],
        answer: [0, 2],
        explanation:
          "Các đáp án đúng: A. Tiền đề tư tưởng lý luận; C. Tiền đề khoa học tự nhiên",
      },
      {
        id: "b1_c38",
        type: "drag_drop",
        question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
        pairs: [
          {
            left: "Giai cấp công nhân Việt Nam hiện nay đã tăng cả về số lượng và chất lượng.",
            right: "Đúng",
          },
          {
            left: "Giai cấp công nhân đại diện cho phương thức sản xuất tiên tiến và lực lượng sản xuất hiện đại.",
            right: "Đúng",
          },
          {
            left: "Đảng Cộng sản là nhân tố khách quan quan trọng nhất để giai cấp công nhân thực hiện thắng lợi sứ mệnh lịch sử của mình.",
            right: "Sai",
          },
          {
            left: "Sự trưởng thành của Đảng Cộng sản -- hạt nhân chính trị quan trọng của giai cấp công nhân.",
            right: "Đúng",
          },
        ],
        explanation: "Đáp án đúng: 1. Đúng; 2. Đúng; 3. Sai; 4. Đúng",
      },
      {
        id: "b1_c39",
        type: "drag_drop",
        question: "Kéo thả các yếu tố sau đây vào cột tương ứng",
        pairs: [
          {
            left: "Đảng Cộng sản",
            right:
              "Điều kiện chủ quan để giai cấp công nhân thực hiện được sứ mệnh lịch sử",
          },
          {
            left: "Sự phát triển của bản thân giai cấp công nhân cả về số lượng và chất lượng",
            right:
              "Điều kiện chủ quan để giai cấp công nhân thực hiện được sứ mệnh lịch sử",
          },
          {
            left: "Địa vị kinh tế của giai cấp công nhân",
            right:
              "Điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân",
          },
          {
            left: "Địa vị chính trị - xã hội của giai cấp công nhân",
            right:
              "Điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân",
          },
        ],
        explanation:
          "Đáp án đúng: Đảng Cộng sản → Điều kiện chủ quan để giai cấp công nhân thực hiện được sứ mệnh lịch sử; Sự phát triển của bản thân giai cấp công nhân cả về số lượng và chất lượng → Điều kiện chủ quan để giai cấp công nhân thực hiện được sứ mệnh lịch sử; Địa vị kinh tế của giai cấp công nhân → Điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân; Địa vị chính trị - xã hội của giai cấp công nhân → Điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân",
      },
      {
        id: "b1_c40",
        type: "drag_drop",
        question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
        pairs: [
          {
            left: "Giai cấp công nhân Việt Nam hiện nay đã tăng nhanh về số lượng và chất lượng",
            right: "Đúng",
          },
          {
            left: "Giai cấp công nhân Việt Nam là tăng lớp giàu có, ít chịu áp bức bóc lột.",
            right: "Sai",
          },
          {
            left: "Giai cấp công nhân Việt Nam hiện nay đa dạng về cơ cấu nghề nghiệp, có mặt trong mọi thành phần kinh tế",
            right: "Đúng",
          },
          {
            left: "Giai cấp công nhân Việt Nam không có sự liên kết với các lực lượng cách mạng khác",
            right: "Sai",
          },
        ],
        explanation: "Đáp án đúng: 1. Đúng; 2. Sai; 3. Đúng; 4. Sai",
      },
    ],
  },
  {
    id: 2,
    title: "Bài 2: Thời kỳ quá độ lên chủ nghĩa xã hội",
    questions: [
      {
        id: "b2_c1",
        type: "multiple_choice",
        question:
          "Theo C.Mác và Ph.Ăngghen thì giai đoạn đầu của hình thái kinh tế - xã hội cộng sản chủ nghĩa là gì?",
        options: [
          "A. Chủ nghĩa xã hội",
          "B. Thời kỳ quá độ.",
          "C. Cộng sản chủ nghĩa",
          "D. Chủ nghĩa cộng sản.",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Chủ nghĩa xã hội",
      },
      {
        id: "b2_c2",
        type: "multiple_choice",
        question:
          'Câu "Cần phải có thời kỳ quá độ khá lâu dài từ chủ nghĩa tư bản lên chủ nghĩa xã hội" là của ai?',
        options: ["A. Lênin", "B. C.Mác", "C. Heghen", "D. Ăngghen"],
        answer: 0,
        explanation: "Đáp án đúng: A. Lênin",
      },
      {
        id: "b2_c3",
        type: "multiple_choice",
        question: "Chủ nghĩa xã hội có mấy đặc trưng cơ bản?",
        options: ["A. 6", "B. 5", "C. 8", "D. 7"],
        answer: 0,
        explanation: "Đáp án đúng: A. 6",
      },
      {
        id: "b2_c4",
        type: "multiple_choice",
        question: "Đặc trưng về kinh tế của chủ nghĩa xã hội là gì?",
        options: [
          "A. Có nền kinh tế phát triển cao",
          "B. Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại",
          "C. Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ tư hữu về tư liệu sản xuất",
          "D. Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất",
        ],
        answer: 3,
        explanation:
          "Đáp án đúng: D. Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất",
      },
      {
        id: "b2_c5",
        type: "multiple_choice",
        question:
          "Nguyên nhân sâu xa dẫn đến sự thay thế hình thái kinh tế - xã hội tư bản chủ nghĩa bằng hình thái kinh tế - xã hội cộng sản chủ nghĩa là gì?",
        options: [
          "A. Mâu thuẫn giữa lực lượng sản xuất mang tính xã hội hoá ngày càng cao với quan hệ sản xuất tư bản chủ nghĩa dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất chủ yếu",
          "B. Mâu thuẫn giữa phương thức sản xuất tư bản chủ nghĩa và phương thức sản xuất xã hội chủ nghĩa dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất chủ yếu",
          "C. Mâu thuẫn giữa các giai cấp, tầng lớp trong xã hội dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất chủ yếu",
          "D. Mâu thuẫn giữa lực lượng sản xuất và tư liệu sản xuất dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa",
        ],
        answer: 0,
        explanation:
          "Đáp án đúng: A. Mâu thuẫn giữa lực lượng sản xuất mang tính xã hội hoá ngày càng cao với quan hệ sản xuất tư bản chủ nghĩa dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất chủ yếu",
      },
      {
        id: "b2_c6",
        type: "multiple_choice",
        question:
          "Theo quan điểm của chủ nghĩa Mác -- Lênin mốc bắt đầu của thời kỳ quá độ lên chủ nghĩa xã hội từ khi nào?",
        options: [
          "A. Khi giai cấp công nhân đấu tranh giành chính quyền",
          "B. Khi giai cấp công nhân và nhân dân lao động giành được chính quyền",
          "C. Khi giai cấp công nhân tiến hành cải tạo xã hội cũ và xây dựng xã hội mới",
          "D. Khi giai cấp công nhân và nhân dân lao động tiến hành cải tạo xã hội cũ",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Khi giai cấp công nhân và nhân dân lao động giành được chính quyền",
      },
      {
        id: "b2_c7",
        type: "multiple_choice",
        question:
          "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa ở nước ta, được hiểu là:",
        options: [
          "A. Bỏ qua việc xác lập vị trí thống trị của kiến trúc thượng tầng tư bản chủ nghĩa nhưng kế thừa những thành tựu mà nhân loại đã đạt được dưới chế độ tư bản chủ nghĩa",
          "B. Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất tư bản chủ nghĩa nhưng kế thừa những thành tựu mà nhân loại đã đạt được dưới chế độ tư bản chủ nghĩa",
          "C. Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa nhưng không kế thừa những thành tựu mà nhân loại đã đạt được dưới chế độ tư bản chủ nghĩa",
          "D. Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa, nhưng tiếp thu, kế thừa những thành tựu mà nhân loại đã đạt được dưới chế độ tư bản chủ nghĩa",
        ],
        answer: 3,
        explanation:
          "Đáp án đúng: D. Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa, nhưng tiếp thu, kế thừa những thành tựu mà nhân loại đã đạt được dưới chế độ tư bản chủ nghĩa",
      },
      {
        id: "b2_c8",
        type: "multiple_choice",
        question:
          "Kiểu quá độ lên chủ nghĩa xã hội ở Việt Nam là kiểu quá độ nào?",
        options: [
          "A. Quá độ trực tiếp",
          "B. Quá độ chủ quan",
          "C. Quá độ khách quan",
          "D. Quá độ gián tiếp",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Quá độ gián tiếp",
      },
      {
        id: "b2_c9",
        type: "multiple_choice",
        question:
          "Phát triển bỏ qua chế độ tư bản chủ nghĩa ở Việt Nam được hiểu như thế nào?",
        options: [
          "A. Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa",
          "B. Không xây dựng quan hệ sản xuất tư bản chủ nghĩa",
          "C. Bỏ qua các yếu tố gắn với phương thức sản xuất tư bản chủ nghĩa",
          "D. Bỏ qua sự phát triển của lực lượng sản xuất tư bản chủ nghĩa",
        ],
        answer: 0,
        explanation:
          "Đáp án đúng: A. Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa",
      },
      {
        id: "b2_c10",
        type: "multiple_choice",
        question:
          "Chọn từ đúng điền vào chỗ trống để hoàn thành mục tiêu của Đảng xác định trong thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta: Độc lập dân tộc gắn liền với chủ nghĩa xã hội; dân giàu, nước mạnh, dân chủ, ...., văn minh",
        options: [
          "A. Bình đẳng",
          "B. Phát triển",
          "C. Tiến bộ",
          "D. Công bằng",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Công bằng",
      },
      {
        id: "b2_c11",
        type: "multiple_choice",
        question:
          "Tìm đáp án sai. Đặc trưng bản chất của chủ nghĩa xã hội Việt Nam theo tinh thần của Đại hội XI",
        options: [
          "A. Có quan hệ hữu nghị và hợp tác với các nước trên thế giới",
          "B. Có nền văn hóa tiên tiến đậm đà bản sắc dân tộc",
          "C. Quyền lực thuộc về giai cấp công nhân.",
          "D. Con người có cuộc sống ấm no, tự do, hạnh phúc, có điều kiện phát triển toàn diện",
        ],
        answer: 2,
        explanation: "Đáp án đúng: C. Quyền lực thuộc về giai cấp công nhân.",
      },
      {
        id: "b2_c12",
        type: "multiple_choice",
        question:
          'Trong cuốn sách "Một số vấn đề lý luận và thực tiễn về chủ nghĩa xã hội và con đường đi lên chủ nghĩa xã hội ở Việt Nam", Tổng Bí thư Nguyễn Phú Trọng khẳng định: đường lối cơ bản, xuyên suốt của cách mạng Việt Nam và cũng là điểm cốt yếu trong di sản tư tưởng của Chủ tịch Hồ Chí Minh là:',
        options: [
          "A. Phát triển kinh tế thị trường định hướng xã hội chủ nghĩa",
          "B. Độc lập dân tộc gắn liền với chủ nghĩa xã hội",
          "C. Chủ nghĩa xã hội và giải phóng giai cấp vô sản",
          "D. Độc lập dân tộc gắn liền với hội nhập kinh tế quốc tế",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Độc lập dân tộc gắn liền với chủ nghĩa xã hội",
      },
      {
        id: "b2_c13",
        type: "drag_drop",
        question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
        pairs: [
          {
            left: "Trong thời kỳ quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội tồn tại nền kinh tế nhiều thành phần",
            right: "Đúng",
          },
          {
            left: "Trong thời kỳ quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội tồn tại nhiều giai cấp, tầng lớp",
            right: "Đúng",
          },
          {
            left: "Đặc điểm cơ bản của thời kỳ quá độ lên chủ nghĩa xã hội là thời kỳ cải tạo cách mạng sâu sắc, triệt để trên lĩnh vực kinh tế",
            right: "Sai",
          },
          {
            left: "Trong thời kỳ quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội tồn tại chủ yếu là tư tưởng vô sản",
            right: "Sai",
          },
        ],
        explanation: "Đáp án đúng: 1. Đúng; 2. Đúng; 3. Sai; 4. Sai",
      },
      {
        id: "b2_c14",
        type: "drag_drop",
        question:
          "Ghép nối các đáp án khớp với các phát biểu từ 1 -- 3 dưới đây:",
        pairs: [
          {
            left: "_____ từ chủ nghĩa tư bản lên chủ nghĩa cộng sản đối với những nước đã trải qua chủ nghĩa tư bản phát triển.",
            right: "Quá độ trực tiếp",
          },
          {
            left: "_____ từ chủ nghĩa tư bản lên chủ nghĩa cộng sản đối với những nước chưa trải qua chủ nghĩa tư bản phát triển.",
            right: "Quá độ gián tiếp",
          },
          {
            left: "Thực chất của _____ lên chủ nghĩa xã hội là thời kỳ cải biến cách mạng từ xã hội tiền tư bản chủ nghĩa và tư bản chủ nghĩa sang xã hội xã hội chủ nghĩa.",
            right: "thời kỳ quá độ",
          },
        ],
        explanation:
          "Đáp án đúng: _____ từ chủ nghĩa tư bản lên chủ nghĩa cộng sản đối với những nước đã trải qua chủ nghĩa tư bản phát triển. → Quá độ trực tiếp; _____ từ chủ nghĩa tư bản lên chủ nghĩa cộng sản đối với những nước chưa trải qua chủ nghĩa tư bản phát triển. → Quá độ gián tiếp; Thực chất của _____ lên chủ nghĩa xã hội là thời kỳ cải biến cách mạng từ xã hội tiền tư bản chủ nghĩa và tư bản chủ nghĩa sang xã hội xã hội chủ nghĩa. → thời kỳ quá độ",
      },
      {
        id: "b2_c15",
        type: "drag_drop",
        question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
        pairs: [
          {
            left: "Trong thời kỳ quá độ lên chủ nghĩa xã hội tồn tại nhiều thành phần kinh tế",
            right: "Đúng",
          },
          {
            left: "Trong thời kỳ quá độ lên chủ nghĩa xã hội kinh tế tư nhân bị xóa bỏ hoàn toàn",
            right: "Sai",
          },
          {
            left: "Thời kỳ quá độ lên chủ nghĩa xã hội chỉ có kinh tế nhà nước tồn tại và phát triển",
            right: "Sai",
          },
          {
            left: "Thời kỳ quá độ lên chủ nghĩa xã hội có sự tồn tại song song giữa các yếu tố cũ và yếu tố mới",
            right: "Đúng",
          },
        ],
        explanation: "Đáp án đúng: 1. Đúng; 2. Sai; 3. Sai; 4. Đúng",
      },
      {
        id: "b2_c16",
        type: "multiple_choice",
        question:
          "Đặc điểm nổi bật của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là gì? (Chọn 2 đáp án đúng)",
        options: [
          "A. Từ một nền sản xuất nhỏ tiến lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa",
          "B. Có sự lãnh đạo của Đảng Cộng sản Việt Nam",
          "C. Xây dựng nhà nước pháp quyền tư sản",
          "D. Phát triển chủ nghĩa tư bản trong thời gian ngắn để tích lũy",
        ],
        answer: [0, 1],
        explanation:
          "Các đáp án đúng: A. Từ một nền sản xuất nhỏ tiến lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa; B. Có sự lãnh đạo của Đảng Cộng sản Việt Nam",
      },
      {
        id: "b2_c17",
        type: "multiple_choice",
        question:
          "Hình thái kinh tế - xã hội cộng sản chủ nghĩa bắt đầu và hoàn thiện khi nào?",
        options: [
          "A. Bắt đầu từ khi Đảng cộng sản ra đời và xây dựng xong chủ nghĩa xã hội.",
          "B. Bắt đầu từ thời kỳ quá độ và hoàn thiện ở giai đoạn thấp của xã hội cộng sản.",
          "C. Bắt đầu từ giai đoạn thấp của xã hội cộng sản và hoàn thiện ở giai đoạn cao của xã hội cộng sản.",
          "D. Bắt đầu từ thời kỳ quá độ cho đến khi xây dựng xong giai đoạn cao của xã hội cộng sản",
        ],
        answer: 3,
        explanation:
          "Đáp án đúng: D. Bắt đầu từ thời kỳ quá độ cho đến khi xây dựng xong giai đoạn cao của xã hội cộng sản",
      },
      {
        id: "b2_c18",
        type: "multiple_choice",
        question:
          'Chọn cụm từ còn thiếu điền vào dấu ...: "Giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa là một thời kỳ.....từ xã hội nọ sang xã hội kia" (C.Mác)',
        options: [
          "A. Đột phá cách mạng",
          "B. Cải biến cách mạng",
          "C. Cách mạng",
          "D. Quá độ",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Cải biến cách mạng",
      },
      {
        id: "b2_c19",
        type: "multiple_choice",
        question:
          "Đặc điểm của thời kỳ quá độ lên chủ nghĩa xã hội trên lĩnh vực kinh tế là gì?",
        options: [
          "A. Tồn tại nhiều thành phần kinh tế",
          "B. Tồn tại giai cấp đối kháng",
          "C. Tồn tại nhiều tàn dư văn hóa của chế độ cũ",
          "D. Tồn tại đấu tranh giai cấp",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Tồn tại nhiều thành phần kinh tế",
      },
      {
        id: "b2_c20",
        type: "multiple_choice",
        question: "Hãy chỉ ra luận điểm không chính xác:",
        options: [
          "A. Nhà nước trong thời kỳ quá độ lên chủ nghĩa xã hội là nền chuyên chính cách mạng của giai cấp công nhân",
          "B. Trong thời kỳ quá độ lên chủ nghĩa xã hội có thể và cần phải thủ tiêu mọi tàn tích của chủ nghĩa tư bản",
          "C. Giữa xã hội tư bản chủ nghĩa và xã hội xã hội chủ nghĩa là thời kỳ cải biến cách mạng lâu dài và phức tạp",
          "D. Trong thời kỳ quá độ lên chủ nghĩa xã hội còn tồn tại nhiều tư tưởng -- văn hoá cũ và mới đan xen, đấu tranh với nhau",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Trong thời kỳ quá độ lên chủ nghĩa xã hội có thể và cần phải thủ tiêu mọi tàn tích của chủ nghĩa tư bản",
      },
      {
        id: "b2_c21",
        type: "multiple_choice",
        question: "Chọn phương án sai",
        options: [
          "A. Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa nhưng có sự tiếp thu, kế thừa toàn bộ các lĩnh vực đã tạo ra dưới chế độ tư bản chủ nghĩa",
          "B. Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa tức là bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa",
          "C. Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là con đường cách mạng tất yếu chủ quan, con đường xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội",
          "D. Con đường đi lên chủ nghĩa xã hội của nước ta là sự phát triển quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa",
        ],
        answer: 2,
        explanation:
          "Đáp án đúng: C. Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là con đường cách mạng tất yếu chủ quan, con đường xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội",
      },
      {
        id: "b2_c22",
        type: "multiple_choice",
        question:
          "Thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là bước quá độ:",
        options: [
          "A. Gián tiếp, bỏ qua chế độ phong kiến tiến lên chế độ xã hội chủ nghĩa",
          "B. Gián tiếp, bỏ qua chế độ tư bản chủ nghĩa tiến lên chủ nghĩa xã hội",
          "C. Trực tiếp, từ chế độ phong kiến tiến lên chế độ xã hội chủ nghĩa.",
          "D. Trực tiếp, từ chế độ tư bản chủ nghĩa lên chế độ xã hội chủ nghĩa",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Gián tiếp, bỏ qua chế độ tư bản chủ nghĩa tiến lên chủ nghĩa xã hội",
      },
      {
        id: "b2_c23",
        type: "multiple_choice",
        question:
          "Về nội dung, thời kỳ quá độ lên chủ nghĩa xã hội là thời kỳ cải tạo cách mạng sâu sắc, triệt để xã hội tư bản chủ nghĩa trên các lĩnh vực:",
        options: [
          "A. Chủ yếu về văn hóa",
          "B. Chủ yếu về chính trị",
          "C. Kinh tế, chính trị, văn hóa, xã hội",
          "D. Chủ yếu là chính trị.",
        ],
        answer: 2,
        explanation: "Đáp án đúng: C. Kinh tế, chính trị, văn hóa, xã hội",
      },
      {
        id: "b2_c24",
        type: "multiple_choice",
        question: "Đặc điểm nổi bật của thời kỳ quá độ đó là:",
        options: [
          "A. Những nhân tố của xã hội mới và những tàn tích của xã hội cũ tồn tại đan xem lẫn nhau, đấu tranh với nhau trên mọi lĩnh vực.",
          "B. Tàn dư của xã hội cũ còn tồn tại",
          "C. Những yếu tố của xã hội mới đã phát triển, xoá bỏ hoàn toàn yếu tố của xã hội cũ.",
          "D. Toàn bộ các yếu tố của xã hội bị triệt tiêu.",
        ],
        answer: 0,
        explanation:
          "Đáp án đúng: A. Những nhân tố của xã hội mới và những tàn tích của xã hội cũ tồn tại đan xem lẫn nhau, đấu tranh với nhau trên mọi lĩnh vực.",
      },
      {
        id: "b2_c25",
        type: "multiple_choice",
        question:
          "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (Bổ sung và phát triển năm 2011) được Đảng ta thông qua ở đại hội lần thứ mấy?",
        options: [
          "A. Đại hội X",
          "B. Đại hội XI",
          "C. Đại hội XII",
          "D. Đại hội IX",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Đại hội XI",
      },
      {
        id: "b2_c26",
        type: "multiple_choice",
        question:
          "Đặc điểm về chính trị trong thời kỳ quá độ được thể hiện ở điểm nào? (Chọn 2 đáp án đúng)",
        options: [
          "A. Xây dựng nền dân chủ xã hội chủ nghĩa",
          "B. Đa nguyên chính trị, đa đảng đối lập",
          "C. Hoàn toàn không còn vai trò của nhà nước",
          "D. Thiết lập chuyên chính vô sản",
        ],
        answer: [0, 3],
        explanation:
          "Các đáp án đúng: A. Xây dựng nền dân chủ xã hội chủ nghĩa; D. Thiết lập chuyên chính vô sản",
      },
      {
        id: "b2_c27",
        type: "drag_drop",
        question: "Phần câu hỏi Đúng / Sai :",
        pairs: [
          {
            left: 'Việc "bỏ qua" chế độ tư bản chủ nghĩa là không kế thừa bất kỳ yếu tố tích cực nào của chủ nghĩa tư bản',
            right: "Sai",
          },
          {
            left: "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam là nhà nước của nhân dân, do nhân dân, vì nhân dân",
            right: "Đúng",
          },
          {
            left: "Chủ nghĩa xã hội ở Việt Nam không chấp nhận kinh tế tư nhân tồn tại song song với kinh tế nhà nước",
            right: "Sai",
          },
          {
            left: "Việt Nam quá độ lên chủ nghĩa xã hội từ một nền sản xuất nhỏ, bỏ qua chế độ tư bản chủ nghĩa",
            right: "Đúng",
          },
        ],
        explanation: "Đáp án đúng: 1. Sai; 2. Đúng; 3. Sai; 4. Đúng",
      },
      {
        id: "b2_c28",
        type: "drag_drop",
        question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
        pairs: [
          {
            left: "Học thuyết hình thái kinh tế- xã hội của chủ nghĩa Mác- Lênin đã chỉ rõ: Lịch sử xã hội đã trải qua 4 hình thái kinh tế- xã hội",
            right: "Sai",
          },
          {
            left: "Quá độ gián tiếp từ chủ nghĩa tư bản lên chủ nghĩa cộng sản đối với những nước chưa trải qua chủ nghĩa tư bản phát triển",
            right: "Đúng",
          },
          {
            left: "Thực chất của thời kỳ quá độ lên chủ nghĩa xã hội là thời kỳ cải biến cách mạng từ xã hội tiền tư bản chủ nghĩa và tư bản chủ nghĩa sang xã hội xã hội chủ nghĩa",
            right: "Đúng",
          },
          {
            left: "Quá độ trực tiếp từ chủ nghĩa tư bản lên chủ nghĩa cộng sản đối với những nước đã trải qua chủ nghĩa tư bản phát triển",
            right: "Đúng",
          },
        ],
        explanation: "Đáp án đúng: 1. Sai; 2. Đúng; 3. Đúng; 4. Đúng",
      },
      {
        id: "b2_c29",
        type: "multiple_choice",
        question:
          "Tại sao cho rằng con đường cách mạng Việt Nam là quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là một tất yếu?",
        options: [
          "A. Vì sự phát triển của lực lượng sản xuất ngày càng cao.",
          "B. Vì không cần tạo ra sự biến đổi về chất trên tất cả các lĩnh vực.",
          "C. Vì không cần tiếp thu thành tựu khoa học, kỹ thuật dưới chế độ tư bản chủ nghĩa.",
          "D. Vì nó phù hợp với đặc điểm của đất nước và xu thế phát triển của thời đại.",
        ],
        answer: 3,
        explanation:
          "Đáp án đúng: D. Vì nó phù hợp với đặc điểm của đất nước và xu thế phát triển của thời đại.",
      },
      {
        id: "b2_c30",
        type: "multiple_choice",
        question:
          "Căn cứ vào giáo trình Chủ nghĩa xã hội khoa học, hãy xác định khái niệm dùng để chỉ một chế độ xã hội tốt đẹp, giai đoạn đầu của hình thái kinh tế - xã hội cộng sản chủ nghĩa.",
        options: [
          "A. Thời kỳ quá độ.",
          "B. Chủ nghĩa xã hội.",
          "C. Thời kỳ quá độ lên chủ nghĩa xã hội.",
          "D. Chủ nghĩa cộng sản.",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Chủ nghĩa xã hội.",
      },
      {
        id: "b2_c31",
        type: "multiple_choice",
        question:
          "Hai loại quá độ từ chủ nghĩa tư bản lên chủ nghĩa cộng sản đó là: (Chọn nhiều đáp án)",
        options: [
          "A. Quá độ gián tiếp.",
          "B. Quá độ không cơ bản.",
          "C. Quá độ trực tiếp.",
          "D. Quá độ cơ bản.",
        ],
        answer: [0, 2],
        explanation:
          "Các đáp án đúng: A. Quá độ gián tiếp.; C. Quá độ trực tiếp.",
      },
      {
        id: "b2_c32",
        type: "multiple_choice",
        question:
          "Đặc điểm về kinh tế của thời kỳ quá độ lên chủ nghĩa xã hội gồm: (Chọn 2 đáp án đúng)",
        options: [
          "A. Tồn tại nền kinh tế nhiều thành phần.",
          "B. Chỉ có kinh tế nhà nước tồn tại và phát triển.",
          "C. Hoàn toàn không còn kinh tế tư nhân.",
          "D. Có những thành phần kinh tế đối lập nhau.",
        ],
        answer: [0, 3],
        explanation:
          "Các đáp án đúng: A. Tồn tại nền kinh tế nhiều thành phần.; D. Có những thành phần kinh tế đối lập nhau.",
      },
      {
        id: "b2_c33",
        type: "multiple_choice",
        question:
          'Việc "bỏ qua chế độ tư bản chủ nghĩa" ở Việt Nam có nghĩa là: (Chọn 2 đáp án đúng)',
        options: [
          "A. Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa.",
          "B. Tăng cường sở hữu tư nhân để phát triển lực lượng sản xuất.",
          "C. Tiếp thu, kế thừa những thành tựu nhân loại đã đạt được dưới chủ nghĩa tư bản.",
          "D. Loại bỏ hoàn toàn tất cả yếu tố tư bản trong nền kinh tế.",
        ],
        answer: [0, 2],
        explanation:
          "Các đáp án đúng: A. Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa.; C. Tiếp thu, kế thừa những thành tựu nhân loại đã đạt được dưới chủ nghĩa tư bản.",
      },
      {
        id: "b2_c34",
        type: "drag_drop",
        question: "Kéo thả các đáp án khớp với các phát biểu từ 1 -- 3:",
        pairs: [
          {
            left: "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là con đường cách mạng ______.",
            right: "Tất yếu khách quan",
          },
          {
            left: "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa, tức là bỏ qua việc xác lập ______ của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa.",
            right: "Vị trí thống trị",
          },
          {
            left: "Việt Nam thực hiện ______ đi lên chủ nghĩa xã hội.",
            right: "Quá độ gián tiếp",
          },
        ],
        explanation:
          "Đáp án đúng: Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là con đường cách mạng ______. → Tất yếu khách quan; Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa, tức là bỏ qua việc xác lập ______ của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa. → Vị trí thống trị; Việt Nam thực hiện ______ đi lên chủ nghĩa xã hội. → Quá độ gián tiếp",
      },
      {
        id: "b2_c35",
        type: "multiple_choice",
        question:
          "Cuộc cách mạng của giai cấp công nhân và nhân dân lao động dưới sự lãnh đạo của Đảng cộng sản chống lại giai cấp tư sản, là cuộc cách mạng:",
        options: [
          "A. Cách mạng tư sản.",
          "B. Cách mạng dân chủ tư sản.",
          "C. Cách mạng xã hội.",
          "D. Cách mạng vô sản.",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Cách mạng vô sản.",
      },
      {
        id: "b2_c36",
        type: "multiple_choice",
        question:
          "Thời kỳ quá độ lên chủ nghĩa xã hội có những mâu thuẫn nào cần giải quyết? (Chọn 2 đáp án đúng)",
        options: [
          "A. Mâu thuẫn giữa các tầng lớp lao động và tư sản hoàn toàn biến mất.",
          "B. Mâu thuẫn giữa các thành phần kinh tế khác nhau trong xã hội.",
          "C. Mâu thuẫn giữa năng suất lao động và nhu cầu phát triển xã hội.",
          "D. Mâu thuẫn giữa cái cũ và cái mới trong xã hội.",
        ],
        answer: [1, 3],
        explanation:
          "Các đáp án đúng: B. Mâu thuẫn giữa các thành phần kinh tế khác nhau trong xã hội.; D. Mâu thuẫn giữa cái cũ và cái mới trong xã hội.",
      },
      {
        id: "b2_c37",
        type: "multiple_choice",
        question:
          "Đặc điểm cơ bản của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là gì? (Chọn 2 đáp án đúng)",
        options: [
          "A. Xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa.",
          "B. Bỏ qua chế độ phong kiến.",
          "C. Chuyển thẳng từ chế độ phong kiến lên chủ nghĩa xã hội.",
          "D. Bỏ qua chế độ tư bản chủ nghĩa.",
        ],
        answer: [0, 3],
        explanation:
          "Các đáp án đúng: A. Xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa.; D. Bỏ qua chế độ tư bản chủ nghĩa.",
      },
      {
        id: "b2_c38",
        type: "drag_drop",
        question: "Kéo thả các đáp án khớp với các phát biểu từ 1 -- 3:",
        pairs: [
          {
            left: "Việt Nam xây dựng nền ______ có sự điều tiết của nhà nước.",
            right: "Kinh tế thị trường",
          },
          {
            left: "Một đặc trưng chính trị của chủ nghĩa xã hội là xây dựng ______ xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân.",
            right: "Nhà nước pháp quyền",
          },
          {
            left: "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam tôn trọng, bảo vệ và bảo đảm ______.",
            right: "Quyền con người",
          },
        ],
        explanation:
          "Đáp án đúng: Việt Nam xây dựng nền ______ có sự điều tiết của nhà nước. → Kinh tế thị trường; Một đặc trưng chính trị của chủ nghĩa xã hội là xây dựng ______ xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân. → Nhà nước pháp quyền; Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam tôn trọng, bảo vệ và bảo đảm ______. → Quyền con người",
      },
      {
        id: "b2_c39",
        type: "drag_drop",
        question: "Chọn đáp án (Đùng hoặc Sai) với từng phát biểu sau:",
        pairs: [
          {
            left: "Việt Nam thực hiện quá độ trực tiếp đi lên chủ nghĩa xã hội",
            right: "Sai",
          },
          {
            left: "Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa là một trong những phương hưởng xây dựng chủ nghĩa xã hội ở Việt Nam",
            right: "Đúng",
          },
          {
            left: "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là sự lựa chọn duy nhất đúng, khoa học, phản ánh đúng quy luật phát triển khách quan của cách mạng Việt Nam trong thời đại ngày nay",
            right: "Đúng",
          },
          {
            left: "Chủ nghĩa xã hội ở Việt Nam không bao gồm việc xây dựng nền kinh tế thị trường",
            right: "Sai",
          },
        ],
        explanation: "Đáp án đúng: 1. Sai; 2. Đúng; 3. Đúng; 4. Sai",
      },
    ],
  },
  {
    id: 3,
    title:
      "Bài 3: Dân chủ xã hội chủ nghĩa và Nhà nước pháp quyền xã hội chủ nghĩa",
    questions: [
      {
        id: "b3_c1",
        type: "multiple_choice",
        question: "Bản chất kinh tế của nền dân chủ xã hội chủ nghĩa là:",
        options: [
          'A. Thực hiện chế độ phân phối "Làm theo năng lực, hưởng theo nhu cầu"',
          "B. Thực hiện chế độ tư hữu về công cụ sản xuất chủ yếu",
          "C. Thực hiện chế độ công hữu về tư liệu sản xuất chủ yếu và thực hiện chế độ phân phối lợi ích theo kết quả lao động là chủ yếu",
          "D. Thực hiện chế độ tư hữu về tư liệu sản xuất",
        ],
        answer: 2,
        explanation:
          "Đáp án đúng: C. Thực hiện chế độ công hữu về tư liệu sản xuất chủ yếu và thực hiện chế độ phân phối lợi ích theo kết quả lao động là chủ yếu",
      },
      {
        id: "b3_c2",
        type: "multiple_choice",
        question:
          "Sự ra đời của nhà nước xã hội chủ nghĩa gắn với sự kiện nào?",
        options: [
          "A. Giai cấp công nhân xây dựng xong CNXH",
          "B. Giai cấp công nhân lật đổ nhà nước của giai cấp bóc lột, giành được chính quyền",
          "C. Giai cấp công nhân đấu tranh phản đối tình trạng áp bức bóc lột của giai cấp tư sản",
          "D. Giai cấp công nhân đấu tranh đòi tăng lương, giảm giờ làm, cải thiện điều kiện lao động",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Giai cấp công nhân lật đổ nhà nước của giai cấp bóc lột, giành được chính quyền",
      },
      {
        id: "b3_c3",
        type: "multiple_choice",
        question:
          "Nhà nước pháp quyền XHCN quản lý mọi mặt của đời sống xã hội chủ yếu bằng gì?",
        options: [
          "A. Giáo dục.",
          "B. Hiến pháp, pháp luật",
          "C. Đường lối, chính sách",
          "D. Tuyên truyền",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Hiến pháp, pháp luật",
      },
      {
        id: "b3_c4",
        type: "multiple_choice",
        question:
          "Tại sao quyền lực nhà nước ở Việt Nam được tổ chức theo nguyên tắc thống nhất?",
        options: [
          "A. Để đảm bảo sự phối hợp và kiểm soát giữa các cơ quan lập pháp, hành pháp và tư pháp",
          "B. Để kiểm soát chặt chẽ các hoạt động kinh tế",
          "C. Để giảm thiểu vai trò của các tổ chức phi chính phủ",
          "D. Để tăng cường sự kiểm soát của nhà nước",
        ],
        answer: 0,
        explanation:
          "Đáp án đúng: A. Để đảm bảo sự phối hợp và kiểm soát giữa các cơ quan lập pháp, hành pháp và tư pháp",
      },
      {
        id: "b3_c5",
        type: "multiple_choice",
        question:
          "Đặc điểm nổi bật của nền dân chủ xã hội chủ nghĩa là gì? (Chọn 2 đáp án đúng)",
        options: [
          "A. Đặt quyền lợi của nhân dân lao động lên hàng đầu",
          "B. Thực hiện quyền làm chủ tập thể của nhân dân",
          "C. Tôn trọng quyền sở hữu tư nhân tuyệt đối",
          "D. Phân biệt rõ ràng giữa các tầng lớp xã hội",
        ],
        answer: [0, 1],
        explanation:
          "Các đáp án đúng: A. Đặt quyền lợi của nhân dân lao động lên hàng đầu; B. Thực hiện quyền làm chủ tập thể của nhân dân",
      },
      {
        id: "b3_c6",
        type: "multiple_choice",
        question: 'Theo nguyên nghĩa tiếng Hy Lạp thì "Dân chủ" là gì?',
        options: [
          "A. Là quyền lực thuộc về nhân dân",
          "B. Là quyền tự do của mỗi người",
          "C. Là quyền của con người",
          "D. Là trật tự xã hội",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Là quyền lực thuộc về nhân dân",
      },
      {
        id: "b3_c7",
        type: "multiple_choice",
        question:
          "Bản chất chính trị của nền dân chủ xã hội chủ nghĩa thể hiện như thế nào?",
        options: [
          "A. Nhà nước chủ yếu thực hiện các quyết định chính trị mà không cần sự đồng thuận hoặc tham gia của người dân.",
          "B. Nền dân chủ tập trung vào phát triển kinh tế tư nhân và bảo vệ lợi ích của tầng lớp giàu có.",
          "C. Quyền lực và lợi ích thuộc về toàn thể nhân dân lao động, trong đó có giai cấp công nhân, dưới sự lãnh đạo của Đảng Cộng sản",
          "D. Quyền lực thuộc về một cá nhân duy nhất, không có sự tham gia của quần chúng nhân dân.",
        ],
        answer: 2,
        explanation:
          "Đáp án đúng: C. Quyền lực và lợi ích thuộc về toàn thể nhân dân lao động, trong đó có giai cấp công nhân, dưới sự lãnh đạo của Đảng Cộng sản",
      },
      {
        id: "b3_c8",
        type: "multiple_choice",
        question:
          "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam được xây dựng dựa trên những nguyên tắc nào sau đây? (Chọn 2 đáp án đúng)",
        options: [
          "A. Đảng lãnh đạo nhà nước theo phương thức mệnh lệnh",
          "B. Nhà nước quản lý xã hội bằng hiến pháp, pháp luật",
          "C. Quyền lực nhà nước là tối cao, không cần kiểm soát",
          "D. Quyền lực nhà nước thống nhất, có phân công, phối hợp và kiểm soát",
        ],
        answer: [1, 3],
        explanation:
          "Các đáp án đúng: B. Nhà nước quản lý xã hội bằng hiến pháp, pháp luật; D. Quyền lực nhà nước thống nhất, có phân công, phối hợp và kiểm soát",
      },
      {
        id: "b3_c9",
        type: "multiple_choice",
        question:
          "Bằng hiểu biết của bản thân, hãy cho biết đâu là hình thức dân chủ gián tiếp?",
        options: [
          "A. Người dân bầu ra đại diện của mình để thay mặt họ quyết định các vấn đề quan trọng trong quốc hội hoặc cơ quan lập pháp",
          "B. Người dân tham gia trực tiếp vào các cuộc trưng cầu dân ý về các chính sách hoặc luật pháp cụ thể.",
          "C. Người dân tự tổ chức các phong trào xã hội để yêu cầu các quyền lợi mà không thông qua bất kỳ đại diện nào",
          "D. Người dân trực tiếp tham gia bỏ phiếu để quyết định các vấn đề quan trọng của đất nước.",
        ],
        answer: 0,
        explanation:
          "Đáp án đúng: A. Người dân bầu ra đại diện của mình để thay mặt họ quyết định các vấn đề quan trọng trong quốc hội hoặc cơ quan lập pháp",
      },
      {
        id: "b3_c10",
        type: "multiple_choice",
        question:
          "Dân chủ xã hội chủ nghĩa mang tính nhất nguyên về chính trị, được hiểu là:",
        options: [
          "A. Nền dân chủ xã hội chủ nghĩa đại biểu cho trí tuệ, lợi ích của riêng giai cấp công nhân và giai cấp nông dân",
          "B. Nền dân chủ xã hội chủ nghĩa do Đảng Cộng sản lãnh đạo -- đại biểu cho trí tuệ, lợi ích của giai cấp công nhân, nhân dân lao động và toàn dân tộc",
          "C. Nền dân chủ xã hội chủ nghĩa đại biểu cho trí tuệ, lợi ích của riêng giai cấp công nhân và tầng lớp trí thức",
          "D. Nền dân chủ xã hội chủ nghĩa đại biểu cho trí tuệ, lợi ích của riêng giai cấp công nhân và nhân dân lao động",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Nền dân chủ xã hội chủ nghĩa do Đảng Cộng sản lãnh đạo -- đại biểu cho trí tuệ, lợi ích của giai cấp công nhân, nhân dân lao động và toàn dân tộc",
      },
      {
        id: "b3_c11",
        type: "multiple_choice",
        question:
          "Căn cứ vào phạm vi tác động của quyền lực nhà nước, chức năng của nhà nước được chia thành:",
        options: [
          "A. Chức năng chính trị, kinh tế, văn hóa, xã hội",
          "B. Chức năng đối nội và chức năng đối ngoại",
          "C. Chức năng trấn áp và chức năng tổ chức, xây dựng",
          "D. Chức năng giai cấp, xã hội",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Chức năng đối nội và chức năng đối ngoại",
      },
      {
        id: "b3_c12",
        type: "multiple_choice",
        question:
          "So với các mô hình nhà nước khác trong lịch sử thì nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam có sự khác biệt về chất như thế nào?",
        options: [
          "A. Vừa mang bản chất của giai cấp công nhân và nhân dân lao động",
          "B. Mang bản chất của đa số nhân dân lao động",
          "C. Mang bản chất của giai cấp công nhân",
          "D. Mang bản chất của giai cấp công nhân, tính nhân dân rộng rãi và tính dân tộc sâu sắc",
        ],
        answer: 3,
        explanation:
          "Đáp án đúng: D. Mang bản chất của giai cấp công nhân, tính nhân dân rộng rãi và tính dân tộc sâu sắc",
      },
      {
        id: "b3_c13",
        type: "multiple_choice",
        question:
          "Hãy xác định biện pháp để nâng cao hiệu quả hoạt động của Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam.",
        options: [
          "A. Giảm thiểu sự can thiệp của các tổ chức xã hội",
          "B. Xây dựng và từng bước hoàn thiện hệ thống giám sát, phản biện xã hội",
          "C. Tăng cường sự kiểm soát của nhà nước",
          "D. Giảm thiểu sự phát triển của khu vực tư nhân",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Xây dựng và từng bước hoàn thiện hệ thống giám sát, phản biện xã hội",
      },
      {
        id: "b3_c14",
        type: "multiple_choice",
        question: "Lịch sử loài người đã từng xuất hiện các nền dân chủ nào?",
        options: [
          "A. Nền dân chủ chủ nô, nền dân chủ tư sản, nền dân chủ xã hội chủ nghĩa",
          "B. Nền dân chủ nguyên thủy, nền dân chủ chủ nô, nền dân chủ phong kiến, nền dân chủ tư sản, nền dân chủ vô sản",
          "C. Nền dân chủ chủ nô, nền dân chủ phong kiến, nền dân chủ tư sản.",
          "D. Nền dân chủ chủ nô, nền dân chủ phong kiến, nền dân chủ tư sản, nền dân chủ vô sản",
        ],
        answer: 0,
        explanation:
          "Đáp án đúng: A. Nền dân chủ chủ nô, nền dân chủ tư sản, nền dân chủ xã hội chủ nghĩa",
      },
      {
        id: "b3_c15",
        type: "multiple_choice",
        question:
          'Kiểu nhà nước nào sau đây được V.I. Lênin gọi là nhà nước "nửa nhà nước"?',
        options: [
          "A. Nhà nước chủ nô",
          "B. Nhà nước phong kiến",
          "C. Nhà nước tư sản",
          "D. Nhà nước xã hội chủ nghĩa",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Nhà nước xã hội chủ nghĩa",
      },
      {
        id: "b3_c16",
        type: "multiple_choice",
        question:
          "Bản chất của nền dân chủ xã hội chủ nghĩa là: (Chọn 2 đáp án đúng)",
        options: [
          "A. Nền dân chủ của đa số nhân dân lao động",
          "B. Nền dân chủ mang tính tập thể",
          "C. Nền dân chủ mang tính cá nhân",
          "D. Nền dân chủ của giai cấp tư sản",
        ],
        answer: [0, 1],
        explanation:
          "Các đáp án đúng: A. Nền dân chủ của đa số nhân dân lao động; B. Nền dân chủ mang tính tập thể",
      },
      {
        id: "b3_c17",
        type: "multiple_choice",
        question: "Đặc điểm của nhà nước pháp quyền xã hội chủ nghĩa là gì?",
        options: [
          "A. Quản lý xã hội bằng pháp luật",
          "B. Quản lý xã hội bằng niềm tin",
          "C. Quản lý xã hội bằng dư luận",
          "D. Quản lý xã hội bằng mệnh lệnh hành chính",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Quản lý xã hội bằng pháp luật",
      },
      {
        id: "b3_c18",
        type: "multiple_choice",
        question:
          "Nền dân chủ xã hội chủ nghĩa ở Việt Nam có điểm khác biệt cơ bản nào so với các nền dân chủ trước đây?",
        options: [
          "A. Là nền dân chủ rộng rãi cho giai cấp công nhân và nhân dân lao động",
          "B. Còn mang tính giai cấp",
          "C. Là nền dân chủ thuần tuý",
          "D. Là nền dân chủ phi lịch sử",
        ],
        answer: 0,
        explanation:
          "Đáp án đúng: A. Là nền dân chủ rộng rãi cho giai cấp công nhân và nhân dân lao động",
      },
      {
        id: "b3_c19",
        type: "multiple_choice",
        question:
          "Chọn ý không đúng về điểm khác biệt của nền dân chủ xã hội chủ nghĩa so với nền dân chủ tư sản:",
        options: [
          "A. Trước hết và chủ yếu được thực hiện bằng Nhà nước pháp quyền xã hội chủ nghĩa",
          "B. Mang tính nhất nguyên về chính trị",
          "C. Dựa trên chế độ sở hữu xã hội về những tư liệu sản xuất chủ yếu của toàn xã hội",
          "D. Không mang tính giai cấp",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Không mang tính giai cấp",
      },
      {
        id: "b3_c20",
        type: "multiple_choice",
        question:
          "Dân chủ trong xã hội nguyên thủy được thể hiện như thế nào? (Chọn 2 đáp án đúng)",
        options: [
          "A. Không có sự phân chia giai cấp và quyền lực",
          "B. Hình thành tổ chức chính trị phức tạp",
          "C. Mọi người đều bình đẳng trong quyết định các vấn đề chung",
          "D. Quyền lực tập trung vào một số cá nhân",
        ],
        answer: [0, 2],
        explanation:
          "Các đáp án đúng: A. Không có sự phân chia giai cấp và quyền lực; C. Mọi người đều bình đẳng trong quyết định các vấn đề chung",
      },
      {
        id: "b3_c21",
        type: "multiple_choice",
        question:
          "Bản chất dân chủ xã hội chủ nghĩa ở Việt Nam được thực hiện thông qua:",
        options: [
          "A. Các hình thức dân chủ tự nguyện",
          "B. Các hình thức dân chủ không tự nguyện",
          "C. Các hình thức dân chủ cơ bản và không cơ bản",
          "D. Các hình thức dân chủ gián tiếp và trực tiếp",
        ],
        answer: 3,
        explanation:
          "Đáp án đúng: D. Các hình thức dân chủ gián tiếp và trực tiếp",
      },
      {
        id: "b3_c22",
        type: "multiple_choice",
        question:
          "Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam có đặc điểm như thế nào?",
        options: [
          "A. Nhà nước được tổ chức và hoạt động trên cơ sở Hiến pháp và pháp luật",
          "B. Nhà nước hình thành là kết quả của cách mạng xã hội chủ nghĩa",
          "C. Nhà nước đặt dưới sự lãnh đạo của Đảng cộng sản",
          "D. Nhà nước hoạt động trên nền tảng của khối liên minh công -- nông -- trí thức",
        ],
        answer: 0,
        explanation:
          "Đáp án đúng: A. Nhà nước được tổ chức và hoạt động trên cơ sở Hiến pháp và pháp luật",
      },
      {
        id: "b3_c23",
        type: "multiple_choice",
        question:
          "Bản chất tư tưởng - văn hoá - xã hội của nền dân chủ xã hội chủ nghĩa được thể hiện ở nội dung nào?",
        options: [
          "A. Lấy hệ tư tưởng của giai cấp nông dân làm chủ đạo",
          "B. Lấy hệ tư tưởng Mác - Lênin - hệ tư tưởng của giai cấp công nhân làm chủ đạo",
          "C. Lấy hệ tư tưởng của giai cấp tiểu tư sản làm chủ đạo",
          "D. Lấy hệ tư tưởng của giai cấp tư sản làm chủ đạo",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Lấy hệ tư tưởng Mác - Lênin - hệ tư tưởng của giai cấp công nhân làm chủ đạo",
      },
      {
        id: "b3_c24",
        type: "multiple_choice",
        question:
          "Hãy xác định mục tiêu chính của việc xây dựng Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam.",
        options: [
          "A. Tăng cường sự kiểm soát của nhà nước",
          "B. Phát triển kinh tế thị trường tự do",
          "C. Giảm thiểu sự can thiệp của nhà nước",
          "D. Phục vụ lợi ích của giai cấp công nhân và nhân dân lao động",
        ],
        answer: 3,
        explanation:
          "Đáp án đúng: D. Phục vụ lợi ích của giai cấp công nhân và nhân dân lao động",
      },
      {
        id: "b3_c25",
        type: "multiple_choice",
        question: "Đâu là định nghĩa đúng và đầy đủ về dân chủ?",
        options: [
          "A. Dân chủ là một giá trị phản ánh những quyền cơ bản của con người; là một hình thức tổ chức nhà nước của giai cấp cầm quyền; có quá trình ra đời, phát triển cùng với lịch sử xã hội nhân loại",
          "B. Dân chủ là một giá trị xã hội phản ánh sự nghiệp đấu tranh của con người vì sự phát triển tiến bộ xã hội",
          "C. Dân chủ là một giá trị phản ánh những quyền tối thiểu của con người; là một thái tổ chức nhà nước thừa nhận quyền làm chủ của nhân dân; là một giá trị xã hội phản ánh sự nghiệp đấu tranh của con người",
          "D. Dân chủ là giá trị phản ánh quyền cơ bản của con người; là kết quả của sự nghiệp đấu tranh của con người vì lợi ích của con người",
        ],
        answer: 0,
        explanation:
          "Đáp án đúng: A. Dân chủ là một giá trị phản ánh những quyền cơ bản của con người; là một hình thức tổ chức nhà nước của giai cấp cầm quyền; có quá trình ra đời, phát triển cùng với lịch sử xã hội nhân loại",
      },
      {
        id: "b3_c26",
        type: "multiple_choice",
        question:
          "So với các nền dân chủ trước đây, dân chủ xã hội chủ nghĩa có điểm khác biệt cơ bản nào?",
        options: [
          "A. Là nền dân chủ thuần túy",
          "B. Không còn mang tính giai cấp",
          "C. Là nền dân chủ phi lịch sử",
          "D. Là nền dân chủ rộng rãi cho giai cấp công nhân và nhân dân lao động",
        ],
        answer: 3,
        explanation:
          "Đáp án đúng: D. Là nền dân chủ rộng rãi cho giai cấp công nhân và nhân dân lao động",
      },
      {
        id: "b3_c27",
        type: "multiple_choice",
        question:
          "Dân chủ xã hội chủ nghĩa ở Việt Nam là: (Chọn 2 đáp án đúng)",
        options: [
          "A. Chế độ dân chủ không phụ thuộc vào nhà nước",
          "B. Nền dân chủ gắn liền với sự lãnh đạo của Đảng Cộng sản Việt Nam",
          "C. Chế độ dân chủ tư sản mở rộng",
          "D. Nền dân chủ bảo đảm quyền lực thuộc về nhân dân",
        ],
        answer: [1, 3],
        explanation:
          "Các đáp án đúng: B. Nền dân chủ gắn liền với sự lãnh đạo của Đảng Cộng sản Việt Nam; D. Nền dân chủ bảo đảm quyền lực thuộc về nhân dân",
      },
      {
        id: "b3_c28",
        type: "multiple_choice",
        question: "Chế độ dân chủ nhân dân ở Việt Nam được xác lập từ khi nào?",
        options: [
          "A. Sau kháng chiến chống đế quốc Mỹ năm 1975",
          "B. Sau khi Đảng Cộng sản ra đời",
          "C. Sau kháng chiến chống thực dân Pháp năm 1954",
          "D. Sau cách mạng tháng Tám năm 1945",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Sau cách mạng tháng Tám năm 1945",
      },
      {
        id: "b3_c29",
        type: "multiple_choice",
        question:
          "Dân chủ xã hội chủ nghĩa ở Việt Nam là: (Chọn 2 đáp án đúng)",
        options: [
          "A. Nền dân chủ bảo đảm quyền lực thuộc về nhân dân.",
          "B. Nền dân chủ gắn liền với sự lãnh đạo của Đảng Cộng sản Việt Nam.",
          "C. Chế độ dân chủ không phụ thuộc vào nhà nước.",
          "D. Chế độ dân chủ tư sản mở rộng.",
        ],
        answer: [0, 1],
        explanation:
          "Các đáp án đúng: A. Nền dân chủ bảo đảm quyền lực thuộc về nhân dân.; B. Nền dân chủ gắn liền với sự lãnh đạo của Đảng Cộng sản Việt Nam.",
      },
      {
        id: "b3_c30",
        type: "drag_drop",
        question: "Chọn đáp án Đúng hoặc Sai với từng phát biểu sau:",
        pairs: [
          {
            left: "Dân chủ xã hội chủ nghĩa là nền dân chủ cao hơn về chất so với nền dân chủ tư sản.",
            right: "Đúng",
          },
          {
            left: "Dân chủ là một phạm trù mang tính lịch sử, gắn với sự xuất hiện và phát triển của nhà nước.",
            right: "Đúng",
          },
          {
            left: "Dân chủ xã hội chủ nghĩa là sự phủ định sạch trơn những thành tựu dân chủ trước đó.",
            right: "Sai",
          },
          {
            left: "Trong xã hội tư bản, dân chủ thực chất thuộc về giai cấp tư sản.",
            right: "Đúng",
          },
        ],
        explanation: "Đáp án đúng: 1. Đúng; 2. Đúng; 3. Sai; 4. Đúng",
      },
      {
        id: "b3_c31",
        type: "drag_drop",
        question: "Kéo thả các đáp án khớp với các phát biểu từ 1--4:",
        pairs: [
          {
            left: "Mỗi kiểu dân chủ trong lịch sử đều mang _____ nhất định.",
            right: "Bản chất giai cấp",
          },
          {
            left: "_____ là hình thức dân chủ ra đời từ cách mạng tư sản.",
            right: "Dân chủ tư sản",
          },
          {
            left: "_____ là nền dân chủ cao hơn về chất so với nền dân chủ có trong lịch sử nhân loại.",
            right: "Dân chủ xã hội chủ nghĩa",
          },
          {
            left: "Nền dân chủ chủ nô, gắn với chế độ _____.",
            right: "Chiếm hữu nô lệ",
          },
        ],
        explanation:
          "Đáp án đúng: Mỗi kiểu dân chủ trong lịch sử đều mang _____ nhất định. → Bản chất giai cấp; _____ là hình thức dân chủ ra đời từ cách mạng tư sản. → Dân chủ tư sản; _____ là nền dân chủ cao hơn về chất so với nền dân chủ có trong lịch sử nhân loại. → Dân chủ xã hội chủ nghĩa; Nền dân chủ chủ nô, gắn với chế độ _____. → Chiếm hữu nô lệ",
      },
      {
        id: "b3_c32",
        type: "multiple_choice",
        question:
          "Căn cứ vào tính chất của quyền lực nhà nước, chức năng của nhà nước được chia thành:",
        options: [
          "A. Chức năng giai cấp và chức năng đối ngoại",
          "B. Chức năng chính trị, kinh tế, văn hóa, xã hội",
          "C. Chức năng giai cấp (trấn áp) và chức năng xã hội (tổ chức và xây dựng)",
        ],
        answer: 2,
        explanation:
          "Đáp án đúng: C. Chức năng giai cấp (trấn áp) và chức năng xã hội (tổ chức và xây dựng)",
      },
      {
        id: "b3_c33",
        type: "drag_drop",
        question: "Kéo thả các đáp án khớp với các phát biểu từ 1--3:",
        pairs: [
          {
            left: 'Hình thức _____ là hình thức dân chủ đại diện, được thực hiện do nhân dân "ủy quyền", giao quyền lực của mình cho tổ chức mà nhân dân trực tiếp bầu ra.',
            right: "Dân chủ gián tiếp",
          },
          {
            left: "Hình thức _____ là hình thức thông qua đó, nhân dân bằng hành động trực tiếp của mình thực hiện quyền làm chủ nhà nước và xã hội.",
            right: "Dân chủ trực tiếp",
          },
          {
            left: "Chế độ _____ ở nước ta được xác lập sau Cách mạng Tháng Tám năm 1945.",
            right: "Dân chủ nhân dân",
          },
        ],
        explanation:
          'Đáp án đúng: Hình thức _____ là hình thức dân chủ đại diện, được thực hiện do nhân dân "ủy quyền", giao quyền lực của mình cho tổ chức mà nhân dân trực tiếp bầu ra. → Dân chủ gián tiếp; Hình thức _____ là hình thức thông qua đó, nhân dân bằng hành động trực tiếp của mình thực hiện quyền làm chủ nhà nước và xã hội. → Dân chủ trực tiếp; Chế độ _____ ở nước ta được xác lập sau Cách mạng Tháng Tám năm 1945. → Dân chủ nhân dân',
      },
      {
        id: "b3_c34",
        type: "drag_drop",
        question: "Kéo thả các đáp án khớp với các phát biểu từ 1--4:",
        pairs: [
          {
            left: "Dân chủ đại diện được thể hiện qua việc _____.",
            right: "Bầu cử Quốc hội",
          },
          {
            left: "Một nguyên tắc cốt lõi của nhà nước pháp quyền là _____.",
            right: "Thượng tôn pháp luật",
          },
          {
            left: "Nhân dân là _____ tối cao trong Nhà nước pháp quyền.",
            right: "Chủ thể quyền lực",
          },
          {
            left: "Hình thức dân chủ gián tiếp là hình thức _____.",
            right: "Dân chủ đại diện",
          },
        ],
        explanation:
          "Đáp án đúng: Dân chủ đại diện được thể hiện qua việc _____. → Bầu cử Quốc hội; Một nguyên tắc cốt lõi của nhà nước pháp quyền là _____. → Thượng tôn pháp luật; Nhân dân là _____ tối cao trong Nhà nước pháp quyền. → Chủ thể quyền lực; Hình thức dân chủ gián tiếp là hình thức _____. → Dân chủ đại diện",
      },
      {
        id: "b3_c35",
        type: "drag_drop",
        question:
          "Kéo thả các đáp án khớp với các phát biểu từ 1 -- 3 về trái dưới đây:",
        pairs: [
          {
            left: "Dân chủ xã hội chủ nghĩa là sự kết hợp giữa hình thức dân chủ đại diện và _____",
            right: "dân chủ trực tiếp",
          },
          {
            left: "Nền dân chủ xã hội chủ nghĩa là nền dân chủ mang bản chất của _____",
            right: "giai cấp công nhân",
          },
          {
            left: "Dân chủ xã hội chủ nghĩa bảo đảm phát huy đầy đủ _____ của nhân dân trên tất cả các lĩnh vực.",
            right: "quyền làm chủ",
          },
        ],
        explanation:
          "Đáp án đúng: Dân chủ xã hội chủ nghĩa là sự kết hợp giữa hình thức dân chủ đại diện và _____ → dân chủ trực tiếp; Nền dân chủ xã hội chủ nghĩa là nền dân chủ mang bản chất của _____ → giai cấp công nhân; Dân chủ xã hội chủ nghĩa bảo đảm phát huy đầy đủ _____ của nhân dân trên tất cả các lĩnh vực. → quyền làm chủ",
      },
      {
        id: "b3_c36",
        type: "multiple_choice",
        question:
          "Bản chất dân chủ xã hội chủ nghĩa ở Việt Nam được thực hiện thông qua các hình thức dân chủ nào? (Chọn 2 đáp án đúng)",
        options: [
          "A. Dân chủ chuyên chế",
          "B. Dân chủ trực tiếp",
          "C. Dân chủ tuyệt đối",
          "D. Dân chủ gián tiếp",
        ],
        answer: [1, 3],
        explanation:
          "Các đáp án đúng: B. Dân chủ trực tiếp; D. Dân chủ gián tiếp",
      },
      {
        id: "b3_c37",
        type: "multiple_choice",
        question: "Bản chất của dân chủ là gì? (Chọn 2 đáp án đúng)",
        options: [
          "A. Phân biệt rõ ràng các tầng lớp xã hội",
          "B. Quyền lực thuộc về một nhóm nhỏ trong xã hội",
          "C. Tôn trọng và đảm bảo quyền con người",
          "D. Quyền lực thuộc về toàn thể nhân dân",
        ],
        answer: [2, 3],
        explanation:
          "Các đáp án đúng: C. Tôn trọng và đảm bảo quyền con người; D. Quyền lực thuộc về toàn thể nhân dân",
      },
      {
        id: "b3_c38",
        type: "multiple_choice",
        question:
          "Vận dụng những kiến thức đã học hãy chỉ ra luận điểm không chính xác:",
        options: [
          "A. Chủ nghĩa xã hội và chủ nghĩa tư bản khác nhau về chất, cần có một thời kỳ lịch sử nhất định để chuyển đổi.",
          "B. Tất cả các quan hệ xã hội của chủ nghĩa xã hội tự nảy sinh trong lòng chủ nghĩa tư bản.",
          "C. Công công xây dựng chủ nghĩa xã hội là một công việc mới mẻ, khó khăn và phức tạp phải có thời gian để giai cấp công nhân từng bước làm quen với những công việc đó.",
          "D. Thời kỳ quá độ là cần thiết để xây dựng cơ sở vật chất - kỹ thuật cho chủ nghĩa xã hội.",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Tất cả các quan hệ xã hội của chủ nghĩa xã hội tự nảy sinh trong lòng chủ nghĩa tư bản.",
      },
      {
        id: "b3_c39",
        type: "multiple_choice",
        question:
          "So sánh sự khác nhau giữa giai đoạn thấp và giai đoạn cao của hình thái kinh tế - xã hội cộng sản chủ nghĩa?",
        options: [
          "A. Giai đoạn thấp thực hiện phân phối theo nhu cầu, giai đoạn cao thực hiện phân phối theo lao động",
          "B. Giai đoạn thấp sử dụng pháp quyền tư sản",
          "C. Giai đoạn thấp thực hiện phân phối theo lao động, giai đoạn cao thực hiện phân phối theo nhu cầu",
          "D. Giai đoạn thấp không có sự phân chia giai cấp",
        ],
        answer: 2,
        explanation:
          "Đáp án đúng: C. Giai đoạn thấp thực hiện phân phối theo lao động, giai đoạn cao thực hiện phân phối theo nhu cầu",
      },
      {
        id: "b3_c40",
        type: "multiple_choice",
        question:
          "Vận dụng những kiến thức đã học hãy chọn phương án đúng về mối quan hệ giữa dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa?",
        options: [
          "A. Dân chủ xã hội chủ nghĩa là mục đích cho việc xây dựng và hoạt động của nhà nước xã hội chủ nghĩa còn nhà nước xã hội chủ nghĩa là điều kiện cho sự ra đời của dân chủ xã hội chủ nghĩa",
          "B. Dân chủ xã hội chủ nghĩa là cơ sở, nền tảng cho việc xây dựng và hoạt động của nhà nước xã hội chủ nghĩa còn nhà nước xã hội chủ nghĩa là công cụ quan trọng cho việc thực thi quyền làm chủ của người dân",
          "C. Dân chủ xã hội chủ nghĩa là mục tiêu cho việc xây dựng và hoạt động của nhà nước xã hội chủ nghĩa còn nhà nước xã hội chủ nghĩa là công cụ quan trọng cho việc thực thi quyền làm chủ của người dân",
          "D. Dân chủ xã hội chủ nghĩa là mục đích cho việc xây dựng và hoạt động của nhà nước xã hội chủ nghĩa còn nhà nước xã hội chủ nghĩa quyết định bản chất của dân chủ",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Dân chủ xã hội chủ nghĩa là cơ sở, nền tảng cho việc xây dựng và hoạt động của nhà nước xã hội chủ nghĩa còn nhà nước xã hội chủ nghĩa là công cụ quan trọng cho việc thực thi quyền làm chủ của người dân",
      },
      {
        id: "b3_c41",
        type: "drag_drop",
        question: "Xác định các nhận định sau là Đúng hay Sai",
        pairs: [
          {
            left: "Bản chất dân chủ xã hội chủ nghĩa ở Việt Nam được thực hiện thông qua các hình thức dân chủ gián tiếp và dân chủ trực tiếp.",
            right: "Đúng",
          },
          {
            left: "Đảng ta khẳng định một trong những đặc trưng của chủ nghĩa xã hội Việt Nam là do nhân dân làm chủ.",
            right: "Đúng",
          },
          {
            left: "Trong hoạt động của Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam, các cơ quan của Nhà nước không được phân quyền rõ ràng.",
            right: "Sai",
          },
          {
            left: "Quốc hội là cơ quan quyền lực nhà nước cao nhất hoạt động theo nhiệm kỳ 3 năm.",
            right: "Sai",
          },
        ],
        explanation: "Đáp án đúng: 1. Đúng; 2. Đúng; 3. Sai; 4. Sai",
      },
      {
        id: "b3_c42",
        type: "drag_drop",
        question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
        pairs: [
          {
            left: "Dân chủ tư sản là hình thức dân chủ gắn với quyền lực chính trị của giai cấp tư sản.",
            right: "Đúng",
          },
          {
            left: "Nền dân chủ chủ nô, gắn với chế độ chiếm hữu nô lệ.",
            right: "Đúng",
          },
          {
            left: "Dân chủ xã hội chủ nghĩa là công cụ để giai cấp công nhân thực hiện chuyên chính với các giai cấp khác.",
            right: "Sai",
          },
          {
            left: "Với tư cách là một hình thái nhà nước, một chế độ chính trị trong lịch sử nhân loại, cho đến nay có năm nền (chế độ) dân chủ.",
            right: "Sai",
          },
        ],
        explanation: "Đáp án đúng: 1. Đúng; 2. Đúng; 3. Sai; 4. Sai",
      },
      {
        id: "b3_c43",
        type: "drag_drop",
        question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau",
        pairs: [
          {
            left: "Năm 1976, tên nước được đổi thành Cộng hòa xã hội chủ nghĩa Việt Nam.",
            right: "Đúng",
          },
          {
            left: "Chế độ dân chủ nhân dân ở nước ta được xác lập sau Cách mạng Tháng Tám năm 1945.",
            right: "Đúng",
          },
          {
            left: 'Hình thức dân chủ trực tiếp là hình thức dân chủ đại diện, được thực hiện do nhân dân "ủy quyền, giao quyền lực của mình cho tổ chức mà nhân dân trực tiếp bầu ra".',
            right: "Sai",
          },
          {
            left: "Hình thức dân chủ gián tiếp là hình thức thông qua đó, nhân dân bằng hành động trực tiếp của mình thực hiện quyền làm chủ nhà nước và xã hội.",
            right: "Sai",
          },
        ],
        explanation: "Đáp án đúng: 1. Đúng; 2. Đúng; 3. Sai; 4. Sai",
      },
      {
        id: "b3_c45",
        type: "multiple_choice",
        question:
          "Vì sao giai cấp công nhân Việt Nam sớm trở thành lực lượng chính trị độc lập và giữ vai trò lãnh đạo Cách mạng Việt Nam?",
        options: [
          "A. Vì sớm hình thành một chính đảng thực sự cách mạng.",
          "B. Vì có số lượng đông và luôn đi đầu trong cuộc đấu tranh.",
          "C. Vì được kế thừa truyền thống bất khuất của dân tộc.",
          "D. Vì sớm có mối quan hệ gắn bó với nông dân.",
        ],
        answer: 0,
        explanation:
          "Đáp án đúng: A. Vì sớm hình thành một chính đảng thực sự cách mạng.",
      },
      {
        id: "b3_c46",
        type: "multiple_choice",
        question:
          "Những điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân bao gồm: (Chọn nhiều đáp án)",
        options: [
          "A. Địa vị kinh tế - xã hội.",
          "B. Đặc điểm chính trị - xã hội.",
          "C. Giai cấp có lực lượng đông đảo.",
          "D. Do sự phát triển của lực lượng sản xuất hiện đại.",
        ],
        answer: [0, 1],
        explanation:
          "Các đáp án đúng: A. Địa vị kinh tế - xã hội.; B. Đặc điểm chính trị - xã hội.",
      },
      {
        id: "b3_c47",
        type: "multiple_choice",
        question:
          "Nội dung cơ bản nhất mà nhờ đó chủ nghĩa xã hội từ không tưởng trở thành khoa học?",
        options: [
          "A. Phát hiện ra giai cấp công nhân là lực lượng xã hội có thể thủ tiêu chủ nghĩa tư bản, xây dựng chủ nghĩa xã hội.",
          "B. Lên án mạnh mẽ chủ nghĩa tư bản.",
          "C. Chỉ ra sự cần thiết phải thay thế chủ nghĩa tư bản bằng chủ nghĩa xã hội.",
          "D. Phản ánh đúng khát vọng của nhân dân lao động bị áp bức.",
        ],
        answer: 0,
        explanation:
          "Đáp án đúng: A. Phát hiện ra giai cấp công nhân là lực lượng xã hội có thể thủ tiêu chủ nghĩa tư bản, xây dựng chủ nghĩa xã hội.",
      },
      {
        id: "b3_c48",
        type: "drag_drop",
        question: "Ghép các đáp án phù hợp",
        pairs: [
          {
            left: "Giai cấp công nhân đại diện cho ______ hiện đại.",
            right: "Phương thức sản xuất",
          },
          {
            left: "Giai cấp công nhân đại diện cho ______ tiên tiến.",
            right: "Lực lượng sản xuất",
          },
          {
            left: "Giai cấp công nhân là ______ của quá trình sản xuất vật chất hiện đại.",
            right: "Chủ thể",
          },
          {
            left: "Đảng Cộng sản là ______ quan trọng nhất để giai cấp công nhân thực hiện thắng lợi sứ mệnh lịch sử của mình.",
            right: "Nhân tố chủ quan",
          },
        ],
        explanation:
          "Đáp án đúng: Giai cấp công nhân đại diện cho ______ hiện đại. → Phương thức sản xuất; Giai cấp công nhân đại diện cho ______ tiên tiến. → Lực lượng sản xuất; Giai cấp công nhân là ______ của quá trình sản xuất vật chất hiện đại. → Chủ thể; Đảng Cộng sản là ______ quan trọng nhất để giai cấp công nhân thực hiện thắng lợi sứ mệnh lịch sử của mình. → Nhân tố chủ quan",
      },
      {
        id: "b3_c49",
        type: "multiple_choice",
        question:
          "So với các giai cấp khác thì sứ mệnh lịch sử của giai cấp công nhân có gì khác biệt?",
        options: [
          "A. Không có gì khác biệt.",
          "B. Xóa bỏ triệt để chế độ tư hữu về tư liệu sản xuất.",
          "C. Thay thế chế độ sở hữu này bằng một chế độ sở hữu khác.",
          "D. Duy trì chế độ tư hữu về tư liệu sản xuất.",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Xóa bỏ triệt để chế độ tư hữu về tư liệu sản xuất.",
      },
      {
        id: "b3_c50",
        type: "multiple_choice",
        question:
          "Theo chủ nghĩa Mác -- Lênin, có mấy hình thức quá độ lên chủ nghĩa xã hội?",
        options: ["A. 2.", "B. 4.", "C. 3.", "D. 1."],
        answer: 0,
        explanation: "Đáp án đúng: A. 2.",
      },
      {
        id: "b3_c51",
        type: "multiple_choice",
        question: "Xã hội xã hội chủ nghĩa ở Việt Nam là xã hội:",
        options: [
          "A. Do giai cấp nông dân làm chủ.",
          "B. Do nhân dân làm chủ.",
          "C. Do giai cấp công nhân làm chủ.",
          "D. Do nhân dân lao động làm chủ.",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Do nhân dân làm chủ.",
      },
      {
        id: "b3_c52",
        type: "multiple_choice",
        question: 'Ai được coi là "dân" trong nền dân chủ chủ nô?',
        options: [
          "A. Giai cấp chủ nô và các công dân tự do.",
          "B. Không ai cả.",
          "C. Nô lệ.",
          "D. Giai cấp nông nô.",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Giai cấp chủ nô và các công dân tự do.",
      },
      {
        id: "b3_c53",
        type: "drag_drop",
        question: "Chọn đáp án Đúng hoặc Sai với từng phát biểu sau:",
        pairs: [
          {
            left: "Dân chủ xã hội chủ nghĩa là công cụ để giai cấp công nhân thực hiện chuyên chính với các giai cấp khác.",
            right: "Đúng",
          },
          {
            left: "Nền dân chủ chủ nô gắn với chế độ chiếm hữu nô lệ.",
            right: "Đúng",
          },
          {
            left: "Dân chủ tư sản là hình thức dân chủ gắn với quyền lực chính trị của giai cấp tư sản.",
            right: "Đúng",
          },
          {
            left: "Với tư cách là một hình thái nhà nước, một chế độ chính trị thì trong lịch sử nhân loại, cho đến nay có năm nền (chế độ) dân chủ.",
            right: "Sai",
          },
        ],
        explanation: "Đáp án đúng: 1. Đúng; 2. Đúng; 3. Đúng; 4. Sai",
      },
      {
        id: "b3_c54",
        type: "drag_drop",
        question: "Chọn Đúng hoặc Sai:",
        pairs: [
          {
            left: "Hình thức dân chủ gián tiếp là hình thức thông qua đó, nhân dân bằng hành động trực tiếp của mình thực hiện quyền làm chủ nhà nước và xã hội.",
            right: "Sai",
          },
          {
            left: 'Hình thức dân chủ trực tiếp là hình thức dân chủ đại diện, được thực hiện do nhân dân "ủy quyền", giao quyền lực của mình cho tổ chức mà nhân dân trực tiếp bầu ra.',
            right: "Sai",
          },
          {
            left: "Chế độ dân chủ nhân dân ở nước ta được xác lập sau Cách mạng Tháng Tám năm 1945.",
            right: "Đúng",
          },
          {
            left: "Năm 1976, tên nước được đổi thành Cộng hòa xã hội chủ nghĩa Việt Nam.",
            right: "Đúng",
          },
        ],
        explanation: "Đáp án đúng: 1. Sai; 2. Sai; 3. Đúng; 4. Đúng",
      },
      {
        id: "b3_c55",
        type: "multiple_choice",
        question:
          "Vận dụng những kiến thức đã học, cho biết đâu là quan niệm đúng và đầy đủ về nhà nước xã hội chủ nghĩa ở Việt Nam?",
        options: [
          "A. Nhà nước xã hội chủ nghĩa ở Việt Nam là nhà nước không có sự can thiệp của Đảng Cộng sản, với mục tiêu chỉ là phát triển kinh tế tư nhân và thu hút đầu tư nước ngoài.",
          "B. Nhà nước xã hội chủ nghĩa ở Việt Nam là nhà nước quân chủ lập hiến, trong đó quyền lực tập trung vào tay một người đứng đầu nhà nước.",
          "C. Nhà nước xã hội chủ nghĩa ở Việt Nam là nhà nước được lãnh đạo bởi tầng lớp tư sản, nhằm thúc đẩy kinh tế thị trường và phát triển các doanh nghiệp tư nhân.",
          "D. Nhà nước xã hội chủ nghĩa ở Việt Nam là nhà nước của nhân dân, do nhân dân và vì nhân dân, dưới sự lãnh đạo của Đảng Cộng sản Việt Nam, nhằm xây dựng xã hội công bằng, dân chủ, văn minh.",
        ],
        answer: 3,
        explanation:
          "Đáp án đúng: D. Nhà nước xã hội chủ nghĩa ở Việt Nam là nhà nước của nhân dân, do nhân dân và vì nhân dân, dưới sự lãnh đạo của Đảng Cộng sản Việt Nam, nhằm xây dựng xã hội công bằng, dân chủ, văn minh.",
      },
    ],
  },
  {
    id: 4,
    title: "Bài 4: Cơ cấu xã hội – giai cấp và liên minh giai cấp, tầng lớp",
    questions: [
      {
        id: "b4_c1",
        type: "multiple_choice",
        question:
          "Trong thời kỳ quá độ lên chủ nghĩa xã hội, cơ cấu xã hội -- giai cấp thường xuyên biến đổi theo mấy quy luật cơ bản?",
        options: ["A. 5", "B. 3", "C. 4", "D. 2"],
        answer: 1,
        explanation: "Đáp án đúng: B. 3",
      },
      {
        id: "b4_c2",
        type: "multiple_choice",
        question:
          "Xét về mặt kinh tế, trong thời kỳ quá độ lên chủ nghĩa xã hội, cơ cấu xã hội -- giai cấp biến đổi phức tạp, đa dạng, làm xuất hiện các tầng lớp mới là do:",
        options: [
          "A. Kinh tế chậm phát triển",
          "B. Các giai cấp có nhiều tư liệu sản xuất quyết định",
          "C. Tồn tại nhiều giai cấp, tầng lớp",
          "D. Cơ cấu kinh tế đa dạng, phức tạp",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Cơ cấu kinh tế đa dạng, phức tạp",
      },
      {
        id: "b4_c3",
        type: "multiple_choice",
        question:
          'V.I. Lênin đã xem liên minh giữa giai cấp, tầng lớp nào là một hình thức "liên minh đặc biệt" trong giai đoạn giành chính quyền và xây dựng chủ nghĩa xã hội?',
        options: [
          "A. Giai cấp công nhân với tầng lớp trí thức và doanh nhân",
          "B. Giai cấp công nhân với giai cấp nông dân và các tầng lớp xã hội khác",
          "C. Giai cấp công nhân với giai cấp nông dân và tầng lớp trí thức",
          "D. Giai cấp công nhân với giai cấp nông dân và tầng lớp tiểu tư sản",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Giai cấp công nhân với giai cấp nông dân và các tầng lớp xã hội khác",
      },
      {
        id: "b4_c4",
        type: "multiple_choice",
        question:
          "Trong cách mạng xã hội chủ nghĩa, dưới sự lãnh đạo của Đảng Cộng sản, giai cấp công nhân phải liên minh với giai cấp, tầng lớp nào?",
        options: [
          "A. Giai cấp vô sản đại công nghiệp",
          "B. Giai cấp tư sản",
          "C. Giai cấp vô sản",
          "D. Giai cấp nông dân và các tầng lớp nhân dân lao động",
        ],
        answer: 3,
        explanation:
          "Đáp án đúng: D. Giai cấp nông dân và các tầng lớp nhân dân lao động",
      },
      {
        id: "b4_c5",
        type: "multiple_choice",
        question:
          "Xét dưới góc độ chính trị, trong cuộc đấu tranh giai cấp của các giai cấp có lợi ích đối lập nhau đặt ra nhu cầu tất yếu khách quan mỗi giai cấp đứng ở vị trí trung tâm đều phải:",
        options: [
          "A. Liên minh với các giai cấp, tầng lớp xã hội khác mà giai cấp đứng ở vị trí trung tâm được lợi nhiều hơn",
          "B. Liên minh với các giai cấp, tầng lớp xã hội khác có những lợi ích đối lập với mình",
          "C. Liên minh với các giai cấp, tầng lớp xã hội khác có tiềm lực kinh tế lớn hơn mình",
          "D. Liên minh với các giai cấp, tầng lớp xã hội khác có những lợi ích phù hợp với mình",
        ],
        answer: 3,
        explanation:
          "Đáp án đúng: D. Liên minh với các giai cấp, tầng lớp xã hội khác có những lợi ích phù hợp với mình",
      },
      {
        id: "b4_c6",
        type: "multiple_choice",
        question:
          'Chọn phương án trả lời đúng nhất để điền vào chỗ trống: "Trước sự liên minh của các đại biểu khoa học..., giới kỹ thuật không một thế lực đen tối nào đứng vững được."',
        options: [
          "A. Giai cấp tiểu tư sản",
          "B. Giai cấp vô sản",
          "C. Giai cấp nông dân",
          "D. Giai cấp tư sản",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Giai cấp vô sản",
      },
      {
        id: "b4_c7",
        type: "multiple_choice",
        question:
          "Nội dung kinh tế của liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là gì?",
        options: [
          "A. Giữ vững lập trường tư tưởng của giai cấp công nhân, giữ vững vai trò lãnh đạo của Đảng",
          "B. Tăng cường phát triển kinh tế kết hợp với phát triển quân sự gắn với phát triển ngoại giao",
          "C. Đẩy mạnh công nghiệp hoá, hiện đại hoá đất nước gắn với phát triển kinh tế tri thức, phát triển bền vững",
          "D. Xây dựng nền văn hoá tiên tiến, đậm đà bản sắc dân tộc, đồng thời tiếp thu những tinh hoa, giá trị văn hoá của nhân loại và thời đại",
        ],
        answer: 2,
        explanation:
          "Đáp án đúng: C. Đẩy mạnh công nghiệp hoá, hiện đại hoá đất nước gắn với phát triển kinh tế tri thức, phát triển bền vững",
      },
      {
        id: "b4_c8",
        type: "multiple_choice",
        question:
          "Theo C.Mác và Ph.Ăngghen, nhiều cuộc đấu tranh của giai cấp công nhân ở châu Âu, nhất là ở nước Anh và Pháp từ giữa thế kỷ XIX thất bại là do:",
        options: [
          "A. Không tổ chức liên minh với tầng lớp tiểu chủ",
          "B. Không tổ chức liên minh với giai cấp nông dân",
          "C. Không tổ chức liên minh với tầng lớp trí thức",
          "D. Không tổ chức liên minh với giai cấp tư sản",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Không tổ chức liên minh với giai cấp nông dân",
      },
      {
        id: "b4_c9",
        type: "multiple_choice",
        question:
          "Theo quan điểm của chủ nghĩa Mác -- Lênin, trong thời kỳ quá độ lên chủ nghĩa xã hội, giai cấp công nhân, giai cấp nông dân và tầng lớp lao động khác được coi là:",
        options: [
          "A. Lực lượng kém phát triển",
          "B. Lực lượng sản xuất cơ bản, lực lượng chính trị - xã hội to lớn",
          "C. Lực lượng vũ trang cơ bản",
          "D. Lực lượng ngoại giao to lớn",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Lực lượng sản xuất cơ bản, lực lượng chính trị - xã hội to lớn",
      },
      {
        id: "b4_c10",
        type: "multiple_choice",
        question:
          "Trong thời kỳ quá độ lên chủ nghĩa xã hội, cơ cấu xã hội -- giai cấp gồm mấy giai cấp, tầng lớp cơ bản?",
        options: ["A. 5", "B. 6", "C. 4", "D. 3"],
        answer: 3,
        explanation: "Đáp án đúng: D. 3",
      },
      {
        id: "b4_c11",
        type: "multiple_choice",
        question:
          "Trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam, giai cấp nào là lực lượng đi đầu thực hiện nhiệm vụ trung tâm phát triển kinh tế, tiến hành công nghiệp hoá, hiện đại hoá đất nước?",
        options: [
          "A. Đội ngũ trí thức",
          "B. Giai cấp nông dân",
          "C. Giai cấp công nhân",
          "D. Đội ngũ doanh nhân",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Giai cấp nông dân",
      },
      {
        id: "b4_c12",
        type: "multiple_choice",
        question:
          "Chọn ý sai về nội dung kinh tế của liên minh giữa giai cấp công nhân với giai cấp nông dân và các tầng lớp lao động khác trong cách mạng xã hội chủ nghĩa:",
        options: [
          "A. Thực hiện hợp đồng kinh tế giữa doanh nghiệp nhà nước và nông dân.",
          "B. Xây dựng hệ thống chính sách an sinh xã hội.",
          "C. Ứng dụng khoa học kỹ thuật vào sản xuất nông nghiệp.",
          "D. Xây dựng hệ thống chính sách phát triển nông nghiệp, nông dân, nông thôn.",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Xây dựng hệ thống chính sách an sinh xã hội.",
      },
      {
        id: "b4_c13",
        type: "multiple_choice",
        question:
          "Trong cơ cấu xã hội -- giai cấp của thời kỳ quá độ lên chủ nghĩa xã hội, lực lượng tiêu biểu cho phương thức sản xuất mới, giữ vai trò chủ đạo, tiên phong trong quá trình công nghiệp hoá, hiện đại hoá đất nước là:",
        options: [
          "A. Giai cấp nông dân",
          "B. Đội ngũ doanh nhân",
          "C. Tầng lớp trí thức",
          "D. Giai cấp công nhân",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Giai cấp công nhân",
      },
      {
        id: "b4_c14",
        type: "multiple_choice",
        question:
          "Nội dung cơ bản quyết định nhất, là cơ sở vật chất -- kỹ thuật của liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là nội dung nào?",
        options: [
          "A. Nội dung kinh tế của liên minh",
          "B. Nội dung văn hoá của liên minh",
          "C. Nội dung chính trị của liên minh",
          "D. Nội dung xã hội của liên minh",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Nội dung kinh tế của liên minh",
      },
      {
        id: "b4_c15",
        type: "multiple_choice",
        question:
          "Vì sao cơ cấu xã hội -- giai cấp có vị trí quan trọng hàng đầu, chi phối các loại hình cơ cấu xã hội khác? (Chọn 2 đáp án đúng nhất)",
        options: [
          "A. Vì cơ cấu xã hội -- giai cấp liên quan đến các đảng phái chính trị và nhà nước; đến quyền sở hữu tư liệu sản xuất.",
          "B. Vì cơ cấu xã hội -- giai cấp liên quan đến nhiều giai cấp giàu có trong xã hội.",
          "C. Vì cơ cấu xã hội -- giai cấp liên quan đến các tổ chức tà đạo, các băng nhóm xã hội đen lớn trong xã hội.",
          "D. Vì cơ cấu xã hội -- giai cấp liên quan đến quản lý tổ chức lao động, vấn đề phân phối thu nhập.",
        ],
        answer: [0, 3],
        explanation:
          "Các đáp án đúng: A. Vì cơ cấu xã hội -- giai cấp liên quan đến các đảng phái chính trị và nhà nước; đến quyền sở hữu tư liệu sản xuất.; D. Vì cơ cấu xã hội -- giai cấp liên quan đến quản lý tổ chức lao động, vấn đề phân phối thu nhập.",
      },
      {
        id: "b4_c16",
        type: "multiple_choice",
        question:
          "Dưới góc độ chính trị -- xã hội, môn Chủ nghĩa xã hội khoa học tập trung nghiên cứu cơ cấu xã hội nào?",
        options: [
          "A. Cơ cấu xã hội -- giai cấp",
          "B. Cơ cấu xã hội -- nghề nghiệp",
          "C. Cơ cấu xã hội -- dân cư",
          "D. Cơ cấu xã hội -- dân tộc",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Cơ cấu xã hội -- giai cấp",
      },
      {
        id: "b4_c17",
        type: "multiple_choice",
        question:
          "Trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam, sự biến đổi của cơ cấu xã hội -- giai cấp bị chi phối bởi biến đổi của cơ cấu nào?",
        options: [
          "A. Cơ cấu kinh tế",
          "B. Cơ cấu xã hội -- dân cư",
          "C. Cơ cấu xã hội -- dân tộc",
          "D. Cơ cấu xã hội -- tôn giáo",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Cơ cấu kinh tế",
      },
      {
        id: "b4_c18",
        type: "multiple_choice",
        question:
          "Theo V.I. Lênin, đâu là vấn đề mang tính nguyên tắc để đảm bảo cho thắng lợi của Cách mạng xã hội chủ nghĩa Tháng Mười Nga năm 1917?",
        options: [
          "A. Liên minh giữa giai cấp vô sản và nông dân",
          "B. Liên minh công, nông và trí thức",
          "C. Liên minh giữa giai cấp công nhân, tầng lớp tư sản tiến bộ",
          "D. Liên minh giữa giai cấp công nhân, tầng lớp tiểu tư sản",
        ],
        answer: 0,
        explanation:
          "Đáp án đúng: A. Liên minh giữa giai cấp vô sản và nông dân",
      },
      {
        id: "b4_c19",
        type: "multiple_choice",
        question:
          "Cơ cấu xã hội -- giai cấp ở Việt Nam thời kỳ quá độ lên chủ nghĩa xã hội bao gồm mấy giai cấp, tầng lớp?",
        options: ["A. 4", "B. 6", "C. 3", "D. 5"],
        answer: 0,
        explanation: "Đáp án đúng: A. 4",
      },
      {
        id: "b4_c20",
        type: "multiple_choice",
        question:
          "Trong thời kỳ quá độ lên chủ nghĩa xã hội, cơ cấu xã hội -- giai cấp biến đổi trong mối quan hệ nào?",
        options: [
          "A. Vừa thống nhất, vừa bình đẳng với nhau",
          "B. Vừa liên minh, cấu kết các giai cấp, tầng lớp quy mô lớn để đàn áp các lớp giai cấp, tầng lớp quy mô nhỏ",
          "C. Vừa đấu tranh, vừa liên minh, từng bước xóa bỏ bất bình đẳng xã hội dẫn đến sự xích lại gần nhau",
          "D. Vừa đấu tranh, vừa bài xích lẫn nhau",
        ],
        answer: 2,
        explanation:
          "Đáp án đúng: C. Vừa đấu tranh, vừa liên minh, từng bước xóa bỏ bất bình đẳng xã hội dẫn đến sự xích lại gần nhau",
      },
      {
        id: "b4_c21",
        type: "multiple_choice",
        question:
          "Lực lượng nào là lực lượng lao động sáng tạo đặc biệt quan trọng trong tiến trình đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước và hội nhập quốc tế, xây dựng kinh tế tri thức, phát triển nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc?",
        options: [
          "A. Nông dân",
          "B. Công nhân",
          "C. Trí thức",
          "D. Thanh niên",
        ],
        answer: 2,
        explanation: "Đáp án đúng: C. Trí thức",
      },
      {
        id: "b4_c22",
        type: "multiple_choice",
        question:
          "Trong cơ cấu xã hội của thời kỳ quá độ lên chủ nghĩa xã hội, cơ cấu xã hội nào giữ vị trí quan trọng hàng đầu, chi phối các loại hình cơ cấu xã hội khác?",
        options: [
          "A. Cơ cấu xã hội -- dân tộc",
          "B. Cơ cấu xã hội -- giai cấp",
          "C. Cơ cấu xã hội -- nghề nghiệp",
          "D. Cơ cấu xã hội -- tôn giáo",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Cơ cấu xã hội -- giai cấp",
      },
      {
        id: "b4_c23",
        type: "multiple_choice",
        question:
          "Vận dụng kiến thức về vai trò của thế hệ trẻ, hãy xác định mục tiêu chính của việc giáo dục chính trị, tư tưởng cho thanh niên trong giai đoạn hiện nay ở Việt Nam là gì?",
        options: [
          "A. Để kiểm soát các hoạt động kinh tế của thanh niên",
          "B. Để hình thành thế hệ thanh niên có phẩm chất tốt đẹp, có khí phách và quyết tâm hành động",
          "C. Để giảm thiểu sự tham gia của thanh niên vào các hoạt động xã hội",
          "D. Để tăng cường quyền lực của nhà nước",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Để hình thành thế hệ thanh niên có phẩm chất tốt đẹp, có khí phách và quyết tâm hành động",
      },
      {
        id: "b4_c24",
        type: "multiple_choice",
        question:
          "Hiện nay ở Việt Nam, lực lượng xã hội đặc biệt được Đảng ta chủ trương xây dựng thành một đội ngũ vững mạnh là:",
        options: [
          "A. Thanh niên",
          "B. Công nhân",
          "C. Trí thức",
          "D. Doanh nhân",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Doanh nhân",
      },
      {
        id: "b4_c25",
        type: "multiple_choice",
        question:
          'Theo C. Mác -- Ph. Ăngghen, "người bạn đồng minh tự nhiên" của giai cấp công nhân là ai?',
        options: [
          "A. Nhân dân lao động",
          "B. Giai cấp nông dân",
          "C. Tầng lớp trí thức",
          "D. Đội ngũ doanh nhân",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Giai cấp nông dân",
      },
      {
        id: "b4_c26",
        type: "multiple_choice",
        question:
          "Vì sao giai cấp công nhân, nông dân và đội ngũ trí thức cần liên minh với nhau trong thời kỳ quá độ lên chủ nghĩa xã hội? (Chọn 2 đáp án đúng nhất)",
        options: [
          "A. Vì giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức có sự thống nhất chung về lợi ích.",
          "B. Vì các giai cấp, tầng lớp muốn có động lực lực lượng để tổ chức các hoạt động văn hóa, xã hội.",
          "C. Vì giai cấp công nhân bắt buộc các giai cấp nông dân, tầng lớp trí thức liên minh với mình.",
          "D. Vì xuất phát từ yêu cầu khách quan của quá trình đẩy mạnh công nghiệp hóa, hiện đại hóa và chuyển dịch cơ cấu kinh tế từ một nền sản xuất nhỏ, nông nghiệp là chủ yếu sang sản xuất hàng hóa lớn.",
        ],
        answer: [0, 3],
        explanation:
          "Các đáp án đúng: A. Vì giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức có sự thống nhất chung về lợi ích.; D. Vì xuất phát từ yêu cầu khách quan của quá trình đẩy mạnh công nghiệp hóa, hiện đại hóa và chuyển dịch cơ cấu kinh tế từ một nền sản xuất nhỏ, nông nghiệp là chủ yếu sang sản xuất hàng hóa lớn.",
      },
      {
        id: "b4_c27",
        type: "multiple_choice",
        question:
          "Nội dung chính trị của liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam thể hiện việc giữ vững lập trường chính trị -- tư tưởng của giai cấp, tầng lớp nào?",
        options: [
          "A. Giai cấp nông dân",
          "B. Giai cấp công nhân",
          "C. Giai cấp tư sản",
          "D. Tầng lớp trí thức",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Giai cấp công nhân",
      },
      {
        id: "b4_c28",
        type: "multiple_choice",
        question:
          'Chọn cụm từ thích hợp điền vào chỗ trống: "Cơ cấu xã hội là những......cùng toàn bộ những mối quan hệ xã hội do sự tác động lẫn nhau của các cộng đồng ấy tạo nên."',
        options: [
          "A. Cộng đồng dân tộc",
          "B. Cộng đồng nghề nghiệp",
          "C. Cộng đồng dân cư",
          "D. Cộng đồng người",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Cộng đồng người",
      },
      {
        id: "b4_c29",
        type: "multiple_choice",
        question:
          'Chọn đáp án đúng điền vào chỗ trống: "Cơ cấu xã hội -- giai cấp là hệ thống các ......., tồn tại khách quan trong một chế độ xã hội nhất định,..."',
        options: [
          "A. Cá nhân / tập thể",
          "B. Đội ngũ / tầng lớp",
          "C. Tập đoàn / lực lượng sản xuất",
          "D. Giai cấp / tầng lớp",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Giai cấp / tầng lớp",
      },
      {
        id: "b4_c30",
        type: "multiple_choice",
        question:
          "Yếu tố nào quyết định sự liên minh giữa giai cấp công nhân, giai cấp nông dân và tầng lớp trí thức là:",
        options: [
          "A. Do giai cấp công nhân mong muốn",
          "B. Do có cùng một kẻ thù là giai cấp tư sản",
          "C. Do giai cấp công nhân muốn trở thành giai cấp thống trị",
          "D. Do có những lợi ích cơ bản thống nhất với nhau",
        ],
        answer: 3,
        explanation:
          "Đáp án đúng: D. Do có những lợi ích cơ bản thống nhất với nhau",
      },
      {
        id: "b4_c31",
        type: "multiple_choice",
        question:
          "Những lực lượng nào sau đây là trung tâm trong cơ cấu xã hội -- giai cấp ở Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội? (Chọn 2 đáp án đúng)",
        options: [
          "A. Nhóm người cao tuổi",
          "B. Giai cấp công nhân",
          "C. Nhóm tín đồ tôn giáo",
          "D. Giai cấp nông dân",
        ],
        answer: [1, 3],
        explanation:
          "Các đáp án đúng: B. Giai cấp công nhân; D. Giai cấp nông dân",
      },
      {
        id: "b4_c32",
        type: "multiple_choice",
        question:
          "Những phương hướng nào sau đây nhằm phát triển cơ cấu xã hội -- giai cấp ở Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội? (Chọn 2 đáp án đúng)",
        options: [
          "A. Tăng dân số ở khu công nghiệp",
          "B. Xây dựng và hoàn thiện chính sách xã hội tổng thể",
          "C. Giảm giáo dục ở những vùng không có điều kiện kinh tế",
          "D. Đẩy mạnh công nghiệp hoá, hiện đại hoá",
        ],
        answer: [1, 3],
        explanation:
          "Các đáp án đúng: B. Xây dựng và hoàn thiện chính sách xã hội tổng thể; D. Đẩy mạnh công nghiệp hoá, hiện đại hoá",
      },
      {
        id: "b4_c33",
        type: "drag_drop",
        question:
          "Kéo thả các khái niệm khớp với các phát biểu về cơ cấu xã hội -- giai cấp ở Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội:",
        pairs: [
          {
            left: "Lực lượng mới trong cơ cấu xã hội -- giai cấp",
            right: "Đội ngũ doanh nhân",
          },
          {
            left: "Lực lượng quan trọng trong cơ cấu xã hội -- giai cấp",
            right: "Đội ngũ trí thức",
          },
          {
            left: "Giai cấp trung tâm trong cơ cấu xã hội -- giai cấp",
            right: "Giai cấp công nhân",
          },
          {
            left: "Chính sách hỗ trợ cơ cấu xã hội -- giai cấp",
            right: "Chính sách an sinh xã hội",
          },
        ],
        explanation:
          "Đáp án đúng: Lực lượng mới trong cơ cấu xã hội -- giai cấp → Đội ngũ doanh nhân; Lực lượng quan trọng trong cơ cấu xã hội -- giai cấp → Đội ngũ trí thức; Giai cấp trung tâm trong cơ cấu xã hội -- giai cấp → Giai cấp công nhân; Chính sách hỗ trợ cơ cấu xã hội -- giai cấp → Chính sách an sinh xã hội",
      },
      {
        id: "b4_c34",
        type: "drag_drop",
        question:
          "Kéo thả các đáp án đúng ứng với từng phát biểu sau đây về vị trí, vai trò của các giai cấp, tầng lớp trong cơ cấu xã hội -- giai cấp ở Việt Nam:",
        pairs: [
          {
            left: "Đội ngũ trí thức là lực lượng ______",
            right: "Sáng tạo đặc biệt",
          },
          {
            left: "Giai cấp nông dân cùng với nông nghiệp, nông thôn có vị trí ______",
            right: "Chiến lược quan trọng",
          },
          {
            left: "Giai cấp công nhân Việt Nam có vai trò ______",
            right: "Đặc biệt quan trọng",
          },
          {
            left: "Đội ngũ doanh nhân được Đảng ta chủ trương xây dựng thành một ______",
            right: "Đội ngũ vững mạnh",
          },
        ],
        explanation:
          "Đáp án đúng: Đội ngũ trí thức là lực lượng ______ → Sáng tạo đặc biệt; Giai cấp nông dân cùng với nông nghiệp, nông thôn có vị trí ______ → Chiến lược quan trọng; Giai cấp công nhân Việt Nam có vai trò ______ → Đặc biệt quan trọng; Đội ngũ doanh nhân được Đảng ta chủ trương xây dựng thành một ______ → Đội ngũ vững mạnh",
      },
      {
        id: "b4_c35",
        type: "drag_drop",
        question: "Chọn đáp án Đúng hoặc Sai với từng phát biểu sau:",
        pairs: [
          {
            left: "Nội dung kinh tế là nội dung cơ bản quyết định nhất, là cơ sở vật chất kỹ thuật của liên minh.",
            right: "Đúng",
          },
          {
            left: "Tạo sức mạnh tổng hợp là mục tiêu của liên minh giai cấp, tầng lớp ở Việt Nam.",
            right: "Đúng",
          },
          {
            left: "Nội dung văn hóa không liên quan đến nội dung của liên minh giai cấp, tầng lớp.",
            right: "Sai",
          },
          {
            left: "Đổi mới hoạt động của Đảng, Nhà nước, Mặt trận Tổ quốc Việt Nam nhằm tăng cường khối liên minh giai cấp, tầng lớp ở Việt Nam.",
            right: "Đúng",
          },
        ],
        explanation: "Đáp án đúng: 1. Đúng; 2. Đúng; 3. Sai; 4. Đúng",
      },
      {
        id: "b4_c36",
        type: "drag_drop",
        question: "Chọn đáp án Đúng hoặc Sai với từng phát biểu sau:",
        pairs: [
          {
            left: "Nâng cao dân trí là chính sách hỗ trợ cơ cấu xã hội -- giai cấp.",
            right: "Đúng",
          },
          {
            left: "Chính sách việc làm không hỗ trợ cơ cấu xã hội -- giai cấp.",
            right: "Sai",
          },
          {
            left: "Đội ngũ doanh nhân là tầng lớp mới trong cơ cấu xã hội -- giai cấp.",
            right: "Đúng",
          },
          {
            left: "Cơ cấu xã hội -- giai cấp ở Việt Nam không biến đổi.",
            right: "Sai",
          },
        ],
        explanation: "Đáp án đúng: 1. Đúng; 2. Sai; 3. Đúng; 4. Sai",
      },
      {
        id: "b4_c37",
        type: "multiple_choice",
        question:
          "Những chính sách nào sau đây hỗ trợ xây dựng cơ cấu xã hội -- giai cấp ở Việt Nam? (Chọn 2 đáp án đúng)",
        options: [
          "A. Ưu tiên phát triển những giai cấp lớn trong xã hội",
          "B. Giải quyết tốt các mâu thuẫn, các khác biệt trong các giai cấp, tầng lớp",
          "C. Thúc đẩy phát triển các tổ chức tín ngưỡng, tôn giáo",
          "D. Phát huy sự thống nhất trong các giai cấp, tầng lớp, tạo sự đồng thuận xã hội",
        ],
        answer: [1, 3],
        explanation:
          "Các đáp án đúng: B. Giải quyết tốt các mâu thuẫn, các khác biệt trong các giai cấp, tầng lớp; D. Phát huy sự thống nhất trong các giai cấp, tầng lớp, tạo sự đồng thuận xã hội",
      },
      {
        id: "b4_c38",
        type: "drag_drop",
        question:
          "Kéo thả các yếu tố liên quan đến cơ cấu xã hội -- giai cấp ở Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội vào các cột tương ứng:",
        pairs: [
          {
            left: "Đội ngũ trí thức",
            right: "Giai cấp/tầng lớp trong cơ cấu xã hội",
          },
          {
            left: "Giai cấp nông dân",
            right: "Giai cấp/tầng lớp trong cơ cấu xã hội",
          },
          {
            left: "Giai cấp công nhân",
            right: "Giai cấp/tầng lớp trong cơ cấu xã hội",
          },
          {
            left: "Bảo vệ quyền lợi",
            right: "Chính sách hỗ trợ",
          },
          {
            left: "Nâng cao dân trí",
            right: "Chính sách hỗ trợ",
          },
          {
            left: "Chính sách an sinh xã hội",
            right: "Chính sách hỗ trợ",
          },
          {
            left: "Phát triển nông thôn mới",
            right: "Chính sách hỗ trợ",
          },
        ],
        explanation:
          "Đáp án đúng: Đội ngũ trí thức → Giai cấp/tầng lớp trong cơ cấu xã hội; Giai cấp nông dân → Giai cấp/tầng lớp trong cơ cấu xã hội; Giai cấp công nhân → Giai cấp/tầng lớp trong cơ cấu xã hội; Bảo vệ quyền lợi → Chính sách hỗ trợ; Nâng cao dân trí → Chính sách hỗ trợ; Chính sách an sinh xã hội → Chính sách hỗ trợ; Phát triển nông thôn mới → Chính sách hỗ trợ",
      },
      {
        id: "b4_c39",
        type: "drag_drop",
        question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
        pairs: [
          {
            left: "Chính sách tôn giáo là chính sách chính hỗ trợ cơ cấu xã hội -- giai cấp.",
            right: "Sai",
          },
          {
            left: "Đội ngũ trí thức đóng vai trò quan trọng trong cơ cấu xã hội -- giai cấp.",
            right: "Đúng",
          },
          {
            left: "Giai cấp công nhân là trung tâm trong cơ cấu xã hội -- giai cấp ở Việt Nam.",
            right: "Đúng",
          },
          {
            left: "Tầng lớp phụ nữ không tham gia cơ cấu xã hội -- giai cấp.",
            right: "Sai",
          },
        ],
        explanation: "Đáp án đúng: 1. Sai; 2. Đúng; 3. Đúng; 4. Sai",
      },
      {
        id: "b4_c40",
        type: "drag_drop",
        question:
          "Kéo thả các yếu tố liên quan đến liên minh giai cấp, tầng lớp ở Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội vào các cột tương ứng:",
        pairs: [
          {
            left: "Xóa đói giảm nghèo",
            right: "Nội dung/phương hướng của liên minh",
          },
          {
            left: "Nội dung kinh tế",
            right: "Nội dung/phương hướng của liên minh",
          },
          {
            left: "Tăng cường liên minh",
            right: "Nội dung/phương hướng của liên minh",
          },
          {
            left: "Nội dung chính trị",
            right: "Nội dung/phương hướng của liên minh",
          },
          {
            left: "Giai cấp nông dân",
            right: "Thành phần/yếu tố của liên minh",
          },
          {
            left: "Giai cấp công nhân",
            right: "Thành phần/yếu tố của liên minh",
          },
          {
            left: "Tầng lớp phụ nữ",
            right: "Thành phần/yếu tố của liên minh",
          },
          {
            left: "Đảng Cộng sản",
            right: "Thành phần/yếu tố của liên minh",
          },
        ],
        explanation:
          "Đáp án đúng: Xóa đói giảm nghèo → Nội dung/phương hướng của liên minh; Nội dung kinh tế → Nội dung/phương hướng của liên minh; Tăng cường liên minh → Nội dung/phương hướng của liên minh; Nội dung chính trị → Nội dung/phương hướng của liên minh; Giai cấp nông dân → Thành phần/yếu tố của liên minh; Giai cấp công nhân → Thành phần/yếu tố của liên minh; Tầng lớp phụ nữ → Thành phần/yếu tố của liên minh; Đảng Cộng sản → Thành phần/yếu tố của liên minh",
      },
    ],
  },
  {
    id: 5,
    title: "Bài 5: Vấn đề dân tộc và tôn giáo",
    questions: [
      {
        id: "b5_c1",
        type: "multiple_choice",
        question: "Dân tộc hiểu theo nghĩa hẹp là:",
        options: [
          "A. Tộc người",
          "B. Quốc gia dân tộc",
          "C. Bộ lạc",
          "D. Bộ tộc",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Tộc người",
      },
      {
        id: "b5_c2",
        type: "multiple_choice",
        question:
          "Đâu là đặc trưng quan trọng nhất, là cơ sở để liên kết các thành viên của dân tộc tạo thành nền tảng vững chắc của cộng đồng dân tộc?",
        options: [
          "A. Có thể cư trú tập trung trên một vùng lãnh thổ của một quốc gia, hoặc cư trú đan xen với nhiều dân tộc anh em",
          "B. Có chung một phương thức sinh hoạt kinh tế",
          "C. Có ngôn ngữ riêng và có thể có chữ viết riêng làm công cụ giao tiếp",
          "D. Có nét tâm lý riêng (nét tâm lý dân tộc) biểu hiện kết tinh trong nền văn hoá dân tộc và tạo thành bản sắc văn hoá của dân tộc",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Có chung một phương thức sinh hoạt kinh tế",
      },
      {
        id: "b5_c3",
        type: "multiple_choice",
        question:
          "Thứ tự quá trình phát triển của dân tộc lần lượt trải qua các hình thức nào?",
        options: [
          "A. Bộ tộc, thị tộc, bộ lạc, dân tộc",
          "B. Thị tộc, bộ lạc, bộ tộc, dân tộc",
          "C. Thị tộc, bộ tộc, bộ lạc, dân tộc",
          "D. Bộ lạc, bộ tộc, thị tộc, dân tộc",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Thị tộc, bộ lạc, bộ tộc, dân tộc",
      },
      {
        id: "b5_c4",
        type: "multiple_choice",
        question:
          "Theo chủ nghĩa Mác - Lênin, nguyên nhân nào dẫn đến các cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân tộc độc lập?",
        options: [
          "A. Do sự thức tỉnh, sự trưởng thành về ý thức dân tộc, ý thức về quyền sống của mình",
          "B. Do các cộng đồng dân cư muốn độc lập để có thể đi xâm chiếm các dân tộc khác",
          "C. Do chủ nghĩa tư bản đã phát triển thành chủ nghĩa đế quốc",
          "D. Do các cộng đồng dân cư muốn phân chia lại thị trường thế giới",
        ],
        answer: 0,
        explanation:
          "Đáp án đúng: A. Do sự thức tỉnh, sự trưởng thành về ý thức dân tộc, ý thức về quyền sống của mình",
      },
      {
        id: "b5_c5",
        type: "multiple_choice",
        question: "Tôn giáo là một phạm trù thuộc:",
        options: [
          "A. Hình thái ý thức xã hội",
          "B. Tồn tại xã hội",
          "C. Cơ sở hạ tầng",
          "D. Kiến trúc thượng tầng",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Hình thái ý thức xã hội",
      },
      {
        id: "b5_c6",
        type: "multiple_choice",
        question: "Tôn giáo là sản phẩm của ai?",
        options: [
          "A. Thượng đế",
          "B. Các thần linh",
          "C. Lực lượng siêu nhiên",
          "D. Con người",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Con người",
      },
      {
        id: "b5_c7",
        type: "multiple_choice",
        question: "Tôn giáo khác với tín ngưỡng khác ở điểm nào?",
        options: [
          "A. Tín ngưỡng tôn giáo ra đời từ rất sớm",
          "B. Tín ngưỡng tôn giáo có hệ thống giáo lý, giáo luật, có tổ chức và các nghi lễ chặt chẽ",
          "C. Tín ngưỡng tôn giáo có số lượng tín đồ đông",
          "D. Tín ngưỡng tôn giáo tồn tại ở tất cả các quốc gia trên thế giới",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Tín ngưỡng tôn giáo có hệ thống giáo lý, giáo luật, có tổ chức và các nghi lễ chặt chẽ",
      },
      {
        id: "b5_c8",
        type: "multiple_choice",
        question: "Đâu là sự giống nhau giữa tôn giáo và tín ngưỡng?",
        options: [
          "A. Đều có hệ thống kinh điển",
          "B. Đều có giáo chủ",
          "C. Đều có niềm tin vào đấng siêu nhiên",
          "D. Đều có các giáo sĩ",
        ],
        answer: 2,
        explanation: "Đáp án đúng: C. Đều có niềm tin vào đấng siêu nhiên",
      },
      {
        id: "b5_c9",
        type: "multiple_choice",
        question: "Về phương diện thế giới quan, tôn giáo mang bản chất:",
        options: [
          "A. Thế giới quan duy tâm",
          "B. Thế giới quan duy vật",
          "C. Thế giới quan siêu hình",
          "D. Thế giới quan biện chứng",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Thế giới quan duy tâm",
      },
      {
        id: "b5_c10",
        type: "multiple_choice",
        question: "Tôn giáo ra đời từ những nguồn gốc cơ bản nào?",
        options: [
          "A. Có nguồn gốc do chủ nghĩa tư bản tạo ra",
          "B. Có nguồn gốc do lực lượng siêu nhiên tạo ra",
          "C. Có nguồn gốc tự nhiên, kinh tế - xã hội, tâm lý, nhận thức",
          "D. Có nguồn gốc do thượng đế tạo ra",
        ],
        answer: 2,
        explanation:
          "Đáp án đúng: C. Có nguồn gốc tự nhiên, kinh tế - xã hội, tâm lý, nhận thức",
      },
      {
        id: "b5_c11",
        type: "multiple_choice",
        question: "Tìm đáp án sai về nguồn gốc hình thành của tôn giáo:",
        options: [
          "A. Nguồn gốc nhân tạo",
          "B. Nguồn gốc nhận thức",
          "C. Nguồn gốc tâm lý",
          "D. Nguồn gốc kinh tế - xã hội",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Nguồn gốc nhân tạo",
      },
      {
        id: "b5_c12",
        type: "multiple_choice",
        question:
          "Theo chủ nghĩa Mác -- Lênin, xét đến cùng nhân tố quyết định sự tồn tại và phát triển của các hình thái ý thức xã hội, trong đó có tôn giáo là gì?",
        options: [
          "A. Các hoạt động văn hoá",
          "B. Các hoạt động chính trị và quan hệ chính trị",
          "C. Các cuộc cách mạng",
          "D. Sản xuất vật chất và các quan hệ kinh tế",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Sản xuất vật chất và các quan hệ kinh tế",
      },
      {
        id: "b5_c13",
        type: "multiple_choice",
        question:
          'Luận điểm nổi tiếng: "Tôn giáo là tiếng thở dài của chúng sinh bị áp bức, là trái tim của thế giới không có trái tim... Tôn giáo là thuốc phiện của nhân dân" là của ai?',
        options: [
          "A. C. Mác",
          "B. Hồ Chí Minh",
          "C. V.I. Lênin",
          "D. Ph. Ăngghen",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. C. Mác",
      },
      {
        id: "b5_c14",
        type: "multiple_choice",
        question:
          "Tại sao ngày nay khoa học đã phát triển rất mạnh mẽ mà tôn giáo vẫn có xu hướng phát triển? (Chọn nhiều đáp án - chọn 2 phương án đúng nhất)",
        options: [
          "A. Do xã hội có xu hướng phát triển ngày càng tụt lùi",
          "B. Do lực lượng siêu nhiên thúc đẩy",
          "C. Do nhận thức của con người về tự nhiên, về xã hội và về chính bản thân mình còn có giới hạn",
          "D. Do thế giới mà con người đang sống vẫn còn vô vàn điều bí ẩn mà khoa học chưa hiểu rõ bản chất của nó",
        ],
        answer: [2, 3],
        explanation:
          "Các đáp án đúng: C. Do nhận thức của con người về tự nhiên, về xã hội và về chính bản thân mình còn có giới hạn; D. Do thế giới mà con người đang sống vẫn còn vô vàn điều bí ẩn mà khoa học chưa hiểu rõ bản chất của nó",
      },
      {
        id: "b5_c15",
        type: "multiple_choice",
        question: "Ở Việt Nam hiện nay có khoảng bao nhiêu dân tộc?",
        options: ["A. 50", "B. 45", "C. 54", "D. 63"],
        answer: 2,
        explanation: "Đáp án đúng: C. 54",
      },
      {
        id: "b5_c16",
        type: "multiple_choice",
        question: "Tìm đáp án sai về đặc điểm dân tộc ở Việt Nam:",
        options: [
          "A. Các dân tộc thiểu số ở Việt Nam phân bố chủ yếu ở địa bàn có vị trí chiến lược quan trọng",
          "B. Có sự chênh lệch về số dân giữa các tộc người",
          "C. Các dân tộc ở Việt Nam có trình độ phát triển không đều",
          "D. Các dân tộc cư trú tập trung tại các trung tâm lớn",
        ],
        answer: 3,
        explanation:
          "Đáp án đúng: D. Các dân tộc cư trú tập trung tại các trung tâm lớn",
      },
      {
        id: "b5_c17",
        type: "multiple_choice",
        question:
          "Vận dụng kiến thức về đặc điểm tôn giáo ở Việt Nam, hãy xác định số lượng tôn giáo đã được công nhận và cấp đăng ký hoạt động ở Việt Nam:",
        options: ["A. 5", "B. 43", "C. 13", "D. 16"],
        answer: 3,
        explanation: "Đáp án đúng: D. 16",
      },
      {
        id: "b5_c18",
        type: "multiple_choice",
        question:
          "Tại sao các tôn giáo ở Việt Nam luôn đồng hành cùng dân tộc và có nhiều đóng góp quan trọng trong quá trình xây dựng và bảo vệ đất nước?",
        options: [
          "A. Vì đa số các tín đồ là nhân dân lao động có lòng yêu nước, chống giặc ngoại xâm",
          "B. Vì các tôn giáo có quan hệ với các tổ chức nước ngoài",
          "C. Vì các tôn giáo có vai trò quyết định đến những vấn đề quan trọng của xã hội",
          "D. Vì các tôn giáo thường bị lợi dụng bởi các thế lực phản động",
        ],
        answer: 0,
        explanation:
          "Đáp án đúng: A. Vì đa số các tín đồ là nhân dân lao động có lòng yêu nước, chống giặc ngoại xâm",
      },
      {
        id: "b5_c19",
        type: "multiple_choice",
        question: "Hiểu theo nghĩa rộng, dân tộc là:",
        options: ["A. Quốc gia", "B. Bộ tộc", "C. Tộc người", "D. Thị tộc"],
        answer: 0,
        explanation: "Đáp án đúng: A. Quốc gia",
      },
      {
        id: "b5_c20",
        type: "multiple_choice",
        question:
          "Trong những nội dung của quyền dân tộc tự quyết, nội dung nào được coi là cơ bản, trước hết?",
        options: [
          "A. Quyền tự quyết về văn hoá",
          "B. Quyền tự quyết về các mối quan hệ quốc tế",
          "C. Quyền tự quyết về kinh tế",
          "D. Quyền tự quyết về chính trị",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Quyền tự quyết về chính trị",
      },
      {
        id: "b5_c21",
        type: "multiple_choice",
        question:
          "Đối với quốc gia và từng thành viên của dân tộc, yếu tố nào là thiêng liêng nhất mà nếu không có thì không có khái niệm tổ quốc, quốc gia?",
        options: [
          "A. Ngôn ngữ",
          "B. Lãnh thổ",
          "C. Kinh tế",
          "D. Truyền thống văn hoá",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Lãnh thổ",
      },
      {
        id: "b5_c22",
        type: "multiple_choice",
        question:
          "Vì sao Đảng, Nhà nước Việt Nam chủ trương luôn tôn trọng, bảo đảm quyền tự do tín ngưỡng tôn giáo và không tín ngưỡng tôn giáo của nhân dân?",
        options: [
          "A. Vì tín ngưỡng, tôn giáo là nhu cầu tinh thần của nhân dân",
          "B. Vì lực lượng chức sắc trong các tôn giáo có tiềm lực kinh tế lớn mạnh",
          "C. Vì tín ngưỡng tôn giáo được du nhập từ nước ngoài vào",
          "D. Vì tín ngưỡng, tôn giáo có số lượng tín đồ đông",
        ],
        answer: 0,
        explanation:
          "Đáp án đúng: A. Vì tín ngưỡng, tôn giáo là nhu cầu tinh thần của nhân dân",
      },
      {
        id: "b5_c23",
        type: "multiple_choice",
        question:
          "Vận dụng kiến thức về vấn đề dân tộc, hãy chỉ ra điểm khác biệt cơ bản trong quá trình hình thành nên dân tộc Việt Nam so với các dân tộc khác là gì?",
        options: [
          "A. Do dân tộc Việt Nam có diện tích nhỏ",
          "B. Do quá trình đồng hóa của các bộ tộc phong kiến",
          "C. Do sự phát triển tiến bộ của các bộ lạc",
          "D. Do yêu cầu đoàn kết của quá trình đấu tranh chống thiên tai và xâm lược",
        ],
        answer: 3,
        explanation:
          "Đáp án đúng: D. Do yêu cầu đoàn kết của quá trình đấu tranh chống thiên tai và xâm lược",
      },
      {
        id: "b5_c24",
        type: "multiple_choice",
        question:
          "Theo quan điểm của chủ nghĩa Mác -- Lênin, để thực hiện được bình đẳng dân tộc cần phải làm gì? (Chọn nhiều đáp án - chọn 2 phương án đúng nhất)",
        options: [
          "A. Phải duy trì chế độ tư hữu về tư liệu sản xuất",
          "B. Thủ tiêu tình trạng áp bức giai cấp, trên cơ sở đó xoá bỏ tình trạng áp bức dân tộc",
          "C. Phải liên kết với các nước đế quốc lớn",
          "D. Phải đấu tranh chống chủ nghĩa phân biệt chủng tộc, chủ nghĩa sô vanh",
        ],
        answer: [1, 3],
        explanation:
          "Các đáp án đúng: B. Thủ tiêu tình trạng áp bức giai cấp, trên cơ sở đó xoá bỏ tình trạng áp bức dân tộc; D. Phải đấu tranh chống chủ nghĩa phân biệt chủng tộc, chủ nghĩa sô vanh",
      },
      {
        id: "b5_c25",
        type: "multiple_choice",
        question:
          'Quan điểm: "Không phân biệt dân tộc lớn hay nhỏ, ở trình độ phát triển cao hay thấp, các dân tộc đều có nghĩa vụ và quyền lợi ngang nhau trên tất cả các lĩnh vực của đời sống xã hội" - thuộc nội dung nào trong Cương lĩnh dân tộc của V.I. Lênin?',
        options: [
          "A. Đoàn kết các dân tộc",
          "B. Các dân tộc được quyền tự quyết",
          "C. Liên hiệp công nhân tất cả các dân tộc",
          "D. Các dân tộc hoàn toàn bình đẳng",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Các dân tộc hoàn toàn bình đẳng",
      },
      {
        id: "b5_c26",
        type: "multiple_choice",
        question:
          "Nội dung nào vừa là nội dung chủ yếu vừa là giải pháp quan trọng để liên kết các nội dung của Cương lĩnh dân tộc thành một chỉnh thể?",
        options: [
          "A. Các dân tộc có nền phát triển kinh tế ngang nhau",
          "B. Liên hiệp công nhân tất cả các dân tộc",
          "C. Các dân tộc được quyền tự quyết",
          "D. Các dân tộc hoàn toàn bình đẳng",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Liên hiệp công nhân tất cả các dân tộc",
      },
      {
        id: "b5_c27",
        type: "multiple_choice",
        question:
          "Niềm tin của con người vào các lực lượng siêu nhiên, thần thánh đến mức độ mê muội, cuồng tín, dẫn đến những hành vi cực đoan, sai lệch quá mức, trái với các giá trị văn hoá, đạo đức, pháp luật -- gọi là:",
        options: [
          "A. Thờ cúng tổ tiên",
          "B. Tín ngưỡng thờ Mẫu",
          "C. Mê tín dị đoan",
          "D. Thờ anh hùng dân tộc",
        ],
        answer: 2,
        explanation: "Đáp án đúng: C. Mê tín dị đoan",
      },
      {
        id: "b5_c28",
        type: "multiple_choice",
        question:
          "Sự sợ hãi trước những hiện tượng tự nhiên, xã hội, hay lúc ốm đau, những may rủi, bất ngờ, tâm lý muốn bình yên khi làm việc lớn... khiến con người dễ tìm đến với hình thái ý thức xã hội nào?",
        options: [
          "A. Ý thức tôn giáo",
          "B. Ý thức chính trị",
          "C. Ý thức pháp quyền",
          "D. Ý thức thẩm mỹ",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Ý thức tôn giáo",
      },
      {
        id: "b5_c29",
        type: "drag_drop",
        question: "Kéo thả các yếu tố liên quan vào các cột tương ứng:",
        pairs: [
          {
            left: "Bản sắc văn hóa dân tộc",
            right: "Đặc trưng của dân tộc",
          },
          {
            left: "Tâm lý dân tộc riêng",
            right: "Đặc trưng của dân tộc",
          },
          {
            left: "Ngôn ngữ riêng",
            right: "Đặc trưng của dân tộc",
          },
          {
            left: "Lãnh thổ chung",
            right: "Đặc trưng của dân tộc",
          },
          {
            left: "Liên hiệp công nhân tất cả các dân tộc",
            right: "Nội dung Cương lĩnh dân tộc của Mác -- Lênin",
          },
          {
            left: "Các dân tộc được quyền tự quyết",
            right: "Nội dung Cương lĩnh dân tộc của Mác -- Lênin",
          },
          {
            left: "Các dân tộc hoàn toàn bình đẳng",
            right: "Nội dung Cương lĩnh dân tộc của Mác -- Lênin",
          },
        ],
        explanation:
          "Đáp án đúng: Bản sắc văn hóa dân tộc → Đặc trưng của dân tộc; Tâm lý dân tộc riêng → Đặc trưng của dân tộc; Ngôn ngữ riêng → Đặc trưng của dân tộc; Lãnh thổ chung → Đặc trưng của dân tộc; Liên hiệp công nhân tất cả các dân tộc → Nội dung Cương lĩnh dân tộc của Mác -- Lênin; Các dân tộc được quyền tự quyết → Nội dung Cương lĩnh dân tộc của Mác -- Lênin; Các dân tộc hoàn toàn bình đẳng → Nội dung Cương lĩnh dân tộc của Mác -- Lênin",
      },
      {
        id: "b5_c30",
        type: "drag_drop",
        question:
          "Kéo thả các yếu tố liên quan đến tôn giáo vào các cột tương ứng:",
        pairs: [
          {
            left: "Kinh tế",
            right: "Nguồn gốc của tôn giáo",
          },
          {
            left: "Nhận thức",
            right: "Nguồn gốc của tôn giáo",
          },
          {
            left: "Tâm lý",
            right: "Nguồn gốc của tôn giáo",
          },
          {
            left: "Hệ thống tín đồ",
            right: "Yếu tố liên quan đến tôn giáo",
          },
          {
            left: "Niềm tin",
            right: "Yếu tố liên quan đến tôn giáo",
          },
          {
            left: "Cơ sở thờ tự",
            right: "Yếu tố liên quan đến tôn giáo",
          },
        ],
        explanation:
          "Đáp án đúng: Kinh tế → Nguồn gốc của tôn giáo; Nhận thức → Nguồn gốc của tôn giáo; Tâm lý → Nguồn gốc của tôn giáo; Hệ thống tín đồ → Yếu tố liên quan đến tôn giáo; Niềm tin → Yếu tố liên quan đến tôn giáo; Cơ sở thờ tự → Yếu tố liên quan đến tôn giáo",
      },
      {
        id: "b5_c31",
        type: "multiple_choice",
        question:
          "Hãy chỉ ra đâu là nguồn gốc tồn tại của Tôn giáo? (Chọn 2 đáp án đúng)",
        options: [
          "A. Do các lực lượng siêu nhiên thúc đẩy",
          "B. Do quy định của nhà nước",
          "C. Do vẫn tồn tại đối kháng giai cấp.",
          "D. Do khoa học chưa giải thích hết được các hiện tượng tự nhiên và xã hội.",
        ],
        answer: [2, 3],
        explanation:
          "Các đáp án đúng: C. Do vẫn tồn tại đối kháng giai cấp.; D. Do khoa học chưa giải thích hết được các hiện tượng tự nhiên và xã hội.",
      },
      {
        id: "b5_c32",
        type: "drag_drop",
        question: "Kéo thả các đáp án đúng khớp với các phát biểu dưới đây:",
        pairs: [
          {
            left: "Là sự phản ánh niềm tin mù quáng của một số người vào các lực lượng siêu nhiên",
            right: "Mê tín dị đoan",
          },
          {
            left: "Mê tín dị đoan dẫn con người đến điều gì?",
            right: "Mê muội",
          },
          {
            left: "Là sự phản ánh một cách hoang đường, hư ảo hiện thực khách quan",
            right: "Tôn giáo",
          },
          {
            left: "Là niềm tin và sự ngưỡng mộ của con người vào một lực lượng siêu nhiên, thần bí",
            right: "Tín ngưỡng",
          },
        ],
        explanation:
          "Đáp án đúng: Là sự phản ánh niềm tin mù quáng của một số người vào các lực lượng siêu nhiên → Mê tín dị đoan; Mê tín dị đoan dẫn con người đến điều gì? → Mê muội; Là sự phản ánh một cách hoang đường, hư ảo hiện thực khách quan → Tôn giáo; Là niềm tin và sự ngưỡng mộ của con người vào một lực lượng siêu nhiên, thần bí → Tín ngưỡng",
      },
      {
        id: "b5_c33",
        type: "multiple_choice",
        question:
          "Những tầng lớp nào sau đây tham gia cơ cấu xã hội -- giai cấp ở Việt Nam? (Chọn 2 đáp án đúng)",
        options: [
          "A. Nhóm học sinh.",
          "B. Phụ nữ",
          "C. Thanh niên.",
          "D. Tín đồ tôn giáo",
        ],
        answer: [0, 2],
        explanation: "Các đáp án đúng: A. Nhóm học sinh.; C. Thanh niên.",
      },
      {
        id: "b5_c34",
        type: "multiple_choice",
        question:
          "Những phương hướng nào sau đây củng cố liên minh giai cấp, tầng lớp ở Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội? (Chọn 2 đáp án đúng)",
        options: [
          "A. Tăng vai trò tôn giáo đối với các giai cấp, tầng lớp",
          "B. Giảm vai trò kinh tế trong xã hội",
          "C. Tạo sự đồng thuận giữa các lực lượng.",
          "D. Phát huy tinh thần đoàn kết.",
        ],
        answer: [2, 3],
        explanation:
          "Các đáp án đúng: C. Tạo sự đồng thuận giữa các lực lượng.; D. Phát huy tinh thần đoàn kết.",
      },
      {
        id: "b5_c35",
        type: "drag_drop",
        question: "Chọn đáp án Đúng hoặc Sai với từng phát biểu sau:",
        pairs: [
          {
            left: "Tôn giáo là đặc trưng chính của dân tộc quốc gia.",
            right: "Sai",
          },
          {
            left: "Dân tộc (tộc người) có ý thức tự giác tộc người.",
            right: "Đúng",
          },
          {
            left: "Tâm lý dân tộc tạo nên bản sắc văn hóa dân tộc.",
            right: "Đúng",
          },
          {
            left: "Đấu tranh chống chủ nghĩa Sô-vanh là giải pháp thực hiện bình đẳng dân tộc.",
            right: "Đúng",
          },
        ],
        explanation: "Đáp án đúng: 1. Sai; 2. Đúng; 3. Đúng; 4. Đúng",
      },
      {
        id: "b5_c36",
        type: "drag_drop",
        question: "Chọn đáp án Đúng hoặc Sai với từng phát biểu sau:",
        pairs: [
          {
            left: "Tôn giáo phản ánh chân thực hiện thực khách quan.",
            right: "Sai",
          },
          {
            left: "Khoa học chưa giải thích hết được các hiện tượng là lý do tôn giáo phát triển.",
            right: "Đúng",
          },
          {
            left: "Nguồn gốc nhận thức của tôn giáo là sự hạn chế hiểu biết của con người.",
            right: "Đúng",
          },
          {
            left: "Tín ngưỡng là niềm tin vào lực lượng siêu nhiên.",
            right: "Đúng",
          },
        ],
        explanation: "Đáp án đúng: 1. Sai; 2. Đúng; 3. Đúng; 4. Đúng",
      },
      {
        id: "b5_c37",
        type: "drag_drop",
        question: "Chọn đáp án Đúng hoặc Sai với từng phát biểu sau:",
        pairs: [
          {
            left: "Tôn giáo không có lễ nghi bắt buộc.",
            right: "Sai",
          },
          {
            left: "Tôn trọng tự do tín ngưỡng tôn giáo là quan điểm của chủ nghĩa Mác -- Lênin.",
            right: "Đúng",
          },
          {
            left: "Nguồn gốc tâm lý của tôn giáo là sợ hãi trước hiện tượng tự nhiên.",
            right: "Đúng",
          },
          {
            left: "Giáo lý chặt chẽ là đặc trưng của tôn giáo.",
            right: "Đúng",
          },
        ],
        explanation: "Đáp án đúng: 1. Sai; 2. Đúng; 3. Đúng; 4. Đúng",
      },
      {
        id: "b5_c38",
        type: "multiple_choice",
        question:
          "Nội dung quyền bình đẳng dân tộc của Chủ nghĩa Mác -- Lênin bao gồm: (Chọn 3 đáp án đúng)",
        options: [
          "A. Không phân biệt dân tộc lớn hay nhỏ, trình độ cao hay thấp.",
          "B. Các dân tộc đều có nghĩa vụ và quyền lợi ngang nhau trên tất cả các lĩnh vực của đời sống xã hội.",
          "C. Các dân tộc tự lựa chọn chế độ chính trị và con đường phát triển của dân tộc mình.",
          "D. Xóa bỏ tình trạng áp bức dân tộc.",
        ],
        answer: [0, 1, 3],
        explanation:
          "Các đáp án đúng: A. Không phân biệt dân tộc lớn hay nhỏ, trình độ cao hay thấp.; B. Các dân tộc đều có nghĩa vụ và quyền lợi ngang nhau trên tất cả các lĩnh vực của đời sống xã hội.; D. Xóa bỏ tình trạng áp bức dân tộc.",
      },
      {
        id: "b5_c39",
        type: "drag_drop",
        question: "Ghép nối các nội dung về Cương lĩnh dân tộc Mác -- Lênin:",
        pairs: [
          {
            left: "Đây là quyền thiêng liêng của các dân tộc, không phân biệt dân tộc lớn hay nhỏ.",
            right: "Quyền bình đẳng dân tộc",
          },
          {
            left: "Yếu tố thúc đẩy bình đẳng dân tộc là gì?",
            right: "Cơ sở pháp lý",
          },
          {
            left: "Thực hiện quyền tự quyết dân tộc phải đứng vững trên lập trường của giai cấp nào?",
            right: "Giai cấp công nhân",
          },
          {
            left: "Giải pháp quan trọng để liên kết các nội dung của Cương lĩnh dân tộc thành một chỉnh thể.",
            right: "Liên hiệp công nhân các dân tộc lại",
          },
        ],
        explanation:
          "Đáp án đúng: Đây là quyền thiêng liêng của các dân tộc, không phân biệt dân tộc lớn hay nhỏ. → Quyền bình đẳng dân tộc; Yếu tố thúc đẩy bình đẳng dân tộc là gì? → Cơ sở pháp lý; Thực hiện quyền tự quyết dân tộc phải đứng vững trên lập trường của giai cấp nào? → Giai cấp công nhân; Giải pháp quan trọng để liên kết các nội dung của Cương lĩnh dân tộc thành một chỉnh thể. → Liên hiệp công nhân các dân tộc lại",
      },
      {
        id: "b5_c40",
        type: "drag_drop",
        question:
          "Kéo thả các đáp án đúng tương ứng với các phát biểu về dân tộc:",
        pairs: [
          {
            left: "Đặc trưng quan trọng nhất của dân tộc là gì?",
            right: "Phương thức sinh hoạt kinh tế chung",
          },
          {
            left: "Khái niệm dân tộc theo nghĩa hẹp được gọi là gì?",
            right: "Dân tộc tộc người",
          },
          {
            left: "Nội dung cơ bản của Cương lĩnh dân tộc Mác -- Lênin là gì?",
            right: "Bình đẳng dân tộc",
          },
          {
            left: "Yếu tố thiêng liêng đối với dân tộc (quốc gia) và từng thành viên dân tộc là gì?",
            right: "Lãnh thổ",
          },
        ],
        explanation:
          "Đáp án đúng: Đặc trưng quan trọng nhất của dân tộc là gì? → Phương thức sinh hoạt kinh tế chung; Khái niệm dân tộc theo nghĩa hẹp được gọi là gì? → Dân tộc tộc người; Nội dung cơ bản của Cương lĩnh dân tộc Mác -- Lênin là gì? → Bình đẳng dân tộc; Yếu tố thiêng liêng đối với dân tộc (quốc gia) và từng thành viên dân tộc là gì? → Lãnh thổ",
      },
      {
        id: "b5_c41",
        type: "drag_drop",
        question: "Chọn đáp án Đúng hoặc Sai với từng phát biểu sau:",
        pairs: [
          {
            left: "Tôn giáo phản ánh hoang đường, hư ảo hiện thực khách quan.",
            right: "Đúng",
          },
          {
            left: "Mê tín dị đoan là niềm tin mù quáng cần loại bỏ.",
            right: "Đúng",
          },
          {
            left: "Tín ngưỡng có hệ thống giáo lý chặt chẽ.",
            right: "Sai",
          },
          {
            left: "Nguồn gốc kinh tế - xã hội dẫn đến sự ra đời của tôn giáo.",
            right: "Đúng",
          },
        ],
        explanation: "Đáp án đúng: 1. Đúng; 2. Đúng; 3. Sai; 4. Đúng",
      },
      {
        id: "b5_c42",
        type: "drag_drop",
        question: "Chọn đáp án Đúng hoặc Sai với từng phát biểu sau:",
        pairs: [
          {
            left: "Bình đẳng dân tộc là nội dung Cương lĩnh dân tộc của Mác -- Lênin.",
            right: "Đúng",
          },
          {
            left: "Dân tộc (quốc gia) không cần lãnh thổ chung.",
            right: "Sai",
          },
          {
            left: "Quyền tự quyết dân tộc bao gồm quyền phân lập thành quốc gia độc lập.",
            right: "Đúng",
          },
          {
            left: "Dân tộc là cộng đồng người có ngôn ngữ riêng và văn hóa đặc thù.",
            right: "Đúng",
          },
        ],
        explanation: "Đáp án đúng: 1. Đúng; 2. Sai; 3. Đúng; 4. Đúng",
      },
      {
        id: "b5_c43",
        type: "drag_drop",
        question: "Kéo thả các yếu tố liên quan vào các cột tương ứng:",
        pairs: [
          {
            left: "Ngôn ngữ tộc người",
            right: "Đặc trưng của dân tộc (tộc người) gồm",
          },
          {
            left: "Ý thức tự giác tộc người",
            right: "Đặc trưng của dân tộc (tộc người) gồm",
          },
          {
            left: "Văn hóa đặc thù",
            right: "Đặc trưng của dân tộc (tộc người) gồm",
          },
          {
            left: "Lãnh thổ chung",
            right: "Đặc trưng của dân tộc (quốc gia) gồm",
          },
          {
            left: "Tâm lý dân tộc",
            right: "Đặc trưng của dân tộc (quốc gia) gồm",
          },
          {
            left: "Ngôn ngữ chung",
            right: "Đặc trưng của dân tộc (quốc gia) gồm",
          },
        ],
        explanation:
          "Đáp án đúng: Ngôn ngữ tộc người → Đặc trưng của dân tộc (tộc người) gồm; Ý thức tự giác tộc người → Đặc trưng của dân tộc (tộc người) gồm; Văn hóa đặc thù → Đặc trưng của dân tộc (tộc người) gồm; Lãnh thổ chung → Đặc trưng của dân tộc (quốc gia) gồm; Tâm lý dân tộc → Đặc trưng của dân tộc (quốc gia) gồm; Ngôn ngữ chung → Đặc trưng của dân tộc (quốc gia) gồm",
      },
      {
        id: "b5_c44",
        type: "multiple_choice",
        question:
          "Vận dụng những kiến thức đã học hãy cho biết việc thực hiện chế độ công hữu về tư liệu sản xuất chủ yếu và thực hiện chế độ phân phối lợi ích theo kết quả lao động là chủ yếu, là bản chất kinh tế của nền dân chủ nào?",
        options: [
          "A. Nền dân chủ xã hội chủ nghĩa",
          "B. Nền dân chủ tư sản",
          "C. Nền dân chủ chủ nô",
          "D. Nền dân chủ nguyên thủy",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Nền dân chủ xã hội chủ nghĩa",
      },
      {
        id: "b5_c45",
        type: "drag_drop",
        question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
        pairs: [
          {
            left: "Cương lĩnh dân tộc của Chủ nghĩa Mác-Lênin không đề cập đến bình đẳng dân tộc",
            right: "Sai",
          },
          {
            left: "Dân tộc (tộc người) có ngôn ngữ riêng",
            right: "Đúng",
          },
          {
            left: "Lãnh thổ chung là đặc trưng của dân tộc quốc gia",
            right: "Đúng",
          },
          {
            left: "Quyền tự quyết dân tộc không bao gồm nội dung biểu hiện của dân tộc độc lập tự tài",
            right: "Sai",
          },
        ],
        explanation: "Đáp án đúng: 1. Sai; 2. Đúng; 3. Đúng; 4. Sai",
      },
      {
        id: "b5_c46",
        type: "multiple_choice",
        question:
          "Trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam, giai cấp nào là lực lượng đi đầu thực hiện nhiệm vụ trung tâm phát triển kinh tế, tiến hành công nghiệp hoá, hiện đại hoá đất nước?",
        options: [
          "A. Giai cấp công nhân",
          "B. Giai cấp nông dân",
          "C. Đội ngũ trí thức",
          "D. Đội ngũ doanh nhân",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Giai cấp công nhân",
      },
      {
        id: "b5_c47",
        type: "drag_drop",
        question:
          "Kéo thả các đáp án khớp với các phát biểu về tôn giáo, tín ngưỡng dưới đây:",
        pairs: [
          {
            left: "Niềm tin và sự ngưỡng mộ của con người vào một lực lượng siêu nhiên, thần bí được gọi là gì?",
            right: "Tín ngưỡng",
          },
          {
            left: "Quan điểm của chủ nghĩa Mác - Lênin về tôn giáo là gì?",
            right: "Tôn trọng tự do tín ngưỡng",
          },
          {
            left: "Bản chất của tôn giáo theo chủ nghĩa Mác - Lênin là gì?",
            right: "Phản ánh hư ảo các lực lượng khách quan",
          },
          {
            left: "Chủ nghĩa Mác - Lênin coi tín ngưỡng, tôn giáo là một phạm trù thuộc hình thái nào của xã hội?",
            right: "Hình thái ý thức xã hội",
          },
        ],
        explanation:
          "Đáp án đúng: Niềm tin và sự ngưỡng mộ của con người vào một lực lượng siêu nhiên, thần bí được gọi là gì? → Tín ngưỡng; Quan điểm của chủ nghĩa Mác - Lênin về tôn giáo là gì? → Tôn trọng tự do tín ngưỡng; Bản chất của tôn giáo theo chủ nghĩa Mác - Lênin là gì? → Phản ánh hư ảo các lực lượng khách quan; Chủ nghĩa Mác - Lênin coi tín ngưỡng, tôn giáo là một phạm trù thuộc hình thái nào của xã hội? → Hình thái ý thức xã hội",
      },
      {
        id: "b5_c48",
        type: "multiple_choice",
        question: "Ở Việt Nam bản chất dân chủ xã hội chủ nghĩa là dựa vào:",
        options: [
          "A. Giai cấp công nhân",
          "B. Nhà nước của nhân dân do nhân dân và vì nhân dân dưới sự lãnh đạo của Đảng",
          "C. Nhân dân",
          "D. Sự quản lý của Nhà nước",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Nhà nước của nhân dân do nhân dân và vì nhân dân dưới sự lãnh đạo của Đảng",
      },
      {
        id: "b5_c49",
        type: "multiple_choice",
        question:
          "Quá trình phát triển của dân tộc trải qua mấy hình thức cộng đồng người?",
        options: ["A. 5", "B. 3", "C. 4", "D. 2"],
        answer: 2,
        explanation: "Đáp án đúng: C. 4",
      },
      {
        id: "b5_c50",
        type: "multiple_choice",
        question:
          "Lực lượng nào là lực lượng lao động sáng tạo đặc biệt quan trọng trong tiến trình đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước và hội nhập quốc tế, xây dựng kinh tế tri thức, phát triển nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc?",
        options: [
          "A. Thanh niên",
          "B. Công nhân",
          "C. Nông dân",
          "D. Trí thức",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Trí thức",
      },
      {
        id: "b5_c51",
        type: "multiple_choice",
        question:
          "Những nội dung nào sau đây là nội dung cơ bản của liên minh giai cấp, tầng lớp ở Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội? (Sinh viên chọn 2 phương án đúng nhất)",
        options: [
          "A. Nội dung tôn giáo",
          "B. Nội dung kinh tế",
          "C. Nội dung chính trị",
          "D. Nội dung văn hóa",
        ],
        answer: [1, 2],
        explanation:
          "Các đáp án đúng: B. Nội dung kinh tế; C. Nội dung chính trị",
      },
    ],
  },
  {
    id: 6,
    title: "Bài 6: Vấn đề gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội",
    questions: [
      {
        id: "b6_c1",
        type: "multiple_choice",
        question: "Gia đình là:",
        options: [
          "A. Hình thức cộng đồng xã hội đặc biệt",
          "B. Một nhóm người",
          "C. Tập đoàn xã hội ổn định",
          "D. Một tộc người",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Hình thức cộng đồng xã hội đặc biệt",
      },
      {
        id: "b6_c2",
        type: "multiple_choice",
        question: "Vị trí của gia đình trong xã hội là:",
        options: ["A. Tế bào", "B. Bộ não", "C. Mạch máu", "D. Xương sống"],
        answer: 0,
        explanation: "Đáp án đúng: A. Tế bào",
      },
      {
        id: "b6_c3",
        type: "multiple_choice",
        question:
          "Hai mối quan hệ cơ bản hình thành gia đình là: (Chọn nhiều đáp án)",
        options: [
          "A. Quan hệ kinh tế",
          "B. Quan hệ hôn nhân",
          "C. Quan hệ huyết thống",
          "D. Quan hệ quần tụ trong một không gian sinh tồn",
        ],
        answer: [1, 2],
        explanation:
          "Các đáp án đúng: B. Quan hệ hôn nhân; C. Quan hệ huyết thống",
      },
      {
        id: "b6_c4",
        type: "multiple_choice",
        question:
          "Quan hệ nào được coi là cơ sở, nền tảng hình thành nên các mối quan hệ khác trong gia đình?",
        options: [
          "A. Quan hệ nuôi dưỡng",
          "B. Quan hệ quần tụ trong một không gian sinh tồn",
          "C. Quan hệ hôn nhân và huyết thống",
          "D. Quan hệ hôn nhân",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Quan hệ hôn nhân",
      },
      {
        id: "b6_c5",
        type: "multiple_choice",
        question:
          'Chọn đáp án đúng điền vào chỗ trống trong luận điểm sau: "Hàng ngày tái tạo ra đời sống của bản thân mình, con người bắt đầu tạo ra những người khác, sinh sôi nảy nở - đó là quan hệ giữa chồng và vợ, cha mẹ và con cái, đó là..."',
        options: ["A. Tập thể", "B. Làng xóm", "C. Gia đình", "D. Xã hội"],
        answer: 2,
        explanation: "Đáp án đúng: C. Gia đình",
      },
      {
        id: "b6_c6",
        type: "multiple_choice",
        question:
          "Tình yêu giữa nam và nữ trở thành quan hệ hôn nhân được thể hiện bằng:",
        options: [
          "A. Lễ đính hôn",
          "B. Lễ cưới",
          "C. Lời hứa giữa nam và nữ",
          "D. Thủ tục pháp lý",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Thủ tục pháp lý",
      },
      {
        id: "b6_c7",
        type: "multiple_choice",
        question: "Chức năng của gia đình là:",
        options: [
          "A. Chức năng lãnh đạo cách mạng",
          "B. Chức năng làm các hoạt động từ thiện",
          "C. Chức năng kinh tế và tổ chức tiêu dùng",
          "D. Chức năng tổ chức các sự kiện",
        ],
        answer: 2,
        explanation: "Đáp án đúng: C. Chức năng kinh tế và tổ chức tiêu dùng",
      },
      {
        id: "b6_c8",
        type: "multiple_choice",
        question:
          "Gia đình phải thực hiện chức năng nào để đảm bảo nguồn sống, đáp ứng nhu cầu vật chất, tinh thần của các thành viên trong gia đình?",
        options: [
          "A. Chức năng kinh tế, tổ chức tiêu dùng",
          "B. Chức năng thoả mãn các nhu cầu tâm sinh lý, duy trì tình cảm",
          "C. Chức năng nuôi dưỡng, giáo dục",
          "D. Chức năng tái sản xuất ra con người",
        ],
        answer: 0,
        explanation: "Đáp án đúng: A. Chức năng kinh tế, tổ chức tiêu dùng",
      },
      {
        id: "b6_c9",
        type: "multiple_choice",
        question:
          "Chỉ ra chức năng đảm bảo tái sản xuất nguồn lao động và sức lao động cho xã hội của gia đình:",
        options: [
          "A. Chức năng nuôi dưỡng, giáo dục",
          "B. Chức năng tái sản xuất ra con người",
          "C. Chức năng kinh tế",
          "D. Chức năng thoả mãn các nhu cầu tâm sinh lý, duy trì tình cảm",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Chức năng tái sản xuất ra con người",
      },
      {
        id: "b6_c10",
        type: "multiple_choice",
        question:
          "Thực hiện chức năng nào của gia đình nhằm góp phần to lớn vào việc đào tạo thế hệ trẻ, thế hệ tương lai của xã hội?",
        options: [
          "A. Chức năng tái sản xuất ra con người",
          "B. Chức năng kinh tế và tổ chức tiêu dùng",
          "C. Chức năng nuôi dưỡng, giáo dục",
          "D. Chức năng thỏa mãn nhu cầu cầu tâm sinh lý, duy trì tình cảm gia đình",
        ],
        answer: 2,
        explanation: "Đáp án đúng: C. Chức năng nuôi dưỡng, giáo dục",
      },
      {
        id: "b6_c11",
        type: "multiple_choice",
        question: "Với chức năng chính trị, gia đình là:",
        options: [
          "A. Nơi lưu giữ truyền thống văn hoá của dân tộc cũng như tộc người",
          "B. Là cầu nối của mối quan hệ giữa nhà nước với công dân",
          "C. Có trách nhiệm nuôi dưỡng, dạy dỗ con cái trở thành người có ích cho gia đình, cộng đồng và xã hội",
          "D. Là nơi đáp ứng nhu cầu tâm, sinh lý tự nhiên của con người, đáp ứng nhu cầu duy trì nòi giống",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Là cầu nối của mối quan hệ giữa nhà nước với công dân",
      },
      {
        id: "b6_c12",
        type: "multiple_choice",
        question:
          "So với các chế độ xã hội trước thì quan hệ gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội có đặc điểm khác biệt gì về chất?",
        options: [
          "A. Duy trì quan hệ gia trưởng, độc đoán",
          "B. Quan hệ bình đẳng trong gia đình, giải phóng phụ nữ",
          "C. Phụ nữ chỉ lo việc nội trợ",
          "D. Đàn ông là người quyết định mọi việc trong gia đình",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Quan hệ bình đẳng trong gia đình, giải phóng phụ nữ",
      },
      {
        id: "b6_c13",
        type: "multiple_choice",
        question:
          'Quan điểm sau đây của ai: "Nhiều gia đình cộng lại mới thành xã hội, xã hội tốt thì gia đình càng tốt, gia đình tốt thì xã hội mới tốt. Hạt nhân của xã hội chính là gia đình"?',
        options: [
          "A. Ph. Ăngghen",
          "B. V.I. Lênin",
          "C. C. Mác",
          "D. Hồ Chí Minh",
        ],
        answer: 3,
        explanation: "Đáp án đúng: D. Hồ Chí Minh",
      },
      {
        id: "b6_c14",
        type: "multiple_choice",
        question: "Gia đình Việt Nam ngày nay có thể được coi là:",
        options: [
          "A. Gia đình lạc hậu",
          "B. Gia đình quá độ",
          "C. Gia đình truyền thống",
          "D. Gia đình hiện đại",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Gia đình quá độ",
      },
      {
        id: "b6_c15",
        type: "multiple_choice",
        question:
          "Xu hướng phát triển của quy mô gia đình Việt Nam ngày nay như thế nào?",
        options: [
          "A. Có xu hướng vừa tăng lên vừa thu nhỏ lại",
          "B. Ngày càng được thu nhỏ lại",
          "C. Có xu hướng ổn định không thay đổi so với trước đây",
          "D. Ngày càng được mở rộng ra",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Ngày càng được thu nhỏ lại",
      },
      {
        id: "b6_c16",
        type: "multiple_choice",
        question:
          "Sự thay đổi quy mô của gia đình hiện nay ở Việt Nam có tác động như thế nào đối với xã hội? (Chọn nhiều đáp án)",
        options: [
          "A. Không có tác động gì đối với sự phát triển của xã hội",
          "B. Làm cho kinh tế của đất nước chậm phát triển",
          "C. Sự bình đẳng nam nữ được đề cao hơn, cuộc sống riêng tư của con người được tôn trọng hơn",
          "D. Làm cho xã hội trở nên thích nghi và phù hợp hơn với tình hình mới, thời đại mới",
        ],
        answer: [2, 3],
        explanation:
          "Các đáp án đúng: C. Sự bình đẳng nam nữ được đề cao hơn, cuộc sống riêng tư của con người được tôn trọng hơn; D. Làm cho xã hội trở nên thích nghi và phù hợp hơn với tình hình mới, thời đại mới",
      },
      {
        id: "b6_c17",
        type: "multiple_choice",
        question:
          "Trong gia đình Việt Nam hiện đại ngày nay, nhu cầu về con cái đã có những thay đổi căn bản như thế nào?",
        options: [
          "A. Các gia đình không muốn có con để không bị gánh nặng kinh tế",
          "B. Giảm mức sinh của phụ nữ, giảm số con mong muốn và giảm nhu cầu nhất thiết phải có con trai của các cặp vợ chồng",
          "C. Tỷ lệ sinh thấp, nhu cầu phải có con trai tăng",
          "D. Phải có con, càng đông con càng tốt và nhất thiết phải có con trai nối dõi",
        ],
        answer: 1,
        explanation:
          "Đáp án đúng: B. Giảm mức sinh của phụ nữ, giảm số con mong muốn và giảm nhu cầu nhất thiết phải có con trai của các cặp vợ chồng",
      },
      {
        id: "b6_c18",
        type: "multiple_choice",
        question:
          "Chọn đáp án sai về mô hình gia đình Việt Nam hiện đại ngày nay?",
        options: [
          "A. Người phụ nữ - người vợ làm chủ gia đình",
          "B. Ông bà là người làm chủ gia đình",
          "C. Người đàn ông - người chồng làm chủ gia đình",
          "D. Cả hai vợ chồng cùng làm chủ gia đình",
        ],
        answer: 1,
        explanation: "Đáp án đúng: B. Ông bà là người làm chủ gia đình",
      },
      {
        id: "b6_c19",
        type: "multiple_choice",
        question:
          "Chức năng tái sản xuất của gia đình Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội có những biến đổi như thế nào? (Chọn 2 đáp án đúng)",
        options: [
          "A. Tăng nhu cầu có con trai",
          "B. Chủ động trong việc sinh con",
          "C. Tăng sản xuất hàng hóa",
          "D. Giảm số con mong muốn",
        ],
        answer: [1, 3],
        explanation:
          "Các đáp án đúng: B. Chủ động trong việc sinh con; D. Giảm số con mong muốn",
      },
      {
        id: "b6_c20",
        type: "multiple_choice",
        question:
          "Sự biến đổi trong việc thực hiện chức năng giáo dục của gia đình Việt Nam hiện nay là gì?",
        options: [
          "A. Chỉ giáo dục đạo đức mà không hướng tới giáo dục kiến thức khoa học hiện đại",
          "B. Không hướng tới giáo dục đạo đức, lối sống",
          "C. Giảm chi tiêu cho giáo dục",
          "D. Sự đầu tư tài chính của gia đình cho giáo dục con cái tăng lên",
        ],
        answer: 3,
        explanation:
          "Đáp án đúng: D. Sự đầu tư tài chính của gia đình cho giáo dục con cái tăng lên",
      },
      {
        id: "b6_c21",
        type: "multiple_choice",
        question:
          "Sự biến đổi quan hệ giữa các thế hệ, các giá trị, chuẩn mực văn hoá của gia đình hạt nhân ngày nay có tác động tiêu cực như thế nào đối với người cao tuổi?",
        options: [
          "A. Người cao tuổi phải đối mặt với sự cô đơn thiếu thốn về tình cảm",
          "B. Người cao tuổi được sống trong gia đình có nhiều thế hệ",
          "C. Người cao tuổi được con cái dành nhiều thời gian quan tâm, chăm sóc",
          "D. Người cao tuổi được đáp ứng đầy đủ nhu cầu về tâm lý, tình cảm",
        ],
        answer: 0,
        explanation:
          "Đáp án đúng: A. Người cao tuổi phải đối mặt với sự cô đơn thiếu thốn về tình cảm",
      },
      {
        id: "b6_c22",
        type: "multiple_choice",
        question:
          "Những vấn đề xã hội nào có dấu hiệu gia tăng đối với gia đình Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội? (Chọn 2 đáp án đúng)",
        options: [
          "A. Giáo dục đạo đức",
          "B. Sản xuất hàng hóa",
          "C. Ly hôn",
          "D. Bạo lực gia đình",
        ],
        answer: [2, 3],
        explanation: "Các đáp án đúng: C. Ly hôn; D. Bạo lực gia đình",
      },
      {
        id: "b6_c23",
        type: "multiple_choice",
        question:
          "Quy mô của gia đình Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội có những biến đổi như thế nào? (Chọn 2 đáp án đúng)",
        options: [
          "A. Kinh tế tự cấp",
          "B. Gia đình hạt nhân tăng lên",
          "C. Quy mô lớn",
          "D. Ngày càng thu nhỏ",
        ],
        answer: [1, 3],
        explanation:
          "Các đáp án đúng: B. Gia đình hạt nhân tăng lên; D. Ngày càng thu nhỏ",
      },
      {
        id: "b6_c24",
        type: "drag_drop",
        question: "Chọn đáp án Đúng hoặc Sai với từng phát biểu sau:",
        pairs: [
          {
            left: "Hiện nay, độ bền vững của gia đình không bị chi phối bởi các mối quan hệ hòa hợp tình cảm giữa chồng và vợ, cha mẹ và con cái.",
            right: "Sai",
          },
          {
            left: "Hiện nay, kinh tế gia đình đang trở thành một bộ phận quan trọng trong nền kinh tế quốc dân.",
            right: "Đúng",
          },
          {
            left: "Giáo dục gia đình tiếp tục nhấn mạnh sự hy sinh của cá nhân cho cộng đồng.",
            right: "Đúng",
          },
          {
            left: "Nội dung giáo dục trong gia đình hiện nay chỉ tập trung giáo dục đạo đức.",
            right: "Sai",
          },
        ],
        explanation: "Đáp án đúng: 1. Sai; 2. Đúng; 3. Đúng; 4. Sai",
      },
      {
        id: "b6_c25",
        type: "drag_drop",
        question: "Chọn đáp án Đúng hoặc Sai với từng phát biểu sau:",
        pairs: [
          {
            left: "Trong gia đình hiện đại, sự bền vững của hôn nhân không phụ thuộc vào các yếu tố tâm lý, tình cảm, kinh tế.",
            right: "Sai",
          },
          {
            left: "Tăng số con mong muốn và tăng nhu cầu nhất thiết phải có con trai của các cặp vợ chồng.",
            right: "Sai",
          },
          {
            left: "Gia đình từ đơn vị kinh tế tự cung tự cấp sang đơn vị kinh tế hàng hoá.",
            right: "Đúng",
          },
          {
            left: "Hiện nay việc sinh đẻ được các gia đình tiến hành một cách chủ động, tự giác.",
            right: "Đúng",
          },
        ],
        explanation: "Đáp án đúng: 1. Sai; 2. Sai; 3. Đúng; 4. Đúng",
      },
      {
        id: "b6_c26",
        type: "drag_drop",
        question:
          "Kéo thả các khái niệm khớp với các phát biểu về biến đổi gia đình Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội:",
        pairs: [
          {
            left: "Biến đổi về chức năng tái sản xuất",
            right: "Giảm số con",
          },
          {
            left: "Biến đổi về quan hệ gia đình",
            right: "Mâu thuẫn giữa các thế hệ",
          },
          {
            left: "Biến đổi về quy mô gia đình",
            right: "Gia đình hạt nhân",
          },
          {
            left: "Biến đổi về chức năng kinh tế",
            right: "Kinh tế hàng hóa",
          },
        ],
        explanation:
          "Đáp án đúng: Biến đổi về chức năng tái sản xuất → Giảm số con; Biến đổi về quan hệ gia đình → Mâu thuẫn giữa các thế hệ; Biến đổi về quy mô gia đình → Gia đình hạt nhân; Biến đổi về chức năng kinh tế → Kinh tế hàng hóa",
      },
      {
        id: "b6_c27",
        type: "drag_drop",
        question:
          "Kéo thả các yếu tố liên quan đến biến đổi gia đình Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội vào các cột tương ứng:",
        pairs: [
          {
            left: "Đầu tư tài chính của gia đình cho giáo dục con cái tăng lên",
            right: "Biến đổi về chức năng gia đình",
          },
          {
            left: "Hướng đến giáo dục kiến thức khoa học hiện đại",
            right: "Biến đổi về chức năng gia đình",
          },
          {
            left: "Vai trò giáo dục của các chủ thể trong gia đình có xu hướng giảm",
            right: "Biến đổi về chức năng gia đình",
          },
          {
            left: "Gia đình đơn thân",
            right: "Biến đổi về quy mô gia đình",
          },
          {
            left: "Xu hướng thu nhỏ",
            right: "Biến đổi về quy mô gia đình",
          },
          {
            left: "Gia đình hạt nhân",
            right: "Biến đổi về quy mô gia đình",
          },
        ],
        explanation:
          "Đáp án đúng: Đầu tư tài chính của gia đình cho giáo dục con cái tăng lên → Biến đổi về chức năng gia đình; Hướng đến giáo dục kiến thức khoa học hiện đại → Biến đổi về chức năng gia đình; Vai trò giáo dục của các chủ thể trong gia đình có xu hướng giảm → Biến đổi về chức năng gia đình; Gia đình đơn thân → Biến đổi về quy mô gia đình; Xu hướng thu nhỏ → Biến đổi về quy mô gia đình; Gia đình hạt nhân → Biến đổi về quy mô gia đình",
      },
    ],
  },
];

export default CNXH;
