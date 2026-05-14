// FAQ データ
const faqData = [
    {
        category: "一般",
        questions: [
            {
                question: "Bobとは何ですか？",
                answer: "BobはAIを活用したコーディングアシスタントで、コードの記述、既存コードのリファクタリング、さまざまなタスクの実行を支援します。Bobの機能はカスタムモードや指示で拡張できます。"
            },
            {
                question: "Bobはどのように動作しますか？",
                answer: "Bobは大規模言語モデル（LLM）を使用してリクエストを理解し、アクションに変換します。以下のことができます：<ul><li>プロジェクト内のファイルの読み書き</li><li>ターミナルでのコマンド実行</li><li>インターネットの閲覧（有効な場合）</li><li>Model Context Protocol（MCP）を介した外部ツールの使用</li></ul>チャットインターフェースを通じてBobとやり取りし、指示を提供して提案されたアクションを確認・承認します。"
            },
            {
                question: "Bobは何ができますか？",
                answer: "Bobは以下のようなさまざまなコーディングタスクを支援できます：<ul><li>自然言語の説明からコードを生成</li><li>既存コードのリファクタリング</li><li>バグの修正</li><li>ドキュメントの作成</li><li>コードの説明</li><li>コードベースに関する質問への回答</li><li>反復的なタスクの自動化</li><li>新しいファイルやプロジェクトの作成</li></ul>"
            },
            {
                question: "Bobで処理できないデータタイプはありますか？",
                answer: "以下のデータタイプはBobで処理すべきではありません：<ul><li>SPI（機密個人情報）</li><li>個人健康情報（PHI）</li><li>輸出規制対象（ITAR、APPなど）</li><li>規制対象の金融データ（銀行番号、PAN、非公開の金融データ）</li></ul>"
            },
            {
                question: "Bobを使用するリスクは何ですか？",
                answer: "Bobは強力なツールですが、責任を持って使用することが重要です：<ul><li><strong>Bobは間違いを犯す可能性があります。</strong>承認する前に、Bobの提案する変更を必ず慎重に確認してください。</li><li><strong>Bobはコマンドを実行できます。</strong>特に自動承認を使用している場合は、Bobにコマンドの実行を依頼する際は注意してください。</li></ul>"
            }
        ]
    },
    {
        category: "使い方",
        questions: [
            {
                question: "新しいタスクを開始するにはどうすればよいですか？",
                answer: "Bobパネルを開き、チャットボックスにタスクを入力します。Bobに何をしてほしいかを明確かつ具体的に伝えてください。"
            },
            {
                question: "モードを切り替えるにはどうすればよいですか？",
                answer: "チャット入力エリアのドロップダウンメニューを使用して別のモードを選択するか、<code>/</code>コマンドを使用して特定のモードに切り替えます。"
            },
            {
                question: "ツールとは何ですか？どのように使用しますか？",
                answer: "ツールはBobがシステムとやり取りする方法です。Bobはタスクを完了するために適切なツールを自動的に選択して使用します。ツールを直接呼び出す必要はありません。各ツールの使用について承認または拒否を求められます。"
            },
            {
                question: "コンテキストメンションとは何ですか？",
                answer: "コンテキストメンションは、ファイル、フォルダ、問題など、プロジェクトに関する特定の情報をBobに提供する方法です。<code>@</code>記号の後にメンションしたい項目を続けます（例：<code>@/src/file.ts</code>、<code>@problems</code>）。"
            },
            {
                question: "Bobはターミナルでコマンドを実行できますか？",
                answer: "はい、Bobはコマンドを実行できます。コマンドの自動承認を有効にしていない限り、各コマンドの承認を求められます。コマンドの自動承認には十分注意してください。"
            },
            {
                question: "Bobにフィードバックを提供するにはどうすればよいですか？",
                answer: "Bobの提案するアクションを承認または拒否することでフィードバックを提供できます。フィードバックフィールドを使用して追加のフィードバックを提供することもできます。"
            },
            {
                question: "Bobの動作をカスタマイズできますか？",
                answer: "はい、Bobはいくつかの方法でカスタマイズできます：<ul><li><strong>カスタム指示：</strong>すべてのモードに適用される一般的な指示、またはモード固有の指示を提供します。</li><li><strong>カスタムモード：</strong>カスタマイズされたプロンプトといくつかのツール権限を持つ独自のモードを作成します。</li><li><strong>Bobルール：</strong>プロジェクトのルートにある<code>.bob/rules/</code>フォルダにマークダウンルールファイルを作成して、追加のガイドラインを提供します。</li><li><strong>設定：</strong>自動承認、差分編集など、さまざまな設定を調整します。</li></ul>"
            },
            {
                question: "Bobには自動承認設定がありますか？",
                answer: "はい、Bobには有効にするとアクションを自動的に承認するいくつかの設定があります。"
            }
        ]
    },
    {
        category: "高度な機能",
        questions: [
            {
                question: "MCP（Model Context Protocol）とは何ですか？",
                answer: "MCPはBobが外部サーバーと通信できるようにするプロトコルで、カスタムツールやリソースで機能を拡張します。"
            },
            {
                question: "独自のMCPサーバーを作成できますか？",
                answer: "はい、独自のMCPサーバーを作成してBobにカスタム機能を追加できます。"
            }
        ]
    },
    {
        category: "トラブルシューティング",
        questions: [
            {
                question: "Bobが応答しません。どうすればよいですか？",
                answer: "以下を確認してください：<ul><li>APIキーが正しく、有効期限が切れていないことを確認</li><li>インターネット接続を確認</li><li>VS Codeを再起動してみる</li></ul>"
            },
            {
                question: "Bobが望まない変更を加えました。元に戻すにはどうすればよいですか？",
                answer: "BobはVS Codeの組み込みファイル編集機能を使用します。標準の「元に戻す」コマンド（Ctrl/Cmd + Z）を使用して変更を元に戻すことができます。チェックポイントを使用してファイルに加えられた変更を元に戻すこともできます。"
            }
        ]
    }
];

