
describe("Core testing (test the test)", function(){
    it("should work like a charm", function(){
        expect(1).toEqual(1);
    });

    it("should work as well, shouldn't it?", function(){
        expect(2).toEqual(2);
    });

    it("should work exactly as I expect", function(){
        expect(inject).toBeDefined();

        var result = inject(function(_$log_){
            $log = _$log_;
            expect($log).toBeDefined();
            $log.log("Now we can log stuff in the test units... if only it worked");
            console.log("And this goes to the regular console");
        });
    });
});