// DOM要素
const searchInput = document.getElementById('searchInput');
const faqContainer = document.getElementById('faqContainer');
const noResults = document.getElementById('noResults');

// FAQを表示する関数
function renderFAQs(data) {
    while (faqContainer.firstChild) {
        faqContainer.removeChild(faqContainer.firstChild);
    }
    
    if (data.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    data.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'faq-category';
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category.category;
        categoryDiv.appendChild(categoryTitle);
        
        category.questions.forEach((item, index) => {
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item';
            
            const question = document.createElement('div');
            question.className = 'faq-question';
            
            const questionText = document.createElement('span');
            questionText.className = 'question-text';
            questionText.textContent = item.question;
            
            const toggleIcon = document.createElement('span');
            toggleIcon.className = 'toggle-icon';
            toggleIcon.textContent = '▼';
            
            question.appendChild(questionText);
            question.appendChild(toggleIcon);
            
            const answer = document.createElement('div');
            answer.className = 'faq-answer';
            
            const answerContent = document.createElement('div');
            answerContent.className = 'answer-content';
            answerContent.textContent = item.answer;
            
            answer.appendChild(answerContent);
            
            question.addEventListener('click', () => {
                const isActive = question.classList.contains('active');
                
                // すべてのアクティブな質問を閉じる
                document.querySelectorAll('.faq-question.active').forEach(q => {
                    q.classList.remove('active');
                    q.nextElementSibling.classList.remove('active');
                });
                
                // クリックされた質問をトグル
                if (!isActive) {
                    question.classList.add('active');
                    answer.classList.add('active');
                }
            });
            
            faqItem.appendChild(question);
            faqItem.appendChild(answer);
            categoryDiv.appendChild(faqItem);
        });
        
        faqContainer.appendChild(categoryDiv);
    });
}

// 検索機能
function searchFAQs(searchTerm) {
    if (!searchTerm.trim()) {
        renderFAQs(faqData);
        return;
    }
    
    const term = searchTerm.toLowerCase();
    const filteredData = [];
    
    faqData.forEach(category => {
        const matchedQuestions = category.questions.filter(item => {
            return item.question.toLowerCase().includes(term) ||
                   item.answer.toLowerCase().includes(term);
        });
        
        if (matchedQuestions.length > 0) {
            filteredData.push({
                category: category.category,
                questions: matchedQuestions
            });
        }
    });
    
    renderFAQs(filteredData);
}

// ダークモード切り替え機能
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    // 保存されたテーマを読み込む
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.textContent = '☀️';
    }
    
    // テーマ切り替えボタンのクリックイベント
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        // アイコンを切り替え
        if (document.body.classList.contains('dark-theme')) {
            themeIcon.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
}

// 初期化処理
document.addEventListener('DOMContentLoaded', () => {
    // イベントリスナー
    searchInput.addEventListener('input', (e) => {
        searchFAQs(e.target.value);
    });

    // 初期表示
    renderFAQs(faqData);
    
    // ダークモード切り替え機能を初期化
    setupThemeToggle();
});